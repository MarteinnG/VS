    
    
    const unorderedList = document.getElementById("list");
    // const listItem = document.createElement("li");
    // listItem.textContent = "A list item";
    // listItem.style.cssText = "color: red";

    // unorderedList.appendChild(listItem);
    
    const harry = {
        firstName: "Harry ",
        lastName: "Potter",
        hairColor: "Black",
    };
    
    const hermione = {
        firstName: "Hermione ",
        lastName: "Granger",
        hairColor: "Brown",
    };
    
    const ron = {
        firstName: "Ron ",
        lastName: "Weasley",
        hairColor: "Red",
    };

    
    const allWizards = [harry, hermione, ron];
    console.log(allWizards);

    const renderAllTheWizards = (allWizards) => {
        allWizards.forEach((wizard) => {
            console.log(wizard.firstName);
            const listItem = document.createElement("li");
            listItem.textContent = `${wizard.firstName} ${wizard.lastName}`;
            listItem.style.cssText = `color: ${wizard.hairColor}`;
            unorderedList.appendChild(listItem);
        });
    };

    renderAllTheWizards(allWizards);
