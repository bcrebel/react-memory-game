require("source-map-support").install();
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"root": "Game-root--j3E7t",
	"start": "Game-start--2CVGJ",
	"level": "Game-level--1wyLd",
	"prompt": "Game-prompt--2N9iv",
	"time": "Game-time--14iMr",
	"header": "Game-header--NquO6",
	"restart": "Game-restart--3e1cU",
	"timer": "Game-timer---ZGNE",
	"intro": "Game-intro--UqIsf",
	"stats": "Game-stats--123Hv",
	"easy": "Game-easy--Qa-wU",
	"hard": "Game-hard--3CicP",
	"crazy": "Game-crazy--Nv11Q",
	"flipped": "Game-flipped--1gpjb",
	"front": "Game-front--1HNTK",
	"back": "Game-back--11fB_",
	"progressContainer": "Game-progressContainer--3Z61U",
	"shuffle-15": "Game-shuffle-15--1uz6p",
	"shuffleIn": "Game-shuffleIn--2PM2Z"
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/components/Game/Levels.js
const levels = [{
	cards: ["✈", "♘", "✈", "♫", "♫", "☆", "♘", "☆"],
	difficulty: "easy"
}, {
	cards: ["❄", "⍨", "♘", "✈", "☯", "♠", "☆", "❄", "♫", "♫", "☯", "☆", "✈", "⍨", "♠", "♘"],
	difficulty: "hard"
}, {
	cards: ["⍨", "✈", "☆", "♘", "⍨", "♫", "♠", "✈", "❄", "✈", "♘", "☆", "❄", "☯", "☯", "♫", "♠", "⍨", "☯", "☆", "❄", "♘", "♫", "♠"],
	difficulty: "crazy"
}];
// CONCATENATED MODULE: ./src/components/Game/Start.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Game_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Game_scss__);



class Start extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const greeting = this.props.newPlayer ? 'Ready for Another Round?' : 'Memory Game';
		const prompt = this.props.lowestTime === this.props.latestTime ? 'Congrats! You made a new time:' : 'Latest Time:';
		const Time = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				{ className: __WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.prompt },
				prompt
			),
			this.props.lowestTime === this.props.latestTime && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				{ className: __WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.time },
				this.props.lowestTime
			),
			this.props.latestTime != this.props.lowestTime && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: __WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.time },
					this.props.latestTime === '0:00' ? '--:--' : this.props.latestTime
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					null,
					'Time to Beat:'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: __WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.time },
					this.props.lowestTime
				)
			)
		);

		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			null,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'h1',
				null,
				greeting
			),
			this.props.lowestTime != '0:00' && Time,
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'p',
				null,
				'Choose your level:'
			),
			this.props.children
		);
	}
}

/* harmony default export */ var Start_defaultExport = (Start);
// CONCATENATED MODULE: ./src/components/Game/Cards.js
/* harmony import */ var Cards___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Cards___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Cards___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss__ = __webpack_require__(1);
/* harmony import */ var Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default = __webpack_require__.n(Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_flip_move__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_flip_move___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_flip_move__);





let lodashShuffle = __webpack_require__(8);

function ProgressBar(props) {
	return Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
		'div',
		{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.progressContainer },
		Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: props.className })
	);
}

class Card extends Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'li',
			{ key: this.props.key, type: this.props.type, id: this.props.id, onClick: this.props.onClick, className: this.props.className },
			this.props.children
		);
	}
}

