import data from "./data.json" assert { type: "json" };

const allSummarySegments = document.getElementsByClassName("summary-segment");
console.log(allSummarySegments);

Array.from(allSummarySegments).forEach((segment, index) => {
  console.log(segment);
  const image = segment.querySelector("img");
  if (image) image.src = data[index].icon;
  const categoryName = segment.querySelector("p");
  if (categoryName) categoryName.innerText = data[index].category;
  const score = segment.querySelector("span");
  score.innerText = data[index].score;
});
