# Micro-Frontend POC

This project demonstrates a basic micro-frontend architecture using React and Module Federation.

## Setup

1. Clone the repository:
   ```bash
   git clone <your_repository_url>
   ```

2. Navigate to each micro-frontend directory:
   ```bash
   cd chatApp
   cd emailApp
   cd main-app
   ```

3. Install dependencies in each directory:
   ```bash
   npm install  // Or yarn install
   ```

4. Start the development servers in separate terminals:
   ```bash
   cd chatApp && npm start
   cd emailApp && npm start
   cd main-app && npm start
   ```

5. Open the main application in your browser: http://localhost:3000

## Build for Production (Optional)

1. Build each micro-frontend:
   ```bash
   cd chatApp && npm run build
   cd emailApp && npm run build
   cd main-app && npm run build
   ```

2. Serve the production builds (you'll need a static file server for this).

## Key Architectural Decisions and Trade-offs

* **Module Federation:** We chose Module Federation for its ability to dynamically load and share code between micro-frontends, improving performance and code reusability.
* **Shared Dependencies:** Managing shared dependencies (React, ReactDOM) was crucial to prevent conflicts. We used workspaces in a single `package.json` to manage shared dependencies.
* **Trade-offs:**  Module Federation can add some complexity to the build process.  Careful version management of shared dependencies is essential.

## Known Issues (If Any)

* [List any bugs or issues you are aware of]