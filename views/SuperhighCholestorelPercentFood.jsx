SuperhighCholestorelPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
	    foods: Foods.find(
      {cholesterolPercentDVQuotient: {$gt: 1.5}}, 
      {sort: {cholesterolPercentDVQuotient: -1}}
      ).fetch()
	  };
	},

	render(){
		console.log("render SuperhighCholestorelPercentFood.jsx");

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);
	}
})