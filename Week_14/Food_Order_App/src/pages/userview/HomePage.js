import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import categories from "../../categories";
import cuisines from "../../cuisines";
import restaurants from "../../restaurants";

const HomePage = () => {
  return (
    <>
      <Container fluid>
        {/* Displaying cuisine names and images */}
        <h4 className="p-3">Try new cuisine</h4>
        <Row>
          {cuisines.map(cuisine => (
            <Col key={cuisine.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <ItemCard item={cuisine} itemName="cuisine" />
            </Col>
          ))}
        </Row>
      </Container>
      
      <Container fluid>
        {/* Displaying category names and images */}
        <h4 className="p-3">Get inspiration for your order</h4>
        <Row>
          {categories.map(category => (
            <Col key={category.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <ItemCard item={category} itemName="category" />
            </Col>
          ))}
        </Row>
      </Container>
      
      <Container fluid>
        {/* Displaying restaurant names and images */}
        <h4 className="p-3">Available restaurants</h4>
        <Row>
          {restaurants.map(restaurant => (
            <Col key={restaurant.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <ItemCard item={restaurant} itemName="restaurant" />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
