SevereObesityFoodRecom = React.createClass({
  render(){
    return (
    	<div>
	      <h2>我的体重超重，属于严重肥胖</h2>
	      <h3>我应该少吃含高脂肪的食品</h3><HighFatPercentFood />
	      <h3>我应该少吃含超高脂肪的食品</h3><SuperhighFatPercentFood />
	      <h3>我应该少吃含饱和脂肪的食品</h3><HighSaturatedFatPercentFood />
	      <h3>我应该少吃含超高饱和脂肪的食品</h3><SuperhighSaturatedFatPercentFood />
	      <h3>我应该少吃含高胆固醇的食品</h3><HighCholestorelPercentFood />
	      <h3>我应该少吃含超高胆固醇的食品</h3><SuperhighCholestorelPercentFood />
    	</div>
    )
  }  
});
