//FrontPage.jsx
var FrontPage = React.createClass({
  render: function() {
    return (
    	<ReactBootstrap.Row>
			<ReactBootstrap.Col md={6}>
			<Well>
			<h4>Welcome to the User Controlled KYC</h4>
			<p>(todo description)</p>
			</Well>
			</ReactBootstrap.Col>
			<ReactBootstrap.Col md={6}>
				<Well>
					<h4>(more info)</h4>
					<p>(todo)</p>
				</Well>
			</ReactBootstrap.Col>
		</ReactBootstrap.Row>
    );
  }
});
