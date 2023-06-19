import './AllAttraction.scss'

import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Posts from '../../../Datafiles/Attraction.json'
import { ContentWrap } from '../../Main/ContentWrap'



export const AllAttraction = () => {

	return (
	<ContentWrap>
		<div className='all-attraction'>		
				<h2 className='all-attraction__title'>Що подивитись</h2>
				<div className='all-attraction__block'>
			{
					Posts.map(({ id, title, url }) => 
					<Link key={id} to={`/attractions/${id}`}>
						<li key={id} className='slick-wrapper list'>
							<Card className="bg-dark text-white all-attraction__post">
								<Card.Img src={url} alt="Card image" />
									<Card.ImgOverlay>
										<div className='attraction__text-block'><Card.Title>{title}</Card.Title></div>										
										<div className='all-attraction__text-block__text-more'>
											<Card.Text href="#" className='all-attraction__text'>Подробиці</Card.Text>
											<Card.Text href="#" className='all-attraction__more'>&#10230;</Card.Text>
										</div>
								</Card.ImgOverlay>
							</Card>
						</li>
					</Link>
						)}
				</div>
				
			<div className='all-attraction__btn'>
				<Button className='all-attraction__btn__item'  href="/" variant="outline-light">На головну</Button>
			</div>			
				
		</div>
	</ContentWrap>		
	)
}