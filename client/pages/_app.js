import "bootstrap/dist/css/bootstrap.min.css"
import "../public/css/styles.css"
import TopNav from "../components/TopNav";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Footer from "../components/Footer/Footer.js";

function MyApp({Component,pageProps})
{
    return (
      <Provider> 
        <ToastContainer position="top-center"/>
        <TopNav position="fixed"/>
        <Component {...pageProps}/>
        <Footer />
      </Provider>
    );
}

export default MyApp;