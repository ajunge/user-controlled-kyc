contract('PersonaData', function(accounts) {
  var pd;

  before(function(done){
  	pd = PersonaData.at(PersonaData.address);
  	done();
  });

it("should have correct ownership", function(done) {
    var o = web3.eth.coinbase;
    pd.owner.call()
    .then (function(owner){
        //console.log("owner:"+owner);
        assert.equal(o,owner);
        done();
    })
    .catch(function(e) {
          console.log("catch!");
          console.log(e);
          done(e);
    });
  });

  it("should set fact (from owner)", function(done) {
    var factName = "fechaNacimiento";
    var shaData  = web3.sha3("04-12-2015");
    var shaAsci   = web3.toAscii(shaData);

    //console.log("shaData:"+shaData);
    //console.log("shaAsci:"+shaAsci);

    var encValue = "...";
    pd.setFact(factName,encValue,shaAsci)
    .then (function(tx){
        //console.log("tx:"+tx);
        return pd.numFacts.call();
    })
    .then (function(numFacts){
        //console.log(numFacts);
        assert.equal(1,numFacts);
        return pd.factNames.call(0);
    })
    .then (function(factNameC){
        var f=web3.toAscii(factNameC).replace(/\0/g, '');
        //console.log(f);
        assert.equal(factName,f);
        return pd.getEncriptedValue.call(factName);
    })
    .then (function(encriptedFact){
        //console.log(encriptedFact);
        assert.equal(encValue,encriptedFact);

        return pd.getHashedValue.call(factName);
    })
    .then (function(hashedFact){
        //console.log(hashedFact);
        assert.equal('0x'+shaData,hashedFact);
        done();
    })
    .catch(function(e) {
      	  console.log("catch!");
          console.log(e);
          done(e);
    });
  });

  


})
