import React from 'react'
import CardMain from '../core/card'
import { Workbook } from "@fortune-sheet/react"
import "@fortune-sheet/react/dist/index.css"
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
        <div className='lg:h-[800px] w-[100%] md:h-[550px]'>
        <Workbook data={[{ name: "Sheet1" }]} />
        </div>
    </div>
  )
}

export default Dashboard
