import React from "react";
import { useLocation } from "react-router-dom";

const DashboardSub = () => {
  const location = useLocation();
  console.log("locate", location.state);

  return (
    <div>
      <p>
        This is user login email______is:
        {location.state?.user}
      </p>
    </div>
  );
};

export default DashboardSub;
