import React, { useEffect, useState } from 'react'
import { ICategories } from '../module/ICategories';
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import { IProducts } from '../module/products';
import { RiCloseLargeLine } from "react-icons/ri";
import { Footer } from '../components/Footer';

export default function Categories() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentProduct, setCorrentProduct] = useState<IProducts | null>(null);
    const [currentdProductId, setCurrentProductId] = useState<number | null>(null);
    const [categories, setCategories] = useState<ICategories[]>([]);
   
   
    return (
        <section className='app-category-section'>

            <section className='hero'>
                <div className='category-img-wrapper'>
                    <img src="pexels-muffin-1653877.jpg" alt="" />
                </div>

                <h2 className='our-menu'>OUR MENU</h2>


            </section>

            <Footer/>
        </section>
    );
}