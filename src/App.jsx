import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Services } from "./components/Services";

export const App = () => {
    const Landing = () => (
        <>
            <Hero />
            <About />
            <Services />
            <Contact />
        </>
    );
    return (
        <>
            <BrowserRouter>
                <main className="flex min-h-screen flex-col bg-[#0a0a0a]">
                    <Navbar></Navbar>
                    <Hero></Hero>
                    <About></About>
                    <Services></Services>
                    <Contact></Contact>
                    <Footer></Footer>
                </main>
            </BrowserRouter>
        </>
    );
};
