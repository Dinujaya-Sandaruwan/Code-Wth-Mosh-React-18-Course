interface Props {
	type?: "primary" | "srcoundery";
	children: string;
	onClick: () => void;
}

const Buttons = ({ type = "primary", children, onClick }: Props) => {
	return (
		<>
			<button type="button" className={"btn btn-" + type} onClick={onClick}>
				{children}
			</button>
		</>
	);
};

export default Buttons;
