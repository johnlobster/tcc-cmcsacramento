import React from 'react'

import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ResponsiveContainer from "./ResponsiveContainer"



it("renders a responsive container", () => {

  render(<ResponsiveContainer><h1>I am a responsive container</h1></ResponsiveContainer>);
  cleanup
})