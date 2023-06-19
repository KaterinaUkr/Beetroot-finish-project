import { Button, Card } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './Attractions.scss'

import Posts from '../../Datafiles/Attraction.json'
import { Link } from 'react-router-dom';

export const Attractions = () => {

	const settings = {
		dots: true,
		arrows: false,
		infinite: true,		
    speed: 500,
    slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,					
				}
			},
			{
				breakpoint: 768,
          settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			
			]
	}; 
	
	return (
		
		<div className='attraction'>		
			<h2 className='attraction__title'>Що подивитись</h2>
			<div className='attraction__text'>Харків – серце Слобожанщини, яке приваблює туристів своїми старовинними церквами, багатством монументальних бетонних споруд. На вулицях міста панує прагматична і водночас романтична атмосфера, що не залишить байдужим жодного шукача цікавих вражень.<br />
				Площа Свободи закладена у 20 ст. після того, як Харків було оголошено столицею України. Її розмір дійсно вражає – на цілих 14 гектарах може поміститись населення середнього міста! З повітря площа виглядає ще більш монументально – від центральної частини концентрично розходяться квартали.<br />Будинок зі шпилем, розташований в самому центрі Харкова – яскравий взірець «сталінського ампіру». Споруда поєднує в собі декілька архітектурних стилів, зокрема арт-деко, пізнього класицизму та бароко. Вночі будівля підсвічується різними кольорами, завдяки чому нею можна милуватись годинами.<br />
				Особливо гарний Харків весною та влітку, коли на території міста працює безліч фонтанів. Одним із найоригінальніших є «Каскад», розташований в саду ім. Шевченка. Вода спускається по сходинкам на крутому схилі, а після підйому на оглядовий майданчик туристу відкривається мальовнича панорама.<br />
				У місті розташований один із найстаріших ботанічних садів України – імені Каразіна, закладений у 1804 р. одночасно із відкриттям університету.</div>
			<Slider {...settings}>
				{
					Posts.map(({ id, title, url }) => 
					<Link className='attraction__list' key={id} to={`/attractions/${id}`}>
					<li key={id} className='slick-wrapper attraction'>
						<Card className="bg-dark text-white attraction__post">
						<Card.Img src={url} alt="Card image" className='attraction__post__image'/>
						<Card.ImgOverlay>
							<div className='attraction__text-block'>
								<Card.Title className='attraction__text-block__title'>{title}</Card.Title>							
							</div>
							
							<div className='attraction__text-block__text-more'>
								
								<Card.Text href="#" className='attraction__text-block__text'>Подробиці</Card.Text>
								<Card.Text href="#" className='attraction__text-block__more'>&#10230;</Card.Text>
							</div>
							
						</Card.ImgOverlay>			
						</Card>
					</li>
					</Link>
				
			)}	

			</Slider>
			<Card.Link className='attraction__btn' href="/attractions">Переглянути всі  &#10230;</Card.Link>			
			</div>
		
		
	)
}