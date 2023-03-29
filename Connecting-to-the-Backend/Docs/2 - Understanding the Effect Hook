import { useEffect, useRef, useState } from "react";

function App() {
	const ref = useRef<HTMLInputElement>(null);

	//Aftr Render
	useEffect(() => {
		//Side  Effect
		if (ref.current) ref.current.focus();
	});

	useEffect(() => {
		document.title = "My app";
	});

	return (
		<div className="App">
			<input ref={ref} type="text" className="form-control" />
		</div>
	);
}

export default App;
