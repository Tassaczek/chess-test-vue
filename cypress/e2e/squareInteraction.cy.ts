describe('Square interaction', () => {
	it('should highlight a square when clicked', () => {
		cy.visit('/');
		cy.get('#d4').click();
		cy.get('#d4').should('have.class', 'chessboard-square--active');
	});
	it('should switch active class to the newly clicked square', () => {
		cy.visit('/');
		cy.get('#d4').click();
		cy.get('#e1').click();
		cy.get('#d4').should('not.have.class', 'chessboard-square--active');
		cy.get('#e1').should('have.class', 'chessboard-square--active');
	});
});
