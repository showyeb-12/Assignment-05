# Dev Stack Builder

A modern, interactive single-page website for exploring popular web development
technologies and assembling your own developer stack. Browse 15 hand-picked
tools across Frontend, Backend, Database, Language, Styling, DevOps and Tools —
compare their ratings and difficulty, then add the ones you like to a stack
panel to curate your perfect toolkit.

## Technologies Used

- **React (Vite)** — fast component-based UI development
- **Tailwind CSS** — utility-first styling with a shared brand gradient theme
- **React-Toastify** — beautiful toast notifications for every action
- **JSON** — all technology data is loaded from an external JSON file

## Features

1. **Technology Catalog** — a responsive 3-column card grid showing each
   technology's icon, badge, rating, difficulty and category.
2. **Your Stack Panel** — add technologies with one click, prevent duplicates,
   remove single items or clear the whole stack, with visual feedback through
   toast alerts and disabled buttons.
3. **Responsive & Themed** — fully responsive navbar with a hamburger menu on
   mobile, and a single shared blue → purple → pink gradient that re-themes
   the whole brand from one CSS variable — the accent switches from the same
   one place across the entire site.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is JavaScript's HTML-like syntax that lets you write UI markup inside your
JavaScript files. Instead of calling `React.createElement()` for every element,
you write tags that look like HTML. React then compiles that JSX into plain
JavaScript function calls. It is used because it makes components much easier
to read and write, keeping structure and logic in one place.

### 2. What is the difference between props and state?

Props are **read-only data passed from a parent component to a child**
component. A child cannot change its props. State is **data owned by a
component itself** that it can update over time using the `setState` function.
When state changes, the component re-renders to reflect the update.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a functional component store a piece of mutable data and a
function to update it. React re-renders the component whenever that data
changes. I used it everywhere in this project — for example `stack` stores the
technologies you selected, `loading` tracks whether the JSON has been fetched,
and `open` in the Navbar controls whether the mobile hamburger menu is visible.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` lets you run side effects (things outside rendering, like fetching
data, timers or setting up subscriptions) after the component renders. I needed
it to load the JSON data because fetching is asynchronous — we can't just read
the file synchronously during render. The effect runs once on mount, fetches
`technologies.json`, stores the result in state, and the loading state stays on
screen until the fetch completes.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` to identify each item in a list so it can efficiently
track which items were added, removed or re-ordered. Without a unique, stable
key, React may re-render the wrong items, causing bugs like jumbled inputs or
wrong data on screen. In this project I use the technology's unique `id` as the
key for both the cards and the stack items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering is showing different UI based on a condition, using
expressions like `&&`, ternary operators or early returns. In `YourStack.jsx`
I render the empty-state message only when the stack has no items: if
`count === 0` the panel shows "Your Stack is Empty", otherwise it lists the
selected stack items. The card buttons also conditionally render either
"Add to Stack" or "✓ Added to Stack".

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Data flows down from parent to child through **props** — for example, `App`
passes the `technologies` array and the `stack` array to the `Technologies`
component, which passes each individual technology to a `TechnologyCard`. To
send something back up, the parent passes a **function as a prop** and the
child calls it: `App` passes `onToggle={handleToggle}` to the card, and when
the "Add to Stack" button is clicked the card calls `onToggle(tech)`, letting
the parent update its state. This is called "lifting state up".