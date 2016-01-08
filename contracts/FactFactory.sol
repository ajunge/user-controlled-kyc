import "Fact";

contract FactFactory {

  mapping(address => mapping (uint => address)) public facts;
  mapping(address => uint) public numFacts;


  function newFact(string _factName, bytes32 _hashedValue){
    Fact f = new Fact(msg.sender,_factName,_hashedValue);

    uint numFact = numFacts[msg.sender];

    facts[msg.sender][numFact++]=f;
    numFacts[msg.sender]=numFact;

  }

  function getFact(address _user,uint index) returns (address){
    return facts[_user][index];
  }


}
