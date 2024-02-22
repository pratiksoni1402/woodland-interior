export const dynamic = 'force-dynamic';
export const revalidate = 0;
import Orderitems from "../components/order-cnf-receipt/ordered-items"
import Cnforder from "../components/order-cnf-receipt"
import Ordertotal from "../components/order-cnf-receipt/order-total"
export default function Orderreceipt() {
  return (
    <div className="order-receipt bg-[#faf2ec] pb-20">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-2"></div>
          <div className="col-span-8">
            <div className="order-receipt-wrapper bg-white">
              <Cnforder />
            </div>
            <div className="order-item-wrapper bg-white">
              <Orderitems />
            </div>
            <div className="order-item-wrapper bg-white">
              <Ordertotal />
            </div>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  )
}