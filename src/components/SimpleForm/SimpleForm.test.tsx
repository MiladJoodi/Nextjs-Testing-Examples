// src/components/SimpleForm.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SimpleForm } from './SimpleForm'

describe('SimpleForm component', () => {
  it('renders input and button', () => {
    render(<SimpleForm onSubmit={() => {}} />)

    expect(screen.getByPlaceholderText(/type something/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('updates input value when user types', async () => {
    render(<SimpleForm onSubmit={() => {}} />)
    const input = screen.getByPlaceholderText(/type something/i)

    await userEvent.type(input, 'hello')

    expect(input).toHaveValue('hello')
  })

  it('calls onSubmit with input value when form is submitted', async () => {
    const handleSubmit = jest.fn()
    render(<SimpleForm onSubmit={handleSubmit} />)
    const input = screen.getByPlaceholderText(/type something/i)
    const button = screen.getByRole('button', { name: /submit/i })

    await userEvent.type(input, 'test value')
    await userEvent.click(button)

    expect(handleSubmit).toHaveBeenCalledWith('test value')
  })
})
