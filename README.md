# Campus Copilot

Campus Copilot is a beginner-friendly student planning app built with React, Vite, and Tailwind CSS. It includes a landing page, dashboard, assignment tracker, study planner, career pathway simulator, and profile page.

## What is in this project?

- **React** builds the page using small, reusable components.
- **Vite** runs the local development server and creates the production build.
- **Tailwind CSS** styles the app with utility classes such as `p-4` and `text-sm`.
- **React Router** connects each URL to the right page.
- **Lucide React** provides the icons.

## Start the app

You need a recent version of [Node.js](https://nodejs.org/) on your computer.

1. Open a terminal in this project folder.
2. Install the project packages:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local address printed in the terminal. It is usually `http://localhost:5173`.

Vite automatically refreshes the browser whenever you save a file.

## Useful commands

```bash
npm run dev       # Start the app for local development
npm run build     # Create an optimized production version
npm run preview   # Preview the production version locally
npm run lint      # Check the code for common mistakes
```

## Project map

```text
campus-copilot/
├── src/
│   ├── components/          # Reusable pieces, such as the sidebar and page header
│   ├── pages/               # One file for each main screen
│   ├── App.jsx              # Matches URLs to page components
│   ├── index.css            # Tailwind setup and shared styles
│   └── main.jsx             # Starts React
├── index.html               # The HTML shell used by Vite
├── tailwind.config.js       # Campus Copilot colors and Tailwind settings
├── vite.config.js           # Vite's React setup
└── package.json             # Packages and project commands
```

## How the app works

### 1. React starts in `main.jsx`

`main.jsx` finds the `<div id="root">` in `index.html` and renders the app inside it. `BrowserRouter` watches the browser URL so navigation works without a full page reload.

### 2. `App.jsx` chooses a page

Each `<Route>` connects one URL to one page. For example, `/assignments` displays `AssignmentTrackerPage`.

### 3. Shared pages use `AppLayout.jsx`

The dashboard, assignments, planner, career, and profile screens all use the same sidebar and top bar. The `<Outlet />` inside `AppLayout` is where the current page appears.

### 4. Tailwind styles the interface

Most styling appears directly in `className`. Shared patterns such as `page-card` and `primary-button` live in `src/index.css`. Brand colors such as `sage`, `coral`, and `gold` live in `tailwind.config.js`.

### 5. React state powers interactions

The assignment tracker uses `useState` to add assignments, search the list, and mark work complete. The career simulator uses the same idea to display the selected pathway. This sample data resets when the browser refreshes; a future version can connect it to a database.

## Beginner-friendly changes to try

- Change the brand colors in `tailwind.config.js`.
- Edit the sample tasks in `src/pages/DashboardPage.jsx`.
- Add a new career to the `pathways` object in `src/pages/CareerPathwayPage.jsx`.
- Add a new page, then create a matching `<Route>` in `src/App.jsx` and navigation item in `src/components/Sidebar.jsx`.

## Suggested next steps

This starter is front-end only. A production version would usually add:

1. Sign-in and user accounts.
2. A database so assignments and plans persist.
3. Form validation and success messages.
4. Tests for important interactions.
5. Real course calendar or learning-management-system integrations.
