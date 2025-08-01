import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyButton from './MyButton'

test('changes text on click', async () => {
  render(<MyButton />)
  const button = screen.getByRole('button')

  expect(button).toHaveTextContent('Click me')

  await userEvent.click(button)

  expect(button).toHaveTextContent('Clicked')
})
