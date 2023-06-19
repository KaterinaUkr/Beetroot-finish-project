import { Container } from 'react-bootstrap';
import './ContentWrap.scss'

export const ContentWrap = ({ children }) => {
	return (<Container className='pt-4 pb-4 contentWrap'>{children}</Container>);
	// return (<div>{children}</div>)
};