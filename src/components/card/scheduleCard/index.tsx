import React from 'react'
import color from '../../../constant'
import { Styles } from '../../../style'

export default function ScheduleCard() {
  return (
    <div className='SheduleCard_div col-2 mx-1 p-5 justify-content-center' >
        <div className='SheduleCard_Time p-3 text-center DarkText3' >
        6am - 8am
        </div>
        <div className='text-center py-4 BlueText' >Kick Boxing</div>
        <div className='text-center' >
            <span className='BlueText2'>by</span>
            <span className='GreyText'>Jhos Kusam</span></div>
    </div>
  )
}
