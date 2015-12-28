// This makes ReactRouter more consumable.
window.DefaultRoute = ReactRouter.DefaultRoute;
window.Link = ReactRouter.Link;
window.Route = ReactRouter.Route;
window.Router = ReactRouter.Router;
window.IndexRoute = ReactRouter.IndexRoute;


//Bootstap-react
window.Glyphicon = ReactBootstrap.Glyphicon;
window.Panel = ReactBootstrap.Panel;
window.ButtonToolbar = ReactBootstrap.ButtonToolbar;
window.Button = ReactBootstrap.Button;
window.Label = ReactBootstrap.Label;
window.Input = ReactBootstrap.Input;
window.Table = ReactBootstrap.Table;
window.Modal = ReactBootstrap.Modal;
window.Alert = ReactBootstrap.Alert;
window.Navbar = ReactBootstrap.Navbar;
window.NavItem = ReactBootstrap.NavItem;
window.Nav = ReactBootstrap.Nav;
window.NavDropdown = ReactBootstrap.NavDropdown;
window.MenuItem = ReactBootstrap.MenuItem;


var App = React.createClass({
  componentDidMount: function(){
	console.log("did mount"); 
	// generate a new BIP32 12-word seed
	var secretSeed = lightwallet.keystore.generateRandomSeed();
	console.log("seed:"+secretSeed);

	var secretSeed="suffer common monster peasant boss earth brain sausage manage loan road average";

	// the seed is stored encrypted by a user-defined password
	var password = 'pass'; //prompt('Enter password for encryption', 'password');
	var ks = new lightwallet.keystore(secretSeed, password);

  console.log(ks.serialize());
  try{
  console.log(ks.getSeed(password+"a"));
  } catch(e){
    console.log("Te cache")
    console.log(e)
  }

	// generate five new address/private key pairs
	// the corresponding private keys are also encrypted
	ks.generateNewAddress(password);
	var addr = '0x' +ks.getAddresses();
	//var addr= '0x' + '5196e50d212fcdc27305f7c13ba5bc522b9a717b ';
	console.log(addr);

	// Create a custom passwordProvider to prompt the user to enter their
	// password whenever the hooked web3 provider issues a sendTransaction
	// call.
	ks.passwordProvider = function (callback) {
	  var pw = prompt("Please enter password", "Password");
	  callback(null, pw);
	};

	// Now set ks as transaction_signer in the hooked web3 provider
	// and you can start using web3 using the keys/addresses in ks!
    var web3Provider = new HookedWeb3Provider({
      host: "http://104.131.53.68:8545",
      //host: "http://localhost:8545",
      transaction_signer: ks
    });
    
    web3.setProvider(web3Provider);

    Persona.setWeb3Provider(web3Provider);
    Persona.setIpfsProvider({host: '104.236.65.136', port : '5001'});
    Persona.setRegistry('0x8b5429bdf4e24f508154aa864675a007e618e79e');
    Persona.of(addr).then(function(persona) {
      console.log("persona (contract)")
      console.log(persona);
	  return persona.getInfo("personSchema");
	}).then(function(info) {
		console.log("personSchema")
		console.log(info)
		console.log("img: http://104.236.65.136:8080/"+info.image.contentUrl)
	});
  },	

  render: function() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
        {this.props.children}
        </div>
      </div>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        (dashboard to be included)
      </div>
    );
  }
});



window.onload = function() {
    ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />

      </Route>
    </Router>
    ), document.getElementById('root'))
  };
