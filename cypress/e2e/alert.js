describe('mi primera Suite Test', function(){
    it ('mi primer Test', function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click()
    cy.get('#confirmbtn').click()
    //Window alert
    cy.on('window:alert',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    //Window Confirm
    cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    
    // open Tab
    //cy.get('#opentab').click()
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','index')
    //cy.get('body > app-root:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.go('back')
        })
    
    
    
    
    })