import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Mouse move event listener
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    // Mouse enter/leave event listeners
    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.2 });
    };

    // Attach listeners
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      // Clean up listeners
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        transition: "opacity 0.2s, transform 0.2s",
      }}
    />
  );
};

export default CustomCursor;
