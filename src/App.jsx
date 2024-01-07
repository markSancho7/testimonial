import { cards } from './constants/cards';
import Card from './components/Card/Card';
import GridComponent from './components/GridComponent/GridComponent';

const App = () => {
	return (
		<GridComponent>
			{cards.map(card => {
				return <Card key={card.id} {...card}></Card>;
			})}
			;
		</GridComponent>
	);
};

export default App;
