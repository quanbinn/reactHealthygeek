ImageOfFoodList = React.createClass({
  render(){
    let createToken = function (token) {
      return <img src={token.imageSource} key={token._id} className="imageSet" />;
    };
    return (
  		<ul>{this.props.foods.map(createToken)}</ul>
    );
  }  
});