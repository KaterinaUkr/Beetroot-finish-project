import { Fullscreen } from '../Fullscreen/Fullscreen';
import { Attractions } from '../Attractions/Attractions';
import { Video } from '../Video/Video';
import { Interesting } from '../Interesting/Interesting';
import { ContentWrap } from './ContentWrap';
import { Restmain } from '../Restaurant/Restmain';

export const Main = () => {
	return (
		<>
			<Fullscreen></Fullscreen>
		<ContentWrap >
				
			<Attractions></Attractions> 
			<Video></Video>
			<Restmain></Restmain>
			<Interesting></Interesting>   
				
		</ContentWrap>
		</>
	)
	
};