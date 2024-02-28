import React from "react";

// Style
import classStyles from "./index.module.css";

const ButtonLink = (props) => {
	const { class_name, children } = props;

	return (
		<>
			<div
				className={`${class_name} ${classStyles.ButtonLink}`}
				{...props}
			>
				{children}
			</div>
		</>
	);
};

export default ButtonLink;
