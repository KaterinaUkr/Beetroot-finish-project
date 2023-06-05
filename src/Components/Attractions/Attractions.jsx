import { Card } from 'react-bootstrap'
import './Attractions.scss'
import attraction1 from '../../../src/assets/images/Attraction_1.jpg';

export const Attractions = () => {
	return (
		<div className='attraction'>			
			<div className='attraction__post'>
				<img className='attraction__image' src={attraction1} alt="Card image" />
				<div className='attraction__text-block'>
					<h3 className='attraction__title'>Саржин Яр</h3>
					<hr />
					<div className='attraction__text-more'>
						<a className='attraction__text'>Подробиці</a>
						<a className='attraction__more'>&#10230;</a>
					</div>
					
				</div>
			</div>

			{/* <Card className="bg-dark text-white">
      <Card.Img className='attraction__image' src={attraction1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>        
        <Card.Text>View more</Card.Text>
      </Card.ImgOverlay>
    </Card> */}
		</div>
		
	)
}