export default function Ordertotal() {
  return (
    <div className="order-total">
      <div className="calculation px-2">
        <div className="sub-total pt-3 flex justify-between px-2 font-roboto text-[#4b4537]">
          <div>Sub-Total:</div>
          <div>3132131</div>
        </div>
        <div className="sub-total flex py-2 justify-between px-2 font-roboto text-[#4b4537]">
          <div>Central GST:</div>
          <div>13131</div>
        </div>
        <div className="sub-total flex pb-3 justify-between px-2 font-roboto text-[#4b4537]">
          <div>State GST:</div>
          <div>13131</div>
        </div>
        <div className="total-price flex font-semibold pt-3 pb-5 border-t border-[#b2937e] justify-between px-2 font-roboto text-[#4b4537]">
          <div>Grand Total:</div>
          <div>3158393</div>
        </div>
      </div>
    </div>
  )
}