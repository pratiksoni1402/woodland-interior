'use client'
import { Button } from "../ui/button"
export default function Logoutbutton() {
  return (
    <div className="logout-button">
        <Button type='submit' onClick={() =>handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]'>Logout</Button>
    </div>
  )
}