class Cards_CardContainer extends Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameStarted: false,
			secondsElapsed: 0,
			latestTime: 0,
			lowestTime: { 'easy': '', 'hard': '', 'crazy': '' },
			level: 'easy',
			matchNumber: '',
			shuffleDuration: '15',
			cards: [],
			matches: [],
			queue: []
		};

		this.restartGame = this.restartGame.bind(this);
		this.formatBoard = this.formatBoard.bind(this);
		this.clickEvent = this.clickEvent.bind(this);
		this.flipLater = this.flipLater.bind(this);
		this.shuffle = this.shuffle.bind(this);
	}

	tick() {
		this.setState({
			secondsElapsed: this.state.secondsElapsed + 1
		});
	}

	flipLater(ids) {
		let _cards = this.state.cards;

		ids.forEach(id => {
			_cards.forEach(card => {
				if (card.key.toString() === id) {
					card.position = null;
				}
			});
		});

		this.setState({
			cards: _cards
		});
	}

	shuffle() {
		this.setState({
			cards: lodashShuffle(this.state.cards)
		});
	}

	restartGame() {
		this.setState({
			gameStarted: false,
			cards: [],
			matches: [],
			queue: []
		});

		clearInterval(this.timeInterval);
		clearInterval(this.shuffleInterval);
	}

	clickEvent(id, type) {
		let obj = {};
		obj[id] = type;
		let _cards = this.state.cards;
		let queueLength = this.state.queue.length;

		_cards.forEach(card => {
			if (card.key === id) {
				card.position = 'flipped';
			}
		});

		this.setState({
			cards: _cards
		});

		if (queueLength === 0) {
			this.setState({
				queue: this.state.queue.concat(obj)
			});
		}

		if (queueLength > 0) {
			// Compare current symbol with last symbol in queue
			if (Object.values(this.state.queue[queueLength - 1])[0] === type) {
				if (queueLength < this.state.matchNumber - 1) {
					this.setState({
						queue: this.state.queue.concat(obj)
					});
				} else if (queueLength === this.state.matchNumber - 1) {
					// Check if winning selection
					if (this.state.matches.length === this.state.cards.length - this.state.matchNumber) {

						let _lowestTime = this.state.lowestTime;

						if (_lowestTime[this.state.level] != '') {
							_lowestTime[this.state.level] = this.state.lowestTime[this.state.level] < this.state.secondsElapsed ? this.state.lowestTime[this.state.level] : this.state.secondsElapsed;
						} else {
							_lowestTime[this.state.level] = this.state.secondsElapsed;
						}

						this.setState({
							lowestTime: _lowestTime,
							latestTime: this.state.secondsElapsed
						});

						clearInterval(this.timeInterval);

						setTimeout(function () {
							this.restartGame();
						}.bind(this), 2000);
					} else {
						this.setState({
							matches: this.state.matches.concat(this.state.queue.concat(obj)),
							queue: []
						});
					}
				}
			} else {
				let cardsToFlip = this.state.queue.concat(obj);
				cardsToFlip = cardsToFlip.map(card => Object.keys(card)[0]);

				this.setState({ queue: [] });

				setTimeout(function () {
					this.flipLater(cardsToFlip);
				}.bind(this), 1000);
			}
		}
	}

	formatBoard(difficulty) {
		let symbols;
		let _matchNumber;

		if (difficulty === 'easy') {
			this.setState({ level: 'easy' });
			symbols = levels[0].cards;
			_matchNumber = 2;
		}

		if (difficulty === 'hard') {
			this.setState({ level: 'hard' });
			symbols = levels[1].cards;
			_matchNumber = 2;
		}

		if (difficulty === 'crazy') {
			this.setState({ level: 'crazy' });
			symbols = levels[2].cards;
			_matchNumber = 3;
		}

		let cards = symbols.map((symbol, idx) => {
			return {
				type: symbol,
				position: null,
				key: idx
			};
		});

		this.setState({
			secondsElapsed: 0,
			cards: cards,
			matchNumber: _matchNumber,
			gameStarted: true,
			latestTime: ''
		});

		this.timeInterval = setInterval(this.tick.bind(this), 1000);
		this.shuffleInterval = setInterval(this.shuffle.bind(this), 15000);
	}

	render() {
		const formatTime = time => {
			if (time < 0) return '--:--';
			const h = Math.floor(time / 3600);
			const m = Math.floor(time % 3600 / 60);
			const mm = m < 10 ? `0${m}` : m;
			const s = time % 60;
			const ss = s < 10 ? `0${s}` : s;
			if (h > 0) return [h, mm, ss].join(':');
			return `${m}:${ss}`;
		};

		const Timer = ({ time = 0 }) => Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'p',
			{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.timer },
			formatTime(time)
		);
		let lowestTimeFormat = formatTime(this.state.lowestTime[this.state.level]);
		let latestTimeFormat = formatTime(this.state.latestTime);
		let progressClass = this.state.gameStarted ? 'shuffle-15' : null;

		return Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{ style: { position: 'relative' } },
			Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ style: this.state.gameStarted ? { display: 'none' } : { display: 'block' }, className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.start },
				Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					Start_defaultExport,
					{ newPlayer: this.state.lowestTime[this.state.level] != '', lowestTime: lowestTimeFormat, latestTime: latestTimeFormat },
					Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.level, onClick: () => this.formatBoard('easy') },
						'Easy'
					),
					Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.level, onClick: () => this.formatBoard('hard') },
						'Hard'
					),
					Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.level, onClick: () => this.formatBoard('crazy') },
						'Crazy'
					)
				)
			),
			Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.intro },
				Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h1',
					{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.header },
					'Memory Game'
				),
				Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'p',
					{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.restart, onClick: this.restartGame },
					'\u21BB'
				),
				Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.stats },
					Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Timer, { time: this.state.secondsElapsed }),
					this.state.lowestTime[this.state.level] != '' && Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						null,
						'Time to beat: ',
						lowestTimeFormat
					)
				),
				Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ProgressBar, { className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a[progressClass] })
			),
			Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_4_react_flip_move___default.a,
				{ typeName: 'ul', className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a[this.state.level] },
				this.state.cards.map((card, idx) => {
					return Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						Card,
						{ key: card.key, type: card.type, onClick: () => this.clickEvent(card.key, card.type), className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a[card.position] },
						Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
							'div',
							null,
							Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'svg',
								{ viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
								Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { fill: '#1d8ba5', cx: '50', cy: '50', r: '50' }),
								Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { fill: '#fa5d59', cx: '50', cy: '50', r: '30' })
							),
							Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('figure', { className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.front }),
							Cards___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'figure',
								{ className: Cards___WEBPACK_IMPORTED_MODULE_1__Game_scss___default.a.back },
								card.type
							)
						)
					);
				})
			)
		);
	}
}

