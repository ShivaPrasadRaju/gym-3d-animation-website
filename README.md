# Ironclad Fitness - Premium 3D Landing Page

website link - https://ironcladfitness.vercel.app/

Welcome to the repository for Ironclad Fitness. 

I built this project to explore combining high-end web design aesthetics with scroll-linked 3D animations, similar to what you might see on an Apple product page. The goal was to create a premium experience for a fitness brand.

## Tech Stack

- React & Vite: Chosen for a fast development experience and optimized production builds.
- Tailwind CSS: Used for rapid styling. I intentionally stuck to a very minimal color palette (black, white, and crimson red) to maintain the premium feel.
- GSAP & ScrollTrigger: The engine behind the scroll-linked 3D marble statue animation and the smooth text reveals.
- Lenis: Implemented to give the page a weighty, silky smooth scrolling feel.

## Features

- Scroll-Controlled Canvas Sequence: The hero section uses an HTML5 Canvas to scrub through 240 rendered frames of a 3D Greek statue based entirely on your scroll position.
- Micro-Interactions: Clean hover states, subtle lifts on cards, and custom masonry galleries designed to feel tactile and expensive.
- Fully Responsive: Tuned to look great and perform well across desktop, tablet, and mobile devices.

## How to run this locally

If you're new to web development, follow these steps to get everything running using Visual Studio Code.

### 1. Install the basics
If you haven't already, install these tools:
- **VS Code**: Download from code.visualstudio.com
- **Node.js**: Download the "LTS" version from nodejs.org
- **Git**: Download from git-scm.com

### 2. Open VS Code and the Terminal
Open VS Code. Go to the top menu and click **Terminal > New Terminal** (or press `Ctrl + \``). 

### 3. Clone and enter the project
In the terminal that opens at the bottom of your screen, paste the following commands one by one:
```bash
git clone https://github.com/ShivaPrasadRaju/gym-3d-animation-website.git
cd gym-3d-animation-website
```

### 4. Install dependencies
Now that you're inside the project folder, run this command to download all the necessary packages:
```bash
npm install
```

### 5. Start the website!
Once the installation finishes, you can start the local development server by running:
```bash
npm run dev
```

VS Code will display a local URL (usually `http://localhost:5173`). Simply hold `Ctrl` (or `Cmd` on Mac) and click that link to open the website in your browser.

## Build for Production

When you're ready to host this website live, run:
```bash
npm run build
```
This will bundle and optimize everything into a `dist` folder, which you can then upload to Vercel, Netlify, or any other hosting provider.

---

Feel free to fork this, experiment with the animations, or use it as a base for your own high-end landing pages. Enjoy!
