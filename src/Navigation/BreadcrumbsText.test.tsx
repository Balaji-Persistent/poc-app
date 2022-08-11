import React from 'react';
import { render, screen } from '@testing-library/react';
import BreadcrumbsText from './BreadcrumbsText';
const route = {
    path: "/",
    label: "Home",
    component: "HomePage",
    routes: []
}
describe("BreadcrumbsText component  tests", () => {
    it('renders home page components', async () => {
        const { container } = render(<BreadcrumbsText route={route} />);
        const linkElement = await screen.getByText(/Loading.../i);
        expect(linkElement).toBeInTheDocument();
        // expect(container && container.firstChild && container.firstChild).toHaveClass('breadcrumbs')
    });
});
