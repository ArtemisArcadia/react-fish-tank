import React, { useEffect, useState } from "react";
import Death from "./Death";
/*Material UI imports*/
import { Box, Card, Typography } from "@material-ui/core";
const Fish = ({ name, species, dob, lifespan }) => {
	const [fishName, setFishName] = useState(name);
	const [fishSpecies, setFishSpecies] = useState(species);
	const [fishDob, setFishDob] = useState(dob);
	const [fishLifespan, setFishLifespan] = useState(lifespan);
	var deathTimer = lifespan;
	const secondsInAYear = 31556952;

	return (
		<Death delay={deathTimer * 1000} name={fishName}>
			<Box style={{ border: "red solid 2px" }}>
				<Typography> Name : {fishName}</Typography>
				<Typography> Species : {fishSpecies}</Typography>
				<Typography> Date of Birth : {fishDob}</Typography>
				<Typography> Lifespan : {fishLifespan}</Typography>
			</Box>
		</Death>
	);
};

export default Fish;
