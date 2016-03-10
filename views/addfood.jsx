Addfood = React.createClass({
  binxiaIsHandleSubmit(e) {
    // Prevent default browser form submit
    e.preventDefault();

    // Get value from form element
    var name = React.findDOMNode(this.refs.name).value.trim();
    var brand = React.findDOMNode(this.refs.brand).value.trim();   
    var unit = React.findDOMNode(this.refs.unit).value.trim();
    var calory = React.findDOMNode(this.refs.calory).value.trim();
    var totalFat = React.findDOMNode(this.refs.totalFat).value.trim();
    var saturatedFat = React.findDOMNode(this.refs.saturatedFat).value.trim();
    var cholesterol = React.findDOMNode(this.refs.cholesterol).value.trim();
    var category = React.findDOMNode(this.refs.category).value.trim();
    var imageSource = React.findDOMNode(this.refs.imageSource).value.trim();
    var resource = React.findDOMNode(this.refs.resource).value.trim();

    var caloryPercentDV = (calory * 100 / 2000).toFixed(0);             // get calories's %DV
    var totalFatPercentDV = (totalFat * 100  / 65).toFixed(0);           // get total fat's %DV
    var saturatedFatPercentDV = (saturatedFat * 100  / 20).toFixed(0);   // get saturated fat's %DV
    var cholesterolPercentDV = (cholesterol * 100  / 300).toFixed(0);    // get cholesterol's %DV

    // get the quotient of totalFat's %DV / calories's %DV 
    var totalFatPercentDVQuotient = (totalFatPercentDV / caloryPercentDV).toFixed(1);  
    // get the quotient of saturatedFat's %DV / calories's %DV
    var saturatedFatPercentDVQuotient = (saturatedFatPercentDV / caloryPercentDV).toFixed(1);
    // get the quotient of cholesterol's %DV / calories's %DV  
    var cholesterolPercentDVQuotient = (cholesterolPercentDV / caloryPercentDV).toFixed(1);
    
    // render the food info filled 
    document.getElementById("foodName").textContent = "食品名称: " + name;  
    document.getElementById("foodBrand").textContent = "品牌: " + brand;  
    document.getElementById("foodUnit").textContent = "单位: " + unit +"克";  
    document.getElementById("foodCalory").textContent = "能量 " + calory +"卡路里";  
    document.getElementById("foodTotalFat").textContent = "总脂肪: " + totalFat +"克";  
    document.getElementById("foodSaturatedFat").textContent = "饱和脂肪: " + saturatedFat +"克";  
    document.getElementById("foodCholesterol").textContent = "胆固醇: " + cholesterol +"毫克";  
    document.getElementById("foodCategory").textContent = "分类: " + category;  
    document.getElementById("foodImageSource").textContent = "图片路径： "+ imageSource;        
    document.getElementById("foodResource").textContent = "来源: " + resource;  

    document.getElementById("foodCaloryPercentDV").textContent = "占卡路里每天需求总量的：" + caloryPercentDV +"%";  
    document.getElementById("foodTotalFatPercentDV").textContent = "占总脂肪每天需求总量的：" + totalFatPercentDV +"%";  
    document.getElementById("foodSaturatedFatPercentDV").textContent = "占饱和脂肪每天需求总量的：" + saturatedFatPercentDV +"%";  
    document.getElementById("foodCholesterolPercentDV").textContent = "占胆固醇每天需求总量的：" + cholesterolPercentDV +"%";  

    document.getElementById("foodTotalFatPercentDVQuotient").textContent = "总脂肪占比/卡路里占比：" + totalFatPercentDVQuotient;  
    document.getElementById("foodSaturatedFatPercentDVQuotient").textContent = "饱和脂肪占比/卡路里占比：" + saturatedFatPercentDVQuotient ;  
    document.getElementById("foodCholesterolPercentDVQuotient").textContent = "胆固醇占比/卡路里占比：" + cholesterolPercentDVQuotient;  

    // Clear form
    React.findDOMNode(this.refs.name).value = "";
    React.findDOMNode(this.refs.brand).value = "";
    React.findDOMNode(this.refs.unit).value = "";
    React.findDOMNode(this.refs.calory).value = "";
    React.findDOMNode(this.refs.totalFat).value = "";
    React.findDOMNode(this.refs.saturatedFat).value = "";
    React.findDOMNode(this.refs.cholesterol).value = "";
    React.findDOMNode(this.refs.category).value = "";
    React.findDOMNode(this.refs.imageSource).value = "";
    React.findDOMNode(this.refs.resource).value = "";

 },

  render() {
    return (
    <div>
      <form onSubmit={e => this.binxiaIsHandleSubmit(e) }>
        名称：<input type="text" placeholder="食品名称" ref="name" /><br />
        品牌：<input type="text" placeholder="品牌" ref="brand" /><br />
        单位：<input type="text" placeholder="克" ref="unit" /><br />
        能量：<input type="text" placeholder="卡路里" ref="calory" /><br />
        总脂肪：<input type="text" placeholder="克" ref="totalFat" /><br />
        饱和脂肪：<input type="text" placeholder="克" ref="saturatedFat" /><br />
        胆固醇：<input type="text" placeholder="毫克" ref="cholesterol" /><br />
        分类：<select ref="category">
                <option value="天然食品">天然食品</option>
                <option value="加工食品">加工食品</option>
                <option value="速食快餐">速食快餐</option>
                <option value="休闲餐饮">休闲餐饮</option>
            </select><br />
        图片路径：<input type="text" placeholder="image/food/**.jpg" ref="imageSource" /><br />
        来源：<input type="url" placeholder="输入信息来源的URL" ref="resource" /><br />
               <input type="submit" value="提交" />
    </form>

    <div id="foodName"></div> 
    <div id="foodBrand"></div> 
    <div id="foodUnit"></div> 
    <div id="foodCalory"></div> 
    <div id="foodTotalFat"></div> 
    <div id="foodSaturatedFat"></div> 
    <div id="foodCholesterol"></div> 
    <div id="foodCategory"></div>
    <div id="foodImageSource"></div> 
    <div id="foodResource"></div> 

    <div id="foodCaloryPercentDV"></div> 
    <div id="foodTotalFatPercentDV"></div> 
    <div id="foodSaturatedFatPercentDV"></div> 
    <div id="foodCholesterolPercentDV"></div> 

    <div id="foodTotalFatPercentDVQuotient"></div> 
    <div id="foodSaturatedFatPercentDVQuotient"></div> 
    <div id="foodCholesterolPercentDVQuotient"></div> 
    
    </div>

    );
  }
});