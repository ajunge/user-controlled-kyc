//NavBar.jsx

var NavBar = React.createClass({
	contextTypes: {
		history: React.PropTypes.object,
	},

	goToRegister: function(){
		this.context.history.replaceState(null,'/register');
	},
	goToLogin: function(){
		this.context.history.replaceState(null,'/login');
	},
  goToDashboard: function(){
    this.context.history.replaceState(null,'/dashboard');
  },
	logout: function(){
		this.props.setKeystoreData('');
		this.context.history.replaceState(null,'/');
	},

  render: function() {
	var userOptions;
	if(this.props.keystoreData != ''){

    var userData;
    if(this.props.personaSchema != null) {
      var personaSchema = this.props.personaSchema;
      personaSchemaName = personaSchema.name;
      personaSchemaAvatarURL = personaSchema.image.contentUrl
      personaSchemaAvatar = "http://104.236.65.136:8080/"+personaSchemaAvatarURL;
      var avatarStyle = {
        width: "20px",
        height: "20px"
      };

      userData = <span><Image src={personaSchemaAvatar} circle
          style={avatarStyle} /> {personaSchemaName}</span>;
    }else{
      userData = <span>{this.props.keystoreData.identifier}</span>;
    }

    userOptions = (
			<Nav pullRight>
        <NavDropdown eventKey={1} title={userData} id="basic-nav-dropdown">
          <MenuItem eventKey={1.1} onClick={this.goToDashboard} >Dashboard</MenuItem>
          <MenuItem eventKey={1.1} onClick={this.logout} >Logout</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={1.2} onClick={this.goToSettings} >Settings</MenuItem>
        </NavDropdown>
			</Nav>
		);
	}else{
		userOptions = (
			<Nav pullRight>
          <NavItem eventKey={1} onClick={this.goToLogin} >Login</NavItem>
				  {/*
					<NavItem eventKey={2} onClick={this.goToRegister} >Register</NavItem>
					*/}
          <NavItem eventKey={3} onClick={this.goToSettings} >Settings</NavItem>
			</Nav>
		);
	}

	return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">UC-KYC dApp</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {userOptions}
      </Navbar.Collapse>
    </Navbar>
    );
  }
});
