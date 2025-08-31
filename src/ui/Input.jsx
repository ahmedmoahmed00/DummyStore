function Input({
  id,
  type = "text",
  label,
  placeHoldre = "Email",
  required = false,
  register,
  error,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" htmlFor={id}>
        {label} *
      </label>
      <div className="flex flex-col gap-1">
        <input
          required={required}
          className="text-sm border border-gray-200 py-2 px-3 rounded-md focus:shadow focus:shadow-gray-400 duration-300"
          id={id}
          type={type}
          placeholder={placeHoldre}
          {...register}
        />
        <span className="pl-2 text-[12px] text-red-500">
          {error ? error.message : null}
        </span>
      </div>
    </div>
  );
}

export default Input;
