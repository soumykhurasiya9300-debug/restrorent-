import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device supports touch only
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, input, select, textarea, [data-interactive="true"]');
      setIsHovered(!!interactive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth ring interpolation loop
    let animationFrameId: number;
    const followCursor = () => {
      setRingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(followCursor);
    };
    animationFrameId = requestAnimationFrame(followCursor);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Central cursor dot */}
      <div
        id="cursor-dot"
        className="fixed top-0 left-0 pointer-events-none z-[99998] rounded-full transition-transform duration-75"
        style={{
          width: isHovered ? '8px' : '6px',
          height: isHovered ? '8px' : '6px',
          backgroundColor: '#d4a656',
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
          boxShadow: '0 0 10px rgba(212,166,86,0.6)',
        }}
      />

      {/* Trailing smooth ring */}
      <div
        id="cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-[99997] rounded-full border transition-all duration-200"
        style={{
          width: isHovered ? '46px' : '32px',
          height: isHovered ? '46px' : '32px',
          borderColor: isHovered ? 'rgba(212, 166, 86, 0.7)' : 'rgba(212, 166, 86, 0.3)',
          backgroundColor: isHovered ? 'rgba(212, 166, 86, 0.08)' : 'transparent',
          transform: `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
};
