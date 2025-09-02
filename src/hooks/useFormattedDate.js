function useFormattedDate() {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date()
  );

  return formattedDate;
}

export default useFormattedDate;
