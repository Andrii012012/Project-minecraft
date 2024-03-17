import React from "react";
import './errorStyle.css';
import './errorMedia.css';
import errorImageMain from '../../assets/images/global/404.png';

export default function Error(props){
    let { } = props;
     return (
       <main className='page'>
          <section className='error'>
             <img className='error__image' src={errorImageMain} alt="" />
             <p className='error__title title-section'>Страница не найдена!</p>
          </section>
       </main>
     );
}