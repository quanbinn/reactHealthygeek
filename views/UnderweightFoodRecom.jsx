UnderweightFoodRecom = React.createClass({
  render(){
    return (
    	<div>
		  	<h2>我的体重过轻</h2>
		    <h3>我应该多吃含高脂肪的食品</h3><HighFatPercentFood />
		    <h3>我应该适当吃一些含超高脂肪的食品</h3><SuperhighFatPercentFood />
		    <h3>我应该少吃含高胆固醇的食品</h3><HighCholestorelPercentFood />
		    <h3>我应该少吃含超高胆固醇的食品</h3><SuperhighCholestorelPercentFood />
    	</div>
    )
  }  
});