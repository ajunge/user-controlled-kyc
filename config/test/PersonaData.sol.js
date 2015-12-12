"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var PersonaData = (function (_Pudding) {
    _inherits(PersonaData, _Pudding);

    function PersonaData() {
      _classCallCheck(this, PersonaData);

      _get(Object.getPrototypeOf(PersonaData.prototype), "constructor", this).apply(this, arguments);
    }

    return PersonaData;
  })(Pudding);

  ;

  // Set up specific data for this class.
  PersonaData.abi = [{ "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }], "name": "getHashedValue", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numFacts", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }, { "name": "_encriptedValue", "type": "string" }, { "name": "_hashedValue", "type": "bytes32" }], "name": "setFact", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }], "name": "getFactsCertifiersNum", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }], "name": "getEncriptedValue", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "factNames", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }], "name": "certifyFact", "outputs": [], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "bytes32" }, { "name": "_index", "type": "uint256" }], "name": "getFactsCertifierByIndex", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
  PersonaData.binary = "606060405260008054600160a060020a0319163317815560035561040b806100276000396000f3606060405236156100775760e060020a60003504630eea797e81146100795780637084ddd1146100985780638da5cb5b146100a15780638f31f7be146100b3578063a8268bd2146101bd578063b82093c4146101da578063b8ea321114610251578063bc66174414610269578063de43b49d146102b7575b005b610300600435600081815260016020819052604090912001545b919050565b61030060035481565b6102e3600054600160a060020a031681565b60408051602060248035600481810135601f810185900485028601850190965285855261007795813595919460449492939092019181908401838280828437509496505093359350505050600054600160a060020a0390811633909116141561039b5760038054600181810190925560009081526002602081815260408084208890558051606081018252878152808301879052808201859052888552858352908420815180518254838852968590209397929687969381161561010002600019011692909204601f90810185900484019492939291909101908390106103a057805160ff19168380011785555b506103809291505b808211156103d057600081556001016101a9565b610300600435600081815260016020526040902060020154610093565b610312600435604080516020818101835260008083528481526001808352845191859020805460029281161561010002600019011691909104601f810184900484028301840190955284825292939092918301828280156103ff5780601f106103d4576101008083540402835291602001916103ff565b61030060043560026020526000908152604090205481565b6004356000908152600160208181526040808420600281018054948501905592845260039290920190529020805473ffffffffffffffffffffffffffffffffffffffff191633179055610077565b60043560009081526001602090815260408083206024358452600301909152902054600160a060020a03165b60408051600160a060020a03929092168252519081900360200190f35b60408051918252519081900360200190f35b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156103725780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b50506020820151600182015560409190910151600291909101555b505050565b828001600101855582156101a1579182015b828111156101a15782518260005055916020019190600101906103b2565b5090565b820191906000526020600020905b8154815290600101906020018083116103e257829003601f168201915b5050505050905061009356";

  if ("0x7a3680a48f0a52eb30e7ce13784e6706c1407832" != "") {
    PersonaData.address = "0x7a3680a48f0a52eb30e7ce13784e6706c1407832";

    // Backward compatibility; Deprecated.
    PersonaData.deployed_address = "0x7a3680a48f0a52eb30e7ce13784e6706c1407832";
  }

  PersonaData.generated_with = "1.0.2";
  PersonaData.contract_name = "PersonaData";

  return PersonaData;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.PersonaData = factory;
}