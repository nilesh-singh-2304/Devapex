import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "@/components/navbar";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/footer";
import { ToastContainer, toast } from 'react-toastify';

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <NextTopLoader />
  <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className="bg-[url('https://64.media.tumblr.com/4e9baec5f243fb9fe8b7ba75c70f51cf/tumblr_inline_nohxl1PLTa1ro20i7_540.gif')] mt-0 bg-fixed bg-cover">
    <Nav />
    <Component {...pageProps} />
    <Footer />
    </div>
  </>;
}
