import 'cypress-iframe'

//tenemos que instalar la libreria
//npm install -D cypress-iframe   
describe('working whit frames', ()=>{
    it('click a objetc enter the iFrame using library', function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.frameLoaded("#courses-iframe");
    cy.iframe().find("a[href*='mentorship']").eq(0).click();
    })

    it('validate existe table in frame no necesary library import', ()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/iframe');
        cy.get("#the-kitchen-table").its('0.contentDocument.body').then(cy.wrap).find('#fruits-vegetables')
    })
})






