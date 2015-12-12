contract PersonaData {
	
	address public owner;

	struct Fact{
		string encriptedValue;
		bytes32 hashedValue;
		
		uint numCertifiers;
		mapping (uint => address) certifiers;
	}

	mapping (bytes32 => Fact) facts;
	
	mapping (uint => bytes32) public factNames;
	uint public numFacts;


	
	function PersonaData() {
		owner = msg.sender;
		numFacts = 0;
	}

	function setFact(bytes32 _factName, string _encriptedValue, bytes32 _hashedValue){
		if(msg.sender == owner){
			factNames[numFacts++] = _factName;

			facts[_factName]=Fact(
				{
					hashedValue: _hashedValue, 
					encriptedValue: _encriptedValue,
					numCertifiers: 0
				});
		}
	}

	function certifyFact(bytes32 _factName){
		Fact f = facts[_factName];
		f.certifiers[f.numCertifiers++] = msg.sender;
	} 


	//Accesors

	function getEncriptedValue(bytes32 _factName) returns (string){
		return facts[_factName].encriptedValue;
	}

	function getHashedValue(bytes32 _factName) returns (bytes32){
		return facts[_factName].hashedValue;
	}

	function getFactsCertifiersNum(bytes32 _factName) returns (uint){
		return facts[_factName].numCertifiers;
	} 

	function getFactsCertifierByIndex(bytes32 _factName, uint _index) returns (address){
		return facts[_factName].certifiers[_index];
	} 

}