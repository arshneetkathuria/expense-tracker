import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {

    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaxValue = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => (
                    <ChartBar label={dataPoint.label} value={dataPoint.value} maxValue={totalMaxValue} key={dataPoint.label}/>
                ))
            }
            
    </div>  
  );

}

export default Chart;