import './Restmain.scss'
import { Card } from "react-bootstrap"

export const Restmain = () => {
	return (
		<div className='rest'>
			<h1 className='rest__title'>Де поїсти</h1>
			<div className='rest__text'>
				Якщо ви вирушаєте до Харкова та не знаєте, в якому цікавому ресторані чи кафе можна перекусити чи влаштувати романтичну вечерю для двох, пропонуємо ознайомитись з нашою добіркою найкращих закладів Харкова, де можна смачно та недорого поїсти.
			</div>
			<Card.Link className='rest__btn' href="/rest">Переглянути  &#10230;</Card.Link>
		</div>
		
	)
}