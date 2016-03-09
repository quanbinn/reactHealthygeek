Outputfood = React.createClass({
	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
  	console.log('getMeteroFoodData()');
  	//data
  	return {
     foods: Foods.find({}).fetch()
  	};
  },

  render() {
  	console.log('render()');
      let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
});