import React from 'react'

interface PersonProps {
    name:string,
    age?: number,
}

export default function Person(props: PersonProps) {
  return (
  <div>
        <div>Name: {props.name}</div>
        <div>Idade: {props.age ?? 'não informada'}</div>
  </div>
  )
}
