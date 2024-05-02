'use client'
import axios from "axios"
import { Button } from "../ui/button"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { Loader2Icon } from 'lucide-react'
import { useQuery, useQueryClient } from "@tanstack/react-query"
export default function Logoutbutton() {
  const [isLoading, setLoading] = useState();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: sessionData } = useQuery({
    queryKey: ['checkSession'],
    queryFn: () =>
      axios.get('/api/get-sessiondata')
        .then((response) => {
          console.log('data', response.data.getSessionData)
          return response.data.getSessionData
        })
        .catch((error) => {
          console.log("Error occured", error)
        })
  })
  const handlelogout = () => {
    setLoading(true);
    axios.post('/api/logout-user')
      .then((response) => {
        router.push('/')
        toast.success('Logged out', {
          duration: 1000,
          style: {
            border: '1px solid #3c2f27',
            padding: '8px',
            color: '#faf2ec',
            backgroundColor: '#3c2f27',
          },
          iconTheme: {
            primary: '#faf2ec',
            secondary: '#3c2f27',
          },
        });
        queryClient.invalidateQueries('checkSession')
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
          <Button type='submit' onClick={handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]' disabled={true}>
            <Loader2Icon className='animate-spin mr-1' />
          </Button>

        ) : (

          <Button type='submit' onClick={handlelogout} className='rounded-none bg-[#3c2f27] hover:bg-[#faf2ec] hover:text-[#3c2f27] hover: border hover:border-[#3c2f27]'>Logout</Button>
        )
      }
    </div>
  )
}