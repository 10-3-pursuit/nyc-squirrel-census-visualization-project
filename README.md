# SquirrelQuest

![SquirrelQuest](https://res.cloudinary.com/dm8xhvx4t/image/upload/v1714955966/SquirrelQuestBanner_po0apm.jpg)

## Overview

SquirrelQuest is a web application designed to help users explore and learn more about squirrels in Central Park. Whether you're a wildlife enthusiast, a nature lover, or simply curious about these furry creatures, SquirrelQuest provides an interactive platform for discovering information about the squirrels spotted in the park.

## Visit our live site

[Link to SquirrelQuest website](https://squirrelquest.netlify.app/)

## Our Team

[Michael Restrepoross](http://www.linkedin.com/in/michael-restrepoross)
[Julissa Garcia](https://www.linkedin.com/in/juligarc91)
[Jose Barrios](https://www.linkedin.com/in/josebarriosa/)

## Frontend Features

- **Squirrel Index**: Browse a comprehensive list of squirrels spotted in Central Park, including details such as name, unique ID, location, and date spotted.
- **Squirrel Details**: View detailed information about each squirrel, including images, name, unique ID, location, and date spotted.
- **Interactive Map**: Utilize the interactive map feature to visualize the location where each squirrel was last spotted in Central Park.
- **Search and Filter**: Use the search bar and filter functionality to narrow down the list of squirrels based on specific criteria such as location, date spotted, or unique ID.
- **Responsive Design**: Enjoy a seamless user experience across various devices and screen sizes, thanks to SquirrelQuest's responsive design.

## Frontend Technology Stack

### React.js
- **Description**: React.js was used for developing the frontend of the application. It facilitated the creation of interactive user interfaces through the use of components, state management, and hooks.
- **Components**: Functional components were utilized extensively throughout the application to create reusable UI elements.
- **State Management**: React's useState and useEffect hooks were employed for managing component-level state and side effects, respectively.
- **Hooks**: Custom hooks were implemented to encapsulate and reuse stateful logic across different components.

### Tailwind CSS
- **Description**: Tailwind CSS was leveraged for styling the application, providing a utility-first approach to CSS that enabled rapid development and customization of the user interface.
- **Utility-first CSS**: Tailwind's utility classes were used to apply styles directly to HTML elements, allowing for quick prototyping and consistent styling across the application.
- **Responsive Design**: Tailwind's responsive design utilities were utilized to ensure that the application was optimized for various screen sizes and devices.

### React Router
- **Description**: React Router was employed for handling navigation within the application, enabling seamless transitions between different views and components.
- **Routing**: React Router's Route component was used to define routes for different pages and components within the application.
- **Dynamic Routing**: Parameters and nested routes were utilized to create dynamic routes that could adapt to changing data and user interactions.

### @vis.gl/react-google-maps
- **Description**: The `@vis.gl/react-google-maps` library was integrated into the application to incorporate Google Maps functionality, specifically for displaying the location of squirrels on a map.
- **Google Maps Integration**: This library provided components such as Map, AdvancedMarker, and Pin, which were utilized to render interactive maps and mark the positions of squirrels.
- **API Integration**: The library facilitated the integration of Google Maps API, allowing the application to access and display map data seamlessly within the React environment.
- **Customization**: Various customization options, such as setting default zoom levels and marker styles, were utilized to tailor the map display according to the application's requirements.

## APIs Used

- **2018 Central Park Squirrel Census - Squirrel Data API**: This API provides data from the 2018 Central Park Squirrel Census, offering information about squirrel sightings and observations in Central Park. For more details, you can visit the [API documentation](https://data.cityofnewyork.us/Environment/2018-Central-Park-Squirrel-Census-Squirrel-Data/vfnx-vebw/about_data).

- **Maps JavaScript API**: The Maps JavaScript API provides a way to embed Google Maps into web pages using JavaScript. It allows developers to customize maps with their own content and imagery, as well as add interactivity and functionality. For detailed documentation, you can refer to the [Maps JavaScript API documentation](https://developers.google.com/maps/documentation/javascript).

## Getting Started Locally

To run SquirrelQuest locally on your machine, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**

    ```sh
    git clone <repository-url>
    cd squirrelquest
    ```

2. **Install NPM packages**

    ```sh
    npm install
    ```

3. **Create an .env file and fill these variables**

    ```sh
   VITE_SQUIRREL_BASE_URL=
   VITE_SQUIRREL_TOKEN=
   VITE_GOOGLE_MAPS_TOKEN=
   VITE_GOOGLE_MAP_ID=
    ```


4. **Start the Application**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## User Stories

**Squirrel Index**
As a user, I want to browse a comprehensive list of squirrels spotted in Central Park, including details such as name, unique ID, location, and date spotted.

**Squirrel Details**
As a user, I want to view detailed information about each squirrel, including images, name, unique ID, location, and date spotted.

**Interactive Map**
As a user, I want to visualize the location where each squirrel was last spotted in Central Park using an interactive map feature.

**Search and Filter**
As a user, I want to use the search bar and filter functionality to narrow down the list of squirrels based on specific criteria such as location, date spotted, or unique ID.

**Responsive Design**
As a user, I expect the application to provide a seamless user experience across various devices and screen sizes.

## Stretch Goals

- **React Google Maps Integration**: Integrate React Google Maps to display the location where each squirrel was last spotted directly on the map within the squirrel details page. This feature will enhance the user experience by providing a visual representation of squirrel sightings in Central Park.
- **Advanced Search Functionality**: Enhance the search functionality with advanced filters, such as sorting by squirrel characteristics or behavior.
- **Tailwind for Styling**: Implement Tailwind CSS for styling the project, ensuring a consistent and modern UI.