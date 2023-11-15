document.addEventListener('DOMContentLoaded', function () {
    const map = L.map('map'); // Initialize the map without setting a default view
  
    // Add a tile layer from OpenStreetMap
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  
    // Function to update the map with a marker at the specified coordinates
    function updateMap(lat, lng) {
      if (lat && lng) {
        map.setView([lat, lng], 13); // Set the view to the specified coordinates
        L.marker([lat, lng]).addTo(map);
      }
    }
  
    document.querySelector('.searchbar').addEventListener('submit', function (event) {
      event.preventDefault();
      const userInput = document.getElementById('input').value;
  
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_mxkNkLWs7MBO2zg1rNk97bnEjqSmQ&ipAddress=${encodeURIComponent(userInput)}`)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          // Update the displayed information on your web page
          document.getElementById('ip').textContent = data.ip;
          document.getElementById('location').textContent = `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
          document.getElementById('timezone').textContent = data.location.timezone;
          document.getElementById('isp').textContent = data.isp;
          updateMap(data.location.lat, data.location.lng);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  
    // Initial fetch when the page loads
    const initialUserInput = ''; // Set the initial value here if needed
    fetchUserData(initialUserInput);
  
    function fetchUserData(userInput) {
      fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_mxkNkLWs7MBO2zg1rNk97bnEjqSmQ&ipAddress=${encodeURIComponent(userInput)}`)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          // Update the displayed information on your web page
          document.getElementById('ip').textContent = data.ip;
          document.getElementById('location').textContent = `${data.location.city}, ${data.location.region}, ${data.location.postalCode}`
          document.getElementById('timezone').textContent = data.location.timezone;
          document.getElementById('isp').textContent = data.isp;
          updateMap(data.location.lat, data.location.lng);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });
  