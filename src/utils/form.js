const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export const validSubmitActive = (name, value, form) => {
  const formCopy = { ...form };
  formCopy[name] = value;
  const formValues = Object.values(formCopy);
  const validForm = formValues.every((value) => value !== "");
  return validForm;
}

export const validLogIn = (form) => {
  const { email, password } = form;
  const validEmail = emailPattern.test(email);
  const validPassword = password.length >= 0;
  return validEmail && validPassword;
}

export const validSingUp = (form) => {
  const { email, password, confirmPassword, country, language } = form;
  const validEmail = emailPattern.test(email);
  const validPassword = password === confirmPassword;
  const validCountry = country !== "";
  const validLanguage = language !== "";
  const validForm = validEmail && validPassword && validCountry && validLanguage;

  return validForm;
}