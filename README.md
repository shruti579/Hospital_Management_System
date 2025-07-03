# 🏥 Hospital Management System

This is a full-stack hospital management system built using **React.js**, **Node.js**, **Express**, and **MongoDB**.  
It allows patients to **register, log in, book appointments, and send messages**, while the **admin dashboard** lets admins manage doctors, users, and appointments.

---

## 🚀 Features

- ✅ User Registration & Login (JWT Auth)
- ✅ Book Appointments
- ✅ Send Messages to Admin
- ✅ View Appointments (User/Admin)
- ✅ Add or Manage Doctors
- ✅ Change Admin Credentials
- ✅ Role-based Access Control (Admin/User)
- ✅ Dashboard View for Admins

---

## 🛠 Tech Stack

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Other Tools**: JWT, Cloudinary, REST API, Postman

---

## 📦 Backend Dependencies

- `express` – Web framework
- `mongoose` – MongoDB object modeling
- `jsonwebtoken` – Authentication
- `bcrypt` – Password hashing
- `dotenv` – Environment variables
- `cloudinary` – Image uploads
- `cors`, `cookie-parser`, `validator`, `express-fileupload` – Middleware

---

## 📁 Project Structure

```bash
Hospital_Management_System/
├── backend/                  # Node.js + Express backend
├── dashboard/dashbord/      # React frontend (Admin/Doctor dashboard)
├── hosp/                    # React frontend (Public pages or home)
