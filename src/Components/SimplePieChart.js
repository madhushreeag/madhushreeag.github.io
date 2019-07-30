import React, {Component} from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import PieChart from 'recharts/lib/chart/PieChart';
import Pie from 'recharts/lib/polar/Pie';
import {isMobile} from "react-device-detect";

var ht = isMobile ? "70%" : "80%"

class SimplePieChart extends Component {
    render() {
        var data01 = [
            {
                "name": "Group A",
                "value": 400
            },
            {
                "name": "Group B",
                "value": 300
            },
            {
                "name": "Group C",
                "value": 300
            },
            {
                "name": "Group D",
                "value": 200
            },
            {
                "name": "Group E",
                "value": 278
            },
            {
                "name": "Group F",
                "value": 189
            }
        ];


        return (
            <ResponsiveContainer width="99%" height={ht}>
                <PieChart>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label/>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default SimplePieChart;