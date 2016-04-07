SuperhighSaturatedFatPercentFood = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	  return {
	    foods: Foods.find(
      {saturatedFatPercentDVQuotient: {$gt: 1.5}}, 
      {sort: {saturatedFatPercentDVQuotient: -1}}
      ).fetch()
	  };
	},
	
	render(){
		console.log("render SuperhighSaturatedFatPercentFood.jsx");

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);
	}
})