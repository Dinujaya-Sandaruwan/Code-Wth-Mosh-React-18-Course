import ListGroup from "./components/ListGroup/";

const items = ["Heshani", "Teshani", "Gimhani", "Pabasara", "Hiruni"];

const handeleSelectItem = (item: string) => {
	console.log(item);
};

function App() {
	return (
		<div>
			<ListGroup
				items={items}
				heading="Girls"
				onSelectItem={handeleSelectItem}
			/>
		</div>
	);
}

export default App;
