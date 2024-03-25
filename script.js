  const form = document.getElementById("transactionForm");

      form.addEventListener("submit", function(event) {
        event.preventDefault();

        let transactionFormData = new FormData(form);
        let transactionTableRef = document.getElementById("transactionTable");
        let newTransactionRowRef = transactionTableRef.insertRow(-1);

        let transactionType = document.querySelector('input[name="transactionType"]:checked').value;
        let transactionDescription = document.getElementById("transactionDescription").value;
        let transactionAmount = document.getElementById("transactionAmount").value;
        let transactionCategory = document.getElementById("transactionCategory").value;

        let newTypeCellRef = newTransactionRowRef.insertCell(0);
        newTypeCellRef.textContent = transactionType;

        let newDescriptionCellRef = newTransactionRowRef.insertCell(1);
        newDescriptionCellRef.textContent = transactionDescription;

        let newAmountCellRef = newTransactionRowRef.insertCell(2);
        newAmountCellRef.textContent = transactionAmount;

        let newCategoryCellRef = newTransactionRowRef.insertCell(3);
        newCategoryCellRef.textContent = transactionCategory;
      });
