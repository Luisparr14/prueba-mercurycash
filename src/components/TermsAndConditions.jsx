import { CheckBox } from "./CheckBox"

export const TermsAndConditions = ({ }) => {
  return (
    <CheckBox id={"terms"} name="terms" className="rounded-3xl">
      <div className="flex flex-col items-center justify-center w-fit">
        <p className="text-gray-500 text-xs text-center">
          By continuing, you agree to our
          <span className="text-primary-default font-bold"> Terms of Service</span> and
          <span className="text-primary-default font-bold"> Privacy Policy</span>
        </p>
      </div>
    </CheckBox>
  )
}