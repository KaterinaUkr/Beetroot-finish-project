// import './Restaurant.scss'
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap'

import React, { useEffect, useState, } from "react";

import axios from 'axios';


export const Restaurant = () => {
	const [rests, setRests] = useState([]);
	const [filtered, setFiltered] = useState(rests)
	
function restsFilter(establishmentTypeAndCuisineTags) {
	if (establishmentTypeAndCuisineTags === 'all') {
		setFiltered(rests)
	} else {
		let newRests = [...rests].filter(rest => rest.establishmentTypeAndCuisineTags.includes(establishmentTypeAndCuisineTags) )
		setFiltered(newRests)

	}
	console.log(filtered)
}

const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
		params: {
			locationId: '295369'
		},
		headers: {
			'X-RapidAPI-Key': 'c09e7890damsh665bf2a698decc9p18922cjsn8b4b6c5b6ec1',
			'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
		}
	};

	useEffect(() => {
		axios
		.request(options)				
			.then((response) => {			
				console.log(response.data.data.data);
				setRests(response.data.data.data);
		})			
		.catch(function (error) {
			console.error(error);
		});
	}, []);

	return (
	<div className='eat-block'>
			<h2 className='eat-block__title'>Де поїсти</h2>
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary" onClick={ ()=>restsFilter('All') }>Всі</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('Mediterranean') }>Середзерноморська</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('European') }>Європейська</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('Italian') }>Італійська</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('Ukrainian') }>Українська</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('Japanese') }>Японська</Button>
				<Button variant="secondary" onClick={ ()=>restsFilter('French') }>Французька</Button>
			</ButtonGroup>
				<ul>
 						{filtered.map(rest => (								
								<li key={rest.restaurantsId}>
									<Card style={{ width: '18rem' }} className="bg-dark text-white attraction__post">
									<Card.Img src={rest.heroImgUrl} alt="Card image" className='attraction__post__image'/>
									<Card.Body>
										<Card.Title>{rest.name}</Card.Title>										
									</Card.Body>
									<ListGroup className="list-group-flush">
										<ListGroup.Item>Кухня{rest.establishmentTypeAndCuisineTags}</ListGroup.Item>
										<ListGroup.Item>Рейтинг{rest.averageRating}</ListGroup.Item>
									</ListGroup>
									</Card>
								</li>
								))
						}
					</ul>		
		</div>
	)
}; 


