import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";
import { AiFillCalculator } from "react-icons/ai";

interface ListItemProps {
	active: boolean;
}
const List = styled.ul`
	list-style: none;
	padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "blue" : "none")};
`;
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
			<List className="list-group" style={{ backgroundColor: "yellow" }}>
				{items.map((item, index) => (
					<>
						<AiFillCalculator color="red" size="40" />
						<ListItem
							active={index === selectedIndex}
							key={item}
							onClick={() => {
								setSelectrdIndex(index);
								onSelectItem(item);
							}}
						>
							{item}
						</ListItem>
					</>
				))}
			</List>
		</>
	);
}

export default ListGroup;
