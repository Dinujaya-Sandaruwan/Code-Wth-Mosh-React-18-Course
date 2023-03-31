import { useEffect, useState } from "react";
import { CanceledError } from "./services/apiClient";
import userServise, { User } from "./services/userServise";
import useUsers from "./Hooks/useUsers";

function App() {
	const { users, err, isLoading, setUsers, setErr } = useUsers();

	const deleteUser = (user: User) => {
		const originalUsers = [...users];
		setUsers(users.filter((u) => u.id !== user.id));
		userServise.delete(user.id).catch((err) => {
			setErr(err.message);
			setUsers(originalUsers);
		});
	};

	const addUser = () => {
		const originalUsers = [...users];
		const newUser = { id: 0, name: "Heshani" };
		setUsers([newUser, ...users]);

		userServise
			.create(newUser)
			.then(({ data: saveUser }) => setUsers([saveUser, ...users]))
			.catch((err) => {
				setErr(err.message);
				setUsers(originalUsers);
			});
	};

	const updateUser = (user: User) => {
		const originalUsers = [...users];
		const updatedUser = { ...user, name: user.name + "!" };
		setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

		userServise.update(updatedUser).catch((err) => {
			setErr(err.message);
			setUsers(originalUsers);
		});
	};
	return (
		<div className="container">
			{err && <p className="text-danger">{err}</p>}
			{isLoading && <div className="spinner-border"></div>}
			<button className="btn btn-primary mb-3" onClick={addUser}>
				ADD
			</button>
			<ul className="list-group">
				{users.map((user) => (
					<li
						key={user.id}
						className="list-group-item d-flex justify-content-between"
					>
						{user.name}
						<div>
							<button
								className="btn btn-outline-secondary mx-2"
								onClick={() => updateUser(user)}
							>
								Update
							</button>
							<button
								className="btn btn-outline-danger"
								onClick={() => deleteUser(user)}
							>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
