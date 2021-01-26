import React, { useState } from "react";
import Death from "./Death";
/*Material UI imports*/
import { Box, Card, Typography } from "@material-ui/core";
const Fish = ({ name, species, dob, lifespan }) => {
	const [fishName, setFishName] = useState(name);
	const [fishSpecies, setFishSpecies] = useState(species);
	const [fishDob, setFishDob] = useState(dob.toDateString());
	const [fishLifespan, setFishLifespan] = useState(lifespan);
	var deathTimer = lifespan;

	return (
		<Death delay={deathTimer * 1000} name={fishName}>
			<Box class="fish" textAlign="left">
				<Typography className="fish-text"> Name : {fishName}</Typography>
				<Typography className="fish-text"> Species : {fishSpecies}</Typography>
				<Typography className="fish-text">
					{" "}
					Date of Birth : {fishDob}
				</Typography>
				<Typography className="fish-text">
					{" "}
					Lifespan : {fishLifespan} Years
				</Typography>
			</Box>
		</Death>
	);
};

export default Fish;
