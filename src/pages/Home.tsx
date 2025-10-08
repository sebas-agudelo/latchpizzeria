import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { motion } from "framer-motion";
import { IProducts } from '../module/Ip';
import { products } from '../data/productData';

interface HomeProps {
    className?: string; // Gör className optional
}

export default function Home({ className }: HomeProps) {
    const [allProducts, setAllProducts] = useState<IProducts[]>([])
    const [isVisible, setIsVisible] = useState(false);
    const [isFullyScrolled, setIsFullyScrolled] = useState();

    const images = [
        { imgUrl: "pizza-1344720_1920.jpg" },
        { imgUrl: "bildute.jpg" }
    ]

    if (allProducts.length === 0) {
        setAllProducts(products)
    };

    const selectedFavorites = allProducts.filter((p, index) => index === 1 || index === 2 || index === 4);

    console.log("Utvalda favoriter: ", selectedFavorites);

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
                    <h1>VÄLKOMMEN</h1>

                    <button>
                        <Link to={`/meny`}>SE VÅR MENY</Link>
                    </button>
                </div>
            </div>

            <div className={`home-favorite-products-container ${isVisible && !isFullyScrolled ? 'visible' : ''}`}>
                <h2 className='favorite-product-header'>FAVORITES</h2>

                {selectedFavorites.map((p) => (
                    <div className='home-favorite-products-content'>
                        <div className='home-favorite-product-img'>
                            <img src={p.product_img} alt={p.product_img} />
                        </div>

                        <div className='home-favorite-product-info'>
                            <h3>{p.product_name}</h3>
                            <p>{p.products_desc}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div className='home-about-preview-container'>
                <div className='home-about-preview-content'>
                    <div className='home-about-img'>
                        <img src="pexels-bluerhinomedia-2788792.jpg" alt="" />
                    </div>

                    <div className='home-about-preview-text'>
                        <h2>LATCH PIZZA</h2>

                        {/* <h3>Authentic Flavors</h3> */}

                        <motion.p
                            initial={{ opacity: 0, x: -100 }}       // utgångsläge
                            whileInView={{ opacity: 1, x: 0 }}      // när den syns i viewport
                            transition={{ duration: 0.8, ease: "linear" }}
                            viewport={{ once: true, amount: 0.5 }}               // kör bara en gång
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe facere, officiis, repellendus eligendi doloribus ipsam quia itaque exercitationem ratione sapiente incidunt fugiat rem et laborum dolorem rerum quod. Harum.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis eius ea eos alias eaque laboriosam at nostrum quis repellendus hic nam vero, quas cupiditate facilis in sunt sit. Eveniet, cumque?
                        </motion.p>
                        {/* <div className='read-more-btn'>
                            <Link to={`about`}>Om oss</Link>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* 
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


