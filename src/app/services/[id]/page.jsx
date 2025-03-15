"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React from 'react'

const products = [
    {
        id:1,
      productName: "Smartphone X",
      productImages: ["https://example.com/smartphone1.jpg"],
      price: 699.99,
      category: "Electronics",
      stock: 50,
    },
    {
        id:2,
      productName: "Wireless Headphones",
      productImages: ["https://example.com/headphones1.jpg"],
      price: 199.99,
      category: "Audio",
      stock: 120,
    },
    {
        id:3,
      productName: "Gaming Laptop",
      productImages: ["https://example.com/laptop1.jpg"],
      price: 1299.99,
      category: "Computers",
      stock: 30,
    },
    {
        id:4,
      productName: "Smartwatch Pro",
      productImages: ["https://example.com/smartwatch1.jpg"],
      price: 299.99,
      category: "Wearables",
      stock: 80,
    },
    {
        id:5,
      productName: "4K LED TV",
      productImages: ["https://example.com/tv1.jpg"],
      price: 899.99,
      category: "Home Entertainment",
      stock: 20,
    },
  ];
  

const page = () => {


    let {id}= useParams()


    let singleProduct= products.find((product)=>product.id==id)

    if(singleProduct){
        return (
            <div>
               
               
               <div className='bg-amber-200 mb-5 p-5 rounded-4xl'>
               <h2>Id:{singleProduct.id}</h2>
                <h2>Product Name: {singleProduct.productName}</h2>
                <p>Product Price:{singleProduct.price}</p>
                    </div>
        
        
            </div>
          )

    }
    else{

        return <div>

        <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
                  Go Back Home
                </Link>
              </div>
        
        
            </div>
    }
  
}

export default page