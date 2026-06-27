# Ironclad Fitness - Premium 3D Landing Page

Welcome to the repository for Ironclad Fitness. 

I built this project to explore combining high-end web design aesthetics with scroll-linked 3D animations, similar to what you might see on an Apple product page. The goal was to create an uncompromising, cinematic, and luxury experience for a fitness brand.

## Tech Stack

- React & Vite: Chosen for a fast development experience and optimized production builds.
- Tailwind CSS: Used for rapid styling. I intentionally stuck to a very minimal color palette (black, white, and crimson red) to maintain the premium feel.
- GSAP & ScrollTrigger: The engine behind the scroll-linked 3D marble statue animation and the smooth text reveals.
- Lenis: Implemented to give the page a weighty, silky smooth scrolling feel.

## Features

- Scroll-Controlled Canvas Sequence: The hero section uses an HTML5 Canvas to scrub through 240 rendered frames of a 3D Greek statue based entirely on your scroll position.
- Micro-Interactions: Clean hover states, subtle lifts on cards, and custom masonry galleries designed to feel tactile and expensive.
- Fully Responsive: Tuned to look great and perform well across desktop, tablet, and mobile devices.

## How to run this locally (From Scratch)

If you're new to web development or just want to run this on a fresh machine, follow these steps to get everything set up.

### 1. Install the required software
First, you'll need a few tools installed on your computer:
- Visual Studio Code (VS Code): This is the code editor. You can download it from code.visualstudio.com.
- Node.js: This is required to run the development environment. Download the "LTS" version from nodejs.org and install it.
- Git: This is used to download the code from GitHub. Download it from git-scm.com.

### 2. Download the project
Open a terminal (or command prompt / PowerShell) on your computer and run:
```bash
git clone https://github.com/ShivaPrasadRaju/gym-3d-animation-website.git
```

### 3. Open the project in VS Code
Navigate into the project folder you just downloaded:
```bash
cd gym-3d-animation-website
```
Then, type this to open the folder in VS Code:
```bash
code .
```

### 4. Install dependencies
Inside VS Code, open the built-in terminal (Go to Terminal > New Terminal at the top menu). 
Run the following command to download all the necessary packages for the project:
```bash
npm install
```

### 5. Start the development server
Once the installation finishes, you can start the project by running:
```bash
npm run dev
```

VS Code will give you a local URL (usually http://localhost:5173). Hold `Ctrl` (or `Cmd` on Mac) and click that link to open the website in your browser.

## Build for Production

When you're ready to host this website live, run:
```bash
npm run build
```
This will bundle and optimize everything into a `dist` folder, which you can then upload to Vercel, Netlify, or any other hosting provider.

---

Feel free to fork this, experiment with the animations, or use it as a base for your own high-end landing pages. Enjoy!
