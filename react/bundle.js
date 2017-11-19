/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//import React from 'react';
//import ReactDOM from 'react-dom';
//import moment from 'moment';

class Comment extends React.Component {
	constructor() {
		super();
		this.state = {
			showBody: true
		};
	}
	render() {
		let body = '';
		if (this.state.showBody) body = this.props.body;
		return React.createElement(
			'div',
			null,
			React.createElement(
				'b',
				null,
				this.props.time
			),
			' -',
			React.createElement(
				'i',
				{ onClick: this._toggleBody.bind(this) },
				this.props.author
			),
			'- ',
			body
		);
	}
	_toggleBody(e) {
		this.setState({ showBody: !this.state.showBody });
	}
}

class CommentForm extends React.Component {
	constructor() {
		super();
		this.state = {
			chrCnt: 0
		};
	}
	render() {
		return React.createElement(
			'form',
			{ onSubmit: this._submit.bind(this) },
			React.createElement('input', { type: 'text', placeholder: 'Name', ref: i => this._author = i }),
			React.createElement('input', { type: 'text', placeholder: 'Comment',
				onKeyUp: this._chrCnt.bind(this), ref: i => this._body = i }),
			React.createElement(
				'span',
				null,
				this.state.chrCnt
			),
			React.createElement('input', { type: 'submit', value: 'Save' })
		);
	}
	_submit(e) {
		e.preventDefault();
		if (this._author.value && this._body.value) {
			this.props.addComment(this._author.value, this._body.value);
			this._body.value = '';
			this._chrCnt();
		}
	}
	_chrCnt(e) {
		this.setState({ chrCnt: this._body.value.length });
	}
}

class CommentBox extends React.Component {
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
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h3',
				null,
				'Comments'
			),
			React.createElement(
				'div',
				null,
				cmts.length,
				' comments'
			),
			React.createElement(
				'div',
				null,
				React.createElement(CommentForm, { addComment: this.addComment.bind(this) })
			),
			cmts.map(c => React.createElement(Comment, { time: c.t,
				author: c.a, body: c.b, key: c.id }))
		);
	}
	addComment(a, b, f = true) {
		let t = moment().format('HH:mm:ss.SS');
		let nc = { id: Date.now(), a, b, t };
		this.setState({ comments: [nc, ...this.state.comments] });
		let i = Math.floor(Math.random() * 50) + 10;
		if (f) this._fakeCmt(i, 1000);
	}
	_fetchComments() {
		for (let i = 1; i <= 4; i++) this._fakeCmt(i, i * 3000);
	}
	_fakeCmt(i, t) {
		let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		setTimeout(x => {
			this.addComment('author' + i, lorem.split(' ').slice(i, i + 5).join(' '), false);
		}, t);
	}
}

class HelloWorld extends React.Component {
	render() {
		let dt = new Date();
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Hello World!'
			),
			React.createElement(
				'p',
				null,
				'It\'s time to do react: ',
				dt.toString()
			),
			React.createElement(CommentBox, null)
		);
	}
}

let asdf = document.querySelector('#asdf');
ReactDOM.render(React.createElement(HelloWorld, null), asdf, () => {
	console.timeEnd('react');
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map