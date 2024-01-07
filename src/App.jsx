import { v4 } from 'uuid';
import { cards } from './constants/cards';
import Card from './components/Card/Card';
import GridComponent from './components/GridComponent/GridComponent';

const App = () => {
	return cards.map(card => {
		return (
			<>
				<GridComponent>
					<Card
						key={card.id}
						link={card.img}
						cardName={card.cardName}
						cardVerified={card.cardVerified}
						cardOpinon={card.cardOpinon}
						cardDescription={card.cardDescription}
						$colorName={card.$colorName}
						$colorVerified={card.$colorVerified}
						$backgroundColor={card.$backgroundColor}
						$colorOpinion={card.$colorOpinion}
						$colorDescription={card.$colorDescription}
						$gridColumn={card.$gridColumn}
						$gridRow={card.$gridRow}
					></Card>
				</GridComponent>
			</>
		);
	});
};

export default App;
