import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { CiPizza } from "react-icons/ci";
import { CiBurger } from "react-icons/ci";
import { IProducts } from "../module/Ip";
import { products } from "../data/productData";
import { P } from "framer-motion/dist/types.d-DsEeKk6G";

export const Menu = () => {
    const [allProducts, setAllProducts] = useState<IProducts[]>([])

    if (allProducts.length === 0) {
        setAllProducts(products)
    }

    // console.log(allProducts);

    const selectedCategories = allProducts.map((c) => c.category)
        .filter((cc, aa, array) => array.indexOf(cc) === aa);

    // const selectedCategories: string[] = [];
    // allProducts.forEach((c) => {
    //     if (!selectedCategories.includes(c.category)) {
    //         selectedCategories.push(c.category);
    //     }
    // });

    const settings = {
        dots: false,      
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 1350,
        autoplaySpeed: 10000,
        cssEase: "linear",
        pauseOnHover: false,
        pauseOnFocus: false
    };
    return (
        <>
            <section className="menu-container">
                 <div className="menu-hero">
                <Slider {...settings} className="menu-slider">
                    <div className="menu-slider-img">
                        <img src="depositphotos_309587372-stock-photo-grilled-chicken-kebabs-platter-with.jpg" alt="Bild 1" />
                    </div>
                    <div className="menu-slider-img">
                        <img src="olikapizzor.jpg" alt="Bild 2" />
                    </div>
                    <div className="menu-slider-img">
                        <img src="bildute.jpg" alt="Bild 3" />
                    </div>
                </Slider>

                <div className="menu-hero-content">
                        <h1>VÅR MENY</h1>
                        <div className="menu-hero-buttons">
                            <Link to={``}>Pizza</Link>
                            <Link to={``}>Kebabrätter</Link>
                            <Link to={``}>Grillrätter</Link>
                            <Link to={``}>Hamburgare</Link>
                            <Link to={``}>Sallad</Link>
                        </div>
                </div>
            </div>
                {
                    selectedCategories.map((category) => (
                        <div>
                            <h2>{category.toUpperCase()}</h2>

                            {
                                allProducts.filter((p) => p.category === category)
                                    .map((p) => (

                                        <div>
                                            <h3>{p.product_name}</h3>
                                            <p>{p.products_desc}</p>
                                            <p>{p.product_price}</p>
                                        </div>
                                    ))
                            }
                        </div>

                    ))
                }
              
                {/* <div className="m-menu-hero-container">
                <Slider {...settings} className="m-h-img-container">
                    <div className="m-h-img-wrapper">
                        <img src="depositphotos_309587372-stock-photo-grilled-chicken-kebabs-platter-with.jpg" alt="Bild 1" />
                    </div>
                    <div className="m-h-img-wrapper">
                        <img src="olikapizzor.jpg" alt="Bild 2" />
                    </div>
                    <div className="m-h-img-wrapper">
                        <img src="bildute.jpg" alt="Bild 3" />
                    </div>
                </Slider>

                <div className="m-hero-heading">
                    <div className="m-hero-heading-bg">
                        <h1>VÅR MENY</h1>
                        <div className="m-hero-heading-btn">
                            <Link to={``}>Pizza</Link>
                            <Link to={``}>Kebabrätter</Link>
                            <Link to={``}>Grillrätter</Link>
                            <Link to={``}>Hamburgare</Link>
                            <Link to={``}>Sallad</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-menu-btns-container">

                <div className="m-btn-heading">
                    <p>Vår meny bjuder på det bästa av två världar – krispiga pizzor direkt ur ugnen och grillat med härlig rökig smak. Alltid med färska råvaror och passion i varje tugga.</p>
                </div>
            </div>

            <div className="m-menu-food-info">
                <div className="m-food-info-content">
                    <div className="m-food-items">
                        <div className="m-food-info-img">
                            <img src="olikapizzor.jpg" alt="Pizzor" />
                        </div>
                        <div className="m-food-info-details">
                            <h3>DAGENS LUNCH</h3>
                            <p>Njut av våra populära grillrätter och nygräddad pizza varje dag.</p>
                        </div>
                    </div>
                    <div className="m-food-items">
                        <div className="m-food-info-img">
                            <img src="gluttenfria.png" alt="" />
                        </div>
                        <div className="m-food-info-details">
                            <h3>ALTERNATIV FÖR ALLA</h3>
                            <p>Vi erbjuder glutenfria, laktosfria och allergivänliga rätter.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-mamu-food-container">

                <div className="m-menu-pizza-container">
                    <div className="m-pizza-heading">
                        <h2>PIZZA</h2>
                    </div>

                    <div id="pizzas"
                        className="m-pizzas-wrapper">
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Kebab pizza</h3>
                                <p>Sallad, tomat, lök, paperani & sås.</p>
                            </div>
                            <p id="m-item-price">128:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Margherita</h3>
                                <p>Tomatsås, ost, ruccola & grana padano.</p>
                            </div>
                            <p id="m-item-price">128:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Capricciosa</h3>
                                <p>Tomatsås, ost, prosciutto cotto, svamp, ruccola & grana padano</p>
                            </div>
                            <p id="m-item-price">138:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Pollo</h3>
                                <p>Tomatsås, ost, kyckling, chèvre, honungsrostade valnötter.</p>
                            </div>
                            <p id="m-item-price">178:-</p>
                        </div>
                    </div>

                </div>

                <div className="m-menu-pizza-container">
                    <div className="m-pizza-heading">
                        <h2>Kebabrätter</h2>
                    </div>

                    <div id="pizzas"
                        className="m-pizzas-wrapper">
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Kebab tallrik</h3>
                                <p>Pommes/ris, sallad, tomat, lök, paperani & sås.</p>
                            </div>
                            <p id="m-item-price">128:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Kebabrulle</h3>
                                <p>Bröd, sallad, tomat, lök, paperani & sås.</p>
                            </div>
                            <p id="m-item-price">128:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Kebab med bröd</h3>
                                <p>Pitabröd, sallad, tomat, lök, paperani & sås.</p>
                            </div>
                            <p id="m-item-price">138:-</p>
                        </div>
                    </div>

                </div>

                <div className="m-menu-pizza-container">
                    <div className="m-pizza-heading">
                        <h2>HAMBURGARE</h2>
                    </div>

                    <div id="pizzas"
                        className="m-pizzas-wrapper">
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Burgare 90g</h3>
                                <p>Bröd, kött, sallad, tomat, lök & sås.</p>
                            </div>
                            <p id="m-item-price">99:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Burgare 150g</h3>
                                <p>Bröd, kött, sallad, tomat, lök & sås.</p>
                            </div>
                            <p id="m-item-price">128:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Burgare 200g</h3>
                                <p>Bröd, kött, sallad, tomat, lök & sås.</p>
                            </div>
                            <p id="m-item-price">158:-</p>
                        </div>
                    </div>

                </div>

                <div className="m-menu-pizza-container">
                    <div className="m-pizza-heading">
                        <h2>GRILLRÄTTER</h2>
                    </div>

                    <div id="pizzas"
                        className="m-pizzas-wrapper">
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Grillade kycklingspett</h3>
                                <p>Pommes/ris, kycklingspett, sallad & tzatziki.</p>
                            </div>
                            <p id="m-item-price">138:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Grillad laxfilé </h3>
                                <p>Pommes/ris, grönsaker, chili & koriander.</p>
                            </div>
                            <p id="m-item-price">148:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Grill mix tallrik</h3>
                                <p>Kyckling, nöt, lax, pommes, sallad & sås.</p>
                            </div>
                            <p id="m-item-price">228:-</p>
                        </div>
                    </div>

                </div>

                <div className="m-menu-pizza-container">
                    <div className="m-pizza-heading">
                        <h2>SALLAD</h2>
                    </div>

                    <div id="pizzas"
                        className="m-pizzas-wrapper">
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Kycklingsallad</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p id="m-item-price">138:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Caesarsallad</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p id="m-item-price">148:-</p>
                        </div>
                        <div className="m-pizzas">
                            <div className="m-item-info">
                                <h3>Avokadosallad med koriander</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <p id="m-item-price">228:-</p>
                        </div>
                    </div>

                </div>
            </div> */}

            </section>
            <Footer />
        </>
    )
}