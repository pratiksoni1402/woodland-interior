'use client'
import axios from "axios"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
export default function Logoutbutton() {
  const router = useRouter();
  const handlelogout = () =>{
    axios.post('/api/logout-user')
    .then((response) =>{
      toast.success('Logged out')
      router.push('/auth/login')
    })
    .catch((error) =>{
      toast.error('error')
      console.log('error', error)
    })
  }

  return (
    <div className="logout-button">
        <Button type='submit' onClick={handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]'>Logout</Button>
    </div>
  )
}