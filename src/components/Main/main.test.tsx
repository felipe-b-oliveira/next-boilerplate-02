import { render, screen } from '@testing-library/react'

import Main from './main'

/**
 * Error on 'toHaveStyle', the test seems to check for rgb colors istead of HEX '#COLOR_CODE'
 */
export const convertHexToRGBA = (hexCode: string) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react avançado/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': convertHexToRGBA('#06092b') })
  })
})
