import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.160.252.209:1084'
});

function App() {
  const [data, setData] = useState(null);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handlePassword (e: ChangeEvent<HTMLInputElement>){
    setPassword(e.target.value)
  }

  function handleEmail (e: ChangeEvent<HTMLInputElement>){
    setEmail(e.target.value)
  }

  async function handleSubmitS (e: FormEvent<HTMLElement>){
    e.preventDefault()
    console.log(email, password)
    try {
      const response = await api.post("/login", { email, password });
      setData(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmitS}>
      <input type="email" name="email" id="email" onChange={handleEmail} required />
      <input type="password" name="password" id="password" onChange={handlePassword} required />
      <button type="submit">Enviar</button>

      {data && <div>Response: {JSON.stringify(data)}</div>}
    </form>
  );
}

export default App;
