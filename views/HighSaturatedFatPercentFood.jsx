HighSaturatedFatPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
	    foods: Foods.find(
        {$and: 
          [
            {saturatedFatPercentDVQuotient: {$gt: 1.0}}, 
            {saturatedFatPercentDVQuotient: {$lte: 1.5}}
          ]
        }, 
        {sort: {saturatedFatPercentDVQuotient: -1}}
        ).fetch()
	  };
	},

	render(){
		console.log("render highSaturatedFatPercentFood.jsx");

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);

	}
})