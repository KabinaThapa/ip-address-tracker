const userInput = document.getElementById('input').value;
fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_mxkNkLWs7MBO2zg1rNk97bnEjqSmQ&ipAddress=${encodeURIComponent(userInput)}`)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          // Update the displayed information on your web page
          document.getElementById('ip').textContent = data.ip;
          document.getElementById('location').textContent = data.location.region;
          document.getElementById('timezone').textContent = data.location.timezone;
          document.getElementById('isp').textContent = data.isp;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    document.querySelector('.searchbar').addEventListener('submit', function (event) {
      event.preventDefault();
      const userInput = document.getElementById('input').value;
      const ipAddress=userInput===null?'':encodeURIComponent(userInput)
      fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_mxkNkLWs7MBO2zg1rNk97bnEjqSmQ&ipAddress=${ipAddress}`)
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          // Update the displayed information on your web page
          document.getElementById('ip').textContent = data.ip;
          document.getElementById('location').textContent = data.location.region;
          document.getElementById('timezone').textContent = data.location.timezone;
          document.getElementById('isp').textContent = data.isp;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });

  