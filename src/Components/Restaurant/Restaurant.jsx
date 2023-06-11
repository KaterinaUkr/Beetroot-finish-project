// import './Restaurant.scss'

import React, { useEffect, useState } from "react";

import axios from 'axios';

// export const Blog = () => {
// 	const [BlogData, setBlogData] = useState([])

// 	useEffect(() => {
// 		axios('https://jsonplaceholder.typicode.com/posts').then(res => setBlogData(res.data))
// 	}, []);

// 	return <div className="blog">
// 			{BlogData.map(item => <Blogitem key={item.id} {...item}></Blogitem>)}
// 		</div>

// };

export const Restaurant = () => {
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

	axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
	});
	
return (
			<div>
				<h2>Here must be a restaurant</h2>
				{/* {Rests.length > 0 && ( */}
				{/* <ul> */}
					
						{Rests.map(item => (
							<li>Name:{item[1].name}</li>
						))}
					{/* </ul> */}
				{/* )} */}
			</div>
		);



}

// запрос через Rapidapi
// export const Restaurant = () => {
// 	const [Rests, setRestData] = useState([])
// 	const options = {
// 				method: 'GET',
// 				headers: {
// 					'X-RapidAPI-Key': 'c09e7890damsh665bf2a698decc9p18922cjsn8b4b6c5b6ec1',
// 					'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
// 				}	}
		
// 		useEffect(() => {
// 			fetch("https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=295369", options)
// 				.then(response => response.json())				
// 				.then(response => console.log(response.data.data))
// 				.catch(err => console.error(err))
// 		}, [])
		
			
// 		return (
// 			<div>
// 				<h2>Here must be a restaurant</h2>
// 				{/* {Rests.length > 0 && ( */}
// 				{/* <ul> */}
					
// 						{Rests.map(item => (
// 							<li>Name:{item[1].name}</li>
// 						))}
// 					{/* </ul> */}
// 				{/* )} */}
// 			</div>
// 		);
// 	}

    
