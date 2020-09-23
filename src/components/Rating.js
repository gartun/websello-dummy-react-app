import React from 'react';
import {IoIosStar, IoIosStarOutline} from "react-icons/io";

const Rating = ({ rating, cont,id }) => {
    
    return (
        <div className="rating">
            {
            rating >= 1 ? <IoIosStar onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:1}})}/> : <IoIosStarOutline onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:1}})}/>
            }
            {
            rating >= 2 ? <IoIosStar onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:2}})}/> : <IoIosStarOutline onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:2}})}/>
            }
            {
            rating >= 3 ? <IoIosStar onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:3}})}/> : <IoIosStarOutline onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:3}})}/>
            }
            {
            rating >= 4 ? <IoIosStar onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:4}})}/> : <IoIosStarOutline onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:4}})}/>
            }
            {
            rating >= 5 ? <IoIosStar onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:5}})} /> : <IoIosStarOutline onClick = {() => cont.ListChange({type:"rateit", payload:{id, num:5}})} />
            }
        </div>
    )
}

export default React.memo(Rating);
