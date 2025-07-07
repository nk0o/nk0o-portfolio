"use client";
import React from 'react';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

import lottieJson from '@/public/lottie_animation.json';

export default function AnimationDeveloper() {
  return (
    <div className="img-animation-developer">
      <Lottie loop animationData={lottieJson} play />
    </div>
  );
}
