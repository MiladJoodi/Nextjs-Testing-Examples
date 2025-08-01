"use client"

import React, { useState } from 'react'

export function NameForm() {
  const [name, setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmittedName(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      {submittedName && <p>You submitted: {submittedName}</p>}
    </div>
  )
}
