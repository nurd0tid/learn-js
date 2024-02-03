import "@/styles/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import "@/styles/css/app.css";
import MainLayout from "@/layouts/MainLayout";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;