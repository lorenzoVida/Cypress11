describe('template spec', () => {
  beforeEach(function(){
  cy.fixture('fixtures').then(function(data)
  {
      this.data=data;
  })
  })
  it('pulls data from a fixture', function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('div[class="form-group"] input[name="name"]').type(this.data.name)
    cy.get("input[name='email']").type(this.data.email)
    cy.get("input#exampleInputPassword1").type(this.data.pass)
    cy.get(':nth-child(4) > .ng-pristine').should('have.attr','type','text')
    cy.get('div[class="form-group"] input[name="name"]').should('have.attr','minlength','2');

  })

  it('update fixture data', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.fixture('fixtures').then((data)=>{
      data.name ='Stephanie'
      cy.get('div[class="form-group"] input[name="name"]').type(data.name)
    })
    cy.get("input[name='email']").type(this.data.email)
  })
}) 