


export const Testimonials = () => {
    return (
        
        <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Testimonials</h2>
                    <p>What Are They <span>Saying About Us</span></p>
                </div>

                <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src="/src/assets/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="testimonial-item">
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="testimonial-content">
                                        <p>
                                            <i className="bi bi-quote quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bi bi-quote quote-icon-right"></i>
                                        </p>
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <div className="stars">
                                            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 text-center">
                                        <img src="/src/assets/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       

                        

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}
