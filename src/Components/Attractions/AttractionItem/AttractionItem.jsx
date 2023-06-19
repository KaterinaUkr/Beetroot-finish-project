import './AttractionItem.scss'

import { Button, Card } from 'react-bootstrap'
import Posts from '../../../Datafiles/Attraction.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { ContentWrap } from '../../Main/ContentWrap';

export const AttractionItem = () => {
	// const [attractionData, setAttractionData] = useState([])
	const { id } = useParams();
	
	// useEffect(() => {
	// 	const getAttractionData = async () => {
	// 		const data = await axios(`../../../Datafiles/Attraction/{id}`).then(res => (res.data));			
	// 	}		
	// }, [id])

	let post = Posts.map(function(item) {
		return (		
			<ContentWrap >
				<div className="attraction-item">
			<li key={item.index} className='slick-wrapper list'>
					
				{/* <Card className="bg-dark text-white attraction__post"> */}
					<Card.Title className='attraction-item__title'>{item.title}</Card.Title>		
					<Card.Img src={item.url} alt="Card image" />
					
					<Card.Text href="#" className='attraction-item__text'>{item.content}</Card.Text>
				
				{/* </Card> */}
					</li >	
					</div>
		</ContentWrap>	)	
   });
	
	return (
		<div>					
			<div >
				{post[id-1]}
			</div>

			<div className='attraction-item__btn'>
				<Button className='attraction-item__btn__item'  href="/attractions" variant="outline-light">Повернутись</Button>
			</div>					
			
				
		</div>		

	)}
		