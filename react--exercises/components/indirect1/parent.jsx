import React from 'react'
import Child from './child'

export default function Parent() {
  function talkToMe(param) {
    console.log(param);
    console.log("Someone talked to me")
  }
  return (
    <div>
        <Child function={talkToMe}/>
    </div>
  )
}
