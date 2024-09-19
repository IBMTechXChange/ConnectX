# ConnectX - AI-Enhanced Video Conferencing

Welcome to **ConnectX**, an AI-enhanced video conferencing solution, powered by LiveKit and advanced technologies like noise filtering and real-time collaboration. This repository contains the source code for the **ConnectX** video conferencing app, designed for seamless communication with high performance and security.

## Features
- **AI-Enhanced Video Conferencing**: Leverage advanced video and audio enhancements, including the **Krisp Noise Filter**.
- **LiveKit Integration**: Integrates with the [LiveKit](https://livekit.io) SDK for real-time video and audio streaming.
- **Customizable**: Easily extend and modify the components for your specific video conferencing needs.
- **Lightweight and Performant**: Built using Next.js for optimal performance.

## Tech Stack
- **Next.js** (v14.x) - Framework for building React applications.
- **React** (v18.x) - JavaScript library for building user interfaces.
- **LiveKit** - Real-time video and audio streaming platform.
- **TypeScript** - Strongly typed programming language built on JavaScript.

## Requirements
- **Node.js** version 18 or higher
- **pnpm** (Package Manager) for managing dependencies

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/IBMTechXChange/ConnectX.git
   cd ConnectX
   ```

2. **Install dependencies:**

   Using `pnpm`:

   ```bash
   pnpm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file to store environment variables required for the application (e.g., API keys, credentials, etc.).

   Example `.env.local`:

   ```bash
   NEXT_PUBLIC_API_KEY=your-api-key
   ```

## Running the Project

- **Development Mode**:

  To run the application in development mode with hot-reloading:

  ```bash
  pnpm dev
  ```

  This will start the development server at `http://localhost:3000`.

- **Build for Production**:

  To build the application for production:

  ```bash
  pnpm build
  ```

  Then, to serve the built application:

  ```bash
  pnpm start
  ```

- **Linting**:

  To run ESLint for code quality checks:

  ```bash
  pnpm lint
  ```

## Project Structure
The key directories and files in this project are:

```bash
.
├── app/                   # Contains Next.js app routes and components
├── lib/                   # Utility functions and hooks
├── styles/                # Custom CSS and module styles
├── public/                # Public assets (favicon, images, etc.)
├── .next/                 # Generated files from Next.js build
├── .github/               # GitHub workflows and assets
├── .env.local             # Environment variables (not included in the repo)
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml         # Lock file for dependencies
└── README.md              # Project documentation
```

## Contributing

Contributions are welcome! Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.


## Contact
For any questions or support, feel free to reach out via the [GitHub issues](https://github.com/IBMTechXChange/ConnectX/issues) or contribute to the project by submitting pull requests.
