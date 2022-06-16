import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
};
