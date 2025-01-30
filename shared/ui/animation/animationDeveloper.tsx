"use client";
import React from 'react'

import Lottie from 'react-lottie-player'
import lottieJson from '@/public/lottie_animation.json'

export default function AnimationDeveloper() {
  return (
    <Lottie className="img-animtaion-developer"
      loop
      animationData={lottieJson}
      play
    />
  )
}