import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "@/components/Sidebar";
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }) {
  return (
      <ChakraProvider>
        <Navbar />
        <Nav/>
        <Sidebar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>  
      );
}
