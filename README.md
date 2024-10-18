# React Material Tailwind Playground

This repository is a playground for learning **React**, **Tailwind CSS**, and **Material Tailwind**. 
It includes easy-to-understand examples to help you get started with building and styling components in React.

## Table of Contents
- [Forking the Repository](#forking-the-repository)
- [Installation](#installation)
- [Using Tailwind CSS and Material Tailwind](#using-tailwind-css-and-material-tailwind)
- [Example: AvatarGroup Component](#example-avatargroup-component)
- [Example: App Component](#example-app-component)
- [Usage](#usage)
- [Links for Reference](#links-for-reference)

## Forking the Repository

To work with this repository, follow these steps:

1. Go to the GitHub repository: [React Material Tailwind Playground](https://github.com/jamilaferron/react-material-tailwind-playground).
2. Click the **Fork** button at the top right of the page:
   
   ![Fork Button](https://github.com/user-attachments/assets/9e14ceae-9396-445a-bd33-1307a6248574)


4. Clone the forked repository to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-material-tailwind-playground.git
   ```


## Installation
After forking and cloning the repository, follow these steps to set it up:

1. Navigate to the project directory:
```bash
cd react-material-tailwind-playground
```
2. Install the dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm start
```
You can now open the app in your browser at `http://localhost:3000`.

# Using Tailwind CSS and Material Tailwind
### Tailwind CSS
- Tailwind CSS is already set up in this project. The configuration file, `tailwind.config.js`, is
  where you can modify theme settings or extend the default Tailwind classes.
- In React components, you can use Tailwind CSS utility classes directly within JSX to style
  elements.
### Material Tailwind
- Material Tailwind components are available for use, making it easy to build beautiful UI
  elements.
- The components are pre-installed, but you can reinstall with:
```bash
npm install @material-tailwind/react
```
- Refer to the [Material Tailwind Documentation](https://www.material-tailwind.com/docs/react/installation) to learn more about the available components.
  
## Example: AvatarGroup Component
- The AvatarGroup component is an example of how to create and style a simple group of avatar
  images using Material Tailwind components and Tailwind CSS.

### Location:
The component is located in `src/components/AvatarGroup.js`.

### How to Use:
1. Import the Component: In your own component, you can import the `AvatarGroup` like this:
```jsx
import AvatarGroup from './components/AvatarGroup';
```

2. Add to JSX: You can add the `AvatarGroup` inside your JSX like this:
```jsx
<AvatarGroup />
```

### Explanation:
The `AvatarGroup` component uses the ``Avatar component from Material Tailwind to display 
multiple avatars with different sizes. The layout is styled using Tailwind CSS utility 
classes for flexibility and ease of use.

Here’s the code for the component:

```jsx
import React from "react";
import { Avatar } from "@material-tailwind/react";

const AvatarGroup = () => {
  return (
    <div className="flex w-max items-end gap-4">
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xs" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="sm" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="md" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="lg" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xl" />
      <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl" />
    </div>
  );
};

export default AvatarGroup;
```
This component can serve as a reference for building your own components using a combination of 
React, Tailwind CSS, and Material Tailwind.

## Example: App Component
The `App` component is the main entry point of this React app. It demonstrates how you can integrate 
the custom `AvatarGroup` component and manage the layout using Tailwind CSS.

### Code:
```jsx
import "./App.css";
import AvatarGroup from "./components/AvatarGroup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AvatarGroup />
      </header>
    </div>
  );
}

export default App;
```

### Explanation:
- The `App` component imports `AvatarGroup` and uses it within the `header` section. This serves as an example
  of how to import and integrate custom components in a React project.
- You can experiment with this by adding your own components or modifying the layout using Tailwind CSS
  utility classes, as seen in the example.

## Usage
Feel free to modify or extend the existing components. Use them as a reference for learning how to structure, 
style, and build components with React, Tailwind CSS, and Material Tailwind.



### Links for Reference
Tailwind CSS Display Classes: Learn more about the display-related classes used in this component [here](https://tailwindcss.com/docs/installation).

Material Tailwind Avatar Component: Find detailed information and examples for the Avatar component [here](https://www.material-tailwind.com/docs/react/installation).

