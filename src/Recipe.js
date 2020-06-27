import React from "react";
import './App.css'

const Recipe = ({ title,image,ingredients,instructions }) => {
    return(
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt="" />
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => (
                    <li className="ingredients">{ingredient.text}</li>
                ))}
            </ul>
            <button className="search-button" type="submit"><a target="_blank" href={instructions}>View Instructions</a></button>
        </div>
    )
}

export default Recipe