"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import * as THREE from "three";
import HomelessModel from "./HomelessModel";
import HomelessModelPopover from "./HomelessModelPopover";

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

    const initialPosition: [number, number, number] = [2, 1, 0];

    const handleObjectClick = (object: THREE.Object3D, domEvent: MouseEvent) => {
        console.log("Clicked on:", object.name);

        if (object.name === "temp" && !isZoomedIn) {
            domEvent.stopPropagation();
            setPopoverPosition({ x: domEvent.pageX, y: domEvent.pageY });
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
                <directionalLight position={[2, 5, 2]} intensity={3} />
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
                    minDistance={2}
                    maxDistance={20}
                    enablePan={true}
                    enableZoom={true}
                    enabled={!isZooming}
                />
                <CameraControl targetPosition={zoomTarget} isZooming={isZooming} />
            </Canvas>

            {showPopover && (
                <HomelessModelPopover
                    position={popoverPosition}
                    onClose={closePopover}
                />
            )}
        </div>
    );
}
