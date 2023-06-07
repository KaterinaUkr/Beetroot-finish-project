import './Video.scss'
import Videos from '../../Datafiles/Video.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Video = () => {
	const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
	}; 

	return (
		<div className='video-section'>		
			<h2 className='video__title'>Here must be Video</h2>			
			<Slider {...settings}>
				{
				Videos.map(({ title, url }) => 
					<div>
						<iframe width="640" height="360" src={url} title={title}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>				
				</div>
			)}	

			</Slider>
			
		</div>
		
	)
}