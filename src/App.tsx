import { FormEvent, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [data, setData] = useState('')
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const newData = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    login(newData.email, newData.password)
  }

  const login = async (email: string, password: string) => {
    try{
      const response = await axios.post("http://10.160.252.209:1084/login", { email, password })
      console.log(response.data)
      setData(response.data)
    }catch(error) {
      console.log(error)
    }


      
    }

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <input type="email" name="email" id="" />
        <input type="text" name="password" id="password" />
        <button type="submit">Enviar</button>

        {
          JSON.stringify(data)
        }
      </form>
    </>
  )
}

export default App
