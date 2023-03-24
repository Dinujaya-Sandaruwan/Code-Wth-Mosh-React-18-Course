import Alet from "./components/DismissAlet";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
	const [alet, setAlet] = useState(false);
	const showAlet = () => {
		setAlet(true);
	};
	const removeAlet = () => {
		setAlet(false);
	};
	return (
		<div>
			{alet && <Alet removeAlet={removeAlet}>Hello Heshani!</Alet>}
			<Buttons type="primary" onClick={showAlet}>
				Button
			</Buttons>
		</div>
	);
}

export default App;
