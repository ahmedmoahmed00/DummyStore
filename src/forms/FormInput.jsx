function FormInput({
  id,
  type = "text",
  label,
  placeholder = "Email",
  required = false,
  register,
  error,
  ShowStar = true,
  disabled = false,
}) {
  return (
    <div className="flex flex-col gap-1.5 ">
      <label className="text-sm font-medium" htmlFor={id}>
        {label} {ShowStar ? "*" : ""}
      </label>
      <div className="flex flex-col gap-1">
        <input
          required={required}
          className="text-sm border h-full disabled:text-gray-400 border-gray-200 py-2 px-3 rounded-md focus:shadow focus:shadow-gray-400 duration-300"
          id={id}
          type={type}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
        />
        <span className="pl-2 text-[12px] text-red-500">
          {error ? error.message : null}
        </span>
      </div>
    </div>
  );
}

export default FormInput;
