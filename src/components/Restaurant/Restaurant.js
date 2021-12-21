import React, { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] =useState([]);

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res=>res.json())
        .then(data=> setMeals(data.meals))
    },[searchText]);
    const handleSearchField=event =>{
        const searchTextField = event.target.value;
        setSearchText(searchTextField);
    }
    return (
        <div>
            <input onChange={handleSearchField} type="text" placeholder='Search Meals Here' className='rounded w-75 border-1 p-2 my-5 bg-light text-secondary'/> 
            <h1>Total Meals Found: {meals.length}</h1>
            <Row xs={1} md={3} className="g-4 p-3">
                {
                    meals.map(meal=> <Meals key={meal.idMeal} meal={meal}></Meals>)
                }
            </Row>
                
        </div>
    );
};

export default Restaurant;