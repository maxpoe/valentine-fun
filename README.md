# Valentine's Day Invitation

A delightful, interactive website to ask that special someone to be your Valentine.

## Features

- **❤️ Interactive Buttons**: The "Yes" button grows exponentially every time "No" is clicked, while the "No" button cycles through 15 different funny persuasive phrases.
- **🐱 Dynamic Visuals**: Custom AI-generated cat images change state based on the user's response:
  - **Waiting**: A hopeful cat expecting a 'Yes'.
  - **Sad**: A pleading cat shown upon rejection.
  - **Celebrating**: A joyful cat shown when the invitation is accepted.
- **✨ Premium UI**: Romantic theme with elegant typography ('Dancing Script'), smooth gradients, and a festive confetti celebration.

## Gallery

| Initial | Rejection | Success |
| :---: | :---: | :---: |
| ![Waiting](/public/cat-waiting.png) | ![Sad](/public/cat-sad.png) | ![Celebrating](/public/cat-celebrating.png) |

## Customization

You can easily personalize the messages and images:
- **Success State**: When "Yes" is clicked, show a confetti explosion and a heart-warming message: *"Yay! Now I am the happiest man on earth! ❤️"*
- **Funny Phrases**: Modify the `noPhrases` array in `src/main.js` to add your own jokes.
- **Cat Images**: Replace the `.png` files in the `public/` directory.

## Tech Stack

- **Vite**: For fast development and bundling.
- **Vanilla JavaScript**: Lightweight and fast interaction logic.
- **CSS3**: Custom design system with animations and gradients.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Clone the repository (or navigate to the project folder).
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder.

## Docker

You can run this application in a slim Docker container.

### Using Docker Compose (Recommended)
```bash
docker-compose up --build -d
```
The application will be available at `http://localhost:8080`.

### Using Docker CLI
1. **Build the Image**:
   ```bash
   docker build -t valentine-fun .
   ```
2. **Run the Container**:
   ```bash
   docker run -d -p 8080:80 valentine-fun
   ```

## CI/CD & Portainer

This project includes a **GitHub Action** that automatically builds and pushes the Docker image to the **GitHub Container Registry (GHCR)** on every push to the `main` branch.

### Deployment on Portainer
To deploy on Portainer:
1. Create a new stack or container.
2. Use the image: `ghcr.io/YOUR_GITHUB_USERNAME/valentine-fun:latest`.
3. Map port `8080` (or your choice) to container port `80`.
4. Set "Always pull the image" to ensure you have the latest version.
