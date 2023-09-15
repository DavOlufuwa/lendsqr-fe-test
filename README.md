# Lendsqr Frontend Test

![Project Logo](./public/assets/logo/lendsqr-icon.svg)

This project is a showcase of the admin dashboard of Lendsqr, it contains a login page, a dashboard page, and a profile page. This project features is built with React, TypeScript, SASS and Vite bundler. A user can login, access the dashboard and profile pages. A user can modify the status of the users within the dashboard and filter the users by organization, status, date joined, etc.
The project features a state management system using Zustand and a test suite using Vitest.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)


## Getting Started



### Prerequisites

You need to have the following installed on your computer.

- Node.js (v14+)
- yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DavOlufuwa/lendsqr-fe-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lendsqr-fe-test
   ```

3. Install project dependencies:

   ```bash
   yarn install

   ```

## Usage

### Running the Development Server

To start the development server and run the project locally, use the following command:

```bash
yarn dev

```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the project for production deployment, use:

```bash
yarn build

```

This will create an optimized production build in the `dist` directory.

### Running Tests

Explain how to run tests if you have included testing in your project using Vitest or any other testing framework:

```bash
yarn test

```

## Folder Structure

Here's an overview of the project's folder structure:

```plaintext
project-root/
├── node_modules/           
├── public/                     
│   └──assets/             
│        ├──images/             
│        ├──icons/             
│        └──logo/              
│        
├── src/                   
│   ├── components/         
│   │    ├── Button/             
│   │    ├── FilterForm/
│   │    ├── Layout/
│   │    ├── Navigation/
│   │    ├── UserDetailsCard/
│   │    └── UserList
│   ├── lib/             
│   │   ├── hook        
│   │   └── store
│   ├── pages/             
│   │   ├── Dashboard        
│   │   ├── Login        
│   │   └── UserDetails
│   │ 
│   ├── styles/               
│   │              
│   ├── tests/             
│   │   
│   ├── App.tsx            
│   ├── main.tsx            
│   └── vite-env.d.ts
│
│
├── .gitignore             
├── .index.html             
├── package.json            
├── README.md               
├── tsconfig.json           
├── tsconfig.node.json           
├── vercel.json        
├── vite.config.js         
└── yarn.lock
```

