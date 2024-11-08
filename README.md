### Swiggy Clone - Full Stack Web Application

This project is a Swiggy Clone built as a full-stack web application. It uses Angular for the frontend and mock APIs to replicate features like user authentication, registration, and food ordering functionality. The app allows users to sign up, log in, and order food from various restaurants.

#### Features

- **User Authentication:**
  Users can register and log in using their email, username, and password. User information is stored locally, with authentication managed through mock APIs. Successful login or registration directs users to the food order page.

- **Food Ordering:**
  Users can explore a range of restaurants and menu items, add selected items to the cart, and go through an ordering process (UI simulation only, no payment integration).

- **Routing and Navigation:**
  The application includes protected routes requiring login (implemented with Auth Guard). Unauthenticated users trying to access these routes are redirected to the login page with a relevant message.

- **Responsive Design:**
  The app is designed with a mobile-first approach and is optimized to be responsive on both mobile and desktop devices.

#### Tech Stack

- **Frontend:**
  - **Angular** (latest version)
  - **Bootstrap** or **Tailwind CSS** for a modern, responsive interface
  - **RxJS** for handling asynchronous tasks and reactive programming

- **Backend (Mock APIs):**
  - **MockAPI.io** for backend simulation
  - **HTTP Client** for API interaction

- **Additional Libraries:**
  - **Angular Forms** for user input and validation
  - **BehaviorSubject** from RxJS for dynamic message management
