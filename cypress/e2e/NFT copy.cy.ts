describe('NFT on open sea api', () => {
  context('GET /NFT', () => {
    it('should show NFT ', () => {
      cy.request({
        method: 'GET', url: 'https://staging-gateway.wrld.xyz/contracts', headers: { "Cookie": "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1Mjc5MDI1NCwiZXhwIjoxNjg0MzI2MjU0fQ.2vIFGELbH54q12-b1SIMwm0Eh7BLmdJMpPEX3E2XYy0" }, failOnStatusCode: false
      }).then(
        (response) => {

        //This line will verify th inputs property i.e. internalType plus the value of internal type i.e. unit256
          expect(response.body.data[1].contractAbi[0].inputs[0]).to.have.property('internalType').contains('uint256')
        //Whereas this line will only verify the value inside internalType
          expect(response.body.data[1].contractAbi[0].inputs[0].internalType).contains('uint256')
          expect(response.body.data[1].contractAbi[0].inputs[0]).to.have.keys('internalType', 'name', 'type')
          expect(response.body.data[1].contractAbi[0].inputs[0].name).contain('_mintSupplyCount')
          expect(response.body.data[1].contractAbi[0].inputs[0].type).contain('uint256')
          expect(response.body.data[1].contractAbi[0].inputs[1].name).contain('_ownerMintReserveCount');
          expect(response.status).to.eq(200);
        })
    });
  })
})