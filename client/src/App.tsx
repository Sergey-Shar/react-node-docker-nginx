import axios from 'axios'
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react'

import './App.css'
const URL_AUTH = 'http://localhost:4000/api/auth'
interface IAuthResponse {
  message: string
}

function App() {
  const [isDisable, setDisable] = useState(true)
  const formValues = useRef({ userName: '', password: '' })
  const formRef = useRef<HTMLFormElement | null >(null)

  const handleChange: ChangeEventHandler<HTMLFormElement> = ({
    target: { value, name }
  }) => {
    formValues.current = { ...formValues.current, [name]: value }
    setDisable(Object.values(formValues.current).some((value) => !value.trim()))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = async(
    event
  ): Promise<void> => {
    event.preventDefault()
    try {
      const { data } = await axios.post<IAuthResponse>(URL_AUTH, formValues.current)
      alert(data.message)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.message)
      }
      console.error(error)
    }
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
      <input
        placeholder="name..."
        name="userName"
        type="text"
      />
      <input
        placeholder="password"
        name="password"
        type="password"
      />
      <button disabled={isDisable} type="submit">
        вход
      </button>
    </form>
  )
}

export default App
