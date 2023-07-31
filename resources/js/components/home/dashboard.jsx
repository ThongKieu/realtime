import React from 'react'
import CardMain from '../core/card'

function Dashboard() {
    var count = 10;
  return (
    <div>
        <CardMain
        title="Lịch Điện Nước"
        countNhan={count}
        countChuaPhan={count + 1}
        countDaPhan={count = count + 1}
        countHuy={count = count + 1}
      />
    </div>
  )
}

export default Dashboard
