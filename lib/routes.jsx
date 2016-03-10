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
