describe('Initial chessboard state', () => {
	it('should load without any active squares', () => {
		cy.visit('/');
		cy.get('.chessboard-square').each((square) => {
			cy.wrap(square).should('not.have.class', 'chessboard-square--active');
		});
	});
});
