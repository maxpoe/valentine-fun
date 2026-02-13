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

## Credits

This project was built using **Vite** for a lightning-fast development experience.

## License

MIT License

Copyright (c) 2026 Maximilian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



