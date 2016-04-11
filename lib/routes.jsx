Router.route('/', () => {
	let app = (
		<Layout>
			<BMIForm />
		</Layout>
	); 
	React.render(app, document.body);
});


Router.route('/test1', function () {
  React.render(<UnderweightFoodRecom />, document.body);
});
Router.route('/test2', function () {
  React.render(<NormalRangeFoodRecom />, document.body);
});
Router.route('/test3', function () {
  React.render(<OverweightAtRiskFoodRecom />, document.body);
});
Router.route('/test4', function () {
  React.render(<ModeratelyObeseFoodRecom />, document.body);
});
Router.route('/test5', function () {
  React.render(<SevereObesityFoodRecom />, document.body);
});



Router.route('/addfood', function () {
  React.render(<Addfood />, document.body);
});