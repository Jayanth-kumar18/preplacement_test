// Fetch data from the API endpoint
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Process the data and display it on the web page
    const resultsContainer = document.getElementById('results-container');

    // Clear any existing content in the container
    resultsContainer.innerHTML = '';

    // Loop through the data and create HTML elements to display the results
    data.forEach(item => {
      const resultElement = document.createElement('div');
      resultElement.textContent = item.title;

      resultsContainer.appendChild(resultElement);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
