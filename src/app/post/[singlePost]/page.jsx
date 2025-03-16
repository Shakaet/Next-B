import React from 'react'

let fetchData=async()=>{

    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let data= await res.json()
    return data
}


const SinglePost = async({params}) => {


    let {singlePost}= await  params
    console.log(singlePost)

    let posts= await fetchData()



    let singleData=posts.find((post)=>post.id== singlePost)

  return (
    <div>
        <p>{singleData.title}</p>

    </div>
  )
}

export default SinglePost