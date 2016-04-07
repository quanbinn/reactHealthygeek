NormalRangeFoodRecom = React.createClass({
  render(){
    return (
    	<div>
        <h2>我的体重正常</h2>
        <h3>我应该少吃含高胆固醇的食品</h3><HighCholestorelPercentFood />
        <h3>我应该少吃含超高胆固醇的食品</h3><SuperhighCholestorelPercentFood />   	
    	</div>
    )
  }  
});