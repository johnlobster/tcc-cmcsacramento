import React from 'react'

import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect'
import Footer from "./Footer"

it("Renders Footer with text present", () => {

  render(<Footer />);

  expect(screen.getByAltText("Yin Yang")).toBeInTheDocument()
  expect(screen.getByText(/This website collects no data/i)).toBeInTheDocument()
  expect(screen.getByText(/Jinbao Tai Chi Chuan/i)).toBeInTheDocument()

  cleanup
})
