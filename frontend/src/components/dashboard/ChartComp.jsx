import { Chart } from "react-google-charts";

const data = [
  ["Language", "Speakers (in millions)"],
  ["Household", 5.85],
  ["Transportation", 1.66],
  ["Groceries", 0.4],
  ["Personal", 0.0791],
  ["Savings", 0.95],
  ["Other", 0.6],
];

const options = {
  pieSliceText: "label",
  pieStartAngle: 100,
  backgroundColor: '#142733',
  legend: "none",
  pieSliceTextStyle: {color: "#f8fdfe", fontSize: 22,  bold: true },
  slices: [{color: '#1f5fe0'}, {color: 'red'}, {color: "#D6B70A"}, {color: "purple"}, {color: 'green'},{color: "violet"} ]
};

function ChartComp(){


return(
 <Chart 
  chartType="PieChart"
  data={data}
  options={options}
  width={"100%"}
  height={"70vh"}
/>
)
}

export default ChartComp;

