import { useState } from "react";
import styles from "./ListGroup.module.css";

interface Props {
	items: string[];
	heading: string;
	// (item: string) => void
	onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
	// Hook
	const [selectedIndex, setSelectrdIndex] = useState(-1);

	// Event Handler
	const handleClick = (e: MouseEvent) => console.log(e);
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items Fount</p>}
			<ul className={[styles.listGroup, styles.container].join(" ")}>
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectrdIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
