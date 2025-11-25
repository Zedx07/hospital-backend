# 🏥 Hospital Surge Management System - Complete Setup

## 🚀 Quick Start Guide

### 1️⃣ Backend Setup

```bash
# Navigate to backend
cd hospital-backend

# Install dependencies
npm install

# Create .env file
echo MONGODB_URI=mongodb://localhost:27017/hospital_db > .env
echo PORT=3000 >> .env

# Start backend server
npm start
```

Backend runs on: `http://localhost:3000`

### 2️⃣ Frontend Setup

```bash
# Navigate to frontend (in new terminal)
cd hospital-backend/frontend

# Install dependencies
npm install

# Start frontend
npm start
```

Frontend opens at: `http://localhost:3001`

---

## 📊 Adding Sample Data

Use these curl commands or Postman to populate your database:

### Add Supplier:

```bash
curl -X POST http://localhost:3000/api/procurement/suppliers -H "Content-Type: application/json" -d "{\"supplier_id\":\"SUP-001\",\"name\":\"MedSupply Co\",\"contact_person\":\"John Doe\",\"phone\":\"+91-9876543210\",\"email\":\"john@medsupply.com\",\"items_supplied\":[\"masks\",\"gloves\",\"ppe\"],\"rating\":4.5,\"delivery_time_avg\":3}"
```

### Add Inventory:

```bash
curl -X POST http://localhost:3000/api/resources/inventory -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"N95 Masks\",\"category\":\"ppe\",\"current_stock\":150,\"unit\":\"pieces\",\"reorder_level\":200,\"location\":\"store\"}"

curl -X POST http://localhost:3000/api/resources/inventory -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"Ventilators\",\"category\":\"equipment\",\"current_stock\":8,\"unit\":\"pieces\",\"reorder_level\":15,\"location\":\"store\"}"
```

### Add Staffing:

```bash
curl -X POST http://localhost:3000/api/resources/staffing -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"staff_type\":\"doctor\",\"department\":\"emergency\",\"current_count\":15,\"available_count\":12,\"on_shift_count\":10,\"on_leave_count\":5,\"shift\":\"morning\"}"

curl -X POST http://localhost:3000/api/resources/staffing -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"staff_type\":\"nurse\",\"department\":\"icu\",\"current_count\":40,\"available_count\":35,\"on_shift_count\":30,\"on_leave_count\":10,\"shift\":\"morning\"}"
```

### Add Bed Capacity:

```bash
curl -X POST http://localhost:3000/api/resources/capacity -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"ward_type\":\"icu\",\"total_beds\":50,\"occupied_beds\":42,\"available_beds\":8,\"reserved_beds\":5}"

curl -X POST http://localhost:3000/api/resources/capacity -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"ward_type\":\"general\",\"total_beds\":200,\"occupied_beds\":165,\"available_beds\":35,\"reserved_beds\":10}"
```

### Create Purchase Order:

```bash
curl -X POST http://localhost:3000/api/procurement/orders -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"supplier_id\":\"SUP-001\",\"items\":[{\"item_name\":\"N95 Masks\",\"quantity\":500,\"unit_price\":50}],\"priority\":\"urgent\",\"requested_by\":\"Admin\"}"
```

---

## 🎯 Testing the Application

1. **Open Frontend**: http://localhost:3001
2. **See Dashboard**: Inventory, Staffing, Beds, Orders tabs
3. **Use AI Chat**: Right panel - ask questions
4. **Approve Orders**: Click on Orders tab → Approve/Reject
5. **View Real-time Data**: All tabs show live database data

---

## 📱 Features Overview

### Split-Screen Design:

- **Left (60%)**: Data dashboard with tabs
- **Right (40%)**: AI chat assistant

### 4 Main Tabs:

1. **📦 Inventory**: Track stock levels, low stock alerts
2. **👥 Staffing**: Monitor staff by department & shift
3. **🛏️ Beds**: View capacity & occupancy rates
4. **📋 Orders**: Manage purchase orders & approvals

### AI Chat Features:

- Quick command buttons
- Context-aware responses
- Typing indicators
- Message history

---

## 🛠️ Tech Stack

### Backend:

- Node.js + Express
- MongoDB + Mongoose
- REST APIs
- CORS enabled

### Frontend:

- React 18
- CSS3 (Custom styling)
- Fetch API
- Responsive design

---

## 📂 Complete File Structure

```
hospital-backend/
├── backend/
│   ├── models/
│   │   ├── Staffing.js
│   │   ├── Inventory.js
│   │   ├── BedCapacity.js
│   │   ├── PurchaseOrder.js
│   │   └── Supplier.js
│   ├── routes/
│   │   ├── resources.js
│   │   └── procurement.js
│   ├── db.js
│   ├── server.js
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.js
    │   │   └── AIChat.js
    │   ├── pages/
    │   │   ├── InventoryTab.js
    │   │   ├── StaffingTab.js
    │   │   ├── BedCapacityTab.js
    │   │   └── OrdersTab.js
    │   ├── services/
    │   │   └── api.js
    │   └── App.js
    └── package.json
```

---

## 🐛 Troubleshooting

### Backend won't start:

- Check MongoDB is running
- Verify .env file exists
- Check port 3000 is available

### Frontend won't connect:

- Ensure backend is running on port 3000
- Check browser console for errors
- Verify CORS is enabled in backend

### No data showing:

- Add sample data using curl commands above
- Check MongoDB connection
- Verify hospital_id is "HOSP-001"

---

## 🎓 For Demo/Presentation

### Demo Script:

1. Show Inventory tab → Point out low stock items
2. Click AI chat → Ask "Check inventory status"
3. AI suggests creating orders
4. Go to Orders tab → Approve pending order
5. Show Staffing → Department breakdown
6. Show Beds → Occupancy visualization

### Key Selling Points:

✅ Modern split-screen UI
✅ Real-time data from MongoDB
✅ AI-powered recommendations
✅ One-click order approvals
✅ Responsive design
✅ Production-ready code

---

## 🚀 Deployment Ready

### Backend Deploy:

- Heroku, Railway, or Render
- Update MongoDB URI to Atlas
- Set environment variables

### Frontend Deploy:

- Vercel, Netlify, or GitHub Pages
- Update API_BASE_URL in api.js
- Run `npm run build`

---

**Built for Hospital Surge Management 🏥**
