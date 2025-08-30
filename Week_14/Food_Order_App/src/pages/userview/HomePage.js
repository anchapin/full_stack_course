import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying cuisine names and images */}
         <h4>Try New Cuisines</h4>
         {cuisines.map(cuisine=> (
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={cuisine.image} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
         ))}
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying category names and images */}
      </div>
      <div className="container-fluid">
        {/* Implement Task 1 - Displaying restaurant names and images */}
      </div>
    </>
  );
};

export default HomePage;
