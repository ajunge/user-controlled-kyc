//Login.js

var Login = React.createClass({
	getInitialState: function() {
			return {seedInput: '', error: ''};
	},
	contextTypes: {
		history: React.PropTypes.object,
	},

	goToRegister: function(){
		this.context.history.replaceState(null,'/register');
	},

	recover: function(){
		var identifier = this.refs.identifier.getValue().trim();
		var password = this.refs.password.getValue()
		var token = web3.sha3(identifier+':'+password);
		//console.log("login.token:"+token);
		//console.log("login.identifier:"+identifier);


		KeystoreAPI.keystoreGet(identifier,token,
			function(_postResult){
				  console.log(_postResult);
			    var keystoreData = _postResult;
			    this.props.setKeystoreData(keystoreData);
				this.context.history.replaceState(null,'/dashboard');
			}.bind(this),
			function(status,responseText){
				var resp=JSON.parse(responseText);
				if(resp.status=='fail'){
					//console.log("Error:"+resp.data.message);
					this.setState({error: resp.data.message});
				}
				//console.log("error in keystorePost");
			}.bind(this)
		);
	},

	generateRandomSeed: function(){
		var randomSeed = lightwallet.keystore.generateRandomSeed();
		//console.log(randomSeed);
		this.setState({seedInput: randomSeed});
	},
	handleSeedChange: function(event){
		this.setState({seedInput: event.target.value});
	},

	setSeed: function(){
		var seed=this.refs.seed.getValue();
		var seedPassword = this.refs.seedPassword.getValue();
		var ks = new lightwallet.keystore(seed, seedPassword);
		ks.generateNewAddress(seedPassword);
		var keystoreData = {
			identifier: 'anonymous',
			keystore: ks
		}
		this.props.setKeystoreData(keystoreData);
		this.context.history.replaceState(null,'/dashboard');
	},


  render: function() {
	var footerKeyServer = (
		<ButtonToolbar >
			<Button className="pull-right" bsStyle='primary' onClick={this.goToRegister}>Register</Button>
			<Button className="pull-right" bsStyle='primary' onClick={this.recover}>Login</Button>
		</ButtonToolbar>
	);
	var footerSeed = (
		<ButtonToolbar >
			<Button className="pull-right" bsStyle='primary' onClick={this.generateRandomSeed}>Generate Seed</Button>
			<Button className="pull-right" bsStyle='primary' onClick={this.setSeed}>Set Seed</Button>
		</ButtonToolbar>
	);
	var errorAlert;
	if (this.state.error!='') {
		errorAlert = (
        <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss} >
          <h4>Something wrong!</h4>
          <p>{this.state.error}</p>
        </Alert>
      );
    }

		var seedInputStatus;
		if(this.state.seedInput==''){
			seedInputStatus='';
		}else{
			if(lightwallet.keystore.isSeedValid(this.state.seedInput)){
				seedInputStatus='OK';
			}else{
				seedInputStatus='Bad';
			}
		}
    return (
    	<ReactBootstrap.Row>
			<ReactBootstrap.Col md={4} mdOffset={2}>
				<Panel header="Login using Keyserver" footer={ footerKeyServer }>
		    		{errorAlert}
		        	<form>
		          	<Label>Username</Label>
		        		<Input type="text" placeholder="identifier" ref='identifier' />
		          	<Label>Password</Label>
		        		<Input type="password" ref='password' />
		          	</form>
				</Panel>
			</ReactBootstrap.Col>
			<ReactBootstrap.Col md={4} mdOffset={0}>
				<Panel header="Set offline seed" footer={ footerSeed }>
		    		<form>
		          	<Label>Seed</Label>
									<Input type="text" ref='seed' value={this.state.seedInput}
			        			onChange={this.handleSeedChange} addonAfter={seedInputStatus}/>
									<Label>Local Password</Label>
				        		<Input type="password" ref='seedPassword' />
		        </form>
				</Panel>
			</ReactBootstrap.Col>
		</ReactBootstrap.Row>
    );
  }
});
