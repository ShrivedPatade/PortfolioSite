'use client';

import React, { useEffect } from 'react';

const BlobAnimation = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const blobs = document.querySelectorAll<HTMLDivElement>('.blob');
      
      blobs.forEach(blob => {
        const { left, top, width, height } = blob.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const interactionRadius = 200;

        if (distance < interactionRadius) {
          const pushStrength = 1 - (distance / interactionRadius);
          const pushX = -(deltaX / distance) * pushStrength * 50;
          const pushY = -(deltaY / distance) * pushStrength * 50;
          blob.style.transform = `translate(${pushX}px, ${pushY}px)`;
        } else {
          blob.style.transform = 'translate(0, 0)';
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="blob-container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="blob blob-5"></div>
    </div>
  );
};

export default BlobAnimation;