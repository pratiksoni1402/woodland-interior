import Image from "next/image";
import Link from "next/link";
export default function Bedroom() {
  return (
    <div className="bedroom-products bg-[#faf2ec]">
      <div className="container">
        <div className="page-banner py-5">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="content-wrapper h-full flex items-center">
                <div>
                  <div className="title font-crimson text-[#54595f] text-4xl py-4">
                    Dining Tables
                  </div>
                  <div className="description">
                    <p className="text-justify text-[#54595f] font-roboto leading-6 text-base">
                    Elevate Your Dining Experience: Discover Exquisite Dining Tables at Our Showcase! Immerse yourself in a world of sophistication and functionality as you explore our curated collection of dining table products. From sleek modern designs to timeless classics, each piece is meticulously crafted to add a touch of elegance to your dining space. Unleash your creativity and transform your dining area into a stylish haven with our diverse range of high-quality tables. Whether you prefer minimalist chic or opulent charm, our selection caters to diverse tastes. Explore the fusion of form and function – redefine your dining space with our exceptional tables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="Image-wrapper">
                <div className="image">
                  <Image
                    src="/uploads/images/shop/dining-tables/banner.jpg"
                    alt=""
                    width={640}
                    height={853}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total-products text-center border border-x-0 py-3 my-3">
          <span className="font-roboto text-sm text-[#54595f]">
            Showing 10 of 38 Products
          </span>
        </div>
        <div className="product-listing-section py-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            <div className="product-wrapper">
              <Link href="">
                <div className="product-image">
                    <Image src='/uploads/images/shop/bedroom/bed.jpg' width={400} height={400} alt='Oak Bed' />
                </div>
                <div className="detail text-center">
                    <div className="title">
                        Lorem ipsum
                    </div>
                    <div className="price">$5000</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
