'use server'
const  registerUser = async(e:any) =>{
    const name = e.get('full_name');
    const email = e.get('email');
    await fetch('http://localhost:3000/api/?name=Joffrey', {
      method: 'POST',
      body: JSON.stringify({name, email}),
    }, )
  }

  export default registerUser