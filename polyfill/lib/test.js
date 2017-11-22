let body = document.body;
let adiv = (str, el=document.body)=> {
  console.log(str);
  var div = document.createElement('div');
  div.innerHTML = str;
  el.appendChild(div);
}

let x = new Promise((r,e)=> {
	setTimeout(x=> {
		adiv('one');
		r('two');
	}, 500);
}).then(d=> new Promise((r,e)=> {
	setTimeout(x=> {
		adiv(d);
		r('three');
	}, 500);
})).then(d=> new Promise((r,e)=> {
	setTimeout(x=> {
		adiv(d);
		r('four');
	}, 500);
})).then(d=> { adiv(d); });
