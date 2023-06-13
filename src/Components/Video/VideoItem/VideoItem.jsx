import { Button, Card } from 'react-bootstrap'
import Videos from '../../../Datafiles/Video.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';

export const VideoItem = () => {	
	const { id } = useParams();
	
	let video = Videos.map(function(item) {
		return (		
		<li key={item.id}>
			<Card>
				<iframe width="640" height="360" src={item.url} title={item.title}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>				
			</Card>
		</li >	)	
   });
		
	return (
		<div>		
			<h2 className='attraction__title'>Відео</h2>
			<div>
				{video[id-1]}
			</div>
							
			<Button href="#" variant="secondary">Повернутись</Button>
				
		</div>		

	)}
		