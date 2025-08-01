import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NameForm } from './NameForm'

describe('NameForm component', () => {
  it('renders input and button', () => {
    render(<NameForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('updates input value when user types', async () => {
    render(<NameForm />)
    const input = screen.getByLabelText(/name/i)
    await userEvent.type(input, 'Joodi')
    expect(input).toHaveValue('Joodi')
  })

  it('shows submitted name after form submit', async () => {
    render(<NameForm />)
    const input = screen.getByLabelText(/name/i)
    const button = screen.getByRole('button', { name: /submit/i })

    await userEvent.type(input, 'Joodi')
    await userEvent.click(button)

    expect(screen.getByText(/you submitted: joodi/i)).toBeInTheDocument()
  })
})
