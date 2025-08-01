import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from './Form'

describe('Form component', () => {
  it('renders input fields and button', () => {
    render(<Form />)

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows error if inputs are empty', async () => {
    render(<Form />)

    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)

    expect(screen.getByRole('alert')).toHaveTextContent('Both fields are required')
  })

  it('shows success message when inputs are filled', async () => {
    render(<Form />)

    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const button = screen.getByRole('button', { name: /submit/i })

    await userEvent.type(nameInput, 'Joodi')
    await userEvent.type(emailInput, 'joodi@example.com')
    await userEvent.click(button)

    expect(screen.getByRole('status')).toHaveTextContent('Form submitted!')
  })
})
