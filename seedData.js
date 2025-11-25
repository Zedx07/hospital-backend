require('dotenv').config();
const mongoose = require('mongoose');
const Staffing = require('./models/Staffing');
const Inventory = require('./models/Inventory');
const BedCapacity = require('./models/BedCapacity');
const PurchaseOrder = require('./models/PurchaseOrder');
const Supplier = require('./models/Supplier');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const staffingData = [
  {
    hospital_id: "HOSP-001",
    staff_type: "doctor",
    current_count: 25,
    available_count: 20,
    on_shift_count: 18,
    on_leave_count: 2,
    department: "emergency",
    shift: "morning",
    last_updated: new Date("2024-03-15T08:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    staff_type: "nurse",
    current_count: 50,
    available_count: 45,
    on_shift_count: 40,
    on_leave_count: 5,
    department: "icu",
    shift: "morning",
    last_updated: new Date("2024-03-15T08:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    staff_type: "nurse",
    current_count: 45,
    available_count: 42,
    on_shift_count: 38,
    on_leave_count: 3,
    department: "general_ward",
    shift: "evening",
    last_updated: new Date("2024-03-15T16:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    staff_type: "doctor",
    current_count: 15,
    available_count: 12,
    on_shift_count: 10,
    on_leave_count: 3,
    department: "icu",
    shift: "night",
    last_updated: new Date("2024-03-15T20:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    staff_type: "support_staff",
    current_count: 30,
    available_count: 28,
    on_shift_count: 25,
    on_leave_count: 2,
    department: "general",
    shift: "morning",
    last_updated: new Date("2024-03-15T08:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  }
];

const inventoryData = [
  {
    hospital_id: "HOSP-001",
    item_name: "N95 Masks",
    category: "ppe",
    current_stock: 150,
    unit: "pieces",
    reorder_level: 200,
    location: "store",
    expiry_date: new Date("2025-12-31T00:00:00Z"),
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "Ventilators",
    category: "equipment",
    current_stock: 8,
    unit: "pieces",
    reorder_level: 15,
    location: "ward",
    expiry_date: null,
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "Paracetamol 500mg",
    category: "medicine",
    current_stock: 5000,
    unit: "boxes",
    reorder_level: 3000,
    location: "pharmacy",
    expiry_date: new Date("2025-06-30T00:00:00Z"),
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "Surgical Gloves",
    category: "ppe",
    current_stock: 800,
    unit: "boxes",
    reorder_level: 1000,
    location: "store",
    expiry_date: new Date("2026-01-31T00:00:00Z"),
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "Oxygen Cylinders",
    category: "equipment",
    current_stock: 25,
    unit: "pieces",
    reorder_level: 40,
    location: "ward",
    expiry_date: null,
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "IV Fluid Bags",
    category: "supplies",
    current_stock: 450,
    unit: "boxes",
    reorder_level: 600,
    location: "pharmacy",
    expiry_date: new Date("2025-09-30T00:00:00Z"),
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    item_name: "Hand Sanitizer",
    category: "supplies",
    current_stock: 120,
    unit: "bottles",
    reorder_level: 200,
    location: "store",
    expiry_date: new Date("2025-08-31T00:00:00Z"),
    last_updated: new Date("2024-03-15T10:30:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  }
];

const bedCapacityData = [
  {
    hospital_id: "HOSP-001",
    ward_type: "general",
    total_beds: 200,
    occupied_beds: 165,
    available_beds: 35,
    reserved_beds: 10,
    last_updated: new Date("2024-03-15T11:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    ward_type: "icu",
    total_beds: 50,
    occupied_beds: 42,
    available_beds: 8,
    reserved_beds: 5,
    last_updated: new Date("2024-03-15T11:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    ward_type: "emergency",
    total_beds: 75,
    occupied_beds: 58,
    available_beds: 17,
    reserved_beds: 15,
    last_updated: new Date("2024-03-15T11:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  },
  {
    hospital_id: "HOSP-001",
    ward_type: "isolation",
    total_beds: 30,
    occupied_beds: 12,
    available_beds: 18,
    reserved_beds: 8,
    last_updated: new Date("2024-03-15T11:00:00Z"),
    created_at: new Date("2024-01-01T00:00:00Z")
  }
];

const supplierData = [
  {
    supplier_id: "SUP-001",
    name: "MedSupply Co",
    contact_person: "Rajesh Kumar",
    phone: "+91-9876543210",
    email: "contact@medsupply.com",
    items_supplied: ["N95 Masks", "Surgical Gloves", "PPE Kits", "Oxygen Cylinders", "Hand Sanitizer"],
    rating: 4.5,
    delivery_time_avg: 3,
    is_active: true,
    created_at: new Date("2023-06-15T00:00:00Z")
  },
  {
    supplier_id: "SUP-002",
    name: "HealthEquip India",
    contact_person: "Priya Sharma",
    phone: "+91-9988776655",
    email: "sales@healthequip.in",
    items_supplied: ["Ventilators", "Patient Monitors", "N95 Masks", "Medical Equipment"],
    rating: 4.8,
    delivery_time_avg: 5,
    is_active: true,
    created_at: new Date("2023-08-20T00:00:00Z")
  },
  {
    supplier_id: "SUP-003",
    name: "PharmaDistributors Ltd",
    contact_person: "Amit Patel",
    phone: "+91-9123456789",
    email: "orders@pharmadist.com",
    items_supplied: ["Paracetamol 500mg", "IV Fluid Bags", "Antibiotics", "Medicines"],
    rating: 4.2,
    delivery_time_avg: 2,
    is_active: true,
    created_at: new Date("2023-05-10T00:00:00Z")
  },
  {
    supplier_id: "SUP-004",
    name: "QuickMed Supplies",
    contact_person: "Sneha Reddy",
    phone: "+91-9765432108",
    email: "info@quickmed.co.in",
    items_supplied: ["Surgical Gloves", "Syringes", "Medical Supplies", "Hand Sanitizer"],
    rating: 4.0,
    delivery_time_avg: 4,
    is_active: true,
    created_at: new Date("2023-09-05T00:00:00Z")
  },
  {
    supplier_id: "SUP-005",
    name: "BioMed Solutions",
    contact_person: "Vikram Singh",
    phone: "+91-9334455667",
    email: "contact@biomed.in",
    items_supplied: ["Oxygen Cylinders", "Ventilators", "ICU Equipment"],
    rating: 4.6,
    delivery_time_avg: 6,
    is_active: false,
    created_at: new Date("2023-07-12T00:00:00Z")
  }
];

const purchaseOrderData = [
  {
    order_id: "PO-2024-001",
    hospital_id: "HOSP-001",
    supplier_id: "SUP-001",
    items: [
      {
        item_name: "N95 Masks",
        quantity: 500,
        unit_price: 50,
        total_price: 25000
      },
      {
        item_name: "Surgical Gloves",
        quantity: 1000,
        unit_price: 15,
        total_price: 15000
      }
    ],
    total_amount: 40000,
    status: "delivered",
    priority: "normal",
    requested_by: "procurement@hospital.com",
    requested_date: new Date("2024-03-01T09:00:00Z"),
    expected_delivery: new Date("2024-03-08T00:00:00Z"),
    created_at: new Date("2024-03-01T09:00:00Z")
  },
  {
    order_id: "PO-2024-002",
    hospital_id: "HOSP-001",
    supplier_id: "SUP-002",
    items: [
      {
        item_name: "Ventilators",
        quantity: 5,
        unit_price: 250000,
        total_price: 1250000
      }
    ],
    total_amount: 1250000,
    status: "approved",
    priority: "urgent",
    requested_by: "ai_agent",
    requested_date: new Date("2024-03-14T14:30:00Z"),
    expected_delivery: new Date("2024-03-20T00:00:00Z"),
    created_at: new Date("2024-03-14T14:30:00Z")
  },
  {
    order_id: "PO-2024-003",
    hospital_id: "HOSP-001",
    supplier_id: "SUP-003",
    items: [
      {
        item_name: "Paracetamol 500mg",
        quantity: 10000,
        unit_price: 2,
        total_price: 20000
      },
      {
        item_name: "IV Fluid Bags",
        quantity: 500,
        unit_price: 80,
        total_price: 40000
      }
    ],
    total_amount: 60000,
    status: "pending",
    priority: "normal",
    requested_by: "pharmacy@hospital.com",
    requested_date: new Date("2024-03-15T10:00:00Z"),
    expected_delivery: new Date("2024-03-22T00:00:00Z"),
    created_at: new Date("2024-03-15T10:00:00Z")
  },
  {
    order_id: "PO-2024-004",
    hospital_id: "HOSP-001",
    supplier_id: "SUP-001",
    items: [
      {
        item_name: "Oxygen Cylinders",
        quantity: 20,
        unit_price: 5000,
        total_price: 100000
      },
      {
        item_name: "Hand Sanitizer",
        quantity: 200,
        unit_price: 150,
        total_price: 30000
      }
    ],
    total_amount: 130000,
    status: "pending",
    priority: "urgent",
    requested_by: "ai_agent",
    requested_date: new Date("2024-03-15T15:45:00Z"),
    expected_delivery: new Date("2024-03-18T00:00:00Z"),
    created_at: new Date("2024-03-15T15:45:00Z")
  },
  {
    order_id: "PO-2024-005",
    hospital_id: "HOSP-001",
    supplier_id: "SUP-002",
    items: [
      {
        item_name: "N95 Masks",
        quantity: 1000,
        unit_price: 48,
        total_price: 48000
      }
    ],
    total_amount: 48000,
    status: "ordered",
    priority: "urgent",
    requested_by: "ai_agent",
    requested_date: new Date("2024-03-13T08:00:00Z"),
    expected_delivery: new Date("2024-03-17T00:00:00Z"),
    created_at: new Date("2024-03-13T08:00:00Z")
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Clearing existing data...');
    await Staffing.deleteMany({});
    await Inventory.deleteMany({});
    await BedCapacity.deleteMany({});
    await Supplier.deleteMany({});
    await PurchaseOrder.deleteMany({});

    console.log('Inserting Staffing data...');
    await Staffing.insertMany(staffingData);
    console.log(`✓ ${staffingData.length} staffing records inserted`);

    console.log('Inserting Inventory data...');
    await Inventory.insertMany(inventoryData);
    console.log(`✓ ${inventoryData.length} inventory records inserted`);

    console.log('Inserting Bed Capacity data...');
    await BedCapacity.insertMany(bedCapacityData);
    console.log(`✓ ${bedCapacityData.length} bed capacity records inserted`);

    console.log('Inserting Supplier data...');
    await Supplier.insertMany(supplierData);
    console.log(`✓ ${supplierData.length} supplier records inserted`);

    console.log('Inserting Purchase Order data...');
    await PurchaseOrder.insertMany(purchaseOrderData);
    console.log(`✓ ${purchaseOrderData.length} purchase order records inserted`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\nSummary:');
    console.log(`- Staffing: ${staffingData.length} records`);
    console.log(`- Inventory: ${inventoryData.length} records`);
    console.log(`- Bed Capacity: ${bedCapacityData.length} records`);
    console.log(`- Suppliers: ${supplierData.length} records`);
    console.log(`- Purchase Orders: ${purchaseOrderData.length} records`);

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
