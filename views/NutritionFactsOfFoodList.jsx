NutritionFactsOfFoodList = React.createClass({
  render(){
    let createToken = function (token) {
      return (
      	<div>
		    	<h2>食品名称: {token.name}</h2>

					<div><img src={token.imageSource} key={token._id} className="singleImage" /></div>
					<a href={token.resource}><h3>数据及信息来源</h3></a>

					<h2>品牌： {token.brand}</h2>
					<h3>单位： {token.unit} 克</h3>
					<p>能量： {token.calory} 卡路里</p>
					<p>总脂肪： {token.totalFat} 克</p>
					<p>饱和脂肪： {token.saturatedFat} 克</p>
					<p>胆固醇： {token.cholesterol} 毫克</p>
					<h3>分类： {token.category}</h3>

					<h2>占卡路里每天需求总量的： {token.caloryPercentDV}%</h2>
					<h2>占总脂肪每天需求总量的： {token.totalFatPercentDV}%</h2>
					<h2>占饱和脂肪每天需求总量的： {token.saturatedFatPercentDV}%</h2>
					<h2>占胆固醇每天需求总量的： {token.cholesterolPercentDV}%</h2>

					<h2>总脂肪占比/卡路里占比： {token.totalFatPercentDVQuotient}</h2>
					<h2>饱和脂肪占比/卡路里占比： {token.saturatedFatPercentDVQuotient}</h2>
					<h2>胆固醇占比/卡路里占比： {token.cholesterolPercentDVQuotient}</h2>
				</div>
      );
    };
    return (
  		<ul>{this.props.foods.map(createToken)}</ul>
    );
  }  
});

