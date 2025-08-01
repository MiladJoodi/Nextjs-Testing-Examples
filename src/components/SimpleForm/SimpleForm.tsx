import React, { useState } from 'react'

type Props = {
  onSubmit: (value: string) => void
}

export function SimpleForm({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
