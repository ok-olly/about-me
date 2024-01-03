function PrimaryBtn({
  handleClick,
  isDisabled = false,
  isStretch = false,
  children,
}) {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`mobile-h6-small flex items-center gap-2 ${
        isStretch ? "justify-center self-stretch" : "self-center"
      } rounded-full px-8 py-4 text-white shadow-xl duration-150 enabled:bg-gradient-to-r enabled:from-primary enabled:to-secondary pointerhover:enabled:hover:scale-105 pointerhover:enabled:hover:gap-4 pointerhover:enabled:hover:px-7 enabled:active:opacity-80 disabled:bg-[#7E8770]`}
    >
      {children}
    </button>
  );
}

export default PrimaryBtn;
