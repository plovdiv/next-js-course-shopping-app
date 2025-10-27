import { render, screen } from '@testing-library/react'
import Hero from '@/app/homepage/Hero'


describe('Hero Component', () => {
    it('should render the hero image', () => {
        render(<Hero />)

        const heroImage = screen.getByAltText(/Hero Image/i)

        expect(heroImage).toBeInTheDocument()
    })
})