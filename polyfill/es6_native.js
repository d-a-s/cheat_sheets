
let x = new Promise((r,e)=> {
	setTimeout(x=> {
		console.log('one');
		r('two');
	}, 500);
}).then(d=> new Promise((r,e)=> {
	setTimeout(x=> {
		console.log(d);
		r('three');
	}, 500);
})).then(d=> new Promise((r,e)=> {
	setTimeout(x=> {
		console.log(d);
		r('four');
	}, 500);
})).then(d=> { console.log(d); });
