
let searchIndex;
let searchResults = document.getElementById('results');
let searchInput = document.getElementById('search');

// Load the search index
fetch('/index.json')
  .then(response => response.json())
  .then(data => {
    searchIndex = lunr(function () {
      this.ref('permalink');
      this.field('title', { boost: 10 });
      this.field('tags', { boost: 5 });
      this.field('categories', { boost: 5 });
      this.field('contents');

      data.forEach(function (doc) {
        this.add(doc);
      }, this);
    });
  });

// Perform search when user types
searchInput.addEventListener('input', function() {
  let query = this.value;
  let results = searchIndex.search(query);
  displayResults(results);
});

// Display search results
function displayResults(results) {
  searchResults.innerHTML = '';
  if (results.length) {
    results.forEach(function(result) {
      let item = document.createElement('li');
      let link = document.createElement('a');
      link.href = result.ref;
      link.textContent = result.ref;
      item.appendChild(link);
      searchResults.appendChild(item);
    });
  } else {
    let item = document.createElement('li');
    item.textContent = 'No results found';
    searchResults.appendChild(item);
  }
}
