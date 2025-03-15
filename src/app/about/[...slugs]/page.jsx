import React from 'react'

const page = async({params}) => {


    let p=await params


    console.log(p)
  return (
    <div>page</div>
  )
}

export default page