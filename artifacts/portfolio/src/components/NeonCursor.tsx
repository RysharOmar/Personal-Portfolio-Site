import React, { useEffect, useState, useRef } from 'react';

export function NeonCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, select, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateHoverState);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const followMouse = () => {
      setTrailingPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        // Adjust for ~80ms lag (rough interpolation)
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15,
        };
      });
      requestRef.current = requestAnimationFrame(followMouse);
    };

    requestRef.current = requestAnimationFrame(followMouse);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <style>{`
        body {
          cursor: none !important;
        }
        a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }
      `}</style>
      
      {/* Center Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary glow-border mix-blend-screen"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translate(-50%, -50%)`,
        }}
      />
      
      {/* Trailing Ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[99] rounded-full border border-primary/50 mix-blend-screen transition-all duration-300 ease-out ${
          isHovering ? 'h-12 w-12 bg-primary/10' : 'h-8 w-8'
        }`}
        style={{
          transform: `translate(${trailingPosition.x}px, ${trailingPosition.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}
