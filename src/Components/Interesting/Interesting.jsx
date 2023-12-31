import './Interesting.scss'
import { Card } from 'react-bootstrap';

export const Interesting = () => {
	return (
		<div className='interesting'>
			<h1 className='interesting__title'>Перекладач</h1>
			<div className='interesting__text'>
				У кожному місті є своя особливість, за якою можна одразу розпізнати корінного мешканця.
				Говорять, що харків'ян, як і одеситів, легко впізнати за специфічними словами, які вживають мешканці Першої столиці. Про особливу говірку харків'ян знають усі гості міста.
				Дійсно, тільки харків'янин зрозуміє "зустрінемось під градусником", "зустрінемось на стекляшке". Мешканців Харківщини не дивують слова "тремпель" та "ампулка".				
				Тож, якщо хочешь більше дізнатися про харківський сленг та відчути дух міста, запрошую...
			</div>
			<Card.Link className='interesting__btn' href="/interesting">Переглянути  &#10230;</Card.Link>
		</div>
		
	)
}