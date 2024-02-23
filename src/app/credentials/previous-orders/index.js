'use client'
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import axios from "axios";
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

export default function History() {
  const { isPending, data: orders, isError } = useQuery({
    queryKey: ['totalOrders'],
    queryFn: () =>
      axios.get('/api/order-receipt/past-orders')
        .then((response) => {
          console.log("Your past orders", response.data.getOrders)
          return response.data.getOrders
        })
        .catch((error) => {
          console.log("Error Occured", error)
        })
  })

  return (
    <div className="wishlist-component flex justify-center">
      <div className='user-wishlist w-3/4 bg-[#faf2ec]'>
        <div className="grid grid-col-1">
          <div className="col">
            <div className="order-wrapper">
              <div className="orders">
                <Table>
                  <TableCaption className='pb-5 '>A list of your Previous Orders.</TableCaption>
                  <TableHeader>
                    <TableRow className=''>
                      <TableHead className="text-[#3c2f27] text-center font-semibold font-roboto ">Order ID</TableHead>
                      <TableHead className='text-[#3c2f27] text-center font-semibold font-roboto'>Total Amount</TableHead>
                      <TableHead className='text-[#3c2f27] text-center font-semibold font-roboto'>Payment Method</TableHead>
                      <TableHead className="text-[#3c2f27] text-center font-semibold font-roboto">Order Data</TableHead>
                      <TableHead className="text-[#3c2f27] text-center font-semibold font-roboto">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className='bg-white'>
                    {orders?.map((invoice) => (
                      <TableRow key={invoice.invoice}>
                        <TableCell className="text-center text-[#3c2f27] font-roboto">{invoice.id}</TableCell>
                        <TableCell className="text-center text-[#3c2f27] font-roboto">{invoice.total}</TableCell>
                        <TableCell className="text-center text-[#3c2f27] font-roboto">{invoice.payment_mode}</TableCell>
                        <TableCell className="text-center  text-[#3c2f27] font-roboto">{invoice.order_date}</TableCell>
                        <TableCell className="text-center  text-[#3c2f27] font-roboto">
                          <Link href={`/previous-orders/${invoice.id}`} className="border border-[#3c2f27] bg-[#3c2f27] p-2 text-[#faf2ec] font-crimson text-sm hover:text-[#3c2f27] hover:bg-white">View Detail</Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}