Layout = React.createClass({
	render() {
		return (
			<div>
				<p>欢迎来到HealthyGeek。</p>
				<p>所有信息均来之官方网站， <a href="https://en.wikipedia.org/">维基百科</a>和学术文献。</p>
				{this.props.children}
			</div>
		);
	}
});