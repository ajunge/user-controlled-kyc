contract('FactFactory', function(accounts) {
  var ff;
  var factName = "fechaNacimiento";
  var user_account =  web3.eth.accounts[0];
  var certifer_account = web3.eth.accounts[1];
  var shaData  = web3.sha3("04-12-2015");
  var shaAsci   = web3.toAscii(shaData);
  var encData = "...";
  var f;

  before(function(done){
  	ff = FactFactory.at(FactFactory.address);
    ff.newFact(factName,shaAsci,{from: user_account})
    .then(function(tx){
        return ff.getFact.call(user_account,0)
    })
    .then(function(fAddr){
      f = Fact.at(fAddr);
  	  done();
    })
  });

  it("should work :)", function(done) {
    f.numCertifiers.call()
    .then(function(numCertifiers){
      assert.equal(0,numCertifiers);
      return f.certify({from: certifer_account})
    })
    .then(function(tx){
      return f.numCertifiers.call()
    })
    .then(function(numCertifiers){
      assert.equal(1,numCertifiers);
      return f.certifiers.call(0)
    })
    .then(function(certifier){
      assert.equal(certifer_account,certifier);
      done()
    })
  });


})
