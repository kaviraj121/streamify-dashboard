# Streamify Analytics Dashboard
## Overview

Streamify Analytics Dashboard is a single-page application (SPA) built with React and Vite. It provides insights into user activity, revenue, and content performance for a fictional music streaming service called Streamify. The dashboard features key metrics, data visualizations, and a detailed table of recent streams.


## Features

* Key Metrics: Display total users, active users, total streams, revenue, and top artist.

* Data Visualizations:

  - User Growth Chart (Line Chart)

  -  Revenue Distribution (Doughnut Chart)

  -  Top 5 Streamed Songs (Bar Chart)

* Data Table: Lists recent streams with details like song name, artist, date streamed, and stream count.


* Responsive Design: Optimized for mobile, tablet, and desktop screens.

## Technologies Used
* Frontend: React, Vite, Tailwind CSS

* Charts: Chart.js, react-chartjs-2

* State Management: React Context API

* Mock Data: JSON Server (hosted on Render)

* Deployment: Vercel

## How to Run Locally

1. **Clone the repository:**
   ```bash
    git clone https://github.com/your-username/streamify-dashboard.git

2. **Navigate to the project directory:**
   ```bash
      cd streamify-dashboard

3. **Install dependencies:**
   ```bash
      npm install   
        
4. **Start the development server:**
   ```bash
      npm run dev       

5. **Open your browser and visit:**
   ```bash
      http://localhost:5173   

## Deployment
The app is deployed on Vercel. You can access it here:
https://streamify-dashboard-p1sj.vercel.app/

## Folder Structure

``` bash
streamify-dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
