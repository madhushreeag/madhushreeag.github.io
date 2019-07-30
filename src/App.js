import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"
import DropDownMenu from "./Components/dropDownMenu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SimpleBarChart from './Components/SimpleBarChart';
import SimplePieChart from './Components/SimplePieChart';

var today = new Date()
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: today - 1000 * 60 * 60 * 24 * 1,
            endDate: today - 1000 * 60 * 60 * 24 * 30
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
    render() {
        return (
            <div className="Dashboard">
<div className = "App-header">
    Dashboard
</div>
            <div className="map-container">
                <div className="barButtonGroup">
                    <div className="StateChart">
                        <span className="TopFilterLabel">Filter &nbsp; </span>
                        State:&nbsp;&nbsp;&nbsp;&nbsp; <DropDownMenu />
                        <span > &nbsp;&nbsp;&nbsp;&nbsp;</span>
                        Period:&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className = "DatePicker">
                            <label className = "DatePicker1">
                            <FontAwesomeIcon icon={faCalendarAlt} className="calendarIcon"/>
                            <DatePicker
                                className="DateText"
                                selected={this.state.startDate}
                                onSelect={this.handleSelect} //when day is clicked
                                onChange={this.handleChange} //only when value has changed
                            />
                        </label>
                            &nbsp;&nbsp;&nbsp;&nbsp; To:&nbsp;&nbsp;&nbsp;&nbsp;
                        <label className = "DatePicker1">
                            <FontAwesomeIcon icon={faCalendarAlt} className="calendarIcon"/>
                            <DatePicker
                                className="DateText"
                                selected={this.state.endDate}
                                onSelect={this.handleSelect} //when day is clicked
                                onChange={this.handleChangeEnd} //only when value has changed
                            />
                        </label>
                        </div>
                    </div>
                </div>
                <ComposableMap
                    projectionConfig={{ scale: 35 }}
                    width={30}
                    height={20}
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <ZoomableGroup center={[ 80, 24]} disablePanning>
                        <Geographies  geography='./gadm36_IND.json'>
                            {(geographies, projection) =>
                                geographies.map((geography, i) =>
                                <Geography
                                key={i}
                                data-tip={geography.properties.name}
                                geography={geography}
                                projection={projection}
                                style={{
                                default: {
                                    fill: "#ECEFF1",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.05,
                                    outline: "none",
                                },
                                hover: {
                                    fill: "#8884d8",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.07,
                                    outline: "none",
                                },
                                pressed: {
                                    fill: "#8884d8",
                                    stroke: "#607D8B",
                                    strokeWidth: 0.07,
                                    outline: "none",
                                }
                            }}
                                />
                                )
                            }
                        </ Geographies>
                    </ ZoomableGroup>
                </ ComposableMap>
            </div>
                <div className="chart1">
                    <div className="chartContainer">
                        <h3> Total Collection </h3>
                        <SimpleBarChart/>
                    </div>

                    <div className="chartContainer">
                        <h3> Route Performance </h3>
                        <SimpleBarChart/>
                    </div>
                </div>
                <div className="chart1">
                    <div className="chartContainer">
                        <h3> Total Violation </h3>
                        <SimplePieChart/>
                    </div>

                    <div className="chartContainer">
                        <h3> Top 3 Performance </h3>
                        <SimpleBarChart/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
