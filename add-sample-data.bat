@echo off
echo ============================================
echo Hospital Surge Management System
echo Adding Sample Data to Database
echo ============================================
echo.

echo [1/8] Adding Supplier...
curl -X POST http://localhost:3000/api/procurement/suppliers -H "Content-Type: application/json" -d "{\"supplier_id\":\"SUP-001\",\"name\":\"MedSupply Co\",\"contact_person\":\"John Doe\",\"phone\":\"+91-9876543210\",\"email\":\"john@medsupply.com\",\"items_supplied\":[\"masks\",\"gloves\",\"ppe\"],\"rating\":4.5,\"delivery_time_avg\":3}"
echo.

echo [2/8] Adding N95 Masks to Inventory...
curl -X POST http://localhost:3000/api/resources/inventory -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"N95 Masks\",\"category\":\"ppe\",\"current_stock\":150,\"unit\":\"pieces\",\"reorder_level\":200,\"location\":\"store\"}"
echo.

echo [3/8] Adding Ventilators to Inventory...
curl -X POST http://localhost:3000/api/resources/inventory -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"Ventilators\",\"category\":\"equipment\",\"current_stock\":8,\"unit\":\"pieces\",\"reorder_level\":15,\"location\":\"store\"}"
echo.

echo [4/8] Adding Oxygen Cylinders to Inventory...
curl -X POST http://localhost:3000/api/resources/inventory -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"item_name\":\"Oxygen Cylinders\",\"category\":\"equipment\",\"current_stock\":25,\"unit\":\"pieces\",\"reorder_level\":40,\"location\":\"store\"}"
echo.

echo [5/8] Adding Emergency Department Doctors...
curl -X POST http://localhost:3000/api/resources/staffing -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"staff_type\":\"doctor\",\"department\":\"emergency\",\"current_count\":15,\"available_count\":12,\"on_shift_count\":10,\"on_leave_count\":5,\"shift\":\"morning\"}"
echo.

echo [6/8] Adding ICU Nurses...
curl -X POST http://localhost:3000/api/resources/staffing -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"staff_type\":\"nurse\",\"department\":\"icu\",\"current_count\":40,\"available_count\":35,\"on_shift_count\":30,\"on_leave_count\":10,\"shift\":\"morning\"}"
echo.

echo [7/8] Adding ICU Bed Capacity...
curl -X POST http://localhost:3000/api/resources/capacity -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"ward_type\":\"icu\",\"total_beds\":50,\"occupied_beds\":42,\"available_beds\":8,\"reserved_beds\":5}"
echo.

echo [8/8] Adding General Ward Capacity...
curl -X POST http://localhost:3000/api/resources/capacity -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"ward_type\":\"general\",\"total_beds\":200,\"occupied_beds\":165,\"available_beds\":35,\"reserved_beds\":10}"
echo.

echo [BONUS] Creating Sample Purchase Order...
curl -X POST http://localhost:3000/api/procurement/orders -H "Content-Type: application/json" -d "{\"hospital_id\":\"HOSP-001\",\"supplier_id\":\"SUP-001\",\"items\":[{\"item_name\":\"N95 Masks\",\"quantity\":500,\"unit_price\":50}],\"priority\":\"urgent\",\"requested_by\":\"Admin\"}"
echo.

echo ============================================
echo ✅ Sample Data Added Successfully!
echo ============================================
echo.
echo Now you can refresh your frontend to see the data!
echo Frontend: http://localhost:3001
echo.
pause
