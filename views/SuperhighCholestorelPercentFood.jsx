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

		let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
})