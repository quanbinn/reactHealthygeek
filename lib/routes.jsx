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

Router.route('/test', function () {
  React.render(<HighSaturatedFatPercentFood />, document.body);
});

Router.route('/addfood', function () {
  React.render(<Addfood />, document.body);
});