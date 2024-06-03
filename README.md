Weather App
This project provides the current temperature of your location as well as any other city you specify. Additionally, it supports a dark mode that remembers your preference and automatically applies it the next time you visit.

Features
Current Location Temperature: Automatically fetches and displays the temperature of your current location.
City Temperature: Allows you to enter any city name and fetch its current temperature.
Dark Mode: Toggle between light and dark mode. The app remembers your last selected theme and applies it on your next visit.
Technologies Used
HTML: Structure of the web page.
CSS: Styling of the web page including dark mode support.
JavaScript: Logic for fetching weather data, handling geolocation, and managing theme preference.
OpenWeatherMap API: Used to fetch the current weather data.
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/weather-app.git
cd weather-app
Open index.html in your web browser to run the app locally.

Configuration
Obtain an API key from OpenWeatherMap.

Replace YOUR_API_KEY in script.js with your actual API key:

javascript
Copy code
const apiKey = 'YOUR_API_KEY';
Usage
Current Location Temperature: The app will ask for permission to access your location. Allow it to see the temperature of your current location.
City Temperature: Enter the name of any city in the input field and click the "Get Weather" button to see its current temperature.
Dark Mode: Click the "Toggle Dark Mode" button to switch between light and dark modes. Your preference will be saved and applied automatically the next time you visit.
File Structure
Copy code
weather-app/
├── index.html
├── styles.css
└── script.js
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Author
Your Name - yourusername
