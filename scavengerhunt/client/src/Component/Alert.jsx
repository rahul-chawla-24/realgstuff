import React, {useEffect} from 'react'
import NotifyMe from 'react-notification-timeline';
import { Box } from '@material-ui/core'

function Alert({
    branchAlerts
}) {
  return (
    <Box mx={2} p={2}>
    <NotifyMe
        data={branchAlerts}
        storageKey='text'
        notific_key='timestamp'
        notific_value='text'
        heading='Notification Alerts'
        sortedByKey={false}
        size={64}
        color="yellow"
        markAsReadFn={() =>{}}
    />
    </Box>
  );
}

export default Alert;
