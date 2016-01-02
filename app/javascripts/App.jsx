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
	    return {keystoreData: '', personaContract: null, personaSchema: null};
	},

	setKeystoreData: function(_keystoreData){
    this.setState({keystoreData: _keystoreData})

    var ks= lightwallet.keystore.deserialize(JSON.stringify(_keystoreData.keystore));
    var addr = '0x'+ks.getAddresses()[0];
    console.log("addr:"+addr);

    var web3Provider = new HookedWeb3Provider({
      host: "http://104.131.53.68:8545",
      //host: "http://localhost:8545",
      transaction_signer: ks
    });
    web3.setProvider(web3Provider);

    console.log("balance:"+web3.eth.getBalance(addr).toNumber());

    Persona.setWeb3Provider(web3Provider);
    Persona.setIpfsProvider({host: '104.236.65.136', port : '5001'});
    Persona.setRegistry('0x8b5429bdf4e24f508154aa864675a007e618e79e');
    Persona.of(addr).then(function(_personaContract) {
      console.log("_personaContract")
      console.log(_personaContract);
      this.setState({personaContract: _personaContract});
      return _personaContract.getInfo("personSchema");
    }.bind(this)).then(function(_personaSchema) {
      console.log("_personaSchema")
      console.log(_personaSchema)
      this.setState({personaSchema: _personaSchema})
      //console.log("img: http://104.236.65.136:8080/"+_personaSchema.image.contentUrl)
    }.bind(this));


	},

  render: function() {
     var childProps = {
       keystoreData: this.state.keystoreData,
       setKeystoreData: this.setKeystoreData,
       personaContract: this.state.personaContract,
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
