Outputfood = React.createClass({
	// This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
  	return {
     foods: Foods.find({}).fetch()
  	};
  },

  render() {
  	//console.log(data);
    //console.log(typeof(data)); 

    console.log(this.data.foods);    

    return (
      <div>
        <ImageOfFoodList foods={this.data.foods} />
        <NutritionFactsOfFoodList foods={this.data.foods} />
        
		  </div>
    );
	}
});