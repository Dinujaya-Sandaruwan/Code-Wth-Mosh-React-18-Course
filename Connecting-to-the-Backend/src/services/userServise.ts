import create from "./httpService";

export interface User {
	id: number;
	name: string;
}

export default create("/users");
