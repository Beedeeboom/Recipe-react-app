import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from "./Recipe"

const App = () => {
  
  const APP_ID = "4c727b68";
  const APP_KEY = "a1a40710ac4b9495fe71f8b6c7653a85";

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  
  return (
    <div className="App">
      <img className="header" src={process.env.PUBLIC_URL + '/recipe-background.jpg'}/>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Search recipe..." />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          instructions={recipe.recipe.url}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
