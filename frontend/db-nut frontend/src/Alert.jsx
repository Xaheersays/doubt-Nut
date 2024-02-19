import React, { memo } from 'react'
import Alert from '@mui/material/Alert';

function AlertCustom({fetchStatus,content}) {
  return (
    <div className='w-full'>
            <Alert severity={fetchStatus}>
            {content || ""}
              </Alert>
        </div>
  )
}

export default memo(AlertCustom)