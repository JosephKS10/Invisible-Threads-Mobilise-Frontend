"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface HomelessModelProps {
    onClick: (object: THREE.Object3D, domEvent: MouseEvent) => void;
    onPointerOver: (object: THREE.Object3D) => void;
    onPointerOut: (object: THREE.Object3D) => void;
}

export default function HomelessModel({ onClick, onPointerOver, onPointerOut }: HomelessModelProps) {
    const { scene } = useGLTF("/homeless1.glb") as any;

    const handleClick = (event: any) => {
        event.stopPropagation();
        onClick(event.object, event.nativeEvent);
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
