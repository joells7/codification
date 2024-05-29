  // const form = document.getElementById("transactionForm");

  //     form.addEventListener("submit", function(event) {
  //       event.preventDefault();

  //       let transactionFormData = new FormData(form);
  //       let transactionTableRef = document.getElementById("transactionTable");
  //       let newTransactionRowRef = transactionTableRef.insertRow(-1);

  //       let transactionType = document.querySelector('input[name="transactionType"]:checked').value;
  //       let transactionDescription = document.getElementById("transactionDescription").value;
  //       let transactionAmount = document.getElementById("transactionAmount").value;
  //       let transactionCategory = document.getElementById("transactionCategory").value;

  //       let newTypeCellRef = newTransactionRowRef.insertCell(0);
  //       newTypeCellRef.textContent = transactionType;

  //       let newDescriptionCellRef = newTransactionRowRef.insertCell(1);
  //       newDescriptionCellRef.textContent = transactionDescription;

  //       let newAmountCellRef = newTransactionRowRef.insertCell(2);
  //       newAmountCellRef.textContent = transactionAmount;

  //       let newCategoryCellRef = newTransactionRowRef.insertCell(3);
  //       newCategoryCellRef.textContent = transactionCategory;
  //     });

// Define variables with descriptive names and different data types
let currentEconomicGrowthRate = 3.5; // float
let isGovernmentSupportAvailable = true; // boolean

// Perform mathematical operation and store result
let projectedGrowthRate = currentEconomicGrowthRate * 1.2;

// Create decision making with 'if' and 'else' statements
if (projectedGrowthRate > currentEconomicGrowthRate) {
    console.log("Projected growth rate is higher than current rate.");
} else {
    console.log("Projected growth rate is not higher than current rate.");
}

// Utilize logical operators for complex condition evaluation
if (projectedGrowthRate > currentEconomicGrowthRate && isGovernmentSupportAvailable) {
    console.log("Conditions are favorable for economic growth.");
} else {
    console.log("Conditions are not favorable for economic growth.");
}

// Showcase JavaScript output techniques
document.getElementById("output").innerHTML = "Projected Growth Rate: " + projectedGrowthRate;
console.log("Projected Growth Rate: " + projectedGrowthRate);
