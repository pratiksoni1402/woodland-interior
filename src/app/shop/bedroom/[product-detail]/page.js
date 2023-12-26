'use client'
export default function Detailpage({params}){
    return (
        <div>
            <h1>{params['product-detail']}</h1>
        </div>
    )
}