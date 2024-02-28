import React from "react";
import { Input } from "antd";

const NumericInput = (props) => {
	const { value, onChange, style = {} } = props;

	const handleChange = (e) => {
		const { value: inputValue } = e.target;
		const reg = /^-?\d*(\.\d*)?$/;
		if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
			onChange(inputValue);
		}
	};

	// '.' at the end or only '-' in the input box.
	const handleBlur = () => {
		let valueTemp = value;
		if(value && value.charAt(value.length - 1) === "." || value === "-") {
			valueTemp = value.slice(0, -1);
		}
		onChange(value && valueTemp.replace(/0*(\d+)/, "$1") || '');
	};

	return (
		<Input
			{...props}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="Input a number"
			maxLength={16}
			style={style}
		/>
	);
};

export default NumericInput;
