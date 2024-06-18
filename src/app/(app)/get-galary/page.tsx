'use client'

import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Galary = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<{ title: string; image_uri: string; description: string; price: string; _id: string }[]>([]);

  const handleGalary = async (abortController:any) => {
    try {
      setIsLoading(true)
      const response = await axios.get(`api/get-galary`,{
        signal : abortController.signal
      })
      setData(response.data.data)
    } catch (error) {
      console.log("My Error", error)
    }finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {

   const abortController =  new AbortController()
    handleGalary(abortController)

    return ()=>{
      abortController.abort()
    }
  }, [])

  return (
    <div className="bg-white dark:bg-black dark:text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blogs Show cards.. </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isLoading ?
            (
              <>
               <div className='flex flex-row min-h-screen justify-center items-center'>
               <Skeleton className="h-[125px] w-[250px] rounded-xl" />
               </div>
              </>
            ) :
            (
              <>
                {data.map((product) => (
                  <Link key={product._id} href={{pathname :'/params-id',query :{_id : product._id}}}>
                                  <div key={product._id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.image_uri}
                  alt={product.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  </h3>
                </div>
              </div>
            </div>
                  </Link>
          ))}
              </>
            )}
        </div>
      </div>
    </div>
  )
}

export default Galary
