import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Footer = forwardRef((props, ref) => {
  return <footer ref={ref}>footer contact</footer>;
});

export default Footer;

// function Footer() {
//   return <div>푸터자리</div>;
// }

// export default Footer;
