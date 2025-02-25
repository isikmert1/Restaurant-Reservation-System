# Restaurant Reservation System

This is a multi-step reservation system built with **React**, **Vite**, **Tailwind**, and **shadcn** UI components. It demonstrates how to collect user information across multiple steps (date, time, guests, requests, and personal info) and store it in a global context—ready to be sent to a backend later.

## Features

- **Multi-Step Form**: Calendar (date), time selection, guest count, special requests, and user info  
- **Global State Management**: Using a custom `ReservationContext` to store form data across steps  
- **Validation**: Using **React Hook Form** and **Zod** for robust input validation  
- **shadcn UI**: For consistent, modern styling of form components  
- **Responsive Design**: Adjusted layouts for small and large screens

## Prerequisites

- **Node.js** (version 14+ recommended)  
- **npm** (or **yarn**) for package management

## Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/isikmert1/Restaurant-Reservation-System.git
   cd Restaurant-Reservation-System
   
2. **Install Dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   
3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   This will start the Vite development server. Open your browser and go to http://localhost:5173 (or the URL       displayed in your terminal).

4. **Build for Production** (optional)**:**
   ```bash
   npm run build
   ```
   This creates a production-ready dist/ folder with optimized files.

5. **Preview the Production Build** (optional)**:**
   ```bash
   npm run preview
   ```
   This serves the dist/ build locally so you can test before deploying.

## Project Structure

```
restaurant-reservation/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ button.jsx
│  │  │  ├─ calendar.jsx
│  │  │  ├─ form.jsx
│  │  │  ├─ input.jsx
│  │  │  ├─ label.jsx
│  │  │  └─ ...
│  │  ├─ Footer.jsx
│  │  ├─ Guest.jsx
│  │  ├─ Info.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ Request.jsx
│  │  └─ Time.jsx
│  ├─ lib/
│  │  └─ utils.js
│  ├─ pages/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ ReservationContext.js
│  └─ ...
├─ .gitignore
├─ package.json
├─ README.md
├─ tailwind.config.js
├─ vite.config.js
└─ ...
```

## Key Files

- **`App.jsx`**: The main component that renders the multi-step flow.
- **`ReservationContext.js`**: Manages global state for the user’s reservation data.
- **`components/ui/`**: shadcn-based form elements (`Input`, `Form`, `Button`, etc.).
- **`Info.jsx`**: Final form step, uses React Hook Form + Zod for validation.
- **`Time.jsx`, `Guest.jsx`, etc.**: Other steps that update `reservationData`.

## Usage

- **Navigate Through Steps**: Click on “Tarih” (Date), “Saat” (Time), “Misafir” (Guests), “İstek” (Requests), and “Bilgi” (Info) to enter reservation details.
- **Data Storage**: All data is stored in the `ReservationContext`. See `DebugReservationData` (if you create one) or open the React DevTools to watch the context values update.
- **Validation**: The `Info.jsx` step demonstrates advanced validation with React Hook Form and Zod.
- **Ready for Backend**: Currently, data is stored locally. Once you have an API, you can send the `reservationData` to your server in the final step.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Create a new Pull Request

## License

MIT – Feel free to modify and use as you like.

