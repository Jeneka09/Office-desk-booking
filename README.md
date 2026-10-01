# 🏢 Office Desk Booking System

A responsive **Office Desk Booking System** built using **HTML, CSS, JavaScript, and React.js**.  
This project helps employees view available desks, book desks for a selected date, manage their bookings, and allows administrators to monitor desk usage.

## 🚀 Features

### 👤 Employee Dashboard
- View available and booked desks
- Select a booking date
- Search for desks
- Filter desks by floor
- Filter desks by zone
- View desk details
- Book an available desk
- Cancel existing bookings
- View booking history
- Responsive design

### 🛠️ Admin Dashboard
- View total number of desks
- View available desks
- View desks booked today
- View total bookings
- View today's booking details
- Monitor employee desk usage

### 💾 Data Storage
- Uses **Browser LocalStorage**
- Bookings remain available after refreshing the page
- No backend or database required

## 🖥️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- React.js
- React Hooks
- LocalStorage
- Vite

## 📂 Project Structure

```text
office-desk-booking/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── DeskCard.js
│   │   ├── BookingModal.js
│   │   ├── BookingList.js
│   │   └── StatsCard.js
│   │
│   ├── data/
│   │   └── desks.js
│   │
│   ├── pages/
│   │   ├── Dashboard.js
│   │   └── AdminDashboard.js
│   │
│   ├── App.js
│   ├── App.css
│   └── main.js
│
├── package.json
└── README.md