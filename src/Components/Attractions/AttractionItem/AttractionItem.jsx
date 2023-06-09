import { Button, Card } from 'react-bootstrap'
import Posts from '../../../Datafiles/Attraction.json'


export const AttractionItem = ({ title, url, content }) => {
	return (
		<div>		
			<h2 className='attraction__title'>Що подивитись</h2>
				<Card className="bg-dark text-white attraction__post">
					<Card.Img src={url} alt="Card image" />						
					<Card.Title>{title}</Card.Title>								
					<Card.Text href="#" className='attraction__text'>{content}</Card.Text>
				</Card>				
				
			<Button href="#" variant="secondary">Повернутись</Button>
				
		</div>		

	)}
		