import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';

const videoUrl = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/videos/bganimation.mp4";
const logoUrl = "https://bitbet33.s3.ap-northeast-1.amazonaws.com/assets/logos/companylogo.png";

export default function ParallaxHero() {
  const parallax = useRef<IParallax>(null!);

  return (
    <div style={{ width: '100%', height: '100vh', background: '#253237' }}>
      <Parallax ref={parallax} pages={3}>
        {/* Background video layer */}
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ zIndex: 0 }}>
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          />
        </ParallaxLayer>

        {/* Logo and hero content */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <img src={logoUrl} alt="Logo" style={{ width: '30vw', maxWidth: 400 }} />
        </ParallaxLayer>

        {/* Example: Add more ParallaxLayer components for clouds, text, or other effects */}
        {/* ... */}
      </Parallax>
    </div>
  );
}
