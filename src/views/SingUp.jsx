import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Banner } from "@/components/Banner"
import { Form } from "@/components/Form"
import { useGetCountries } from "@/hooks/useGetCountries"
import { singUpFields } from "@/constants/"
import { validSubmitActive, validSingUp } from "@/utils"

export const SingUp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    language: "",
  })
  
  const { countries } = useGetCountries()
  singUpFields[3].options = [singUpFields[3].options[0], ...countries]

  const [submitActive, setSubmitActive] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    e.preventDefault()
    const isValid = validSingUp(form)
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
        <h1 className="text-primary-default my-6 text-3xl font-bold text-center select-none">Create your account</h1>
        <Form
          mode={'signup'}
          onSubmit={handleSubmit}
          handleChange={handleChange}
          fields={singUpFields}
          submitActive={submitActive}
          textSubmit={'Sign Up'}
        />
      </main>
      <footer className="flex flex-col items-center justify-center">
        <h1 className="text-gray-400 text-sm font-bold text-center select-none">
          Have you an account? <Link to="/login" className="text-primary-default font-bold">Login</Link> instead
        </h1>
      </footer>
    </>
  )
}