import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './component.css';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechFlow",
        image: "", // Use generic avatar via ui-avatars locally handled
        text: "Very professional team and smooth delivery. They understood our requirements perfectly and delivered beyond our expectations.",
        stars: 5
    },
    {
        name: "Sarah Smith",
        role: "Marketing Director",
        image: "",
        text: "Hypertonic transformed our online presence. The attention to detail and modern design systems are truly impressive.",
        stars: 5
    },
    {
        name: "Michael Chen",
        role: "Founder, StartupX",
        image: "",
        text: "Top-notch communication and excellent code quality. I highly recommend them for any complex web application development.",
        stars: 5
    },
    {
        name: "Emily Clark",
        role: "Product Manager",
        image: "",
        text: "Fast delivery, bug-free applications, and great post-launch support. Truly the best tech partners we've worked with so far.",
        stars: 5
    }
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="testimonials-section">
            <div className="container">
                <motion.div
                    className="testi-header"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="testi-title">Client Testimonials</h2>
                    <p className="testi-subtitle">What they say about us</p>
                </motion.div>

                <motion.div
                    className="testi-slider-wrap"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <Slider {...settings}>
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="testi-slide-pad">
                                <div className="testi-card">
                                    <div className="testi-stars">
                                        {[...Array(item.stars)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                                    </div>
                                    <p className="testi-text">"{item.text}"</p>
                                    <div className="testi-client-row">
                                        <div className="testi-client-img-wrap">
                                            <img src={item.image || `https://ui-avatars.com/api/?name=${item.name.replace(" ", "+")}&background=222&color=fff`} alt={item.name} />
                                        </div>
                                        <div>
                                            <h4 className="testi-client-name">{item.name}</h4>
                                            <span className="testi-client-role">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </div>
        </div>
    );
};

export default Testimonials;
