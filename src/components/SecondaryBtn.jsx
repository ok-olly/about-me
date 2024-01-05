function SecondaryBtn({ handleClick, children }) {
  return (
    <button
      onClick={handleClick}
      className="mobile-h6-small flex items-center justify-center gap-2 rounded-full border-4 border-black bg-white px-6 py-3 duration-150 active:bg-black/75 dark:text-black pointerhover:hover:scale-105 pointerhover:hover:gap-4 pointerhover:hover:bg-black pointerhover:hover:px-5 pointerhover:hover:text-white dark:pointerhover:hover:bg-white dark:pointerhover:hover:text-black"
    >
      {children}
    </button>
  );
}

export default SecondaryBtn;
