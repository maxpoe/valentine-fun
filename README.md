# Valentine's Day Invitation

A simple, delightful, interactive website to ask that special someone to be your Valentine.

![Valentine Overview](public/valentine-overview.png)

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
    environment:
      - VALENTINE_NAME=Partner
      - VALENTINE_PET=dog
    restart: always
```

### Dynamic Customization
You can personalize the website by setting environment variables in your `docker-compose.yml`:
- **Name**: Set `VALENTINE_NAME` (e.g., `Partner`) to add a name to the question.
- **Theme**: Set `VALENTINE_PET` to `dog` to switch from the default cat theme to adorable puppies!

### Running Locally

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Credits

- This project was built using **Vite** for a lightning-fast development experience.
- All cat and dog images were **AI-generated**.

## License

MIT License

Copyright (c) 2026 Maximilian
