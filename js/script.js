// create a map of search terms to URLs
const searchUrls = new Map();
searchUrls.set("f-620-003 option a", "https://forms.gle/TvC6a1bnP7YfZq8e9");



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
