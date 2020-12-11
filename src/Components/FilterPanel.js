import React from "react";
import "../utils/FilterPanel.css";
import FilterLandingPanel from "./FilterLandingPanel";
import FilterLaunchPanel from "./FilterLaunchPanel";
import FilterYearPanel from "./FilterYearPanel";

function FilterPanel() {
	return (
		<div className="filterPanel">
			<div className="filter__header">
				<h4 className="filter__title">Filters</h4>
			</div>
			<div className="filter__launchYear">
				<FilterYearPanel />
			</div>
			<div className="filter__launchYear">
				<FilterLaunchPanel />
			</div>
			<div className="filter__landingYear">
				<FilterLandingPanel />
			</div>
		</div>
	);
}

export default FilterPanel;
