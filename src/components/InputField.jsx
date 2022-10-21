import { OpenEye, CloseEye } from '@/Icons/Eyes';

export const InputField = ({ handleChange, withIcon = false, show, setShow, type, ...props }) => {

  const showPassword = () => {
    setShow(!show);
  }

  const hidePassword = () => {
    setShow(!show);
  }

  return (
    <div className={`mb-4 relative`}>
      <input onChange={handleChange} className={`${props.className}`} type={show ? 'text' : type} {...props} />
      {withIcon && (
        show ? (
          <OpenEye onClick={showPassword} className="w-5 h-5 absolute top-1/2 right-2 transform -translate-y-1/2" />
        ) : (
          <CloseEye onClick={hidePassword} className="w-5 h-5 absolute top-1/2 right-2 transform -translate-y-1/2" />
        )
      )}
    </div>
  )
}