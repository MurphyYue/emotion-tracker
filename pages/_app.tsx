import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";
import { GlobalState } from "@/utility/global-state";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='w-96 h-screen'>
      <GlobalState>
        <NavBar />
        <Component {...pageProps} />
      </GlobalState>
    </div>
  );
}
