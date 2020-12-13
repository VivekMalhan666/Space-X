import { Card, CardContent, CardMedia } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../utils/Cards.css";
import { useDataLayerValue } from "../StateManager/DataLayer";
import { actionTypes } from "../StateManager/reducer";
import { act } from "react-dom/test-utils";

function Cards() {
	const [{ missionData, filters, url }, dispatch] = useDataLayerValue();
	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				dispatch({
					type: actionTypes.SET_MISSION_DATA,
					missionData: data,
				});
			});
	}, [url]);

	useEffect(() => {
		let newUrl = "https://api.spaceXdata.com/v3/launches?limit=100";
		if (new Set(filters).size != 1) {
			if (filters[0]) {
				newUrl += `&launch_year=${filters[0]}`;
			}
			if (filters[1] == 1) {
				newUrl += `&launch_success=true`;
			}
			if (filters[1] == 2) {
				newUrl += `&launch_success=false`;
			}
			if (filters[2] == 1) {
				if (filters[1] != 1 && filters[1] != 2) {
					newUrl += `&launch_success=true&landing_success=true`;
				} else {
					newUrl += `&landing_success=true`;
				}
			}
			if (filters[2] == 2) {
				if (filters[1] != 1 && filters[1] != 2) {
					newUrl += `&launch_success=false&landing_success=false`;
				} else {
					newUrl += `&landing_success=false`;
				}
			}
		}
		dispatch({
			type: actionTypes.SET_URL,
			url: newUrl,
		});
	}, [filters]);

	return (
		<div className="card__container">
			{missionData.map((mission) => (
				<div className="card" key={mission.flight_number}>
					<img
						src={mission.links.mission_patch_small}
						className="card__image"
					/>
					<div className="card__content">
						<h4 className="card__title">
							{mission.mission_name} <span>#</span>
							{mission.flight_number}{" "}
						</h4>
						<div className="card__missionId">
							<h4 className="card__infoHeading">Mission Id:</h4>
							{mission.mission_id.length != 0 ? (
								mission.mission_id.map((mission_id) => (
									<ul className="mission__list">
										<li>{mission_id}</li>
									</ul>
								))
							) : (
								<ul className="mission__list">
									<li>No Data</li>
								</ul>
							)}
						</div>
						<div className="card__launchYear">
							<h4 className="card__infoHeading">
								Launch Year:
								<span className="launch_year"> {mission?.launch_year}</span>
							</h4>
						</div>

						<table className="card__successfulLaunch">
							<tbody>
								<tr style={{ padding: 0 }}>
									<td className="card__infoHeading">
										<h4 className="card__infoTitle">Successful Launch: </h4>
									</td>
									<td>
										<h4 className="launch_success">
											{mission?.launch_success ? " true" : " false"}
										</h4>
									</td>
								</tr>
							</tbody>
						</table>

						<table className="card__successfulLaunch">
							<tbody>
								<tr style={{ padding: 0 }}>
									<td className="card__infoHeading">
										<h4 className="card__infoTitle">Successful Landing: </h4>
									</td>
									<td>
										<h4 className="launch_success">
											{mission?.launch_success ? " true" : " false"}
										</h4>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			))}
		</div>
	);
}

export default Cards;
