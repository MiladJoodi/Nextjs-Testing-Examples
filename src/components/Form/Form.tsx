'use client'

import { useState } from 'react'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    if (!name || !email) {
      setError('Both fields are required')
      return
    }

    setError('')
    setSuccess(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button type="submit">Submit</button>
      {error && <p role="alert">{error}</p>}
      {success && <p role="status">Form submitted!</p>}
    </form>
  )
}
