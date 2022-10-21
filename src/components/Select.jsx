export const Select = ({ options, value, onChange, className, ...props }) => {
  return (
    <div className={`mb-4 relative`}>
      <select
        value={value}
        onChange={onChange}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}