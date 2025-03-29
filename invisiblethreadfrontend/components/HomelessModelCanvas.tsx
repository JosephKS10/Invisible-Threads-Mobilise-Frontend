"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import * as THREE from "three";

interface HomelessModelProps {
    onClick: (object: THREE.Object3D, domEvent: MouseEvent) => void;
    onPointerOver: (object: THREE.Object3D) => void;
    onPointerOut: (object: THREE.Object3D) => void;
}

function HomelessModel({ onClick, onPointerOver, onPointerOut }: HomelessModelProps) {
    const { scene } = useGLTF("/homeless1.glb") as any;

    const handleClick = (event: any) => {
        event.stopPropagation();
        const domEvent: MouseEvent = event.nativeEvent;
        onClick(event.object, domEvent);
    };

    const handlePointerOver = (event: any) => {
        event.stopPropagation();
        onPointerOver(event.object);
    };

    const handlePointerOut = (event: any) => {
        event.stopPropagation();
        onPointerOut(event.object);
    };

    return (
        <primitive 
            object={scene} 
            scale={0.5} 
            onClick={handleClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
        />
    );
}

interface CameraControlProps {
    targetPosition: [number, number, number];
    isZooming: boolean;
}

function CameraControl({ targetPosition, isZooming }: CameraControlProps) {
    const { camera } = useThree();
    const targetVec = new THREE.Vector3();
    
    useFrame(() => {
        targetVec.set(...targetPosition);
        camera.position.lerp(targetVec, isZooming ? 0.1 : 0.05);
        camera.up.set(0, 1, 0);
        camera.updateProjectionMatrix();
    });

    return null;
}

export default function HomelessModelCanvas() {
    const [zoomTarget, setZoomTarget] = useState<[number, number, number]>([2, 1, 0]);
    const [isZooming, setIsZooming] = useState(false);
    const [isZoomedIn, setIsZoomedIn] = useState(false);
    const [showPopover, setShowPopover] = useState(false);
    const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [popoverContent, setPopoverContent] = useState("");
    const initialPosition: [number, number, number] = [2, 1, 0];

    const handleObjectClick = (object: THREE.Object3D, domEvent: MouseEvent) => {
        console.log("Clicked on:", object.name);

        if (object.name === "temp" && !isZoomedIn) {
            domEvent.stopPropagation();
            setPopoverPosition({ x: domEvent.pageX, y: domEvent.pageY });
            setPopoverContent(`You clicked on ${object.name}. More details here.`);
            setShowPopover(true);

            setZoomTarget([-1, 0.5, 0]);
            setIsZooming(true);
            setIsZoomedIn(true);
        }
    };

    const handlePointerOver = (object: THREE.Object3D) => {
        if (object.name === "temp") {
            document.body.style.cursor = "pointer";
        }
    };

    const handlePointerOut = (object: THREE.Object3D) => {
        if (object.name === "temp") {
            document.body.style.cursor = "auto";
        }
    };

    const closePopover = () => {
        setShowPopover(false);
        setZoomTarget(initialPosition);
        setIsZooming(false);
        setIsZoomedIn(false);
    };

    return (
        <div
            style={{ position: "relative", width: "100vw", height: "100vh" }}
            onClick={(e) => {
                if (!(e.target as HTMLElement).closest(".popover-content")) {
                    closePopover();
                }
            }}
        >
            <Canvas
                style={{ background: "black", height: "100vh", width: "100vw" }}
                camera={{ position: initialPosition, fov: 50 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                    <HomelessModel 
                        onClick={handleObjectClick}
                        onPointerOver={handlePointerOver}
                        onPointerOut={handlePointerOut}
                    />
                </Suspense>
                <OrbitControls
                    makeDefault
                    target={[-3, 0.5, 0]}
                    minDistance={1}
                    maxDistance={100}
                    enablePan={true}
                    enableZoom={true}
                    enabled={!isZooming}
                />
                <CameraControl targetPosition={zoomTarget} isZooming={isZooming} />
            </Canvas>

            {showPopover && (
                <div
                    className="popover-content"
                    style={{
                        position: "absolute",
                        left: `${popoverPosition.x}px`,
                        top: `${popoverPosition.y}px`,
                        backgroundColor: "white",
                        padding: "10px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                        zIndex: 100,
                        maxWidth: "300px",
                        transform: "translate(-50%, -100%)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={closePopover}
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "5px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        ×
                    </button>
                    <h3 style={{ marginTop: 0 }}>Object Information</h3>
                    <p>{popoverContent}</p>
                </div>
            )}
        </div>
    );
}
