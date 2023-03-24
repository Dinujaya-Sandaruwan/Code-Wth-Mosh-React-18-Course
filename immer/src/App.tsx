import { useState } from "react";
import "./App.css";
import produce from "immer";

function App() {
	const [bugs, setBugs] = useState([
		{ id: 1, title: "Bug 01", fixed: false },
		{ id: 2, title: "Bug 02", fixed: false },
	]);
	const handleClick = () => {
		setBugs(
			produce((draft) => {
				const bug = draft.find((bug) => bug.id === 1);
				if (bug) bug.fixed = true;
			})
		);
	};
	return (
		<div className="App">
			{bugs.map((bug) => (
				<p key={bug.id}>
					{bug.title} {bug.fixed ? "Fixed" : "New"}
				</p>
			))}
			<button onClick={handleClick}>Click Me</button>
		</div>
	);
}

export default App;
