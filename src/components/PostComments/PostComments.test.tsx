import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from './index'

test('deve adicionar dois comentários na lista', () => {
  render(<PostComments />)

  const input = screen.getByTestId('comment-input')
  const button = screen.getByTestId('submit-button')

  fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
  fireEvent.click(button)

  fireEvent.change(input, { target: { value: 'Segundo comentário' } })
  fireEvent.click(button)

  const lista = screen.getByTestId('comments-list')
  expect(lista.children.length).toBe(2)
  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
  expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
})
