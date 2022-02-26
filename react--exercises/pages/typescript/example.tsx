import React from 'react'
import Person from '../../components/Person';

export default function examplePerson() {
  return (
    <div>
        <Person name='Amy Santiago' />
        <Person name='Jake Peralta' age={36} />
    </div>
  )
}
