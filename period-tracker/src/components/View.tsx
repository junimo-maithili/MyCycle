import React from 'react'
import { useState } from 'react/';

const View = () => {
    const [periods, setPeriods] = useState(() => {
        const savedPeriods = localStorage.getItem("periods");
      
        return savedPeriods ? JSON.parse(savedPeriods) : [];
      });

  return (
    
    <div>
      
    </div>
  )
}

export default View
