import { Button, Card } from 'react-bootstrap'
import Posts from '../../../Datafiles/Attraction.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

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
		<li key={item.index}>
			<Card className="bg-dark text-white attraction__post">
				<Card.Img src={item.url} alt="Card image" />
				<Card.Title>{item.title}</Card.Title>
				<Card.Text href="#" className='attraction__text'>{item.content}</Card.Text>
				
			</Card>
		</li >	)	
   });
	
	return (
		<div>		
			<h2 className='attraction__title'>Що подивитись</h2>
			<div>
				{post[id-1]}
			</div>
							
			<Button href="#" variant="secondary">Повернутись</Button>
				
		</div>		

	)}
		