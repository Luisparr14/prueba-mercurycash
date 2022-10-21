import { inputsConfig } from "./inputs"

export const singUpFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
    className: `text-gray-700 ${inputsConfig.classnames}`,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
    className: `text-gray-700 ${inputsConfig.classnames}`,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Retype Password",
    className: `text-gray-700 ${inputsConfig.classnames}`,
  },
  {
    name: "country",
    type: "select",
    placeholder: "Country",
    className: `text-primary-default font-bold ${inputsConfig.classnames}`,
    options: [
      {
        value: "",
        label: "Country of residence",
      },
    ],
  },
  {
    name: "language",
    type: "select",
    placeholder: "Language",
    className: `text-primary-default font-bold ${inputsConfig.classnames}`,
    options: [
      {
        value: "",
        label: "Language",
      },
      {
        value: "EN",
        label: "English",
      },
      {
        value: "ES",
        label: "Español",
      }
    ]
  }
]