describe('Landing Page Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should render the Navbar', () => {
      cy.get('header').should('exist');
    });
  
    it('should render the Hero section', () => {
      cy.contains('Empowering Heroes to Transform Virtual').should('be.visible');
    });
  
    it('should display the Our Story section', () => {
      cy.get('#about').should('exist');
    });
  
    it('should display the Target section', () => {
      cy.contains('Our Target & Roadmap').should('be.visible');
    });
  
    it('should display the Service Demo section', () => {
      cy.contains('Beneficial elements').should('be.visible');
    });
  
    it('should display the Stats section', () => {
      cy.contains('Years of experience').should('be.visible');
    });
  
    it('should display the Our Team section', () => {
      cy.contains('Meet Our Amazing Team').should('be.visible');
    });
  
    it('should display Testimonies', () => {
      cy.get('#testimonies').should('exist');
    });
  
    it('should display Articles', () => {
      cy.get('#articles').should('exist');
    });
  
    it('should display the FAQs', () => {
      cy.get('#faqs').should('exist');
    });
  
    it('should render the Contact section', () => {
      cy.get('#contactus').should('exist');
    });
  
    it('should render the Footer', () => {
      cy.get('footer').should('exist');
    });
  });
  