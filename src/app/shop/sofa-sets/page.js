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
                    Sofa Sets
                  </div>
                  <div className="description">
                    <p className="text-justify text-[#54595f] font-roboto leading-6 text-base">
                    Unwind in Style discover the Ultimate Comfort with Our Sofa Sets! Immerse yourself in the art of relaxation with our thoughtfully curated collection of sofa sets. From contemporary chic to timeless classics, each piece is a testament to craftsmanship and comfort. Explore a world of design diversity, where plush seating meets exquisite aesthetics. Elevate your living space with our exclusive range of sofa sets that seamlessly balance style and functionality. Whether you prefer sleek modern lines or the warmth of traditional designs, our collection has something for every taste. Dive into a realm of luxury and transform your living room into a haven of comfort and sophistication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="Image-wrapper">
                <div className="image">
                  <Image
                    src="/uploads/images/shop/sofa-sets/banner.jpg"
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
