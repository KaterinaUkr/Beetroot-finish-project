import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Posts from '../../../Datafiles/Attraction.json'
import { ContentWrap } from '../../Main/ContentWrap'


export const AllAttraction = () => {

	return (
	<ContentWrap>
		<div className='attraction'>		
			<h2 className='attraction__title'>Що подивитись</h2>
			{
					Posts.map(({ id, title, url }) => 
					<Link key={id} to={`/attractions/${id}`}>
						<li key={id}>
							<Card className="bg-dark text-white attraction__post">
								<Card.Img src={url} alt="Card image" />
								<Card.ImgOverlay>
										<Card.Title>{title}</Card.Title>
										<div className='attraction__text-more'>
											<Card.Text href="#" className='attraction__text'>Подробиці</Card.Text>
											<Card.Text href="#" className='attraction__more'>&#10230;</Card.Text>
										</div>
								</Card.ImgOverlay>
							</Card>
						</li>
					</Link>
				)}
			
			<Button href="/" variant="secondary">На головну</Button>
				
		</div>
	</ContentWrap>		
	)
}