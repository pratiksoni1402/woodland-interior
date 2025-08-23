"use client";
import { BLOB_BASE_URL } from "@/app/_lib/constants/blob";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
// export const revalidate = 0;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { PRODUCT_MEDIA_URL } from "@/app/_lib/constants/images";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoonLoader } from "react-spinners";
import { IndianRupee } from "lucide-react";
export default function Orderreceipt({ params }) {
  const { id } = params;
  console.log("kdjhsdfsd", typeof id);
  const {
    isPending,
    data: receipt,
    isError,
  } = useQuery({
    queryKey: ["orderreceipt"],
    queryFn: () =>
      axios
        .post(`/api/order-receipt/${params["id"]}`)
        .then((response) => {
          return response.data.orderReceipt;
        })
        .catch((error) => {
          console.log("Error generated", error);
        }),
  });

  if (!receipt) {
    return (
      <div className="loading h-screen bg-[#faf2ec] w-full flex justify-center items-center">
        <MoonLoader color="#3c2f27" />
      </div>
    );
  }
  // Assuming receipt.order_date is a string representing the timestamp, e.g., "2024-02-27T10:12:44.830Z"
  const orderDate = receipt?.order_date;
  if (orderDate) {
    const date = new Date(orderDate);

    // Format the date
    var formattedDate = `${date.toLocaleDateString()}`;
    var formattedTime = `${date.toLocaleTimeString()}`;
  }

  console.log(formattedDate); // Output: "2/27/2024 3:12:44 PM" (format might vary based on locale)
  const name =
    (receipt?.shipping_first_name ?? "") +
    " " +
    (receipt?.shipping_last_name ?? "");
  const billingName =
    (receipt?.billing_first_name ?? receipt?.shipping_first_name) +
    " " +
    (receipt?.billing_last_name ?? receipt?.shipping_last_name);
  const billingAddress =
    receipt?.billing_address_one ?? receipt?.shipping_address_one;
  const billingCountry = receipt?.billing_country ?? receipt?.shipping_country;
  const billingState = receipt?.billing_state ?? receipt?.shipping_state;
  const billingCity = receipt?.billing_city ?? receipt?.shipping_city;
  const billingPincode = receipt?.billing_pincode ?? receipt?.shipping_pincode;
  const billingLandmark =
    receipt?.billing_landmark ?? receipt?.shipping_landmark;
  const billingPhoneNumber =
    receipt?.billing_phone_number ?? receipt?.shipping_phone_number;
  return (
    <div className="order-receipt bg-[#faf2ec] pb-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="lg:col-span-2 md:col-span-1"></div>
          <div className="lg:col-span-8 md:col-span-10 sm:col-span-12 col-span-12">
            <div className="order-receipt-wrapper bg-white">
              <div className="grid grid-cols-12">
                <div className="col-span-12">
                  <div className="heading py-3 text-3xl font-crimson text-[#3f2f27]">
                    <h1 className="text-center">Woodland Interiors</h1>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="order-status pl-4">
                    <h2 className="text-2xl font-crimson text-[#248232] pb-3">
                      Thanks for your Order, {receipt?.shipping_first_name}
                    </h2>
                    <p className="text-sm font-roboto text-[#3c2f27]">
                      Tracking information will be emailed as soon as your order
                      shipped.
                    </p>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="order-number text-sm pl-4 font-roboto text-[#3c2f27]">
                    <span>Order ID:</span>
                    <span className="font-semibold pl-1">{receipt?.id}</span>
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
                            <span className="value font-semibold pl-1">
                              {name}
                            </span>
                          </div>
                          <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Address:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_address_one}
                            </span>
                          </div>
                          <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Country:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_country}
                            </span>
                          </div>
                          <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">State:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_state}
                            </span>
                          </div>
                          <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">City:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_city}
                            </span>
                          </div>
                          <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Pincode:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_pincode}
                            </span>
                          </div>
                          <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Phone Number:</span>
                            <span className="value font-semibold pl-1">
                              {receipt?.shipping_phone_number}
                            </span>
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
                            <span className="value font-semibold pl-1">
                              {billingName}
                            </span>
                          </div>
                          <div className="address font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Address:</span>
                            <span className="value font-semibold pl-1">
                              {billingAddress}
                            </span>
                          </div>
                          <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Country:</span>
                            <span className="value font-semibold pl-1">
                              {billingCountry}
                            </span>
                          </div>
                          <div className="state font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">State:</span>
                            <span className="value font-semibold pl-1">
                              {billingState}
                            </span>
                          </div>
                          <div className="city font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">City:</span>
                            <span className="value font-semibold pl-1">
                              {billingCity}
                            </span>
                          </div>
                          <div className="pincode font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Pincode:</span>
                            <span className="value font-semibold pl-1">
                              {billingPincode}
                            </span>
                          </div>
                          <div className="contact-number font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="caption">Phone Number:</span>
                            <span className="value font-semibold pl-1">
                              {billingPhoneNumber}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-1 col-span-2">
                        <div className="payment-method pb-5">
                          <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                            Payment Method
                          </div>
                          <div className="name font-roboto text-sm text-[#3c2f27] pl-4">
                            <span className="value font-semibold pl-1">
                              {receipt?.payment_mode}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-1 col-span-2">
                        <div className="order-date pb-5">
                          <div className="heading bg-[#3c2f27] text-[#faf2ec] text-sm font-roboto mb-2 py-1 pl-4">
                            Order Date & Time
                          </div>
                          <div className="name font-roboto text-sm text-[#3c2f27] pl-4 mb-10 pb-5">
                            <div className="value font-semibold pl-1">
                              Date: {formattedDate}
                            </div>
                            <div className="value font-semibold pl-1">
                              Time: {formattedTime}
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
              <div className="product-wrapper">
                <Table className="">
                  <TableHeader className="bg-[#3c2f27] hover:bg-[#3c2f27]">
                    <TableRow className=" hover:bg-[#3c2f27]">
                      <TableHead className="w-[100px] text-[#faf2ec] font-roboto font-semibold text-sm">
                        S.No
                      </TableHead>
                      <TableHead className=" text-[#faf2ec] font-roboto font-semibold text-sm">
                        Image
                      </TableHead>
                      <TableHead className=" text-[#faf2ec] font-roboto font-semibold text-sm">
                        Name
                      </TableHead>
                      <TableHead className=" text-[#faf2ec] font-roboto font-semibold text-sm">
                        Quantity
                      </TableHead>
                      <TableHead className=" text-[#faf2ec] font-roboto font-semibold text-sm text-right">
                        Amount
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="border-b border-[#e5e5e5]">
                    {receipt?.orderitems &&
                      receipt?.orderitems?.map((products, index) => (
                        <TableRow key={products.id}>
                          <TableCell className="text-[#3c2f27] font-roboto font-semibold text-sm ">
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            <Image
                              src={`${BLOB_BASE_URL}/${products.image}`}
                              alt={products.name}
                              width={75}
                              height={75}
                            />
                          </TableCell>
                          <TableCell className="text-[#3c2f27] font-roboto font-semibold text-sm whitespace-nowrap">
                            {products?.name}
                          </TableCell>
                          <TableCell className="text-[#3c2f27] font-roboto font-semibold text-sm">
                            {products?.quantity}
                          </TableCell>
                          <TableCell className="text-[#3c2f27] font-roboto font-semibold text-sm text-right">
                            <div className="flex items-center">
                              <span className="">
                                <IndianRupee width={14} />
                              </span>
                              <span>{products?.total_price}</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="order-item-wrapper bg-white">
              <div className="calculation px-2 text-sm">
                <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Sub-Total:</div>
                  <div className="flex items-center">
                    <span className="">
                      <IndianRupee width={14} />
                    </span>
                    <span>{receipt?.subtotal}</span>
                  </div>
                </div>
                <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Central GST:</div>
                  <div className="flex items-center">
                    <span className="">
                      <IndianRupee width={14} />
                    </span>
                    <span>{receipt?.tax_cgst}</span>
                  </div>
                </div>
                <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
                  <div>State GST:</div>
                  <div className="flex items-center">
                    <span className="">
                      <IndianRupee width={14} />
                    </span>
                    <span>{receipt?.tax_sgst}</span>
                  </div>
                </div>
                <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
                  <div>Grand Total:</div>
                  <div className="flex items-center">
                    <span className="svg-stroking">
                      <IndianRupee width={14} />
                    </span>
                    <span>{receipt?.total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
