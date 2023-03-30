import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface User {
	id: number;
	name: string;
}
function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [err, setErr] = useState("");

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await axios.get<User[]>(
					"https://jsonplaceholder.typicode.com/users"
				);
			} catch (err) {
				setErr((err as AxiosError).msg);
			}
		};
		fetchUsers();
	}, []);

	return (
		<div className="container">
			{err && <p className="text-danger">{err}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
