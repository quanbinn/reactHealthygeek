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

		let foods = this.data.foods.map((token) => <li key={token._id}>{token.name}</li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
})