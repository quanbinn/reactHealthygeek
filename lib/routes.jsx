Router.route('/', () => {
	let app = (
		<Layout>
			<BMIForm />
			<Addfood />
			<Outputfood />
		</Layout>
	); 
	React.render(app, document.body);
});

Router.route('/test1', function () {
  React.render(<HighFatPercentFood />, document.body);
});
Router.route('/test2', function () {
  React.render(<HighSaturatedFatPercentFood />, document.body);
});
Router.route('/test3', function () {
  React.render(<HighCholestorelPercentFood />, document.body);
});
Router.route('/test4', function () {
  React.render(<SuperhighFatPercentFood />, document.body);
});
Router.route('/test5', function () {
  React.render(<SuperhighSaturatedFatPercentFood />, document.body);
});
Router.route('/test6', function () {
  React.render(<SuperhighCholestorelPercentFood />, document.body);
});


Router.route('/addfood', function () {
  React.render(<Addfood />, document.body);
});