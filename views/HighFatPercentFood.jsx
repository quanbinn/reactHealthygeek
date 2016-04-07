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

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);

	}
})