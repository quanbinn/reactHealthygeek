SuperhighFatPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
	    foods: Foods.find(
      {totalFatPercentDVQuotient: {$gt: 1.5}}, 
      {sort: {totalFatPercentDVQuotient: -1}}
  		).fetch()
	  };
	},

	render(){
		console.log("render SuperhighFatPercentFood.jsx");

		let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
})