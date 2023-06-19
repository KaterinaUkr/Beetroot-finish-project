import './Video.scss'
import Videos from '../../Datafiles/Video.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

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
			<h2 className='video-section__title'>Відео</h2>		
			<LazyLoadComponent >
				<iframe width="720" height="405" src='https://www.youtube.com/embed/tTEqV_wO54Q' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
					style={{
						backgroundImage: `url(https://i.ytimg.com/vi/tTEqV_wO54Q/maxresdefault.jpg)`,
						backgroundSize: 'contain',
						width: "854px",
						height: "480px"
									}}		
				></iframe>
			</LazyLoadComponent>
			{/* працює, але видає помилки  */}
			{/* <Slider {...settings}>
				{
					Videos.map(({ id, title, url }) =>
					<li key={id}>
						<Card className='video-section__post'>
							<iframe width="390" height="225" src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						</Card>
					</li>
					
			)}

			</Slider> */}
			<Card.Link className='video-section__btn' href="/videos">Переглянути всі  &#10230;</Card.Link>			
		</div>
		
	)
}