/* harmony default export */ var Cards_defaultExport = (Cards_CardContainer);
// CONCATENATED MODULE: ./src/components/Game/Game.js
/* harmony import */ var Game___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var Game___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(Game___WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var Game___WEBPACK_IMPORTED_MODULE_1__Game_scss__ = __webpack_require__(1);
/* harmony import */ var Game___WEBPACK_IMPORTED_MODULE_1__Game_scss___default = __webpack_require__.n(Game___WEBPACK_IMPORTED_MODULE_1__Game_scss__);




const Game = () => Game___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	'div',
	null,
	Game___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cards_defaultExport, null)
);

/* harmony default export */ var Game_defaultExport = (Game);
// CONCATENATED MODULE: ./src/components/App/index.js
/* harmony import */ var App___WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var App___WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(App___WEBPACK_IMPORTED_MODULE_0_react__);



const App = () => App___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  'div',
  null,
  App___WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Game_defaultExport, null)
);

/* harmony default export */ var App_defaultExport = (App);
// CONCATENATED MODULE: ./src/server/template.js
/* eslint-disable prefer-template, max-len */

const getDeferScript = src => src ? `<script defer src="${src}"></script>` : '';

/* harmony default export */ var template_defaultExport = (vo => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta charSet='utf-8' />
    <meta httpEquiv="Content-Language" content="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    ${vo.mainCSSBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.mainCSSBundle + '">' : ''}

    <title>Memory Game</title>
  </head>

  <body>
    <div style="height: 100vh; overflow: hidden;" id="root"><div>${vo.html}</div></div>
    ${getDeferScript(vo.manifestJSBundle)}
    ${getDeferScript(vo.vendorJSBundle)}
    ${getDeferScript(vo.mainJSBundle)}
  </body>
</html>`);
// CONCATENATED MODULE: ./src/server/index.js
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);








const clientAssets = __webpack_require__(9); // eslint-disable-line import/no-dynamic-require
const port = parseInt(process.env.PORT || "3000", 10);
const app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(__WEBPACK_IMPORTED_MODULE_1_compression___default.a());

// Setup the public directory so that we can server static assets.
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path___default.a.join(process.cwd(), "build/public")));

app.get('*', (request, response) => {
  response.send(template_defaultExport({
    html: __WEBPACK_IMPORTED_MODULE_4_react_dom_server__["renderToString"](__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(App_defaultExport, null)),
    manifestJSBundle: clientAssets['manifest.js'],
    mainJSBundle: clientAssets['main.js'],
    vendorJSBundle: clientAssets['vendor.js'],
    mainCSSBundle: clientAssets['main.css']
  }));
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`); // eslint-disable-line no-console
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-flip-move");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash.shuffle");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {"main.css":"/main-272c73c932f639f8751a8abf3507a3a1.css","main.css.map":"/main-272c73c932f639f8751a8abf3507a3a1.css.map","main.js":"/main-70497bbc6d5dab948c9a.js","main.js.map":"/main-043205a89cacbfec518c.js.map","manifest.js":"/manifest-22b35dab5d810566995e.js","manifest.js.map":"/manifest-a5114e855250c74f7e2f.js.map","vendor.js":"/vendor-fe10ac826c0b389a1cb1.js","vendor.js.map":"/vendor-a96f81ed5dd73f098224.js.map"}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map