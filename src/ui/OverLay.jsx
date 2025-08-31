function OverLay({ fullZindex = false, handler }) {
  return (
    <div
      onClick={handler}
      className={`fixed inset-0 bg-black/70 backdrop-blur-[1px] ${
        fullZindex ? " z-9999 " : " z-20 "
      } `}
    />
  );
}

export default OverLay;
