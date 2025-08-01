import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FetchData } from './FetchData'

beforeEach(() => {
  // Mock fetch before each test
  global.fetch = jest.fn()
})

afterEach(() => {
  jest.resetAllMocks()
})

test('fetches and displays data on button click', async () => {
  const fakeData = { title: 'Test todo' }

  // @ts-ignore
  global.fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => fakeData,
  })

  render(<FetchData />)

  const button = screen.getByRole('button', { name: /fetch data/i })
  await userEvent.click(button)


  await waitFor(() => expect(screen.getByText(/data: test todo/i)).toBeInTheDocument())
})


test('shows error message on fetch failure', async () => {
  // @ts-ignore
  global.fetch.mockResolvedValueOnce({
    ok: false,
  })

  render(<FetchData />)

  const button = screen.getByRole('button', { name: /fetch data/i })
  await userEvent.click(button)

  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Failed to fetch data'))
})
