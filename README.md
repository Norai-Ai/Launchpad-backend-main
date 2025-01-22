# NORA AI Launchpad Backend

This backend handles the core logic for the **NORA AI Launchpad dApp**, enabling project listings, user registration, and funding operations.

## Features

- **Project Management**: Create, list, and manage projects.
- **User Management**: Wallet-based user registration.
- **Funding Logic**: Support for blockchain-based contributions.
- **Database**: MongoDB for project and user storage.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Norai-Ai/Launchpad-backend-main.git
   cd launchpad-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following content:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/NORA AI-launchpad
   BLOCKCHAIN_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
   ```

4. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

### Project Routes
- **GET `/api/projects`**: Fetch all projects.
- **POST `/api/projects`**: Create a new project.

### User Routes
- **POST `/api/users/register`**: Register a user with their wallet address.

## License

Licensed under the MIT License.