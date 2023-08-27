
describe('mi primera Suite Test', function(){

    before(function(){
        cy.fixture('alumnos').then(function(data)
        {
            this.data=data;
        })
    })
    
    it ('mi primer Test', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/');
    //cy.visit(Cypress.env('url'))
    home.getShop().click();
    //cy.selectProduct('Samsung Note 8');
    this.data.modelos.forEach(function(element){
        //prod.selectProduct(element)
        cy.selectProduct(element);
    }
    );
    //boton checkout para ir a la web de checkout
    prod.getCheckout().click();
    cy.get('tr td:nth-child(1) h5').each(($e1, index, $list) => {
        //cy.log($e1.text())
        const actualTexto =$e1.text()
        var res= actualTexto.split(" ")
        res=res[1].trim()
        cy.log(res)
    })
    //en la web de chechout presionamos el boton checkout para elegir pais
    check.getCheckout().click();
    //elegimos el pais
    
    check.getCountry().type('India')
    //Time out demora en cargar la lista de paises
    //cy.wait(6000)
    Cypress.config('defaultCommandTimeout',8000)
    cy.get('.suggestions ul li a').click()
    /*
    cy.get('.suggestions ul').each(($e1, index, $list) => {
        if($e1.text()=='India')
        {
            $e1.click()
        }
    })
    */
    check.getTermsConditions().click()
    cy.get('input[value="Purchase"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function(element)
    {
        const actualTexto =element.text()
        //var res= actualTexto.split(" ")
        //res=res[1].trim()
        expect(actualTexto.includes("Success!")).to.be.true
    })
    
    cy.get('.nav-link.btn.btn-primary').click()
    
    
    })
    
    
    
    })