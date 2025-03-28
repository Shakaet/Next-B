
import Link from 'next/link';
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

    

    
  return (
    <div><h2>Services</h2>

            <div className=''>
            {
            products.map((p, index) => (
                <div key={index}>
                <Link href={`/services/${p.id}`}>

                <div className='bg-amber-200 mb-5 p-5 rounded-4xl'>
                <h2>Product Name: {p.productName}</h2>
                <p>Product Price:{p.price}</p>
                </div>
                
                </Link>
                </div>
            ))
            }
            </div>



    </div>

    
  )
}

export default page


