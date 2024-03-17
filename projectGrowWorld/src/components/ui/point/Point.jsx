import React from "react";
import './Point.css';
import './PointMediaStyle.css';

 export default function Point(props){
     let {className,background, text} = props;
      return (
         <div className={`point ${className}`} style={{backgroundColor: `${background}`}}>
            <span>{text}</span>
         </div>
      )
 }