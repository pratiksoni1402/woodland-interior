import Image from "next/image";
import Link from "next/link";
export default function Bedroom() {
  return (
    <div className="bedroom-products-page bg-[#faf2ec]">
      <div className="container">
        <div className="page-banner py-5">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="content-wrapper h-full flex items-center">
                <div>
                  <div className="title font-crimson text-[#54595f] text-4xl py-4">
                    Bedroom Furniture
                  </div>
                  <div className="description">
                    <p className="text-justify text-[#54595f] font-roboto leading-6 text-base">
                      Indulge in the warmth and comfort of our exquisite wooden
                      beds, where dreams find their perfect sanctuary. Crafted
                      with passion and precision, each bed is a symphony of
                      natural beauty and timeless design. Carefully selected
                      hardwoods are transformed into works of art, boasting not
                      only durability but also a graceful aesthetic that
                      complements any bedroom. Whether you envision a modern
                      minimalist retreat or a cozy rustic haven, our diverse
                      collection offers a range of styles to suit your unique
                      taste. Immerse yourself in the embrace of natures finest
                      materials, where every curve and joint tells a story of
                      exceptional craftsmanship. Our wooden beds are more than
                      just pieces of furniture; they are a promise of restful
                      nights and cherished mornings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="Image-wrapper">
                <div className="image">
                  <Image
                    src="/uploads/images/shop/bedroom/banner.jpg"
                    alt=""
                    width={640}
                    height={853}
                    // layout="fill"
                    quality={100}
                    // objectFit="contain"
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
