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

    return (
        <ImageOfFoodList foods={this.data.foods} />
		);
	}
})