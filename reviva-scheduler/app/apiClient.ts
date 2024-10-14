const apiUrl = 'http://localhost:8000/'

const getOptions = {
    method: 'GET'
};

// const putOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' }
// }

// const postOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' }
// }

type User = {
  id: number
  name: string
}

type Booking = {
  id: number
  appointmentTime: Date
  name: string
  createdAt: Date
  room: number
  email: string
}

type Service = {
  id: number
  name: string
  rooms: number[]
  createdAt: Date
}

export type ApiResult = {
    success: boolean,
    result: (User|Booking|Service)[]
    message?: string,
    errors?: { msg: string, path?: string }[]
}

export async function getUsers(): Promise<ApiResult> {
    const result = await fetch(`${apiUrl}/users/`, getOptions).then(res => res.json()).catch(err => {
        console.error(err)
    })

    return {
      success: true,
      result: result
    }
}

export async function getBookings(): Promise<ApiResult> {
  const result = await fetch(`${apiUrl}/bookings/`, getOptions).then(res => res.json()).catch(err => {
      console.error(err)
  })

  return {
    success: true,
    result: result
  }
}

export async function getServices(): Promise<ApiResult> {
  const result = await fetch(`${apiUrl}/services/`, getOptions).then(res => res.json()).catch(err => {
      console.error(err)
  })

  return {
    success: true,
    result: result
  }
}
