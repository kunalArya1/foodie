# Foodie

Foodie is a Swiggy-inspired food delivery frontend built with React, Vite, React Router, and Tailwind CSS. It shows food category sections, restaurant cards for Bhopal, restaurant detail pages, a search screen, location selection, sign-in sidebar, help page, and a responsive navigation layout.

## Features

- Home page with food category and top restaurant sections
- Restaurant cards with image, rating, delivery time, cuisines, and locality
- Restaurant detail route that loads menu/restaurant metadata by restaurant id
- Location sidebar with popular Bhopal locations, browser geolocation, and location search
- Sign-in sidebar UI
- Search page UI
- Help page and footer
- Responsive layouts using Tailwind CSS
- Loading shimmer while data is being prepared

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Routes

| Route            | Description                                             |
| ---------------- | ------------------------------------------------------- |
| `/`              | Home page with category banners and restaurant listings |
| `/search`        | Search page UI                                          |
| `/help`          | Help page                                               |
| `/resturnat/:id` | Restaurant detail/menu page                             |

## Data And APIs

The home page uses static Swiggy-style data from `src/Context/data.js`. The context provider loads this local data.

The restaurant detail page uses Axios to request Swiggy menu data for the selected restaurant id:

```txt
https://www.swiggy.com/dapi/menu/pl
```

The location sidebar uses browser geolocation and public location APIs:

- BigDataCloud reverse geocoding for current location lookup
- OpenStreetMap Nominatim for location search fallback/search results

## Project Structure

```txt
.
├── public/
├── src/
│   ├── assets/
│   ├── Components/
│   │   ├── HeroMind/
│   │   ├── Herotopres/
│   │   ├── Location/
│   │   ├── Menu/
│   │   ├── Rescard/
│   │   ├── Rescontainer/
│   │   ├── SignIn/
│   │   ├── Body.jsx
│   │   ├── Footer.jsx
│   │   ├── Help.jsx
│   │   ├── Navbar.jsx
│   │   ├── Search.jsx
│   │   └── Shimmer.jsx
│   ├── Context/
│   │   ├── data.js
│   │   ├── ResContext.jsx
│   │   └── ResCotextProvider.jsx
│   ├── utils/
│   │   └── Router.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```
