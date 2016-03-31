HighFatPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
	    foods: Foods.find(
			{$and: 
	      [
	        {totalFatPercentDVQuotient: {$gt: 1.0}}, 
	        {totalFatPercentDVQuotient: {$lte: 1.5}}
	      ]

	    }, 
	    {sort: {totalFatPercentDVQuotient: -1}}
	    ).fetch()
	  };
	},

	render(){
		console.log("render highFatPercentFood.jsx");

		let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);

	}
})