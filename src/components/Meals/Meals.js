import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';

const Meals = (props) => {
    const history = useHistory();
    console.log(props);
    const {idMeal, strMealThumb,strMeal, strCategory} = props.meal;
    const handleMeal = () =>{
        history.push(url);
    }
    const url = `/meal/${idMeal}`;
    return (
        <Col>
            <Card className='rounded'>
                <Card.Img variant="top" src={strMealThumb} className='img-fluid' />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strCategory}
                    </Card.Text>
                </Card.Body>
                <Link to = {url}>Go Details</Link>
                <Button onClick={handleMeal}>Details</Button>
        </Card>
        </Col>
    );
};

export default Meals;