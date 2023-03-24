interface Props {
	children: string;
	removeAlet: () => void;
}

const Alet = ({ children, removeAlet }: Props) => {
	return (
		<div
			className="alert alert-warning alert-dismissible fade show"
			role="alert"
		>
			{children}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"
				onClick={removeAlet}
			></button>
		</div>
	);
};

export default Alet;
