"use client"

import Calendar from "./calendar"
import { getUsers, getServices, getBookings } from "./apiClient";

import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState()
  const [bookings, setBookings] = useState()
  const [loaded, setLoaded] = useState(false)
  const [errors, setErrors] = useState([])

  useEffect(() => {
    (async () => {


            const users = await getUsers();
            const services = await getServices();
            const bookings = await getBookings();

            console.log(users)
            console.log(services)
            console.log(bookings)

            if (users.errors || services.errors || bookings.errors) {
              console.error('api error')
            } else {
              console.log('yay do stuff')
            }

        setLoaded(true)
    })();

    return () => { };
}, []);

  if (!loaded) return <></>

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Calendar />
      </main>
    </div>
  );
}
