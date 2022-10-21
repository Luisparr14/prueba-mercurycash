import { useState } from "react"
import { Link } from "react-router-dom"
import { Banner } from "@/components/Banner"
import { Form } from "@/components/Form"
import { logInFields } from "@/constants"
import { validSubmitActive, validLogIn } from "@/utils"

export const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [submitActive, setSubmitActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validLogIn(form)
    if (!isValid) {
      alert("Invalid form") 
      return
    }
    alert(`Valid form: ${JSON.stringify(form)}`)
  }

  const handleChange = (e) => {
    setForm((prev) => {
      const { name, value } = e.target
      setSubmitActive(validSubmitActive(name, value, form))
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center mb-10">
        <Banner />
        <h1 className="text-primary-default my-6 text-3xl font-bold text-center select-none">Welcome Back</h1>
        <Form
          mode={'login'}
          onSubmit={handleSubmit}
          handleChange={handleChange}
          fields={logInFields}
          submitActive={submitActive}
          textSubmit={'Log In'}
        />
      </main>
      <footer className="flex flex-col items-center justify-center">
        <h1 className="text-gray-400 text-sm font-bold text-center select-none">
          Don't have an account? <Link to={'/singup'} className="text-primary-default">Sign Up</Link> instead
        </h1>
      </footer>
    </>
  )
}