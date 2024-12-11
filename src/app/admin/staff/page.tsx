"use client";

import StaffItem from "@/components/staff/staffItem";

const StaffPage = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 p-4">
        <StaffItem
          title="دکتر ها"
          description="میتوانید به مدیریت دکتر ها بپردازید"
          href="staff/doctors"
        />
        <StaffItem
          title="کارکنان ها"
          description="میتوانید به مدیریت کارکنان ها بپردازید"
          href="staff/personnels"
        />
      </div>
    </div>
  );
};

export default StaffPage;
