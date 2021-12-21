import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Meal = () => {
    const {mealId} = useParams();
    const history = useHistory();
    const [meal, setMeal] = useState({});
    console.log(mealId);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setMeal(data.meals[0]))
    },[]);
    const handleClicked = ()=>{
        history.push('/restaurant');
    }
    return (
        <Card className='mx-auto m-5 w-75'>
            <Card.Img variant="top" src={meal.strMealThumb} className='w-50 mx-auto' />
            <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Genre: {meal.strArea}</ListGroupItem>
                <ListGroupItem>Category: {meal.strCategory}</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
            <Card.Text>
                {meal.strInstructions}
            </Card.Text>
                <Button onClick={handleClicked}>Go to Menu</Button>
            </Card.Body>
        </Card>
    );
};

export default Meal;