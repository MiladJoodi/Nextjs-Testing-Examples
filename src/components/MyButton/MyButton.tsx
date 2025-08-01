import React, { useState } from 'react'

export default function MyButton() {
  const [clicked, setClicked] = useState(false)

  return (
    <button onClick={() => setClicked(true)}>
      {clicked ? 'Clicked' : 'Click me'}
    </button>
  )
}
