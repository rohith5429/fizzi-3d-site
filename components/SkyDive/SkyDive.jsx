'use client'
import React from 'react'
import { Bounded } from '../Bounded'
import { View } from '@react-three/drei'
import Scene from './Scene'

const SkyDive = () => {
  return (
    <Bounded className={'skydive h-screen'}>
        <View className='h-screen w-screen'>
            <Scene />
        </View>
    </Bounded>
  )
}

export default SkyDive