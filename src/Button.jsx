import React from 'react'

function ClickMe() {
    alert ('Welcome to react SKCET')
}

export default function button() {
  return (
    <button onClick={ClickMe}>Click Me</button>
  )
}
