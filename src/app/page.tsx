'use client'

import useSWR from 'swr'

import registerUser from '../actions';

export default  function Home() {

  const fetcher = async() => await fetch('http://localhost:30001/api').then((response) => response.json());
  const { data, error, isLoading } = useSWR('users', fetcher , { refreshInterval: 20 })

  if(isLoading) return null;
  if (error) return null;

    // const data =  await fetch('http://localhost:30001/api',  { next: { revalidate: 1 }, cache: 'no-store' }).then((response) => response.json());


  return (
    <main className="flex min-h-screen flex-col gap-8">
     <h1 className="text-3xl font-extrabold ">Register User</h1>
     <form action={registerUser} className="flex flex-col items-start justify-center gap-4" >
      <input type="text" name="full_name" id="full_name" className="border outline-none text-xl p-1 rounded-lg"   placeholder="John doe"/>
      <input type="email" name="email" id="email" className="border outline-none text-xl p-1 rounded-lg"  placeholder="example@gmail.com"  />
      <button type="submit" className="border outline-none text-xl font-bold space-x-2 px-5 py-2 rounded-lg bg-slate-500 text-white " >Register</button>
     </form>

     <div>
      <h2>LIST OF USERS</h2>
      <ul>
        {data.map((user:any)=>(
          <li key={user.id}>{user.id} {"  "}  {user.name} {"  "} {user.email}</li>
        ))}
      </ul>
     </div>
    </main>
  )
}
