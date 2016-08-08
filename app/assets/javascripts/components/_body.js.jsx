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
         this.setState({items: newState })
	 },

	 deleteItem(id){
	 	$.ajax({
	 		url: `/api/v1/items/${id}`,
	 		type: 'DELETE',
	 		success: () => {
	 			this.removeItem(id);
	 		}

	 	})
	 },

    removeItem(id){
    	var newItems = this.state.items.filter((item) => {

    		return item.id !=  id;

    	});

    	this.setState({ items: newItems});
    },
	render() {
	 return ( 
	 	      <div>
	            <NewItem handleData={this.handleData} />
	            <AllItems items={this.state.items} deleteItem={this.deleteItem} />
	          </div> 
	          )
	} 
});
