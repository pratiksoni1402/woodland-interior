'use client'
import axios from "axios"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ClipLoader } from "react-spinners"
export default function Logoutbutton() {
  const [isLoading, setLoading] = useState();
  const router = useRouter();
  const handlelogout = () => {
    setLoading(true);
    axios.post('/api/logout-user')
      .then((response) => {
        router.push('/')
        toast.success('Logged out', {
          duration: 1000,
          style: {
            border: '1px solid #3c2f27',
            padding: '16px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        });
      })
      .catch((error) => {
        toast.error('error')
        console.log('error', error)
      })
      .finally(() => {
        setLoading(false)
      })

  }

  return (
    <div className="logout-button">
      {
        isLoading ? (
          <Button type='submit' onClick={handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]'>
            <ClipLoader color="#3c2f27" />
          </Button>

        ) : (

          <Button type='submit' onClick={handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]'>Logout</Button>
        )
      }
    </div>
  )
}