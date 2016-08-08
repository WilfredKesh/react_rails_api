var AllItems = React.createClass({
    
    deleteItem(id){
    	this.props.deleteItem(id);
    },
    editItem(id){
       alert('editing item');
    },
	render() {

		var items = this.props.items.map((item) => {
			return(

			<div key={item.id}>
			   <Item item={item} deleteItem={this.deleteItem.bind(this, item.id)} editItem={this.deleteItem} />

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