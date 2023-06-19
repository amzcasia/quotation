import { useState } from 'react'

export default function Init(){
    return(
    <form className='flex py-2 gap-x-1'>
      <label>
        Name of Guest:&nbsp;
        <input type="text" />
      </label>
      <label>
        Date:&nbsp;
        <input type="text" />
      </label>
      <label>
        No. of days:&nbsp;
        <input type="text" />
      </label>
      <label htmlFor="">
        Headcount:&nbsp;
        <input type="text" />
      </label>
    </form>
    )
}