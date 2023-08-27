describe('working whit frames', ()=>{
    before(function(){
        cy.fixture('shopProducts').then(function(data)
        {
            this.data=data;
        })
    })
    it('click a objetc enter the iFrame using library', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
    this.data.modelos.forEach(function(element){
        cy.selectProduct(element);
    }
    );
    cy.get('.nav-link.btn.btn-primary').click();
    cy.get('tr td:nth-child(1) h5').each(($e1, index, $list) => {
        //cy.log($e1.text())
        const actualTexto =$e1.text()
        var res= actualTexto.split(" ")
        res=res[1].trim()
        cy.log(res)
    })
    //en la web de chechout presionamos el boton checkout para elegir pais
    cy.get('button[class="btn btn-success"]').click();


    })

})