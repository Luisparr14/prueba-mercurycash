import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./Button"
import { CheckBox } from "./CheckBox"
import { InputField } from "./InputField"
import { Select } from "./Select"
import { TermsAndConditions } from "./TermsAndConditions"

export const Form = ({ onSubmit, handleChange, fields, submitActive, mode, textSubmit }) => {
  const [showPassword, setShowPassword] = useState(false)
  /**
   * @desc This is an Object that contains the fields that are required to be filled in order to submit the form
   * @returns {JSX} - All the inputs of the form
   * @example {RenderInputsFields}
  */
  const RenderInputsFields = fields.map((field) => {
    const isPassword = field.type === 'password'
    const { type } = field
    
    if (type === 'text' || type === 'email' || type === 'password') {
      return (
        <InputField
          key={field.name}
          type={field.type}
          handleChange={handleChange}
          withIcon={isPassword}
          show={showPassword}
          setShow={setShowPassword}
          {...field}
        />
      );
    }

    if (type === 'select') {
      return (
        <Select
          key={field.name}
          options={field.options}
          value={field.value}
          onChange={handleChange}
          className={field.className}
          {...field}
        />
      );
    }
  })

  return (
    <form onSubmit={onSubmit} className="max-w-[320px]">
      {RenderInputsFields}
      {mode === 'login' && (
        <>
          <div className="text-primary-default text-sm font-bold text-right">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <CheckBox
            id={"remember"}
            name="remember"
            labelstyle="ml-2 text-black text-sm font-bold"
            className="mr-2 leading-tight border-2 border-primary-default rounded">
            Remember Me
          </CheckBox>
        </>
      )}
      {
        mode === 'signup' && (
          <TermsAndConditions />
        )
      }
      <Button type='submit' className={`bg-primary-default hover:bg-primary-light text-white font-bold py-2 px-4 w-48 rounded-3xl ${!submitActive && 'opacity-50 cursor-not-allowed'} `} disabled={!submitActive}>
        {textSubmit}
      </Button>
    </form>
  )
}