describe('contracts defined', () => {
  context('GET /contracts', () => {
    it('should show contracts ', () => {
      cy.request('GET', 'https://staging-gateway.wrld.xyz/contracts/').then(
        (response) => {
          
         // expect(response.body.inputs).contain('internalType', 'value'),
          expect(response.body.inputs.internalType).contain('uint256');
          expect(response.body.inputs.name).contain('_mintSupplyCount');
          expect(response.body.inputs.type).contain('uint256');
          expect(response.body.inputs.internalType).contain('uint256');
          expect(response.body.inputs.name).contain('_ownerMintReserveCount');
          expect(response.body.inputs.type).contain('uint256');
        expect(response.status).to.eq(200); 
        })
    });
  })
  {
    it('should not show contracts ', () => {
     cy.request({method: 'GET', url:'https://staging-gateway.wrld.xyz/contracts/', failOnStatusCode: false}).then(
       (response) => {
         expect(response.body.data).contain('something went wrong'); 
       })
 })
 } 
 
})