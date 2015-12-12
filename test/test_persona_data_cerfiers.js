contract('PersonaData', function(accounts) {
  var pd;
  var factName = "fechaNacimiento";
  var certifer_account = web3.eth.accounts[1];
 
  before(function(done){
  	pd = PersonaData.at(PersonaData.address);
    var shaData  = web3.sha3("04-12-2015");
    var shaAsci   = web3.toAscii(shaData);
    var encData = "...";
    pd.setFact(factName,encData,shaAsci);
  	done();
  });

  it("should add certification", function(done) {
    pd.getFactsCertifiersNum.call(factName)
    .then (function(num){
        //console.log("num:"+num);
        assert.equal(0,num);
        return pd.certifyFact(factName,{from: certifer_account})
    })
    .then (function(tx){
        //console.log("tx:"+tx);
        return pd.getFactsCertifiersNum.call(factName);
    })
    .then (function(num){
        //console.log("num:"+num);
        assert.equal(1,num);
        return pd.getFactsCertifierByIndex.call(factName,0);
    })
    .then (function(cert){
        //console.log("cert:"+cert);
        assert.equal(cert,certifer_account);
        done();
    })
    .catch(function(e) {
      	  console.log("catch!");
          console.log(e);
          done(e);
    });
  });


})
