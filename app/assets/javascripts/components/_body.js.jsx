var Body = React.createClass({ 
	getInitialState(){
		return {items: []}
	},
	componentDidMount(){
	    alert('I am awesome');
		$.getJSON('api/v1/items.json', (response) => {this.setState({items: response}) });
	},

	 handleData(item) {
         var newState = this.state.items.concat(item);
         this.setState({items: newState})
	 },

	render() {
	 return ( 
	 	      <div>
	            <NewItem handleData={this.handleData} />
	            <AllItems items={this.state.items} />
	          </div> 
	          )
	} 
});
