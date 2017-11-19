//import React from 'react';
//import ReactDOM from 'react-dom';
//import moment from 'moment';

class Comment extends React.Component{
	constructor(){
		super();
		this.state={
			showBody:true
		};
	}
	render() {
		let body='';
		if(this.state.showBody) body = this.props.body;
		return (<div>
			<b>{this.props.time}</b> - 
			<i onClick={this._toggleBody.bind(this)}>{this.props.author}</i>
			- {body}</div>);
	}
	_toggleBody(e) {
		this.setState({showBody: !this.state.showBody});
	}
}

class CommentForm extends React.Component{
	constructor(){
		super();
		this.state={
			chrCnt:0
		};
	}
	render() {
		return (<form onSubmit={this._submit.bind(this)}>
			<input type='text' placeholder='Name' ref={i=> this._author=i}/>
			<input type='text' placeholder='Comment' 
				onKeyUp={this._chrCnt.bind(this)} ref={i=> this._body=i}/>
			<span>{this.state.chrCnt}</span>
			<input type='submit' value='Save'/></form>);
	}
	_submit(e){
		e.preventDefault();
		if(this._author.value && this._body.value) {
			this.props.addComment(this._author.value, this._body.value);
			this._body.value = '';
			this._chrCnt();
		}
	}
	_chrCnt(e){
		this.setState({chrCnt: this._body.value.length});
	}
}

class CommentBox extends React.Component{
	constructor() {
		super();
		this.state = {
			comments: []
		};
	}
	componentWillMount() {
		this._fetchComments();
	}
	render() {
		let cmts = this.state.comments;
		return (<div><h3>Comments</h3>
		<div>{cmts.length} comments</div>
		<div><CommentForm addComment={this.addComment.bind(this)}/></div>
		{cmts.map(c=> <Comment time={c.t} 
			author={c.a} body={c.b} key={c.id}/>)}
		</div>);
	}
	addComment(a, b, f=true) {
		let t = moment().format('HH:mm:ss.SS');
		let nc = {id:Date.now(), a, b, t};
		this.setState({ comments: [nc, ...this.state.comments]});
		let i = Math.floor(Math.random() *50) + 10;
		if(f) this._fakeCmt(i, 1000);
	}
	_fetchComments() {
		for(let i=1;i<=4;i++) this._fakeCmt(i, i*3000);
	}
	_fakeCmt(i, t) {
		let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		setTimeout(x=> {
			this.addComment('author'+i, lorem.split(' ').slice(i,i+5).join(' '), false);
		}, t);
	}
}

class HelloWorld extends React.Component {
	render() {
		let dt = new Date();
		return (<div>
			<h1>Hello World!</h1>
			<p>It's time to do react: {dt.toString()}</p>
			<CommentBox/>
			</div>);
	}
}


let asdf = document.querySelector('#asdf');
ReactDOM.render(<HelloWorld/>, asdf, ()=> {
	console.timeEnd('react');
});

