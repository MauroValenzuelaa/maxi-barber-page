import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

export const App = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col bg-black">
                <Navbar></Navbar>
                <Hero></Hero>
                <About></About>
                <Services></Services>
                <Contact></Contact>
                <Footer></Footer>
            </main>
        </>
    );
};
