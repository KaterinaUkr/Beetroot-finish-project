import './AllVideo.scss'
import Videos from '../../../Datafiles/Video.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';
import { ContentWrap } from '../../Main/ContentWrap';

export const AllVideo = () => {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
	}; 

	return (
		<div className='all-video'>
		<ContentWrap>
			<h2 className='all-video__title'>Відео про Харків</h2>
			<div className='all-video__link'>
			<Slider {...settings}>
				{
				Videos.map(({ id, title, url }) =>
					
					<li key={id} className='all-video__item'>
						<Card>
							<iframe width="390" height="225" src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
						</Card>
					</li>
					
						)}
					</Slider >
				</div>
				<div className='all-video__btn'>
					<Button className='all-video__btn__item' href="/" variant="outline-light">На головну</Button>
				</div>
	</ContentWrap>
		 </div>
		
	)
}

	