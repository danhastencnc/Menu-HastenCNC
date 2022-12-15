// create a map of search terms to URLs
const searchUrls = new Map();
searchUrls.set("f-620-003 option a", "https://forms.gle/TvC6a1bnP7YfZq8e9");
searchUrls.set("f-620-003 option b", "https://forms.gle/FcdLjWd2gf1iZBq3A");
searchUrls.set("f-620-004", "https://forms.gle/8vNaPUW7GdJ3N2St7");
searchUrls.set("f-720-001", "https://forms.gle/yowfFXFKqoHWnBqU6");
searchUrls.set("f-720-002", "https://forms.gle/K4xjfkpMNx2vkvdRA");
searchUrls.set("f-720-003", "https://forms.gle/w89yqE7MJDsanbPq5");
searchUrls.set("f-720-004", "https://forms.gle/AK1XppBnDhFCkMVs5");
searchUrls.set("f-720-005", "https://forms.gle/Ln9iG86WgzmKeR7W8");
searchUrls.set("f-720-006", "https://forms.gle/U3X1rjxHmijjx8nC6");
searchUrls.set("f-740-001", "https://forms.gle/iaoUyc58eAirBFxU9");
searchUrls.set("f-750-002", "https://forms.gle/RGsN2BfqcWcNXqFd7");
searchUrls.set("f-750-003", "https://forms.gle/j68nPpbpnEuGdjcu7");
searchUrls.set("f-751-001", "https://forms.gle/2n6tstbDUZLXttKZ6");
searchUrls.set("f-751-002", "https://forms.gle/BAsy8bv5P3p3wL856");
searchUrls.set("f-751-003", "https://forms.gle/fh5YSWYkoFXid1cDA");
searchUrls.set("f-751-004", "https://forms.gle/dnXK8TSbzgUN9d4a9");
searchUrls.set("f-814-001", "");
searchUrls.set("f-816-002", "https://forms.gle/XeLzcqBe2eVjen6F7");
searchUrls.set("f-820-003", "https://forms.gle/2No4pVZ9MRpcnkZf7");
searchUrls.set("f-840-002", "https://forms.gle/Tuhpd7XCDwts78ndA");
searchUrls.set("f-840-003", "https://forms.gle/ZeWX7PfuoTUNDxad6");
searchUrls.set("f-840-004", "https://forms.gle/CTVLRinLZuLXwcuq6");
searchUrls.set("f-840-005", "https://forms.gle/Kw7WhjKTbDDx9wqG7");
searchUrls.set("f-840-007", "https://forms.gle/dimCCbXbA5RkXUo7A");
searchUrls.set("f-850-004", "https://forms.gle/MeHLhqAW2h9AAG3y7");
searchUrls.set("f-850-011", "https://forms.gle/4eGdoUSPzScR2h6q9");
searchUrls.set("f-850-012", "https://forms.gle/Wf1VBtXSZgs6LYkR6");
searchUrls.set("f-850-013", "https://forms.gle/4JQV1bX1ppTeCZdV8");
searchUrls.set("f-850-014", "https://forms.gle/EEW4jXsfb4YXMB6y7");
searchUrls.set("f-851-001", "https://forms.gle/v5wFVtKQkKL423Pw5");
searchUrls.set("f-912-002", "https://forms.gle/eSdzbwVW8bcfSxUH8");
searchUrls.set("f-912-003", "https://forms.gle/iyi5Bcvo3JZVimdf9");
searchUrls.set("f-912-004", "https://forms.gle/wTWmxsEgWzW9gaTcA");
searchUrls.set("f-920-005", "https://forms.gle/mpNo9GAtrQysFckh6");



const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

// create the datalist element and add it to the search form
const searchOptions = document.createElement('datalist');
searchOptions.id = 'search-options';
searchBox.parentElement.appendChild(searchOptions);

// add event listener for when the user types in the search box
searchBox.addEventListener('input', () => {
  // get the current search term
  const searchTerm = searchBox.value;

  // if the search term is empty, clear the options in the datalist
  if (searchTerm === '') {
    searchOptions.innerHTML = '';
    return;
  }

  // otherwise, show the matching options in the datalist
  let options = '';
  searchUrls.forEach((value, key) => {
    if (key.startsWith(searchTerm.toLowerCase())) {
      options += `<option value="${key}"></option>`;
    }
  });
  searchOptions.innerHTML = options;
});
// add event listener for when the user clicks the search button
searchButton.addEventListener('click', () => {
  const searchTerm = searchBox.value;
  const url = searchUrls.get(searchTerm.toLowerCase());
  if (url) {
    // if there is a URL for the search term, open it in a new tab
    window.open(url, '_blank');
  } else {
    // otherwise, use the tinyURL as a fallback
    const webLink = `https://tinyurl.com/${searchTerm}`;
    window.open(webLink, '_blank');
  }
});
