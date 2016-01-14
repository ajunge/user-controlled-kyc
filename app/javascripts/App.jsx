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
window.Well = ReactBootstrap.Well;
window.Image = ReactBootstrap.Image;


var App = React.createClass({
  getInitialState: function() {
	    return {keystoreData: '',  personaSchema: null};
	},

	setKeystoreData: function(_keystoreData){
    this.setState({keystoreData: _keystoreData})

    var ks= lightwallet.keystore.deserialize(JSON.stringify(_keystoreData.keystore));
    var addr = '0x'+ks.getAddresses()[0];
    console.log("addr:"+addr);

    var web3Provider = new HookedWeb3Provider({
      //host: "http://morden.cloudapp.net:8545",
      host: "http://104.236.65.136:8545",
      //host: "http://localhost:8545",
      transaction_signer: ks
    });
    web3.setProvider(web3Provider);

    web3.eth.getBalance(addr, function(err, bal){
      console.log('Balance: ' + (bal / 1.0e18) + ' ETH');
    });

    Persona.setWeb3Provider(web3Provider);
    Persona.setIpfsProvider({host: '104.236.65.136', port : '5001'});

    Persona.getPersonaAttributes('0xd65e0311162d01cec291d00cc9a0806b7e0ed5ed', addr)
    .then(function(_info) {
      console.log(_info);
      if(_info.personSchema != null){
        this.setState({personaSchema: _info.personSchema})
      }
    }.bind(this))
    .catch(function(e) {
      	  console.log("catch!");
          done(e);
    });

  },

  render: function() {
     var childProps = {
       keystoreData: this.state.keystoreData,
       setKeystoreData: this.setKeystoreData,
       personaSchema: this.state.personaSchema
     }
	    return (
	      <div>
	        <NavBar keystoreData={this.state.keystoreData} personaSchema={this.state.personaSchema} setKeystoreData={this.setKeystoreData} />
	        <div className="container-fluid">
	        {React.cloneElement(this.props.children, childProps)}
	        </div>
	      </div>
	    );
	  }

});


window.onload = function() {
    ReactDOM.render((
    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Route>
    </Router>
    ), document.getElementById('root'))
  };
