# Warehouse Management System


This web application, built with ReactJS, Redux, React Router DOM, and CSS, is for managing warehouses. It has two main pages: a warehouse listing page and a warehouse details page. There are also pages for filtering and searching

## Features

### Page 1: Warehouse Listing

- Display a list of warehouses from the provided JSON file / Array of Object.
- Search warehouses by name.
- Filter warehouses by city, cluster, and available space limit.

### Page 2: Warehouse Details

- Clicking on a warehouse in the listing page redirects to its details page.
- Edit warehouse information such as cluster, warehouse name, city, and available space.

## Tech Stack

- ReactJS: Frontend library for building user interfaces.
- Redux: State management library for managing application state.
- React Router DOM: Library for declarative routing in React applications.

## 📸 Screenshots

### Landing Page
![Landing Page](/Screenshot/Landing%20page.jpeg)

### Liked Page
![Liked Page](/Screenshot/like%20page.jpeg)

### Filter Page
![Filter Page](/Screenshot/filter%20page.jpeg)

### Search Page
![Search Page](/Screenshot/search%20page.jpeg)

### Detail Page
![Detail Page](/Screenshot/detail%20page.jpeg)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ibrahim1249/React_PM_Warehouse.git
```

```bash
cd Warehouse-app
npm i
npm run dev
```
The application should now be running on http://localhost:5173.

## Dependencies

- [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit): Redux Toolkit is the official, opinionated, batteries-included toolSet for efficient Redux development.
  - Version: ^2.2.1
  - [npm](https://www.npmjs.com/package/@reduxjs/toolkit)
- [react](https://www.npmjs.com/package/react): A JavaScript library for building user interfaces.
  - Version: ^18.2.0
  - [npm](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom): This package serves as the entry point of the DOM-related rendering paths.
  - Version: ^18.2.0
  - [npm](https://www.npmjs.com/package/react-dom)
- [react-icons](https://www.npmjs.com/package/react-icons): Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
  - Version: ^5.0.1
  - [npm](https://www.npmjs.com/package/react-icons)
- [react-redux](https://www.npmjs.com/package/react-redux): Official React bindings for Redux.
  - Version: ^9.1.0
  - [npm](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): DOM bindings for React Router.
  - Version: ^6.22.1
  - [npm](https://www.npmjs.com/package/react-router-dom)

## Data Handling

- The provided JSON data / Array of Object is loaded into the Redux store for efficient data management.
- Redux selectors are used to optimize store calls and improve performance.

## Author

Ibrahim Momin

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
