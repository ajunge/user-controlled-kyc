"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Fact = (function (_Pudding) {
    _inherits(Fact, _Pudding);

    function Fact() {
      _classCallCheck(this, Fact);

      _get(Object.getPrototypeOf(Fact.prototype), "constructor", this).apply(this, arguments);
    }

    return Fact;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Fact.abi = [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [], "name": "certify", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "certifiers", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [], "name": "hashedValue", "outputs": [{ "name": "", "type": "bytes32" }], "type": "function" }, { "constant": true, "inputs": [], "name": "numCertifiers", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_name", "type": "string" }, { "name": "_hashedValue", "type": "bytes32" }], "type": "constructor" }];
  Fact.binary = "606060405260405161030938038061030983398101604052805160805160a051919201906080805160008054600160a060020a0319168617815584516001805492819052936020601f6002600019868916156101000201909516949094048401047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019492939092909101908390106100e457805160ff19168380011785555b506100bc9291505b80821115610114576000815583016100a9565b50508060026000508190555060006003600050819055505050506101f1806101186000396000f35b828001600101855582156100a1579182015b828111156100a15782518260005055916020019190600101906100f6565b509056606060405236156100565760e060020a600035046306fdde03811461005857806363f173ca146100b35780638da5cb5b146100ee57806399641aa1146101005780639e96154e14610121578063a5c73ea61461012a575b005b610133600180546020601f6002600019848616156101000201909316929092049182018190040260809081016040526060828152929190828280156101e95780601f106101be576101008083540402835291602001916101e9565b61005660038054600181019091556000908152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff191633179055565b6101a1600054600160a060020a031681565b6101a1600435600460205260009081526040902054600160a060020a031681565b6101b460025481565b6101b460035481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600160a060020a03166060908152602090f35b6060908152602090f35b820191906000526020600020905b8154815290600101906020018083116101cc57829003601f168201915b50505050508156";

  if ("" != "") {
    Fact.address = "";

    // Backward compatibility; Deprecated.
    Fact.deployed_address = "";
  }

  Fact.generated_with = "1.0.3";
  Fact.contract_name = "Fact";

  return Fact;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Fact = factory;
}