import { Button, Card } from 'react-bootstrap'
import './Attractions.scss'

import Posts from '../../Datafiles/Attraction.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Attractions = () => {

	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
	}; 
	
	return (
		
		<div className='attraction'>		
			<h2 className='attraction__title'>Що подивитись</h2>
			<Slider {...settings}>
				{
					Posts.map(({ id, title, url }) => 
					<li key={id}>
						<Card className="bg-dark text-white attraction__post">
						<Card.Img src={url} alt="Card image" className='attraction__image'/>
						<Card.ImgOverlay>
							<div className='attraction__text-block'>
								<Card.Title className='attraction__text-block__title'>{title}</Card.Title>							
							</div>
								<hr />
							<div className='attraction__text-more'>
								<Card.Text href="#" className='attraction__text'>Подробиці</Card.Text>
								<Card.Text href="#" className='attraction__more'>&#10230;</Card.Text>
							</div>
							
						</Card.ImgOverlay>			
						</Card>
					</li>
				
			)}	

			 </Slider>
			<Button href="#" variant="secondary">Показати всі</Button>
			</div>
		
		
	)
}