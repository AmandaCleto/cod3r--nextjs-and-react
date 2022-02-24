import React, { useState } from 'react'

export default function form() {
    const [value, setValue] = useState('inicial');

    function emphasized() {
        setValue(value + "!")
    }
  return (
    <div>
        {/*  controlled components, there is a link between state and form */}
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={emphasized}>Emphasize</button>
    </div>
  )
}
