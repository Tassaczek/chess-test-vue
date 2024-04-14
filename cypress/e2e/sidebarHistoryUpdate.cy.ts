describe('History sidebar updates', () => {
	it('should display the clicked square in the history sidebar', () => {
		cy.visit('/');
		cy.get('#d4').click();
		cy.get('[data-cy="history-sidebar__item"]')
			.should('have.length', 1)
			.and('have.text', 'd4')
			.and('have.class', 'item--active');
	});
	it('should display the list of clicked squares with the last item highlighted', () => {
		cy.visit('/');
		cy.get('#d4').click();
		cy.get('#e1').click();
		cy.get('[data-cy="history-sidebar__item"]')
			.first()
			.should('have.text', 'd4')
			.and('not.have.class', 'item--active');
		cy.get('[data-cy="history-sidebar__item"]')
			.last()
			.should('have.text', 'e1')
			.and('have.class', 'item--active');
	});
});
