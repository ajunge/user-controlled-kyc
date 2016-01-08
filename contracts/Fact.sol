contract Fact {

  address public owner;
  string public name;
  bytes32 public hashedValue;

  uint public numCertifiers;
  mapping (uint => address) public certifiers;

  function Fact(address _owner, string _name, bytes32 _hashedValue){
    owner = _owner;
    name = _name;
    hashedValue = _hashedValue;
    numCertifiers = 0;
  }

  function certify(){
		certifiers[numCertifiers++] = msg.sender;
	}
}
