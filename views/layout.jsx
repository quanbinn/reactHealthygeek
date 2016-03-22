Layout = React.createClass({
  handleSubmit(e) {
  	// Prevent default browser form submit
    e.preventDefault();

		// Get value from form element
    var myHeight = React.findDOMNode(this.refs.myHeight).value.trim();
    var myWeight = React.findDOMNode(this.refs.myWeight).value.trim();

    var myBMIFloatNum = myWeight / ((myHeight / 100) * (myHeight / 100));// Calculate my BMI(kg/m2)
    var myBMI = myBMIFloatNum.toFixed(1);     // Calculate my BMI round(1)

    // render the BMI info filled
    document.getElementById("myHeightInfo").textContent = "我的身高是 " + myHeight +".";  
    document.getElementById("myWeightInfo").textContent = "我的体重是 " + myWeight +".";  
    document.getElementById("myBMIInfo").textContent = "我的BMI是 " + myBMI +".";  

		BMIInfos.insert({
	    Height: myHeight,
	    Weight: myWeight,
	    BMI: myBMI,
	    createdAt: new Date()
    });

		// Clear form
    var form = React.findDOMNode(this.refs.form);
    form.reset();

  },

	render() {
		return (
			<div>
				<p>欢迎来到HealthyGeek。</p>
				<p>所有信息均来之官方网站， <a href="https://en.wikipedia.org/">维基百科</a>和学术文献。</p>

				<img src="image/food/beef.jpg" class="imageSet" /> 
				<img src="image/food/egg.jpg" class="imageSet" /> 	
				<img src="image/food/jiucai-bao.jpg" class="imageSet" /> 
				<img src="image/food/larou.jpg" class="imageSet" /> 
				<img src="image/food/nonfat-milk.jpg" class="imageSet" /> 
				<img src="image/food/peanut.jpg" class="imageSet" /> 
				<img src="image/food/pizza.jpg" class="imageSet" /> 
				<img src="image/food/tuna-12inch-subway.jpg" class="imageSet" /> 
        
		    <form ref="form" onSubmit={this.handleSubmit}>
					 身高：<input type="number" min="0" max="300" step="0.5" placeholder="厘米" ref="myHeight" /><br />
		       体重：<input type="number" min="0" max="1000" step="0.5" placeholder="公斤" ref="myWeight" /><br />
		      <input type="submit" value="计算BMI" />
		    </form>

				<div id="myHeightInfo"></div> 
				<div id="myWeightInfo"></div> 
				<div id="myBMIInfo"></div> 

				{this.props.children}
			</div>
		);
	}
});