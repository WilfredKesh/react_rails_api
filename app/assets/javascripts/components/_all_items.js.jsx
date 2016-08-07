var AllItems = React.createClass({
    
    deleteItem(){
    	alert('deleting item');
    },
	render(){

		var items = this.props.items.map((item) => {
			return(

			<div key={item.id}>
			  <h3>{item.name}</h3>
			  <p>{item.description}</p>
			  <button onClick={this.deleteItem}>Delete</button>

			</div>
			)

		});

		  return(
        <div>
            {items}
        </div>
    )
		
	}
});