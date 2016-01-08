contract('FactFactory', function(accounts) {
  var ff;
  var factName = "fechaNacimiento";
  var user_account =  web3.eth.accounts[0];
  var certifer_account = web3.eth.accounts[1];
  var shaData  = web3.sha3("04-12-2015");
  var shaAsci   = web3.toAscii(shaData);
  var encData = "...";

  before(function(done){
  	ff = FactFactory.at(FactFactory.address);
    ff.newFact(factName,shaAsci,{from: user_account});
  	done();
  });

  it("should set numFacts to 1", function(done) {
    ff.numFacts.call(user_account)
    .then(function(num){
      //console.log("num:"+num);
      assert.equal(num,1);
      done();
    })
    .catch(function(e) {
      	  console.log("catch!");
          console.log(e);
          done(e);
    });
  });

  it("should create new fact properly", function(done) {
    var f;
    ff.getFact.call(user_account,0)
    .then(function(fAddr){
      //console.log(fAddr);
      assert(fAddr != null);
      f = Fact.at(fAddr);
      return f.owner.call();
    })
    .then(function(owner){
      //console.log("owner:"+owner);
      assert.equal(owner,user_account);
      return f.name.call();
    })
    .then(function(name){
      //console.log("name:"+name);
      assert.equal(name,factName);
      return f.hashedValue.call();
    })
    .then(function(hashedValue){
      var hashedHex = web3.toHex(hashedValue);
      //console.log("hashedHex:"+hashedHex);
      assert.equal(hashedValue,hashedHex);
      return f.numCertifiers.call();
    })
    .then(function(numCertifiers){
      //console.log("numCertifiers:"+numCertifiers);
      assert.equal(0,numCertifiers);
      done();
    })
    .catch(function(e) {
      	  console.log("catch!");
          console.log(e);
          done(e);
    });
  });




})
