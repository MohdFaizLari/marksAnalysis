let clearBtnHandler = () => {
  if (document.getElementById("pieChartContainer")) {
    let pieChartContainer = document.getElementById("pieChartContainer");
    pieChartContainer.parentNode.removeChild(pieChartContainer);
  } else {
    console.log("Sorry");
    return;
  }
};

let createPie = (
  arg1,
  arg2,
  arg3,
  arg4,
  arg5,
  clr1,
  clr2,
  clr3,
  clr4,
  clr5
) => {
  if (!document.getElementById("pie")) {
    let pieChartContainer = document.getElementById("pieChartContainer");
    let pie = document.createElement("div");
    let pieStyling = [];
    console.log(arg1, arg2, arg3, arg4, arg5);
    let str = `conic-gradient(${clr1} ${arg1}%,${clr2} ${arg2}%,${clr3} ${arg3}%,${clr4} ${arg4}%,
      ${clr5} ${arg5}%)`;
    pieStyling.push(str);
    console.log(str);
    pie.setAttribute("id", "pie");
    pie.style.width = "150px";
    pie.style.height = "150px";
    pie.style.border = "1px solid black";
    pie.style.borderRadius = "50%";
    pie.style.backgroundImage = pieStyling[0];
    console.log(clr1, clr2, clr3, clr4, clr5);
    pieChartContainer.appendChild(pie);
  }
};

let calculateMarksPercentage = (allSubMarks) => {
  let maxMarks = 100;
  let totalSubMarks = maxMarks * 5;

  let hindiMarks = parseInt(allSubMarks.hindi.value);
  let englishMarks = parseInt(allSubMarks.english.value);
  let mathMarks = parseInt(allSubMarks.math.value);
  let physicsMarks = parseInt(allSubMarks.physics.value);
  let chemistryMarks = parseInt(allSubMarks.chemistry.value);

  let hindiBlockColor = allSubMarks.color1.value;
  let englishBlockColor = allSubMarks.color2.value;
  let mathBlockColor = allSubMarks.color3.value;
  let physicsBlockColor = allSubMarks.color4.value;
  let chemistryBlockColor = allSubMarks.color5.value;

  let totalObtMarks =
    hindiMarks + englishMarks + mathMarks + physicsMarks + chemistryMarks;

  let hindiMarksPercent = Math.ceil((hindiMarks * maxMarks) / totalObtMarks);
  let englishMarksPercent = Math.ceil(
    (englishMarks * maxMarks) / totalObtMarks
  );
  let mathMarksPercent = Math.ceil((mathMarks * maxMarks) / totalObtMarks);
  let physicsMarksPercent = Math.ceil(
    (physicsMarks * maxMarks) / totalObtMarks
  );
  let chemistryMarksPercent = Math.ceil(
    (chemistryMarks * maxMarks) / totalObtMarks
  );

  console.log(
    hindiMarksPercent,
    englishMarksPercent,
    mathMarksPercent,
    physicsMarksPercent,
    chemistryMarksPercent
  );
  createPie(
    hindiMarksPercent,
    englishMarksPercent,
    mathMarksPercent,
    physicsMarksPercent,
    chemistryMarksPercent,
    hindiBlockColor,
    englishBlockColor,
    mathBlockColor,
    physicsBlockColor,
    chemistryBlockColor
  );
};

let createPieChartCont = (allSubMarks) => {
  let pieChartContainer = document.createElement("div");
  pieChartContainer.style.textAlign = "center";
  pieChartContainer.setAttribute("id", "pieChartContainer");
  let parentContainer = document.getElementById("parentContainer");
  if (!document.getElementById("pieChartContainer")) {
    parentContainer.appendChild(pieChartContainer);
    console.log(allSubMarks);
    calculateMarksPercentage(allSubMarks);
  } else {
    console.log("Sorry");
    return;
  }
};

if (document.getElementById("collectMarksForm")) {
  let collectMarksForm = document.getElementById("collectMarksForm");
  // Attach a submit event listener to the login form
  collectMarksForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let allSubMarks = document.forms.collectMarksForm;

    if (!document.getElementById("pieChartContainer")) {
      createPieChartCont(allSubMarks);
    }
  });
}
