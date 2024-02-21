import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/ui/tabs"
import Image from "next/image"

export default function Reviews() {
  return (
    <div className="customer-reviews">
      <Tabs defaultValue="reviews" >
      <TabsList className="tab-button grid w-40 grid-cols-1">
        <TabsTrigger value="reviews" className=' bg-[#3c2f27] rounded-none text-base font-crimson font-semibold'>Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="reviews">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-6 md:col-span-8 sm:col-span-12 col-span-12">
            <div className="reviews-wrapper pb-12">
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/male-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                      Rohan Patel
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                      I recently purchased a beautiful dining set from Woodland Interiors, and I couldnt be happier with my decision. The craftsmanship is exquisite, and it adds a touch of elegance to my home. Highly recommend!
                    </div>
                  </div>
                </div>
              </div>
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/female-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading  text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                      Priya Gupta
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                    Shopping at Woodland Interiors was a delightful experience from start to finish. The website is easy to navigate, and the variety of furniture options is impressive. Will definitely be returning for future purchases.
                    </div>
                  </div>
                </div>
              </div>
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/female-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading  text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                      Neha Reddy
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                    As an interior designer, I am always on the lookout for unique pieces for my clients. I recently ordered a coffee table from Woodland Interiors, and it exceeded my expectations in terms of both quality and style. Will definitely be a repeat customer!
                    </div>
                  </div>
                </div>
              </div>
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/male-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading  text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                    Aarav Sharma
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                    I am amazed by the quality of the sofa I ordered from Woodland Interiors. It is comfortable, stylish, and exactly what I was looking for. Kudos to the team for providing such excellent service!
                    </div>
                  </div>
                </div>
              </div>
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/male-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading  text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                      Aryan Singh
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                    I have had my eye on a particular armchair for a while, and I finally decided to purchase it from Woodland Interiors. I am thrilled with the quality and comfort it provides. Couldnt be happier with my decision!
                    </div>
                  </div>
                </div>
              </div>
              <div className="review py-3 ">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-2">
                    <div className="image">
                      <Image src='/uploads/images/reviews/female-avatar.jpg' alt='Avatar' width={100} height={100} />
                    </div>
                  </div>
                  <div className="col-span-10">
                    <div className="heading  text-xl text-[#3c2f27] font-crimson font-semibold pb-1">
                    Aisha Mehta
                    </div>
                    <div className="text text-sm text-[#3c2f27] font-roboto">
                    I amm extremely satisfied with my purchase from Woodland Interiors. The dresser I ordered is not only stylish but also incredibly functional. The customer service was excellent, and I wouldnt hesitate to shop here again.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 md:col-span-4 sm:col-span-12 col-span-12"></div>
        </div>
      </TabsContent>
    </Tabs>
    </div>
  )
}
