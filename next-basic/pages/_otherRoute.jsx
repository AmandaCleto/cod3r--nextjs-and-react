import React from 'react'

// Files with prefix _ still are valid routes. They are not private routes
export default function _otherRoute() {
  return (
    <div>_otherRoute</div>
  )
}
