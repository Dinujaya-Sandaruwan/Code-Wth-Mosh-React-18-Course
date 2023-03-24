import { useState } from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
const LikeBtn = () => {
	const [liked, setliked] = useState(false);
	const likedFnTrue = () => {
		setliked(true);
	};
	const likedFnFalse = () => {
		setliked(false);
	};
	return (
		<>
			{liked ? (
				<FcLike size="100" onClick={likedFnFalse} />
			) : (
				<FcLikePlaceholder size="100" onClick={likedFnTrue} />
			)}
		</>
	);
};

export default LikeBtn;
