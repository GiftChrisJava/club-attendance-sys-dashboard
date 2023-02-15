import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
