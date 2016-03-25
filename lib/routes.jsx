Router.route('/', () => {
	let binxiaisTestingapp = (
		<Layout>
			<Outputfood />
		</Layout>
	); 
	React.render(binxiaisTestingapp, document.body);
});

Router.route('/addfood', function () {
  React.render(<Addfood />, document.body);
});

Router.route('/test', function () {
  React.render(<HighSaturatedFatPercentFood />, document.body);
});

Router.route('/bmiform', function () {
  React.render(<BMIForm />, document.body);
});