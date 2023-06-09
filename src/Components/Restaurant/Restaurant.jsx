// import './Restaurant.scss'

import { useEffect, useState } from "react";

// import axios from 'axios';


export const Restaurant = () => {
	const [RestData, setRestData] = useState([])

	useEffect(() => {
		fetch('https://api.content.tripadvisor.com/api/v1/location/search?key=F681439A23C1408EA10FE6A1C6154C29&searchQuery=Kharkiv&category=restaurants&language=en')
			.then(res => res.json())
			.then(data => setRestData(data))
	}
	)
	
return (
		<div>
		 <h2>Here must be a restaurant</h2>
			<ul>
				{RestData.map(item => (
					<li key={item.location_id}>Name:{item.name}</li>
				))}
			</ul>
		</div>
  );
}

