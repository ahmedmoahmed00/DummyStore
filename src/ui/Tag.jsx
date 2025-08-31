function Tag({ title, type }) {
  const base = `py-1 px-2 w-fit rounded-md font-[500] text-[12px]`;

  const style = {
    main: base + " bg-black text-white",
    sub: base + " bg-gray-200 text-gray-800",
    premium: base + " bg-black text-white",
  };

  const desin = style[type];

  return <div className={desin}>{title}</div>;
}

export default Tag;
