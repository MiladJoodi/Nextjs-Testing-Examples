import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'

describe('Counter component', () => {
  it('should render initial count', () => {
    render(<Counter />)
    expect(screen.getByText(/you clicked 0 times/i)).toBeInTheDocument()
  })

  it('should increase count when button is clicked', async () => {
    render(<Counter />)
    const button = screen.getByRole('button', { name: /click me/i })

    await userEvent.click(button)
    await userEvent.click(button)

    expect(screen.getByText(/you clicked 2 times/i)).toBeInTheDocument()
  })
})
