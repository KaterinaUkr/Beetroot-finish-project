import './Video.scss'
import Videos from '../../Datafiles/Video.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';

export const Video = () => {
	const settings = {
		dots: true,
		arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true
	}; 

	return (
		<div className='video-section'>		
			<h2 className='video__title'>Відео</h2>			
			<iframe width="720" height="405" src='https://www.youtube.com/embed/tTEqV_wO54Q' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
			
			{/* працює, але видає помилки  */}
			{/* <Slider {...settings}>
				{
					Videos.map(({ id, title, url }) =>
					<li key={id}>
						<Card className='video__post'>
							<iframe width="390" height="225" src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						</Card>
					</li>
					
			)}

			</Slider> */}
			<Card.Link className='video__btn' href="/videos">Переглянути всі  &#10230;</Card.Link>			
		</div>
		
	)
}