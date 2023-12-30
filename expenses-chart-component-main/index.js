import data from "./data.json" assert { type: "json" };

const chartDiv = document.getElementsByClassName("chart")[0];
const indexOfMax = data.findIndex(
  (el) => el.amount === Math.max(...data.map((point) => point.amount))
);

data.forEach((dataPoint, index) => {
  const dataPointDiv = document.createElement("div");
  dataPointDiv.classList.add("spend-data-point");
  const dataPointColumn = document.createElement("div");
  const dataPointDay = document.createElement("span");
  dataPointDay.innerText = dataPoint.day;
  dataPointColumn.style.height = dataPoint.amount * 2.5 + "px";
  if (index === indexOfMax) dataPointColumn.classList.add("top-spend-day");

  dataPointDiv.append(dataPointColumn);
  dataPointDiv.append(dataPointDay);
  chartDiv.append(dataPointDiv);

  dataPointColumn.addEventListener("mouseenter", () => {
    const spendAmountSpan = document.createElement("span");
    spendAmountSpan.classList.add("spend-amount-span");
    spendAmountSpan.innerText = `€${dataPoint.amount}`;
    dataPointDiv.append(spendAmountSpan);
  });
  dataPointColumn.addEventListener("mouseleave", () => {
    const spendAmountSpan =
      document.getElementsByClassName("spend-amount-span")[0];
    spendAmountSpan.remove();
  });
});
