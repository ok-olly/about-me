function Heading({ children }) {
  return (
    <h1 className="text-2xl font-semibold uppercase text-neutral-950 underline decoration-wavy decoration-4 underline-offset-8 dark:text-neutral-200">
      {children}
    </h1>
  );
}

export default Heading;
