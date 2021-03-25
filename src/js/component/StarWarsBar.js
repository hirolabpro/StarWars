import React, { useContext } from "react";
import { Dropdown, Container, DropdownButton, Navbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarWarsBar = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Navbar bg="transparent" expand="lg">
				<Link to="/">
					<Navbar.Brand href="#">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
							width="90"
							height="60"
							className="d-inline-block align-top"
						/>
					</Navbar.Brand>
				</Link>
				<Navbar.Collapse className="justify-content-end">
					<DropdownButton id="dropdown-basic-button" variant="warning" title={"Favorites "}>
						<Dropdown.Item>Favorites Empty</Dropdown.Item>{" "}
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
