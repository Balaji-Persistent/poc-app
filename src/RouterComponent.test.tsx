import React from 'react';
import { render, screen } from '@testing-library/react';

import RouterComponent from "./RouterComponent";
import { routes } from "./routes";
import { generateAppRoutes } from "./Navigation/utils";

const appRoutes = generateAppRoutes(routes);

describe("RouterComponent component  tests", () => {
    it('renders Home page component', async () => {
        const { container } = render(<RouterComponent routes={appRoutes} />);
        const linkElement = await screen.getByText(/Loading.../i);
        expect(linkElement).toBeInTheDocument();
        //expect(container && container.firstChild && container.firstChild).toHaveClass('breadcrumbs')
    });
});
