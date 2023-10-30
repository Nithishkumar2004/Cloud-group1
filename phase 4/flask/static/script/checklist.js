function generateChecklist() {
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const tripPurpose = document.getElementById('tripPurpose').value;
   window.close()
    // Set the checklist items based on user inputs
    const checklistItems = {
        clothing: `Clothing for your trip to ${destination}`,
        accessories: `Accessories for your ${tripPurpose} trip`,
        toiletries: `Toiletries for your travel from ${departureDate} to ${returnDate}`,
        documents: `Travel Documents for your ${tripPurpose} trip`,
    };

    // Open a new window with the checklist
    const checklistWindow = window.open('/checklist1', '_blank');
    checklistWindow.addEventListener('load', function () {
        for (const key in checklistItems) {
            if (checklistItems.hasOwnProperty(key)) {
                const element = checklistWindow.document.getElementById(key);
                element.textContent = checklistItems[key];
            }
        }
    });
}
