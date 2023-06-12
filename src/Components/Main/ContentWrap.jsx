import { Container } from 'react-bootstrap';
// import './Main.scss'

export const ContentWrap = ({ children }) => {
	return (<Container className='pt-4 pb-4'>{children}</Container>);
	// return (<div>{children}</div>)
};