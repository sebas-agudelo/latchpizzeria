import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";

interface HomeProps {
    className?: string; // Gör className optional
}

export default function Home({ className }: HomeProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isFullyScrolled, setIsFullyScrolled] = useState(false);

    const images = [
        { imgUrl: "pizza-1344720_1920.jpg" },
        { imgUrl: "bildute.jpg" }
    ]

    return (
        <div className='home'>
            <div className='home-hero-container'>
                <div className='home-hero-video-container'>
                    <motion.video
                        src="ppp.mp4"
                        autoPlay
                        loop
                        muted
                        className={`${isVisible && !isFullyScrolled ? 'visible' : ''}`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2.8, ease: "linear" }}
                        viewport={{ once: true }}
                    />
                </div>

                <div className='home-hero-content'>
                    <h1 className={`h2-gusto-pizza-1 ${className}`}>VÄLKOMMEN</h1>

                    <button>
                        <Link to={`/meny`}>SE VÅR MENY</Link>
                    </button>
                </div>
            </div>

            {/* <section className={`app-home-favarite-products-wrapper ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <h2 className='favorite-product-header'>FAVORITES</h2>
                <article className='app-home-favarite-products-content'>
                    <article>
                        <div className='home-product-img'>
                            <img src="depositphotos_309587372-stock-photo-grilled-chicken-kebabs-platter-with.jpg" alt="" />
                        </div>

                        <div className='app-product-info'>
                            <h3 className='product-name'>Grillrätter</h3>
                            <p className='product-desc'>Våra favoriter i grillköket är bl.a kycklingspett & mixgrilltallriken.</p>

                            <h3 className='product-price'>$11</h3>
                        </div>

                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="/kebabpizza.png" alt="" />
                        </div>
                        <div className='app-product-info'>
                            <h3 className='product-name'>Kebab Pizza</h3>
                            <p className='product-desc'>Kebab pizza med rödsås och vitsås, tomat, rök, romansallad och gurka.</p>
                            <h3 className='product-price'>$11</h3>

                        </div>
                    </article>
                    <article>
                        <div className='home-product-img'>
                            <img src="pizza-1344720_1920.jpg" alt="" />
                        </div>
                        <div className='app-product-info'>
                            <h3 className='product-name'>Margherita Pizza</h3>
                            <p className='product-desc'>Margarita med tomatsås, basilika och ost</p>
                            <h3 className='product-price'>$12</h3>
       
                        </div>
                    </article>

                </article>

            </section>

            <section className='app-home-speciality-wrapper'>


                <div className='speciality-img'>
                    <img src="pexels-bluerhinomedia-2788792.jpg" alt="" />
                </div>

                <div className='app-home-speciality-content'>

                    <h2>LATCH PIZZA</h2>

                    <h3>Authentic Flavors</h3>

                    <motion.p
                        initial={{ opacity: 0, x: -100 }}       // utgångsläge
                        whileInView={{ opacity: 1, x: 0 }}      // när den syns i viewport
                        transition={{ duration: 0.8, ease: "linear" }}
                        viewport={{ once: true, amount: 1 }}               // kör bara en gång
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe facere, officiis, repellendus eligendi doloribus ipsam quia itaque exercitationem ratione sapiente incidunt fugiat rem et laborum dolorem rerum quod. Harum.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius ea eos alias eaque laboriosam at nostrum quis repellendus hic nam vero, quas cupiditate facilis in sunt sit. Eveniet, cumque?
                    </motion.p>
                    <div className='read-more-btn'>
                        <Link to={`about`}>Read more</Link>
                    </div>

                </div>

            </section>

            <section className='blabla'>
                <section className='app-more-pizzas-wrapper'>
                    <section className='app-more-pizzas-content'>
                        <article>
                            <div className='more-product-img'>
                                <img src="latch.jpg" alt="" />
                            </div>

                        </article>

                    </section>

                </section>

                <section className='app-pickup-wrapper'>

                    <section className='app-pickup-content'>
                        <h2>LATCH ÖPPETTIDER</h2>
                        <p>Mån-Tors: 10:00 - 23:00</p>
                        <p>Fre-Lör: 10:00 - 03:00</p>
                        <p>Sön: Stängt</p>


                        <div className='btns'>
                            <button className='more-pizza-se-menu-btn'><Link to={`/menu`}>VÅR MENY</Link></button>
                            <button><Link to={`tel:0700000000`}>RING OSS</Link></button>
                        </div>

                    </section>

                </section>

            </section>

            <section className='last-container'>
                <div className='vin-text-container'>

                    <h2> KOM OCH BESÖK OSS</h2>
                    <motion.p
                        initial={{ opacity: 0 }}       // utgångsläge
                        whileInView={{ opacity: 1 }}      // när den syns i viewport
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        viewport={{ once: true, amount: 0.9 }}               // kör bara en gång
                    >
                        Vi finns på norr i Eskilstuna
                    </motion.p>
                </div>
                <div className='vin-img-container'>
                    <div className='vin-img-wrapper'>
                        <img src="latch.jpg" alt="VIN.webp" />
                    </div>
                    <div className='vin-img-wrapper'>
                        <img src="bildute.jpg" alt="VIN.webp" />
                    </div>
                    <div className='vin-img-wrapper'>
                        <img src=" olikapizzor.jpg" alt="VIN.webp" />
                    </div>
                    <div className='vin-img-wrapper'>
                        <img src="depositphotos_309587372-stock-photo-grilled-chicken-kebabs-platter-with.jpg" alt="VIN.webp" />
                    </div>


                </div>
            </section> */}

            {/* <Footer /> */}
        </div>
    );
}


