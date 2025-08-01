import React, { useState } from 'react'

export function FetchData() {
  const [data, setData] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      if (!response.ok) throw new Error('Network error')
      const json = await response.json()
      setData(json.title)
    } catch (err) {
      setError('Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}
      {error && <p role="alert">{error}</p>}
      {data && <p>Data: {data}</p>}
    </div>
  )
}
