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
    console.log(this);
    console.log(typeof(this));
    console.log(React);
    console.log(typeof(React));
  	//console.log(data);
    //console.log(typeof(data));   

      let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
});