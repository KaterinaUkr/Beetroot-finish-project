import { Container } from 'react-bootstrap';
import { Fullscreen } from '../Fullscreen/Fullscreen';
import { Attractions } from '../Attractions/Attractions';
import { Video } from '../Video/Video';
import { Interesting } from '../Interesting/Interesting';
import { ContentWrap } from './ContentWrap';
// import './Main.scss'

export const Main = () => {
	return (
		<>
			<Fullscreen></Fullscreen>
		<ContentWrap >
				
			<Attractions></Attractions> 
			<Video></Video>
			{/* <Restaurant></Restaurant> */}
			<Interesting></Interesting>    
		</ContentWrap>
		</>
	)
	
};