import { useState } from "react";
import "./styles/index.scss";

let bugsList = [
	{
		id: 1,
		title: "Windows Blue Screen Error",
		author: "Chehan Sachith",
		fixed: true,
	},
	{
		id: 2,
		title: "Can't use Sinhala fonts in MS word",
		author: "Chenuka Hasith",
		fixed: true,
	},
	{
		id: 3,
		title: "Error message when connecting linux terminal via SSH",
		author: "Heshani Mahinsala",
		fixed: true,
	},
	{
		id: 4,
		title: "Infinite loop in React component",
		author: "Dineth Siriwardhana",
		fixed: true,
	},
	{
		id: 5,
		title: "Server-side rendering issue with Next.js",
		author: "Senath Methsuka",
		fixed: true,
	},
	{
		id: 6,
		title: "Crash in production when using Docker",
		author: "Anu Gamage",
		fixed: true,
	},
	{
		id: 7,
		title: "Authentication bug with OAuth2 flow",
		author: "Damsara Bandara",
		fixed: true,
	},
	{
		id: 8,
		title: "CSS grid not rendering properly in Firefox",
		author: "Hasitha Sandeepa",
		fixed: true,
	},
	{
		id: 9,
		title: "Memory leak in Node.js server",
		author: "Chehan Sachith",
		fixed: true,
	},
];

function App() {
	const [bugs, setBugs] = useState(bugsList);

	// Remove the first item in the `bugs` array
	const deleteBugs = () => {
		setBugs((prevBugs) => prevBugs.slice(1));
	};
	if (bugs.length !== 0) {
		return (
			<div className="app">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Other</th>
							<th>Bug</th>
						</tr>
					</thead>
					<tbody>
						{bugs.map(
							(bug) =>
								bug.fixed && (
									<tr key={bug.id}>
										<td>{bug.id}</td>
										<td className="name">{bug.author}</td>
										<td>{bug.title}</td>
									</tr>
								)
						)}
					</tbody>
				</table>

				<button onClick={deleteBugs}>Call Tech Support to fix your Bugs</button>
			</div>
		);
	} else {
		return <h1>Tech Support Fixed All Bugs ;)</h1>;
	}
}

export default App;
