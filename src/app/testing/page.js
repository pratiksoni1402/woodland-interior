'use client'
// import { data } from 'autoprefixer'
import React from 'react'
import { useState, useEffect } from 'react'
export default function Testing() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/get-categories', {

        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                setCategories(response.categories)
                
            })
    }, [])




    return (
        <div>
            {categories.map((item) => (
                <h1 key={item.id}>{item.name}</h1>
            ))}
        </div>
    )
}

//npm prisma generate
// npm install @prisma/client

