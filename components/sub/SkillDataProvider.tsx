"use client"
import React from 'react'
import {delay, motion} from "framer-motion" 
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'


interface props {
    src:string,
    width:number,
    height:number,
    index:number
}

function SkillDataProvider({src,width,height,index}:props) {

    const {ref,inView} = useInView(
        { triggerOnce:true

        }
    )

    const imageVariants =  {
        hidden:{opacity:0},
        visible:{opacity:1}
    }

    const animationdelay = 0.3
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView?"visible":"hidden"}
    transition={{delay: index*animationdelay}}
    
    >

        <Image
        src={src}
        width={width}
        height={height}
        alt="skill image"
        
        />
      
    </motion.div>
  )
}

export default SkillDataProvider
