🛒 E-Commerce Frontend Application

A modern e-commerce frontend built with React that consumes the DummyJSON API to display products, categories, and manage a shopping cart.
This project focuses on real-world frontend architecture, clean state management, and reusable components.

- Live Demo
- (Add your deployed link here)
- Why This Project?

Most beginner projects only fetch and display data.
This project was built to go beyond that by focusing on:

- Real API integration
- Global state management using Context API
- Custom hooks for reusable logic
- Proper loading & error handling
- Multi-page routing with a real app feel
- The goal was to simulate how a production-ready frontend is structured.

✨ Features

- Product listing from DummyJSON API
- Browse products by category
- Add / remove products from cart
- Global cart state using Context API
- Loading & error handling for API calls
- Debounced search for better performance
- Multi-page navigation using React Router

📱 Responsive UI

🛠 Tech Stack

- React (Vite)
- React Router
- Context API
- Custom Hooks
- DummyJSON API
- CSS / Tailwind CSS (use whichever you actually used)

📂 Project Structure
src/
├─ api/ # API calls
├─ components/ # Reusable UI components
├─ pages/ # Application pages
├─ hooks/ # Custom hooks (e.g. debounce)
├─ context/ # Global state (Cart Context)
├─ App.jsx
└─ main.jsx

- This structure keeps UI, logic, and state clearly separated, making the app scalable and maintainable.

🧩 Key Technical Decisions

- Context API was used for cart state to avoid prop drilling and manage global data cleanly.
- Custom hooks were created to extract reusable logic and keep components readable.
- Debouncing was implemented to prevent unnecessary API calls during search.
- API loading and error states are handled explicitly to improve user experience.

⚠️ Challenges Faced

- Managing global cart state across multiple pages
- Keeping API logic separate from UI components
- Handling async data fetching without breaking UI flow
- Structuring the project to remain scalable

🔮 Future Improvements

- Persist cart data using localStorage
- Add authentication (login / signup)
- Improve performance using memoization
- Convert to full-stack with backend integration
- Add unit and integration tests

🧪 API Used
DummyJSON API -

- Provides product, category, and search endpoints for testing real-world frontend behavior.

📌 Conclusion

- This project demonstrates my ability to:
- Build a real multi-page React application
- Integrate and manage external APIs
- Structure frontend code professionally
- Think beyond UI and focus on architecture
