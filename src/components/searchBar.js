import searchSvg from "../assets/cloud-search-outline.svg";

function searchBar() {
  const contentDiv = document.getElementById("content");
  const leftSideDiv = document.getElementById("left-side");

  const searchBarDiv = document.createElement("div");
  searchBarDiv.classList.add("searchbar-div");

  const inputField = document.createElement("input");
  inputField.classList.add("searchbar");
  inputField.setAttribute("type", "search");
  inputField.setAttribute("placeholder", "Search...");

  searchBarDiv.appendChild(inputField);

  const searchIcon = new Image();
  searchIcon.src = searchSvg;
  searchIcon.classList.add("search-icon");

  searchBarDiv.appendChild(searchIcon);
  leftSideDiv.appendChild(searchBarDiv);

  contentDiv.appendChild(leftSideDiv);
}

export default searchBar;
