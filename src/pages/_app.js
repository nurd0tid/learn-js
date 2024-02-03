import Sidebar from '../layouts/Sidebar';
import "@/styles/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/styles/css/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}

export default MyApp;