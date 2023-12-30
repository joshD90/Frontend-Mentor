import data from "./data.json" assert { type: "json" };

const chartDiv = document.getElementsByClassName("chart")[0];

data.forEach((dataPoint) => {
  const dataPointDiv = document.createElement("div");
  dataPointDiv.classList.add("spend-data-point");
  const dataPointColumn = document.createElement("div");
  const dataPointDay = document.createElement("span");
  dataPointDay.innerText = dataPoint.day;
  dataPointColumn.style.height = dataPoint.amount * 2.5 + "px";

  dataPointDiv.append(dataPointColumn);
  dataPointDiv.append(dataPointDay);
  chartDiv.append(dataPointDiv);
});
