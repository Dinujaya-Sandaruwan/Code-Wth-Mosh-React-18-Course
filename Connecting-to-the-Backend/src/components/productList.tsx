import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
	const [products, setProducts] = useState<string[]>([]);

	const connect = () => console.log("Connecting");
	const disconnect = () => console.log("disConnecting");
	useEffect(() => {
		console.log("Fetching Products in", category);
		setProducts(["Clothing", "Household"]);
		connect();

		return () => disconnect();
	}, [category]);
	return <div>List</div>;
};

export default ProductList;
