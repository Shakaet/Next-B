
// "use client"
import Link from "next/link"



 let fetchData=async()=>{

    let res= await fetch("https://jsonplaceholder.typicode.com/posts")
    let data= await res.json()
    return data
}


const page = async() => {

    let posts=await fetchData()
    // console.log(posts)


    

   
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(res=>res.json())
    // .then(data=>setpost(data))

    // },[])



  return (
    <div><p>Post page:{posts?.length}</p>


           {/* <input
                type="text"
                placeholder="Search by title..."
                value={serchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 w-full rounded mb-4"
            /> */}

    <div className='grid md:grid-cols-4 gap-6 ms-10 mr-10'>

    {
        posts?.map((p,index)=>(

                <Link href={`/post/${p.id}`} key={index}>
                <p className='text-black bg-amber-300 p-3 rounded-4xl hover:bg-gray-200'> {index+1}. {p.title}</p>
                </Link>
        ))
    }

    </div>
    
    
    
    
    </div>

    
  )
}

export default page