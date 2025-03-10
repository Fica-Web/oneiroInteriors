import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ParticleCursor = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const newParticle = {
                id: Math.random(),
                x: e.clientX,
                y: e.clientY,
            };

            setParticles((prev) => [...prev, newParticle]);

            // Remove old particles to avoid memory overflow
            setTimeout(() => {
                setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
            }, 500);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 2 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        top: particle.y,
                        left: particle.x,
                        background: `radial-gradient(circle, #fea034, #f7501f, #d80d0d)`,
                    }}
                />
            ))}
        </div>
    );
};

export default ParticleCursor;