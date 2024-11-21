import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Category() {
    const [categories, setCategories]=useState([]);


    useEffect(()=>{
        const fetchCats =async()=>{
        const response= await axios.get("https://fakestoreapi.com/products/categories")
        setCategories(response.data)
        

    }

    fetchCats();
    },[])
  return (
    <div>{categories.map((cat, index)=>{
        return <Link  key={index} to={`/products/${cat}`}><h1 className='bg-slate-300 w-[25%] p-3 font-bold m-2'>{cat}</h1></Link>
    })}</div>
  )
}
