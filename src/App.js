import "./App.css";
import React, { useState } from "react";
import Fish from "./fish/Fish";

import { v4 as uuidv4 } from "uuid";
/* Material UI imports */

import { Box, Button, Input } from "@material-ui/core";

const initialTank = [];

const App = () => {
	const [tank, setTank] = useState(initialTank);
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [lifespan, setLifespan] = useState("");
	const [species, setSpecies] = useState("");

	function handleChange(event) {
		switch (event.target.id) {
			case "name":
				setName(event.target.value);
				break;
			case "dob":
				setDob(event.target.value);
				break;
			case "lifespan":
				setLifespan(event.target.value);
				break;
			case "species":
				setSpecies(event.target.value);
				break;
			default:
				return;
		}
	}

	function handleAdd() {
		const newTank = tank.concat({
			fish: (
				<Fish name={name} dob={dob} lifespan={lifespan} species={species} />
			),
			id: uuidv4(),
		});

		setTank(newTank);
	}
	return (
		<Box>
			<Input
				id="name"
				type="text"
				value={name}
				placeholder="name"
				onChange={handleChange}
			/>
			<Input
				id="dob"
				type="text"
				value={dob}
				placeholder="date of birth"
				onChange={handleChange}
			/>
			<Input
				id="lifespan"
				type="text"
				value={lifespan}
				placeholder="lifespan in years"
				onChange={handleChange}
			/>
			<Input
				id="species"
				type="text"
				value={species}
				placeholder="species"
				onChange={handleChange}
			/>
			<Button type="submit" onClick={handleAdd}>
				{" "}
				Add Fish
			</Button>
			<ul>
				{tank.map((fish) => (
					<li key={fish.id}>{fish.fish}</li>
				))}
			</ul>
		</Box>
	);
};

export default App;
