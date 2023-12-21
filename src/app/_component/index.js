"use client";
import Link from "next/link";
import './style.css'
export default function Visitshop() {
  
  return (
    <div className="visit-shop">
      <section className="timber-furniture md:py-16 py-5">
        <div className="product-description text-center md:text-4xl md:leading-10 text-2xl leading-7">
          Crafted Elegance: Timber Furniture for Timeless Spaces
        </div>
        <div className="visit-store text-center">
          <Link href="/all-products" className="font-roboto py-3 px-6 text-sm bg-transparent text-[#54595f] border border-[#54595f]">VISIT SHOP</Link>
        </div>
      </section>
    </div>
  );
}
