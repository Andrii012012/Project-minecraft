import React from "react";
import './PointRule.css';
import './PointRuleMediaStyle.css';
import Point from "../point/Point";

 export default function DescriptionPoint(props){
    let { title, description, pointRule, countItem = description.length, punishment = [], id = null } = props;
    const saveItem = [];
     for(let i = 0; i < countItem; i++){
        saveItem.push(
            <li key={i} className='item-description'>
                <Point text={pointRule[i]}/>
                <p>{description[i]}</p>
                {punishment[i] &&  <strong className='info-about-punishment'><span>Наказание:</span>{punishment[i]}</strong>}
            </li>
        );
     }
    return (
        <ul className='section-point' id={id && `${id}`}>
            <li className='section-point__title title-section'>{title}</li>
            {saveItem}
        </ul>
    )
 }