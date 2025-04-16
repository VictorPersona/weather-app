# Weather App

A simple weather application built with React and Vite that fetches and displays weather data for a given city using the OpenWeatherMap API.

## Features

- Search for weather information by city name.
- Displays:
    - Current temperature.
    - Humidity levels.
    - Wind speed.
    - Weather icon and location.
- Responsive and user-friendly design.

## Tech Stack

- **Frontend**: React, CSS
- **Build Tool**: Vite
- **API**: OpenWeatherMap API

## Installation

1. Clone the repository:
     ```bash
     git clone https://github.com/your-username/weather-app.git
     cd weather-app
     ```

2. Install dependencies:
     ```bash
     npm install
     ```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
     ```env
     VITE_API_KEY="your_api_key_here"
     ```

4. Start the development server:
     ```bash
     npm run dev
     ```

5. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code quality.

## Folder Structure

```
weather-app/
├── src/
│   ├── components/
│   │   ├── Weather.jsx
│   │   ├── Weather.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
├── public/
├── .env
├── .gitignore
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
- [Vite](https://vitejs.dev/) for the fast development experience.
- [React](https://reactjs.org/) for the UI framework.

Feel free to contribute to this project by submitting issues or pull requests!