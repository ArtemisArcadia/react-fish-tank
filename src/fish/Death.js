import React, { useEffect, useState } from "react";

const Death = (props) => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setVisible(false);
		}, props.delay);
	}, [props.delay]);

	return visible ? (
		<div>{props.children}</div>
	) : (
		<div> {props.name} has died</div>
	);
};

export default Death;
