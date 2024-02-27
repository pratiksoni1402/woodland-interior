'use client'
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import { MoonLoader } from "react-spinners";
export default function Previousorders({ params }) {

  const { isPending, data: getDetail, isError } = useQuery({
    queryKey: ['orderData'],
    queryFn: () =>
      axios.get(`/api/previous-orders/${params['id']}`)
        .then((response) => {
          console.log("This is previous order receipt", response.data.orderDetail)
          return response.data.orderDetail
        })
        .catch((error) => {
          console.log("Error Occured while fetching detail", error)
        })
  })

  const orderDate = getDetail?.order_date;
  if (orderDate) {
    const date = new Date(orderDate);

    // Format the date
    var formattedDate = `${date.toLocaleDateString()}`;
    var formattedTime = `${date.toLocaleTimeString()}`;

  }

  const name = (getDetail?.shipping_first_name ?? "") + ' ' + (getDetail?.shipping_last_name ?? "");
  const billingName = (getDetail?.billing_first_name ?? getDetail?.shipping_first_name) + ' ' + (getDetail?.billing_last_name ?? getDetail?.shipping_last_name);
  const billingAddress = (getDetail?.billing_address_one ?? getDetail?.shipping_address_one);
  const billingCountry = (getDetail?.billing_country ?? getDetail?.shipping_country);
  const billingState = (getDetail?.billing_state ?? getDetail?.shipping_state);
  const billingCity = (getDetail?.billing_city ?? getDetail?.shipping_city);
  const billingPincode = (getDetail?.billing_pincode ?? getDetail?.shipping_pincode)
  const billingLandmark = (getDetail?.billing_landmark ?? getDetail?.shipping_landmark);
  const billingPhoneNumber = (getDetail?.billing_phone_number ?? getDetail?.shipping_phone_number);
  if (!getDetail) {
    return (

      <div className='loading h-screen bg-[#faf2ec] w-full flex justify-center items-center'><MoonLoader color="#3c2f27" />
      </div>
    )
  }
  return (
    <div className="order-receipt bg-[#faf2ec] pb-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 col-span-12 "></div>
          <div className="lg:col-span-8 col-span-12">
            <div className="order-receipt-wrapper bg-white">
              <div className="cnf-order-receipt">
                <div className="grid grid-cols-12">
                  <div className="col-span-12">
                    <div className="heading py-3 text-3xl font-crimson text-[#3f2f27]">
                      <h1 className="text-center">Woodland Interiors</h1>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="order-number text-sm pl-4 font-roboto text-[#3c2f27]">
                      <span>Order ID:</span>
                      <span className="font-semibold pl-1">{getDetail?.id}</span>
                    </div>
                  </div>
                  <div className="col-span-12">
                    <div className="address-wrapper pt-4">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="sm:col-span-1 col-span-2">
                          <div className="shipping-address pb-5">
                            <div className="heading  bg-[#3c2f27] pl-4 text-[#faf2ec] text-sm font-roboto mb-2 py-1">
                              Shipping Address
                            </div>
                            <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Name:</span>
                              <span className="value font-semibold pl-1">{name}</span>
                            </div>
                            <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Address:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_address_one}</span>
                            </div>
                            <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Country:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_country}</span>
                            </div>
                            <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">State:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_state}</span>
                            </div>
                            <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">City:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_city}</span>
                            </div>
                            <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Pincode:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_pincode}</span>
                            </div>
                            <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Phone Number:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_phone_number}</span>
                            </div>
                            <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Nearest Landmark:</span>
                              <span className="value font-semibold pl-1">{getDetail?.shipping_landmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="billing-address pb-5">
                            <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                              Billing Address
                            </div>
                            <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Name</span>
                              <span className="value font-semibold pl-1">{billingName}</span>
                            </div>
                            <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Address:</span>
                              <span className="value font-semibold pl-1">{billingAddress}</span>
                            </div>
                            <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Country:</span>
                              <span className="value font-semibold pl-1">{billingCountry}</span>
                            </div>
                            <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">State:</span>
                              <span className="value font-semibold pl-1">{billingState}</span>
                            </div>
                            <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">City:</span>
                              <span className="value font-semibold pl-1">{billingCity}</span>
                            </div>
                            <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Pincode:</span>
                              <span className="value font-semibold pl-1">{billingPincode}</span>
                            </div>
                            <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Phone Number:</span>
                              <span className="value font-semibold pl-1">{billingPhoneNumber}</span>
                            </div>
                            <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="caption">Nearest Landmark:</span>
                              <span className="value font-semibold pl-1">{billingLandmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                          <div className="payment-method pb-5">
                            <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                              Payment Method
                            </div>
                            <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                              <span className="value font-semibold pl-1">{getDetail?.payment_mode}</span>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-1 col-span-2">
                        <div className="order-date pb-5">
                          <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                            Order Date & Time
                          </div>
                          <div className="name font-roboto text-sm text-[#3c2f27] pl-4 mb-5 pb-5">
                            <div className="value font-semibold pl-1">Date: {formattedDate}</div>
                            <div className="value font-semibold pl-1">Time: {formattedTime}</div>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-item-wrapper bg-white">
              <Table className=''>
                <TableHeader className='bg-[#3c2f27] hover:bg-[#3c2f27]'>
                  <TableRow className=' hover:bg-[#3c2f27]'>
                    <TableHead className="w-[100px] text-[#faf2ec]">S.No</TableHead>
                    <TableHead className=' text-[#faf2ec]'>Image</TableHead>
                    <TableHead className=' text-[#faf2ec]'>Name</TableHead>
                    <TableHead className=' text-[#faf2ec]'>Quantity</TableHead>
                    <TableHead className="text-right text-[#faf2ec]">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='border-b border-[#e5e5e5]'>
                  {

                    getDetail?.orderitems && getDetail?.orderitems?.map((products, index) => (
                      <TableRow key={products.id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>
                          <Image src={`${PRODUCT_MEDIA_URL}/${products.image}`} alt={products.name} width={75} height={75} />
                        </TableCell>
                        <TableCell className='font-roboto text-[#3c2f27] font-semibold text-sm whitespace-nowrap'>{products?.name}</TableCell>
                        <TableCell className='font-roboto text-[#3c2f27] font-semibold text-sm'>{products?.quantity}</TableCell>
                        <TableCell className='font-roboto text-[#3c2f27] font-semibold text-sm'>{products?.total_price}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </div>
            <div className="order-item-wrapper bg-white">
              <div className="calculation px-2 pt-10">
                <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Sub-Total:</div>
                  <div>{getDetail?.subtotal}</div>
                </div>
                <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Central GST:</div>
                  <div>{getDetail?.tax_cgst}</div>
                </div>
                <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>State GST:</div>
                  <div>{getDetail?.tax_sgst}</div>
                </div>
                <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Grand Total:</div>
                  <div>{getDetail?.total}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 col-span-12 "></div>
        </div>
      </div>
    </div>
  )
}