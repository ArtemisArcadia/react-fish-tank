import "./App.css";
import React, { useEffect, useState } from "react";
import Fish from "./fish/Fish";

import Anime from "react-anime";
import fish from "./images/fish.png";
import fish2 from "./images/fish2.png";
import fish3 from "./images/fish3.png";
import fish4 from "./images/fish4.png";
import { v4 as uuidv4 } from "uuid";
/* Material UI imports */
import { makeStyles } from "@material-ui/core/styles";

import {
	AppBar,
	Box,
	Button,
	Divider,
	Grid,
	GridList,
	GridListTile,
	GridListTileBar,
	Input,
	IconButton,
	Paper,
	Toolbar,
	Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
/* Date Picker*/
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import logo from "./logo.svg";

const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
	},
	gridList: {
		padding: theme.spacing(1),
		textAlign: "center",

		whiteSpace: "nowrap",
		margin: theme.spacing(1),
		border: "2px solid black",
	},
	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		whiteSpace: "nowrap",
		marginBottom: theme.spacing(1),
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	root: {
		justifyContent: "space-around",
		overflow: "hidden",
		//	backgroundColor: "rgba(0, 0, 255, 0.3)",
		marginTop: "300px",
	},
}));

const initialTank = [];
const imgArr = [fish, fish2, fish3, fish4];
const App = () => {
	const classes = useStyles();

	const [tank, setTank] = useState(initialTank);

	const [formValues, setFormValues] = useState({
		name: "",
		dob: new Date(),
		lifespan: "",
		species: "",
	});
	const [image, setImage] = useState(getImage(imgArr));
	const [submitted, setSubmitted] = useState(false);

	function getImage(imgArr) {
		var num = Math.floor(Math.random() * imgArr.length);
		var img = imgArr[num];
		return img;
	}

	function handleChange(event) {
		switch (event.target.id) {
			case "name":
				setFormValues((formValues) => ({
					...formValues,
					name: event.target.value,
				}));
				console.log(formValues.name);
				break;
			case "dob":
				setFormValues((formValues) => ({
					...formValues,
					dob: event.target.value,
				}));
				console.log(formValues.dob);
				break;
			case "lifespan":
				setFormValues((formValues) => ({
					...formValues,
					lifespan: event.target.value,
				}));
				console.log(formValues.lifespan);
				break;
			case "species":
				setFormValues((formValues) => ({
					...formValues,
					species: event.target.value,
				}));
				console.log(formValues.species);
				break;
			default:
				return;
		}
	}

	function handleShowMoreInfo() {}

	function handleAdd(event) {
		event.preventDefault();
		if (
			formValues.name &&
			formValues.dob &&
			formValues.lifespan &&
			formValues.species
		) {
			setImage(getImage(imgArr));
			const newTank = tank.concat({
				fish: (
					<Box onClick={() => handleShowMoreInfo()}>
						<Grid container>
							<Grid item xs={12}>
								<Fish
									name={formValues.name}
									dob={formValues.dob}
									lifespan={formValues.lifespan}
									species={formValues.species}
								/>
							</Grid>
						</Grid>
					</Box>
				),
				id: uuidv4(),
				fishProps: formValues,
				image: image,
			});

			setTank((tank) => [...newTank]);
			console.log(tank);
		}
		setSubmitted(true);
	}

	function handleRemoveFish(event, id) {
		event.preventDefault();
		var removeIndex = tank
			.map(function (item) {
				return item.id;
			})
			.indexOf(id);

		const removedFish = tank.splice(removeIndex, 1);
		console.log(removedFish);

		setTank([...tank]);
	}

	const CustomTimeSelector = ({ value, onClick }) => (
		<Button
			variant="outlined"
			fullWidth
			color="primary"
			className="form-buton"
			onClick={onClick}
			value={value}
		>
			{value}
		</Button>
	);

	return (
		<Box style={{ backgroundColor: "blue" }}>
			<Box className="app" zIndex={0}>
				<AppBar className="app-header" position="fixed">
					<Toolbar>
						<img src={logo} className="app-logo" alt="logo" />
						<Typography className="app-header-text" variant="h3">
							The Aqua-React-arium
						</Typography>
					</Toolbar>
				</AppBar>{" "}
				<Box
					className="form-section"
					style={{ border: "1px solid transparent" }}
				>
					<Box className="form-wrapper">
						<form className="form">
							<Paper className="form-paper" elevation={6}>
								<Input
									defaultValue="Freddy"
									className="form-input"
									required
									label="Name"
									id="name"
									type="text"
									value={formValues.name}
									placeholder="Name"
									fullWidth
									onChange={(event) => handleChange(event)}
								/>
								{submitted && !formValues.name && (
									<span className="error">Please enter a name</span>
								)}
								<Box style={{ marginBottom: "20" }}>
									{" "}
									<Typography
										className="form-input"
										variant="caption"
										gutterBottom={true}
									>
										Date of Birth:{" "}
									</Typography>{" "}
									<DatePicker
										className="form-input"
										label="Dob"
										required
										id="dob"
										selected={formValues.dob}
										onChange={(date) =>
											setFormValues((formValues) => ({
												...formValues,
												dob: date,
											}))
										}
										customInput={<CustomTimeSelector />}
										fullWidth
									/>
								</Box>
								{submitted && !formValues.dob && (
									<span className="error">Please enter its Date of Birth</span>
								)}
								<Divider m={2} pt={2} />
								<Input
									defaultValue={10}
									className="form-input"
									required
									id="lifespan"
									type="number"
									value={formValues.lifespan}
									placeholder="Lifespan (in years)"
									fullWidth
									onChange={(event) => handleChange(event)}
								/>
								{submitted && !formValues.lifespan && (
									<span className="error">Lifespan cannot be 0</span>
								)}
								<Input
									defaultValue="tilapia"
									className="form-input"
									required
									id="species"
									type="text"
									value={formValues.species}
									placeholder="species"
									fullWidth
									onChange={(event) => handleChange(event)}
								/>
								{submitted && !formValues.species && (
									<span className="error">
										Please enter a species for your fish
									</span>
								)}
								<Button
									type="submit"
									onClick={(event) => handleAdd(event)}
									variant="contained"
									size="lg"
									className="form-button"
									fullWidth
									color="primary"
								>
									{" "}
									Add Fish
								</Button>{" "}
							</Paper>
						</form>
					</Box>
				</Box>
				<Box className={classes.root}>
					<GridList cellHeight={350} className={classes.gridList} cols={4}>
						{tank.map((fish) => (
							<GridListTile key={fish.img} cols={1}>
								<Anime
									keyframes={[
										{ translateX: -15, translateY: -10 },
										{ translateX: -30, translateY: 10 },
										{ translateX: -45, translateY: -10 },
										{ translateX: -60, translateY: 10 },
										{ rotateY: 180 },
										{ translateX: -45, translateY: -10 },
										{ translateX: -30, translateY: 10 },
										{ translateX: -15, translateY: -10 },
										{ translateX: 0, translateY: 10 },
										{ rotateY: 0 },
									]}
									duration={fish.fishProps.lifespan * 1000}
									easing="easeOutElastic(1,.8)"
									loop={false}
								>
									<img className="fish-pic" src={fish.image} alt="" />
								</Anime>
								<GridListTileBar
									style={{ height: "50%" }}
									title={fish.name}
									subtitle={<span className="fish-text">{fish.fish}</span>}
									actionIcon={
										<IconButton
											className={classes.icon}
											onClick={(event) => handleRemoveFish(event, fish.id)}
										>
											<CloseIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))}
					</GridList>
				</Box>
			</Box>
		</Box>
	);
};

export default App;
