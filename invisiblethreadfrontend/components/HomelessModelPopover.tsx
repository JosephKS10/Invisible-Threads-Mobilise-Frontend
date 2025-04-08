"use client";

import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

interface HomelessModelPopoverProps {
    position: { x: number; y: number };
    onClose: () => void;
}

interface Message {
    id: number;
    text: string;
    sender: "Harbour" | "You";
    date: string;
}

const QUESTIONS: string[] = [
    "Do you know someone who’s been staying with different friends/family for months?",
    "Have you met someone discharged from a hospital with no stable home to return to?",
    "Ever heard of people committing crimes for a warm bed in prison?",
    "Do you know a friend or coworker who lived in a shelter for a while?",
    "Has a friend told you they might lose their rental soon?",
    "Have you ever met someone working full-time but still unable to afford a place to live?",
    "Do you know any young person who left home because it wasn’t safe and had nowhere else to go?"
];

export default function HomelessModelPopover({ position, onClose }: HomelessModelPopoverProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const [conversationId, setConversationId] = useState<string>("");
    const [questionIndex, setQuestionIndex] = useState<number>(0);
    const [isAffirmative, setIsAffirmative] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const chatRef = useRef<HTMLDivElement>(null);
    const initialized = useRef<boolean>(false);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;
            if (questionIndex === 0) {
                const firstQuestion: Message = {
                    id: 1,
                    text: QUESTIONS[0],
                    sender: "Harbour",
                    date: new Date().toLocaleDateString(),
                };
                setMessages([firstQuestion]);
            }
        }
    }, []);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleYesNoResponse = (response: boolean) => {
        setIsAffirmative(response);

        const userResponse: Message = {
            id: messages.length + 1,
            text: response ? "Yes" : "No",
            sender: "You",
            date: new Date().toLocaleDateString(),
        };

        setMessages((prevMessages) => [...prevMessages, userResponse]);

        setTimeout(() => {
            const followUp: Message = {
                id: messages.length + 2,
                text: "What do you know about it?",
                sender: "Harbour",
                date: new Date().toLocaleDateString(),
            };
            setMessages((prevMessages) => [...prevMessages, followUp]);
        }, 1000);
    };

    const sendMessage = async () => {
        if (!newMessage.trim()) return;

        const userResponse: Message = {
            id: messages.length + 1,
            text: newMessage,
            sender: "You",
            date: new Date().toLocaleDateString(),
        };

        setMessages((prevMessages) => [...prevMessages, userResponse]);
        setNewMessage("");
        setLoading(true);

        const requestData = {
            userMessage: newMessage,
            currentQuestion: QUESTIONS[questionIndex],
            isAffirmative: isAffirmative,
        };

        try {
            const response = await axios.post(
                "https://invisible-threads-backend-ai.onrender.com/api/chatbot/respond",
                requestData,
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            setConversationId(response.data.conversationId);

            const botResponse: Message = {
                id: messages.length + 2,
                text: response.data.response,
                sender: "Harbour",
                date: new Date().toLocaleDateString(),
            };

            setMessages((prevMessages) => [...prevMessages, botResponse]);

            if (questionIndex < QUESTIONS.length - 1) {
                setTimeout(() => {
                    const nextQuestion: Message = {
                        id: messages.length + 3,
                        text: QUESTIONS[questionIndex + 1],
                        sender: "Harbour",
                        date: new Date().toLocaleDateString(),
                    };
                    setMessages((prevMessages) => [...prevMessages, nextQuestion]);
                    setQuestionIndex((prevIndex) => prevIndex + 1);
                    setIsAffirmative(null);
                }, 2000);
            } else {
                // All questions are finished, fetch final conclusion
                fetchFinalConclusion(response.data.conversationId);
            }
        } catch (error) {
            console.error("Error sending API request:", error);
        }

        setLoading(false);
    };

    const fetchFinalConclusion = async (conversationId: string) => {
        try {
            const response = await axios.post(
                "https://invisible-threads-backend-ai.onrender.com/api/conclusion/",
                { conversationId },
                { headers: { "Content-Type": "application/json" } }
            );

            const finalMessage: Message = {
                id: messages.length + 3,
                text: `My final answer is: ${response.data.mainMessage}`,
                sender: "Harbour",
                date: new Date().toLocaleDateString(),
            };

            setMessages((prevMessages) => [...prevMessages, finalMessage]);
        } catch (error) {
            console.error("Error fetching final conclusion:", error);
        }
    };


    return (
        <div className="fixed sm:right-32 sm:top-1/2 top-1/2 transform -translate-y-1/2 bg-white/30 backdrop-blur-md  p-4 rounded-xl shadow-lg w-[420px] z-50" onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-2 right-2 text-black text-lg">
                <X className="text-white" />
            </button>
            <h3 className="text-center mt-1 mb-2">Chat</h3>
            <div ref={chatRef} className="h-[400px] overflow-y-auto p-3 bg-white/30 backdrop-blur-md  rounded-md text-sm">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"} mb-3`}>
                        <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.sender === "You" ? "bg-[#FFFF00] text-black" : "bg-neutral-800 text-white"}`}>
                            {msg.text}
                        </div>
                        <small className="text-gray-500 mt-1">{msg.date}</small>
                    </div>
                ))}
                {loading && <div className="text-left text-neutral-300 text-sm mb-2">Harbour is typing...</div>}
            </div>
            {isAffirmative === null ? (
                <div className="flex justify-center gap-3 mt-3">
                    <button onClick={() => handleYesNoResponse(true)} className="px-4 py-2 rounded-md bg-green-500 text-white">Yes</button>
                    <button onClick={() => handleYesNoResponse(false)} className="px-4 py-2 rounded-md bg-red-500 text-white">No</button>
                </div>
            ) : (
                <div className="flex mt-3 gap-2">
                    <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} placeholder="Type your answer..." className="flex-1 p-2 text-white rounded-md border border-gray-300" onKeyPress={(e) => e.key === "Enter" && sendMessage()} />
                    <button onClick={sendMessage} className="px-3 py-2 rounded-md bg-[#FFFF00] text-neutral-900">Send</button>
                </div>
            )}
        </div>
    );
}
