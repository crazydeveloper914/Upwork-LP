describe('Navbar Component', () => {
    beforeEach(() => {
        // Visit the main landing page before each test
        cy.visit('/');
    });

    it('should render the Logo with correct text and styling', () => {
        // Verify the Logo is visible
        cy.get('header').within(() => {
            cy.contains('Aqua').should('exist');
            cy.contains('Vive').should('exist');
        });
    });

    it('should navigate to the homepage when the Logo is clicked', () => {
        // Click the Logo
        cy.get('header').within(() => {
            cy.contains('AquaVive').click();
        });

        // Verify it navigates to the homepage
        cy.url().should('eq', Cypress.config().baseUrl + '/');
    });

    it('should render the Navbar with all links', () => {
        // Verify the Navbar exists
        cy.get('header').should('be.visible');

        // Verify links
        const routes = ['About us', 'Testimonies', 'Articles', 'Faqs', 'Contact us'];
        routes.forEach((route) => {
            cy.contains(route).should('exist');
        });

        // Verify the "Join now" button exists
        cy.contains('Join now').should('exist');
    });

    it('should hide Navbar on scroll down and show it on scroll up', () => {
        // Scroll down
        cy.scrollTo(0, 500);
        cy.get('header').should('not.be.visible');

        // Scroll back up
        cy.scrollTo(0, 0);
        cy.get('header').should('be.visible');
    });

    it('should navigate to the correct sections when links are clicked', () => {
        const routes = [
            { name: 'About us', url: '#about' },
            { name: 'Testimonies', url: '#testimonies' },
            { name: 'Articles', url: '#articles' },
            { name: 'Faqs', url: '#faqs' },
            { name: 'Contact us', url: '#contactus' },
        ];
        
        cy.viewport(1024, 768);
    
        routes.forEach(({ name, url }) => {

            // Verify the link exists and has the correct text
            cy.contains('a', name)
            .should('have.attr', 'href', url)
            
            cy.get(`a[href="${url}"].desktop`).click().wait(100)
            // Wait for the URL to update
            cy.url().should('include', url);
            
            // // Ensure the target section is visible after clicking
            cy.get(url, { timeout: 10000 }).scrollIntoView().should('be.visible');
            cy.scrollTo(0, 0)
        });
    });
    

    it('should display the dropdown menu in mobile view', () => {
        // Set viewport to a mobile size
        cy.viewport('iphone-6');

        // Verify the dropdown trigger exists
        cy.get('[aria-haspopup="menu"]').should('exist').click();

        // Verify dropdown links
        const routes = ['About us', 'Testimonies', 'Articles', 'Faqs', 'Contact us'];
        routes.forEach((route) => {
            cy.contains(route);
        });
    });
});
