BMIForm = React.createClass({
  getInitialState(){
    return {bmi: 0};
  },  

  handleSubmit(e) {
    // Prevent default browser form submit
    e.preventDefault();

        // Get value from form element
    var myHeight = ReactDOM.findDOMNode(this.refs.myHeight).value.trim();
    var myWeight = ReactDOM.findDOMNode(this.refs.myWeight).value.trim();

    var myBMIFloatNum = myWeight / ((myHeight / 100) * (myHeight / 100));// Calculate my BMI(kg/m2)
    var myBMI = myBMIFloatNum.toFixed(1);     // Calculate my BMI round(1)

    this.setState({bmi: myBMI});

    // render the BMI info filled
    document.getElementById("myHeightInfo").textContent = "我的身高是 " + myHeight +".";  
    document.getElementById("myWeightInfo").textContent = "我的体重是 " + myWeight +".";  
    document.getElementById("myBMIInfo").textContent = "我的BMI是 " + myBMI +".";  

    // output my BMI description according to Hong Kong's BMI recommendation
    if (myBMI < 18.5) {                                 
        document.getElementById("myBMIAssess").textContent = "我的体重过轻"; 
    }else if (myBMI >= 18.5 && myBMI < 23.0) {
        document.getElementById("myBMIAssess").textContent = "我的体重正常"; 
    }else if (myBMI >= 23.0 && myBMI < 25.0) {
        document.getElementById("myBMIAssess").textContent = "我的体重超重，有健康危险"; 
    }else if (myBMI >= 25.0 && myBMI < 30.0) {
        document.getElementById("myBMIAssess").textContent = "我的体重超重，属于中度肥胖"; 
    }else{
        document.getElementById("myBMIAssess").textContent = "我的体重超重，属于严重肥胖"; 
    };
 
    BMIInfos.insert({
        Height: myHeight,
        Weight: myWeight,
        BMI: myBMI,
        createdAt: new Date()
    });

    // Clear form
    var form = ReactDOM.findDOMNode(this.refs.form);
    form.reset();
  },

    render(){

var foodRecomAccordingToBmi;
if (this.state.bmi < 18.5) {  
        console.log(this.state.bmi);          
        console.log("test myBMI < 18.5");                          
    foodRecomAccordingToBmi = <HighSaturatedFatPercentFood />;
}else{
        console.log("test myBMI > 18.5");                          
             console.log(this.state.bmi);  
    foodRecomAccordingToBmi = <HighFatPercentFood />;
};


        return (
          <div>
            <form ref="form" onSubmit={this.handleSubmit}>                   
               身高：<input type="number" min="0" max="300" step="0.5" placeholder="厘米" ref="myHeight" /><br />
               体重：<input type="number" min="0" max="1000" step="0.5" placeholder="公斤" ref="myWeight" /><br />
                     <input type="submit" value="计算BMI" />
            </form>

            <div id="myHeightInfo"></div> 
            <div id="myWeightInfo"></div> 
            <div id="myBMIInfo"></div> 
            <h2 id="myBMIAssess"></h2>

{foodRecomAccordingToBmi}

          </div>
        )
    }  
});