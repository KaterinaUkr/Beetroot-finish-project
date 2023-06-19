import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Header.scss'

export const Header = () => {
	const navigate = useNavigate();

	const navigateHandler = (event, to) => {
		event.preventDefault();
		navigate(to)
	}
	return (
	<Navbar className='header-menu' collapseOnSelect expand='md'>
		<Container >
			{/* <Container>
					<Navbar.Brand href="/" alt="logo">loigo</Navbar.Brand>
			</Container> */}
				<Navbar.Brand href="/"><img className='header-menu__logo' src="/images/logo.png" alt="logo" /></Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' className='bg-light'/>				
				<Navbar.Collapse id='responsive-navbar-nav ' className='fixed'>
						<Nav className="me-auto  header-menu__nav">
						<Nav.Link className='header-menu__nav__item' onClick={(event) => navigateHandler(event, '/')}>Головна</Nav.Link>
						<Nav.Link className='header-menu__nav__item' onClick={(event) => navigateHandler(event, '/attractions')}>Що подивитись</Nav.Link>
						<Nav.Link className='header-menu__nav__item' onClick={(event) => navigateHandler(event, '/videos')}>Відео</Nav.Link>
						<Nav.Link className='header-menu__nav__item' onClick={(event) => navigateHandler(event, '/rest')}>Де поїсти</Nav.Link>  
						<Nav.Link className='header-menu__nav__item' onClick={(event) => navigateHandler(event, '/interesting')}>Перекладач</Nav.Link>
						</Nav>
				</Navbar.Collapse>
				
			
		</Container>
	</Navbar>
	)
}
	