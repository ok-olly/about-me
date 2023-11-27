// eslint-disable-next-line react/prop-types
function Heading({ children }) {
  return (
    <h1 className="font-semibold uppercase text-neutral-950 underline decoration-wavy decoration-4 underline-offset-8">
      {children}
    </h1>
  );
}

export default Heading;
