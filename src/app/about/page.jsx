"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const About = () => {

    let router= useRouter()

let islogin=true

    let handleRoute=()=>{

        if(islogin){
            router.push("/about/address")
        }
        else{
            router.push("/")
        }




    }
  return (
    <div>
        
        <h2>About</h2>
        <button onClick={handleRoute} className='btn'>Address</button>
    
    
    
    
    
    </div>

    
  )
}

export default About