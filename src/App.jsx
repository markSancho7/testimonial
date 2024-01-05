import { v4 } from 'uuid';
import { cards } from './constants/cards';
import Card from './components/Card/Card';

const App = () => {
	return cards.map(card => {
		return (
			<>
				<Card
					key={v4()}
					link={card.img}
					cardName={card.cardName}
					cardVerified={card.cardVerified}
					cardOpinon={card.cardOpinon}
					cardDescription={card.cardDescription}
					$backgroundColor={card.$backgroundColor}
				></Card>
			</>
		);
	});
};

export default App;
