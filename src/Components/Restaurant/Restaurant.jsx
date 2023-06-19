import './Restaurant.scss'
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useEffect, useState, } from "react";

import axios from 'axios';
import { ContentWrap } from '../Main/ContentWrap';


export const Restaurant = () => {
	const [rests, setRests] = useState([]);	
	const [filtered, setFiltered] = useState(rests)
	
function restsFilter(establishmentTypeAndCuisineTags) {
	if (establishmentTypeAndCuisineTags === 'All') {
		setFiltered(rests)
	} else {
		let newRests = [...rests].filter(rest => rest.establishmentTypeAndCuisineTags.includes(establishmentTypeAndCuisineTags) )
		setFiltered(newRests)
	}

	console.log(filtered)
}
	
	useEffect(() => {
		setFiltered(rests)
	}, [rests])

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
				console.log(response.data.data);			
				setRests(response.data.data.data);
		})			
		.catch(function (error) {
			console.error(error);
		});
	}, []);

	return (
		<div >
			<ContentWrap>
			<div className='eat-block'>
			<h2 className='eat-block__title'>Де поїсти</h2>
			<ButtonGroup aria-label="Basic example" className='eat-block__btn'>
				<Button variant="outline-light"  onClick={ ()=>restsFilter('All') } className='eat-block__btn__item'>Всі</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('Mediterranean') } className='eat-block__btn__item'>Середзерноморська</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('European') } className='eat-block__btn__item'>Європейська</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('Italian') } className='eat-block__btn__item'>Італійська</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('Ukrainian') } className='eat-block__btn__item'>Українська</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('Japanese') } className='eat-block__btn__item'>Японська</Button>
				<Button variant="outline-light" onClick={ ()=>restsFilter('French') } className='eat-block__btn__item'>Французька</Button>
			</ButtonGroup>
				<ul className='eat-block__list'>
 						{filtered.map(rest => (								
								<li key={rest.restaurantsId} className='eat-block__item'>
									<Card style={{ width: '18rem' }} className="bg-dark text-white eat-block__post">
									<Card.Img src={rest.heroImgUrl} alt="Card image" className='eat-block__image'/>
									<Card.Body>
										<Card.Title>{rest.name}</Card.Title>										
									</Card.Body>
									<ListGroup className="list-group-flush">
										<ListGroup.Item>Кухня: {rest.establishmentTypeAndCuisineTags[0]}, {rest.establishmentTypeAndCuisineTags[1]}</ListGroup.Item>
										<ListGroup.Item>Рейтинг: {rest.averageRating}</ListGroup.Item>
									</ListGroup>
									</Card>
								</li>
								))
						}
			</ul>		
			</div>	
			<div className='eat-block__btn'>
				<Button className='eat-block__btn__item'  href="/" variant="outline-light">На головну</Button>
			</div>	
			</ContentWrap>	
		</div>
	)
}; 


