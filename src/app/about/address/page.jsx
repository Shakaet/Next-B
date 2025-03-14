import Link from 'next/link'
import React from 'react'

const Address = () => {
  return (
    <div><h2>Address</h2>
        <Link className='btn' href={"/about"}>Go back</Link>
    </div>
    
  )
}

export default Address