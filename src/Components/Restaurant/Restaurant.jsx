// import './Restaurant.scss'

import React, { useEffect, useState, setState } from "react";

import axios from 'axios';

export const Restaurant = () => {
const [rests] = useState([])
	
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
		})			
		.catch(function (error) {
			console.error(error);
		});
	}, []);

	return (
	<div>
			<h2>Here must be a restaurant</h2>
				<ul>
 						{rests.map(rest =>
									<li key={rest.restaurantsId}>{rest.name}</li>
								)
						}
					</ul>		
		</div>
	)
};

    
