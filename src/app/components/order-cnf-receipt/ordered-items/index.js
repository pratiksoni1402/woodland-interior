import Image from "next/image";
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

const invoices = [
  {
    invoice: "001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    quantity: 2,
  },
  {
    invoice: "002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    quantity: 2,

  },
  {
    invoice: "003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    quantity: 2,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    quantity: 2,
    paymentMethod: "Credit Card",
  },
  {
    invoice: "005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    quantity: 2,
    paymentMethod: "PayPal",
  },
  {
    invoice: "006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    quantity: 2,
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    quantity: 2,
    paymentMethod: "Credit Card",
  },
]

export default function Orderitems() {
  return (
    <div className="order-items">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="yours-order text-center my-8 pl-4 text-[#3c2f27] font-roboto text-2xl py-1">
            Your Orders
          </div>
        </div>
        <div className="col-span-12">
          <Table className=''>
            <TableHeader className='bg-[#3c2f27]'>
              <TableRow>
                <TableHead className="w-[100px] text-[#faf2ec]">S.No</TableHead>
                <TableHead className=' text-[#faf2ec]'>Image</TableHead>
                <TableHead className=' text-[#faf2ec]'>Name</TableHead>
                <TableHead className=' text-[#faf2ec]'>Quantity</TableHead>
                <TableHead className="text-right text-[#faf2ec]">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}