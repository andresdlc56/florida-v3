import { About, Counter, Header, Hero, Products, Testimonials, WhyUs } from "./components";

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
                
                <Testimonials />
            </main>
        </>
    )
}
