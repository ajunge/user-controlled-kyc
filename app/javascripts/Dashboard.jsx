//Dashboard.jsx
var Dashboard = React.createClass({
  contextTypes: {
		history: React.PropTypes.object,
	},
	getInitialState: function() {
	    return {ks: '', balance: 0};
	},
	componentDidMount: function(){
		if(this.props.keystoreData == ''){
			console.log("no keystoreData. redirecting to /");
			this.context.history.replaceState(null,'/');
		}else{
			var ks= lightwallet.keystore.deserialize(JSON.stringify(this.props.keystoreData.keystore));
			this.setState({ks: ks});

      addr = '0x'+ks.getAddresses()[0];
      web3.eth.getBalance(addr, function(err, bal){
        var balance=(bal / 1.0e18)
        this.setState({balance: balance});
        console.log('Balance: ' + balance + ' ETH');
      }.bind(this));
    }


	},


  render: function() {
    var identifier, mainAddr,balance,personaContractAddress
    if(this.props.keystoreData != '') {
      identifier = this.props.keystoreData.identifier;
    }
    if(this.state.ks != '') {
      mainAddr = '0x'+this.state.ks.getAddresses()[0];
      balance = this.state.balance + " ETH";
    }

    var personaSchemaName,personaSchemaAvatar;
    if(this.props.personaSchema != null) {
      var personaSchema = this.props.personaSchema;
      personaSchemaName = personaSchema.name;
      personaSchemaAvatarURL = personaSchema.image.contentUrl
      personaSchemaAvatar = "http://104.236.65.136:8080/"+personaSchemaAvatarURL;
      var avatarStyle = {
        width: "110px",
        height: "110px"
      };
    }


    return (
    	<ReactBootstrap.Row>
			<ReactBootstrap.Col md={6}>
			<Well>
			<h4>Welcome {identifier}</h4>
      <Table striped bordered condensed hover>
        <tbody>
        <tr>
          <td>Main Address</td>
          <td><code>{mainAddr}</code></td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{balance}</td>
        </tr>
        <tr>
          <td>Persona Name</td>
          <td>{personaSchemaName}</td>
        </tr>
        <tr>
          <td>Persona Avatar</td>
          <td><Image src={personaSchemaAvatar} circle responsive
              style={avatarStyle} /></td>
        </tr>
        </tbody>
      </Table>
      </Well>
			</ReactBootstrap.Col>
			<ReactBootstrap.Col md={6}>
				<Well>
					<h4>Your Private Data</h4>
					<p>(todo)</p>
				</Well>
			</ReactBootstrap.Col>
		</ReactBootstrap.Row>
    );
  }
});
