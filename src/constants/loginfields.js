import { inputsConfig } from "./inputs"

export const logInFields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Email",
    className: `text-gray-700 ${inputsConfig.classnames}`,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Password",
    className: `text-gray-700 ${inputsConfig.classnames}`,
  },
]