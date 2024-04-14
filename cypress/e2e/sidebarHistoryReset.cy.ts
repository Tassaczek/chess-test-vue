describe('History sidebar reset', () => {
	it('should clear all history items when reset button is clicked', () => {
		cy.visit('/');
		cy.get('#d4').click();
		cy.get('[data-cy="history-sidebar__reset-button"]').click();
		cy.get('[data-cy="history-sidebar__item"]').should('not.exist');
	});
});
