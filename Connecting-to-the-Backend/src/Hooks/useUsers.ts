import { useEffect, useState } from "react";
import userServise, { User } from "../services/userServise";
import { CanceledError } from "../services/apiClient";

const useUsers = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [err, setErr] = useState("");
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = userServise.getAll<User>();
		request
			.then((res) => {
				setUsers(res.data);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return; // need to import
				setErr(err.message);
				setLoading(false);
			});
		// .finally(() => setLoading(false)); // Doesn't Work on Strike Mode

		return () => cancel();
	}, []);

	return { users, err, isLoading, setUsers, setErr };
};

export default useUsers;
