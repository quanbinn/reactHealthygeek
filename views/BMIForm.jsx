BMIForm = React.createClass({
  handleSubmit(e) {
    // Prevent default browser form submit
    e.preventDefault();

        // Get value from form element
    var myHeight = React.findDOMNode(this.refs.myHeight).value.trim();
    var myWeight = React.findDOMNode(this.refs.myWeight).value.trim();

    var myBMIFloatNum = myWeight / ((myHeight / 100) * (myHeight / 100));// Calculate my BMI(kg/m2)
    var myBMI = myBMIFloatNum.toFixed(1);     // Calculate my BMI round(1)

    /*
    // render the BMI info filled
    document.getElementById("myHeightInfo").textContent = "我的身高是 " + myHeight +".";  
    document.getElementById("myWeightInfo").textContent = "我的体重是 " + myWeight +".";  
    document.getElementById("myBMIInfo").textContent = "我的BMI是 " + myBMI +".";  
    */
    
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

    render(){
        return (
            <form ref="form" onSubmit={this.handleSubmit}>                   
               身高：<input type="number" min="0" max="300" step="0.5" placeholder="厘米" ref="myHeight" /><br />
               体重：<input type="number" min="0" max="1000" step="0.5" placeholder="公斤" ref="myWeight" /><br />
                     <input type="submit" value="计算BMI" />
            </form>
        )
    }  
});