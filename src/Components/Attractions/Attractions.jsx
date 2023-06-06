import { Card } from 'react-bootstrap'
import './Attractions.scss'
import attraction1 from '../../../src/assets/images/Attraction_1.jpg';
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
				Posts.map(({ title, url }) => 
				<div className='attraction__post'>
				<img className='attraction__image' src={url} alt="Card image" />
						<div className='attraction__text-block'>
							<h3 className='attraction__text-block__title'>{title}</h3>
						</div>
					<hr />
					<div className='attraction__text-more'>
						<a className='attraction__text'>Подробиці</a>
						<a className='attraction__more'>&#10230;</a>
					</div>
				</div>
			)}	

			 </Slider>
			
			</div>


			/* <div className='attraction__post'>
				<img className='attraction__image' src={attraction1} alt="Card image" />
				<div className='attraction__text-block'>
					{
						Posts.map(({ title }) => 
						<h3 className='attraction__title'>{title}</h3>)
					}
					
					<hr />
					<div className='attraction__text-more'>
						<a className='attraction__text'>Подробиці</a>
						<a className='attraction__more'>&#10230;</a>
					</div>
					
				</div>
			</div> */

			/* <Card className="bg-dark text-white">
      <Card.Img className='attraction__image' src={attraction1} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>        
        <Card.Text>View more</Card.Text>
      </Card.ImgOverlay>
    </Card> */
		// </div>
		
	)
}