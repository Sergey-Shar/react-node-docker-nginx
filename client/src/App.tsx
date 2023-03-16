import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import axios, { AxiosError } from 'axios'

import './App.css'

const URL_AUTH = 'http://localhost:4000/api/auth'

interface IAuthResponse {
	message: string
}

function App() {
	const [values, setValue] = useState({ userName: '', password: '' })
	const [isDisable, setDisable] = useState(true)

	const handleChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value, name }
	}) => {
		setValue({ ...values, [name]: value })
		const isDisable = Object.values(values).some((value) => !value.trim())
		setDisable(isDisable)
	}

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (
		event
	): Promise<void> => {
		event.preventDefault()
		try {
			const { data } = await axios.post<IAuthResponse>(URL_AUTH, values)
			alert(data.message)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				alert(error.message)
			}
		} finally {
			setValue({ userName: '', password: '' })
		}
	}

	return (
		<form action="" onSubmit={handleSubmit}>
			<input
				placeholder="name..."
				name="userName"
				type="text"
				value={values.userName}
				onChange={handleChange}
			/>
			<input
				placeholder="password"
				name="password"
				type="password"
				value={values.password}
				onChange={handleChange}
			/>
			<button disabled={isDisable} type="submit">
				отправить
			</button>
		</form>
	)
}

export default App
