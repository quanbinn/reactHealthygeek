HighCholestorelPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
			foods: Foods.find(
      {$and: 
        [
          {cholesterolPercentDVQuotient: {$gt: 1.0}}, 
          {cholesterolPercentDVQuotient: {$lte: 1.5}}
        ]
      }, 
      {sort: {cholesterolPercentDVQuotient: -1}}
      ).fetch()
	  };
	},

	render(){
		console.log("render HighCholestorelPercentFood.jsx");

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);
	}
})