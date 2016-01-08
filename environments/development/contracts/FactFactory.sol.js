"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var FactFactory = (function (_Pudding) {
    _inherits(FactFactory, _Pudding);

    function FactFactory() {
      _classCallCheck(this, FactFactory);

      _get(Object.getPrototypeOf(FactFactory.prototype), "constructor", this).apply(this, arguments);
    }

    return FactFactory;
  })(Pudding);

  ;

  // Set up specific data for this class.
  FactFactory.abi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "uint256" }], "name": "facts", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "numFacts", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_user", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "getFact", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_factName", "type": "string" }, { "name": "_hashedValue", "type": "bytes32" }], "name": "newFact", "outputs": [], "type": "function" }];
  FactFactory.binary = "60606040526104ef806100126000396000f3606060405260e060020a600035046354b1a007811461003c5780635d3dbdc914610068578063df263d0714610080578063ff390cd5146100b3575b005b6100a96004356024356000602081815292815260408082209093529081522054600160a060020a031681565b6100a960043560016020526000908152604090205481565b600160a060020a0360043581166000908152602081815260408083206024358452909152902054165b6060908152602090f35b60206004803580820135601f81018490049093026080908101604052606084815261003a94602493919291840191819083828082843750949650509335935050505060006000338484604051610309806101e68339018084600160a060020a03168152602001806020018381526020018281038252848181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f16801561017b5780820380516001836020036101000a031916815260200191505b50945050505050604051809103906000f0600160a060020a0333169182905260016020818152604080862080548784528288208189528452918720805473ffffffffffffffffffffffffffffffffffffffff191695909517909455939094529283905291019055505056606060405260405161030938038061030983398101604052805160805160a051919201906080805160008054600160a060020a0319168617815584516001805492819052936020601f6002600019868916156101000201909516949094048401047fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf69081019492939092909101908390106100e457805160ff19168380011785555b506100bc9291505b80821115610114576000815583016100a9565b50508060026000508190555060006003600050819055505050506101f1806101186000396000f35b828001600101855582156100a1579182015b828111156100a15782518260005055916020019190600101906100f6565b509056606060405236156100565760e060020a600035046306fdde03811461005857806363f173ca146100b35780638da5cb5b146100ee57806399641aa1146101005780639e96154e14610121578063a5c73ea61461012a575b005b610133600180546020601f6002600019848616156101000201909316929092049182018190040260809081016040526060828152929190828280156101e95780601f106101be576101008083540402835291602001916101e9565b61005660038054600181019091556000908152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff191633179055565b6101a1600054600160a060020a031681565b6101a1600435600460205260009081526040902054600160a060020a031681565b6101b460025481565b6101b460035481565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156101935780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b600160a060020a03166060908152602090f35b6060908152602090f35b820191906000526020600020905b8154815290600101906020018083116101cc57829003601f168201915b50505050508156";

  if ("0x19cd9cfe00180e29fc6176e0a2e5d53f9830ee2c" != "") {
    FactFactory.address = "0x19cd9cfe00180e29fc6176e0a2e5d53f9830ee2c";

    // Backward compatibility; Deprecated.
    FactFactory.deployed_address = "0x19cd9cfe00180e29fc6176e0a2e5d53f9830ee2c";
  }

  FactFactory.generated_with = "1.0.3";
  FactFactory.contract_name = "FactFactory";

  return FactFactory;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.FactFactory = factory;
}