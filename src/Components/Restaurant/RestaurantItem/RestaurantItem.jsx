import { Card } from 'react-bootstrap';

export const RestaurantItem = ({ name, establishmentTypeAndCuisineTags, body, averageRating, locationId, menuUrl}) => (
  <Card className="mb-4" role="button">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{establishmentTypeAndCuisineTags}</Card.Text>
			<Card.Text>
        {body}
			</Card.Text>
			<Card.Text>{averageRating}</Card.Text>
			<Card.Text>{locationId}</Card.Text>
			<Card.Text>{menuUrl}</Card.Text>
        
        
    </Card.Body>
  </Card>
);
	