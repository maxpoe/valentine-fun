# Valentine's Day Invitation

A simple, delightful, interactive website to ask that special someone to be your Valentine.


## Tech Stack

- **Vite**: For fast development and bundling.
- **Vanilla JavaScript**: Lightweight and fast interaction logic.
- **CSS3**: Custom design system with animations and gradients.

## Getting Started

You can run this application in a slim Docker container with the image provided on GitHub Container Registry or locally. 

### Docker compose (recommended)

This project is optimized for Docker compose.

#### Example compose.yaml

```yaml
services:
  valentine-fun:
    image: ghcr.io/maxpoe/valentine-fun:latest
    ports:
      - "8080:80"
    restart: always
```

### Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```

   The application will be available at `http://localhost:5173`



