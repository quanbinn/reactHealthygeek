ImageOfFoodList = React.createClass({
  render(){
    let createToken = function (token) {
      return <img src={token.imageSource} class="imageSet" />;
    };
    return (
  		<ul>{this.props.foods.map(createToken)}</ul>
    );
  }  
});