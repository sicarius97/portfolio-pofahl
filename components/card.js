const Card = ({ key, projectTitle }) => {
	return (
		<div>
			<div>{projectTitle}</div>
			<div>{key}</div>
		</div>
	);
};

export default Card;
