import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, expect } from 'vitest';
import Experience from '../Experience.jsx';
import experienceData from '../../data/experience.js';
import React from 'react'
import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Experience from '../Experience.jsx'
import experienceData from '../../data/experience.js'

describe('Experience page', () => {
  test('renders experience entries and a header', () => {
    render(<Experience id="experience" data={experienceData} />)
    expect(screen.getByText(/Professional Experience/i)).toBeInTheDocument()
    // check at least one company from data is rendered
    const company = experienceData[0].company
    expect(screen.getByText(new RegExp(company, 'i'))).toBeInTheDocument()
  })
})
