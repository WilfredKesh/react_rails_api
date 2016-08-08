var Item = React.createClass({
	render(){
		return(
				<div>
				  <h3>{this.props.item.name}</h3>
				  <p>{this.props.item.description}</p>
				  <button onClick={this.props.deleteItem.bind(this, item.id)}>Delete</button>
				  <button onClick={this.props.editItem}>Edit</button> 

			    </div>
			)
	}
});