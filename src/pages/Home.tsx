import { useState } from 'react';
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

    if (allProducts.length === 0) {
        setAllProducts(products)
    };

    const selectedFavorites = allProducts.filter((p, index) => index === 1 || index === 2 || index === 4);

    return (
        <>
            <div className='home-container'>
                <div className='home-hero'>
                    <div className='home-hero-video'>
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

                <div className={`home-favorites`}>
                    <h2>FAVORITES</h2>

                    {selectedFavorites.map((p) => (
                        <div className='home-favorites-content'>
                            <div className='home-favorites-img'>
                                <img src={p.product_img} alt={p.product_img} />
                            </div>

                            <div className='home-favorites-info'>
                                <h3>{p.product_name.toUpperCase()}</h3>
                                <p>{p.products_desc}</p>
                            </div>

                        </div>
                    ))}
                </div>

                <div className='home-about'>
                    <div className='home-about-content'>
                        <div className='home-about-img'>
                            <img src="pexels-bluerhinomedia-2788792.jpg" alt="" />
                        </div>

                        <div className='home-about-text'>
                            <h2>LATCH PIZZERIA</h2>

                            <h3>
                                ALLTID NYTT, ALLTID GOTT <br />
                                FRÅN VÅR KÖK TILL DITT BORD
                            </h3>

                            <motion.p
                                initial={{ opacity: 0, x: -100 }}  
                                whileInView={{ opacity: 1, x: 0 }} 
                                transition={{ duration: 0.8, ease: "linear" }}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis saepe facere, officiis, repellendus eligendi doloribus ipsam quia itaque exercitationem ratione sapiente incidunt fugiat rem et laborum dolorem rerum quod. Harum.

                            </motion.p>
                        </div>
                    </div>
                </div>

                <div className='home-hours'>
                    <div className='home-hours-img'>
                        <img src="latch.jpg" alt="" />
                    </div>

                    <div className='home-hours-content'>
                        <div className='home-hours-info'>
                            <h2>LATCH ÖPPETTIDER</h2>
                            <p>Mån-Tors: 10:00 - 23:00</p>
                            <p>Fre-Lör: 10:00 - 03:00</p>
                            <p>Sön: Stängt</p>
                        </div>

                        <div className='home-hours-buttons'>
                            <button className='more-pizza-se-menu-btn'><Link to={`https://www.google.com/maps/dir//Eleonoragatan+4,+633+43+Eskilstuna/@59.3761999,16.4324066,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x465ef2c96c4468c3:0x51523b9f1b02b8ce!2m2!1d16.5148063!2d59.3762259?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D`}>HITTA OSS</Link></button>
                            <button><Link to={`tel:0700000000`}>RING OSS</Link></button>
                        </div>
                    </div>
                </div>

            {/* <div className='last-container'>
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
            </div>  */}

                <Footer />
            </div>
        </>
    );
}


