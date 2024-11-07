// src/app/driver/dashboard/page.tsx

import DashboardLayout from "../../../layouts/DashboardLayout";

export default function DriverDashboard() {
  return (
    <DashboardLayout userType="driver">
      <h1 className="text-2xl font-bold mb-4">Driver Dashboard</h1>
      {/* Add your driver dashboard content here */}
    </DashboardLayout>
  );
}
