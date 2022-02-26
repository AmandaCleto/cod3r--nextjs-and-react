import React from 'react'
import AnyNameYouWant2, { Comp1 as AnyNameYouWant1, Comp2, Comp4, Comp5, Comp6 } from '../../components/module/functions'

/**
    If there is no default exported functions from the path you are importing, you have to use {}, to receive the functions. You can use the function name or you can rename it using 'as', like:
    import { Comp1 as AnyNameYouWant1 } from '...../....';


    If the function is exported as default, you could call it like:
    import AnyNameYouWant2 from '....../...';. This way you can name the default exported function as you wish. By the way, the exported default function can be an anonymous function
*/


export default function test() {
  return (
    <div>
      <AnyNameYouWant1></AnyNameYouWant1>
      <Comp2></Comp2>
      <AnyNameYouWant2></AnyNameYouWant2>
      <Comp4></Comp4>
      <Comp5></Comp5>
      <Comp6 msg="props"></Comp6 >
    </div>
  )
}
