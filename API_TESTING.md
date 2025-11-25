# Hospital Backend API - Quick Test Guide

## Start Server

```bash
npm start
```

## Test Endpoints with curl (or use Postman/Thunder Client)

### 1. STAFFING APIs

**Get Staffing Data:**

```bash
curl "http://localhost:3000/api/resources/staffing?hospital_id=HOSP-001"
```

**Add/Update Staffing:**

```bash
curl -X POST http://localhost:3000/api/resources/staffing \
  -H "Content-Type: application/json" \
  -d "{\"hospital_id\":\"HOSP-001\",\"staff_type\":\"doctor\",\"department\":\"emergency\",\"current_count\":15,\"available_count\":12,\"on_shift_count\":10,\"on_leave_count\":5,\"shift\":\"morning\"}"
```

### 2. INVENTORY APIs

**Get All Inventory:**

```bash
curl "http://localhost:3000/api/resources/inventory?hospital_id=HOSP-001"
```

**Get Low Stock Items:**

```bash
curl "http://localhost:3000/api/resources/inventory?hospital_id=HOSP-001&low_stock=true"
```

**Add Inventory Item:**

```bash
curl -X POST http://localhost:3000/api/resources/inventory \
  -H "Content-Type: application/json" \
  -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"N95 Masks\",\"category\":\"ppe\",\"current_stock\":150,\"unit\":\"pieces\",\"reorder_level\":200,\"location\":\"store\"}"
```

### 3. BED CAPACITY APIs

**Get Bed Capacity:**

```bash
curl "http://localhost:3000/api/resources/capacity?hospital_id=HOSP-001"
```

**Update Bed Capacity:**

```bash
curl -X POST http://localhost:3000/api/resources/capacity \
  -H "Content-Type: application/json" \
  -d "{\"hospital_id\":\"HOSP-001\",\"ward_type\":\"icu\",\"total_beds\":50,\"occupied_beds\":42,\"available_beds\":8,\"reserved_beds\":5}"
```

### 4. SUPPLIER APIs

**Add Supplier First:**

```bash
curl -X POST http://localhost:3000/api/procurement/suppliers \
  -H "Content-Type: application/json" \
  -d "{\"supplier_id\":\"SUP-001\",\"name\":\"MedSupply Co\",\"contact_person\":\"John Doe\",\"phone\":\"+91-9876543210\",\"email\":\"john@medsupply.com\",\"items_supplied\":[\"masks\",\"gloves\",\"ppe\"],\"rating\":4.5,\"delivery_time_avg\":3}"
```

**Get All Suppliers:**

```bash
curl "http://localhost:3000/api/procurement/suppliers"
```

### 5. PURCHASE ORDER APIs

**Create Purchase Order:**

```bash
curl -X POST http://localhost:3000/api/procurement/orders \
  -H "Content-Type: application/json" \
  -d "{\"hospital_id\":\"HOSP-001\",\"supplier_id\":\"SUP-001\",\"items\":[{\"item_name\":\"N95 Masks\",\"quantity\":500,\"unit_price\":50},{\"item_name\":\"Gloves\",\"quantity\":1000,\"unit_price\":10}],\"priority\":\"urgent\",\"requested_by\":\"Dr. Smith\"}"
```

**Get All Orders:**

```bash
curl "http://localhost:3000/api/procurement/orders?hospital_id=HOSP-001"
```

**Get Single Order:**

```bash
curl "http://localhost:3000/api/procurement/orders/PO-2024-001"
```

**Update Order Status:**

```bash
curl -X PATCH http://localhost:3000/api/procurement/orders/PO-2024-001 \
  -H "Content-Type: application/json" \
  -d "{\"status\":\"approved\"}"
```

## View in MongoDB

```bash
mongosh
use hospital_db
db.staffings.find().pretty()
db.inventories.find().pretty()
db.bedcapacities.find().pretty()
db.purchaseorders.find().pretty()
db.suppliers.find().pretty()
```

## API Endpoints Summary

| Endpoint                            | Method | Purpose              |
| ----------------------------------- | ------ | -------------------- |
| `/api/resources/staffing`           | GET    | Get staffing data    |
| `/api/resources/staffing`           | POST   | Add/update staffing  |
| `/api/resources/inventory`          | GET    | Get inventory        |
| `/api/resources/inventory`          | POST   | Add/update inventory |
| `/api/resources/capacity`           | GET    | Get bed capacity     |
| `/api/resources/capacity`           | POST   | Update bed capacity  |
| `/api/procurement/orders`           | GET    | Get all orders       |
| `/api/procurement/orders/:order_id` | GET    | Get order details    |
| `/api/procurement/orders`           | POST   | Create order         |
| `/api/procurement/orders/:order_id` | PATCH  | Update order status  |
| `/api/procurement/suppliers`        | GET    | Get suppliers        |
| `/api/procurement/suppliers`        | POST   | Add supplier         |
