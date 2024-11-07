// src/layouts/DashboardLayout.tsx

import React from "react";
import { Sidebar } from "../app/components/ui/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: "passenger" | "driver";
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  userType,
}) => {
  return (
    <div className="flex h-screen bg-custom-white dark:bg-gray-900">
      <Sidebar userType={userType} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
