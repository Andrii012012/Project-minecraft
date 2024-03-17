import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from "react-router-dom";
import image1 from '../../assets/images/page/Home/home-image-slider1.jpg'
import image2 from '../../assets/images/page/Home/home-image-slider2.jpg'
import './Home.css';
import './HomeMediaStyle.css';

export default function Home(props) {
    const news = [{
        title: 'Открытие проекта!', img: "https://kartinki.pics/uploads/posts/2021-04/1617315926_1-p-fon-mainkraft-s-sheiderami-1.jpg", description: `Сегодня у нас знаменательный день - открытие проекта EnergyWorld!
        Что это за проект такой вы можете узнать в подробной части статьи.`, date: '29.02.2024'
    }];
    return (
        <main className="page">
            <section className="show-servers">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPreView={1}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    Parallax={true}
                    EffectFade={true}
                    speed={1000}
                    loop={true}
                >
                    <SwiperSlide><img src={image1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={image2} alt="" /></SwiperSlide>
                </Swiper>
            </section>
            <section className='news'>
                <ul className="news__lists">
                    {news.map((item, _) => (
                        <li className='news__item'>
                            <h3 className='news__title'>{item.title}</h3>
                            <img className='news__img' src={item.img} alt="" />
                            <div className="news__content container-content">
                                <p className='news__description'>
                                    {item.description}
                                </p>
                                <div className="news__info">
                                    <time className='news__date' datetime={item.date}>{item.date}</time>
                                    <NavLink className='news__btn' to='/'>Подробно</NavLink>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
