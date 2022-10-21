export const CheckBox = ({ children, id, label, onChange, ...props }) => {
  return (
    <div className="flex mb-2">
      <input id={id} onChange={onChange} type="checkbox" />
      <label htmlFor={id} {...props} ></label>
      <label className={`${props.labelstyle} select-none`}>{children}</label>
    </div>
  )
}