import { About, Contactanos, Counter, Footer, Gallery, Header, Hero, Products, Testimonials, WhyUs } from "./components";

export const FloridaApp = () => {
    return (
        <>
            <Header />

            <Hero />

            <main id="main">

                <About />

                <WhyUs />
                
                <Counter />

                <Products />
                
                {/*<Testimonials />*/}
                <Gallery />

                <Contactanos />
            </main>

            <Footer />

            <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
        </>
    )
}
