function create(totalPages) {
    const paginationContainer = document.getElementById("pagination-container");
    const createList = document.createElement("ul");
    createList.setAttribute("class", "pagination");


    const firstItem = document.createElement("li");
    const firstLink = document.createElement("a");
    firstLink.href = "#";
    firstLink.textContent = "First";
    firstItem.appendChild(firstLink);
    createList.appendChild(firstItem);



    const PreviousItem = document.createElement("li");
    const previousLink = document.createElement("a");
    previousLink.href = "#";
    previousLink.textContent = "Previous";
    PreviousItem.appendChild(previousLink);
    createList.appendChild(PreviousItem);

    for (let i = 1; i <= totalPages; i++) {
        const listItem = document.createElement("li");
        const pageLink = document.createElement("a");
        pageLink.href = "#";
        pageLink.textContent = i;

        pageLink.addEventListener("click", function () {
            alert(`Clicked on page ${i}`);
        });

        listItem.appendChild(pageLink);
        createList.appendChild(listItem);
    }
    paginationContainer.appendChild(createList);
}

create(7);
