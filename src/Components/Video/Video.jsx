import './Video.scss'
import Videos from '../../Datafiles/Video.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export const Video = () => {	

	return (
		<div className='video-section'>		
			<h2 className='video-section__title'>Відео</h2>		
			<div className='video-section__link'>
			<LazyLoadComponent >
				<iframe className='video-section__item' src='https://www.youtube.com/embed/tTEqV_wO54Q' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
					style={{
						backgroundImage: `url(https://i.ytimg.com/vi/tTEqV_wO54Q/maxresdefault.jpg)`,
						backgroundSize: 'contain',
						
									}}		
				></iframe>
			</LazyLoadComponent>
			</div>
			
			<Card.Link className='video-section__btn' href="/videos">Переглянути всі  &#10230;</Card.Link>			
		</div>
		
	)
}