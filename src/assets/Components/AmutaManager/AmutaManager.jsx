import React from 'react'
import style from './AmutaManager.module.scss'
import { ItemsDisplay } from '../ItemsDisplay/ItemsDisplay'
import { Button } from '@mui/material'
import logo1 from '../../Graphics/DemoLogo.jpg'

export const AmutaManager = () => {
  return (
    <div className={style['kehila-manager-container']}>
        <h1>LOGO</h1>
        <h2>מי אנחנו?</h2>
        <p>
            caregiver מספק לרוב טיפול סיעודי מורכב, תמיכה רגשית וקוגניטיבית, וניהול הטיפול בבית ומחוצה לו. תפקידו מוביל לתחושות חיוביות, אולם גם לנטל משפחתי, בריאותי, נפשי, תעסוקתי וכלכלי מורכב.
        </p>
        {/* <button className={style['button']}>צור קהילה</button> */}
        <Button variant='contained'>צור קהילה</Button>
        <ItemsDisplay title={'עמותות'} src1={logo1} src2={logo1} src3={logo1}/>
        <ItemsDisplay title={'קהילות'}  src1={logo1} src2={logo1} src3={logo1}/>
    </div>
  )
}
