import React from 'react'
import Child from './child'

export default function Parent(props) {
  return (
   <div>
       <h1>{props.family}</h1>
        <Child name="Mônica" family={props.family}/>
        <Child  {...props} name="Chandler" />
         {/*you should pass the props first than the specific attribute, so the specific attribute will have priority  */}
        <Child  name="Chandler" {...props}  />
        {/* here, the attribute coming from Father has more priority then the specific one passed here, that's why it prints 'jin' instead of 'chandler' */}
   </div>
  )
}
