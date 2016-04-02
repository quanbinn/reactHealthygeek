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

    let foods = this.data.foods.map((token) => <li key={token._id}><img src={token.imageSource} class="imageSet" /></li>);
    return (
    	<ul>
    		{foods}
			</ul>
		);
	}
});