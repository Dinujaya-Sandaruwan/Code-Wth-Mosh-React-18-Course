import { useState } from "react";
import "./App.css";
import produce from "immer";

function App() {
	const [cart, setCart] = useState({
		discount: 0.1,
		items: [
			{ id: 1, title: "Product 01", quantity: 1 },
			{ id: 2, title: "Product 02", quantity: 1 },
		],
	});
	const handleClick = () => {
		setCart({
			...cart,
			items: cart.items.map((item) =>
				item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
			),
		});
	};

	return (
		<div className="App">
			<h1>{cart.items[0].quantity}</h1>
			<button onClick={handleClick}> Click Me</button>
		</div>
	);
}

export default App;
