'use server'
const  registerUser = async(e:any, url: string) =>{
    const name = e.get('full_name');
    const email = e.get('email');
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({name, email}),
    }, )
  }

  export default registerUser