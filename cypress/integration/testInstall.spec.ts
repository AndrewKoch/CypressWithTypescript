describe('Validates this repo was properly installed', () => {

    it.only('should be able to go to use google to find the twenty ideas website', () => {
        cy.visit('www.google.com')
        const googleSearchClassSelector = '.gLFyf'
        cy.get(`${googleSearchClassSelector}`)
            .type('Twenty Ideas')
        cy.get('input')
            .contains('Google Search')
            .click()
        const urlClassSelector = '.LC20lb'
        const targetUrlSelector = 'https://www.twentyideas.com/'
        cy.get(`[href="${targetUrlSelector}"] > ${urlClassSelector}`)
            .contains('Twenty Ideas')
            .should('be.visible')
    })

    it('should not run because the above test has a .only, removing that will run the above test and this test', () => {
        cy.visit('www.fivethirtyeight.com')
    })

    it.skip('should do something else but we skip this test!', () => {
        cy.visit('www.notgoogle.com')
    })
})