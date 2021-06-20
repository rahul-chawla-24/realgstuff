import React from 'react'
import Alert from '../Component/Alert'

function AlertDashboardView({
    user,
    branchAlerts
}) {
  return (
    <div >
        {<Alert user={user} branchAlerts={branchAlerts} />}
    </div>
  );
}

export default AlertDashboardView;
