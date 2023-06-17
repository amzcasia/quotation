import { useState } from 'react'

export default function Init(){
    return(
    <form>
      <label>
        Name of Guest:
        <input type="text" />
      </label>
      <label>
        Date:
        <input type="text" />
      </label>
      <label>
        No. of days:
        <input type="text" />
      </label>
      <label htmlFor="">
        Headcount:
        <input type="text" />
      </label>
    </form>
    )
}