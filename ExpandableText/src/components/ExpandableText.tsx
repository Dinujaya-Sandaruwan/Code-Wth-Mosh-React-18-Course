import { useState } from "react";

interface Props {
	children: string;
	maxCharsProp?: number;
}

let changer = 0;

const ExpandableText = ({ children, maxCharsProp = 100 }: Props) => {
	const [maxChars, setMaxchars] = useState(maxCharsProp);
	const [btnText, setBtnText] = useState("More");
	const fullLength = () => {
		if (changer % 2 === 0) {
			setMaxchars(800);
			changer++;
			setBtnText("Less");
		} else {
			setMaxchars(maxCharsProp);
			changer++;
			setBtnText("More");
		}
	};
	return (
		<>
			<span>{children.slice(0, maxChars)}</span>
			<button onClick={fullLength}>{btnText}</button>
		</>
	);
};

export default ExpandableText;
