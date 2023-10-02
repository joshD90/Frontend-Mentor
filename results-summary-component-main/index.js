import data from "./data.json" assert { type: "json" };

const allSummarySegments = document.getElementsByClassName("summary-segment");
const scoreAverageP = document.querySelector("#score-average");

const getAverage = (dataArray) => {
  if (!dataArray || dataArray.length === 0) return 0;
  const totalScore = dataArray.reduce(
    (accumulator, currentValue) => (accumulator += currentValue.score),
    0
  );
  return Math.round(totalScore / dataArray.length).toString();
};
const scoreAverage = getAverage(data);

Array.from(allSummarySegments).forEach((segment, index) => {
  const image = segment.querySelector("img");
  if (image) image.src = data[index].icon;
  const categoryName = segment.querySelector("p");
  if (categoryName) categoryName.innerText = data[index].category;
  const score = segment.querySelector("span");
  score.innerText = data[index].score;
});

scoreAverageP.innerText = scoreAverage;
