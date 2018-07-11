webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = exports.eos = undefined;

var _eos = __webpack_require__(470);

var _eos2 = _interopRequireDefault(_eos);

var _btc = __webpack_require__(471);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(135);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(671);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(672);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(701);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(706);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _ignoreProps = __webpack_require__(708);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(711);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(712);

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getters
exports.eos = _eos2.default;
exports.btc = _btc2.default;
exports.web3 = _web2.default;
exports.links = _links2.default;
exports.request = _request2.default;
exports.constants = _constants2.default;
exports.localStorage = _localStorage2.default;
exports.ignoreProps = _ignoreProps2.default;
exports.getPageOffset = _getPageOffset2.default;
exports.getScrollBarWidth = _getScrollBarWidth2.default;

// Methods

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.constants = exports.Events = exports.Collection = exports.SwapInterface = exports.ServiceInterface = undefined;

var _SwapApp = __webpack_require__(396);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _ServiceInterface = __webpack_require__(945);

var _ServiceInterface2 = _interopRequireDefault(_ServiceInterface);

var _SwapInterface = __webpack_require__(946);

var _SwapInterface2 = _interopRequireDefault(_SwapInterface);

var _Collection = __webpack_require__(947);

var _Collection2 = _interopRequireDefault(_Collection);

var _Events = __webpack_require__(948);

var _Events2 = _interopRequireDefault(_Events);

var _constants = __webpack_require__(234);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(949);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapApp2.default;
exports.ServiceInterface = _ServiceInterface2.default;
exports.SwapInterface = _SwapInterface2.default;
exports.Collection = _Collection2.default;
exports.Events = _Events2.default;
exports.constants = _constants2.default;
exports.util = _util2.default;

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modals = __webpack_require__(736);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(782);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(783);

var _notifications2 = _interopRequireDefault(_notifications);

var _filter = __webpack_require__(784);

var _filter2 = _interopRequireDefault(_filter);

var _user = __webpack_require__(785);

var _user2 = _interopRequireDefault(_user);

var _bitcoin = __webpack_require__(789);

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _ethereum = __webpack_require__(790);

var _ethereum2 = _interopRequireDefault(_ethereum);

var _token = __webpack_require__(791);

var _token2 = _interopRequireDefault(_token);

var _nimiq = __webpack_require__(793);

var _nimiq2 = _interopRequireDefault(_nimiq);

var _feed = __webpack_require__(795);

var _feed2 = _interopRequireDefault(_feed);

var _analytics = __webpack_require__(796);

var _analytics2 = _interopRequireDefault(_analytics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  filter: _filter2.default,
  modals: _modals2.default,
  loader: _loader2.default,
  notifications: _notifications2.default,
  user: _user2.default,
  bitcoin: _bitcoin2.default,
  ethereum: _ethereum2.default,
  token: _token2.default,
  nimiq: _nimiq2.default,
  feed: _feed2.default,
  analytics: _analytics2.default
};

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// resolve object in webpack
exports.default = {"propENV":"mainnet.prod","paths":{},"publicPath":"https://swap.online/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"exchangeRates":{"etheth":1,"ethbtc":0.07,"btceth":14,"ethnoxon":1,"noxoneth":1,"btcnoxon":14,"noxonbtc":0.07},"env":"production","entry":"mainnet","base":"https://swap.online/","services":{"web3":{"provider":"https://mainnet.infura.io/5lcMmHUURYg8F20GLGSr","rate":0.1,"gas":100000,"gasPrice":"20000000000"},"eos":{"chainId":"","httpEndpoint":"","keyProvider":"","serviceAccount":""}},"token":{"contract":"0x8D880dff55a0c5620Cc617B0a34c83B87946783c"},"eth":{"contract":"0x025dce2d39a46296766db7cac8c322e8f59cd5d9"},"tokens":{"swap":{"address":"0x14a52cf6B4F68431bd5D9524E4fcD6F41ce4ADe9","decimals":18},"noxon":{"address":"0x9E4AD79049282F942c1b4c9b418F0357A0637017","decimals":0}},"link":{"bitpay":"https://insight.bitpay.com","etherscan":"https://etherscan.io","eos":""},"api":{"blocktrail":"https://api.blocktrail.com/v1/BTC","bitpay":"https://insight.bitpay.com/api","etherscan":"https://api.etherscan.io/api"},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redaction = __webpack_require__(32);

var _reduErs = __webpack_require__(360);

var _reduErs2 = _interopRequireDefault(_reduErs);

var _store = __webpack_require__(215);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reduErs2.default, _store2.default.dispatch);

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(990);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  var children = props.children,
      className = props.className,
      fullWidth = props.fullWidth,
      brand = props.brand,
      green = props.green,
      white = props.white,
      gray = props.gray,
      disabled = props.disabled,
      onClick = props.onClick,
      _props$id = props.id,
      id = _props$id === undefined ? '' : _props$id;


  var styleName = (0, _classnames2.default)('button', {
    'fullWidth': fullWidth,
    'brand': brand,
    'green': green,
    'white': white,
    'gray': gray,
    'disabled': disabled
  });

  return _react2.default.createElement(
    'div',
    {
      styleName: styleName,
      className: className,
      role: 'button',
      onClick: onClick,
      id: id
    },
    children
  );
};

Button.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  brand: _propTypes2.default.bool,
  green: _propTypes2.default.bool,
  white: _propTypes2.default.bool,
  gray: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(Button, _Button2.default, { allowMultiple: true });

/***/ }),
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _InlineLoader = __webpack_require__(1001);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InlineLoader = function InlineLoader() {
  return _react2.default.createElement(
    'div',
    { styleName: 'ellipsis' },
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null),
    _react2.default.createElement('div', null)
  );
};

exports.default = (0, _reactCssModules2.default)(InlineLoader, _InlineLoader2.default);

/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(215);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Table = __webpack_require__(970);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var titles = _ref.titles,
      rows = _ref.rows,
      rowRender = _ref.rowRender;
  return _react2.default.createElement(
    'table',
    { styleName: 'table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        titles.map(function (title, index) {
          return _react2.default.createElement(
            'th',
            { key: index },
            title
          );
        })
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      rows.map(function (row, rowIndex) {
        if (typeof rowRender === 'function') {
          return rowRender(row, rowIndex);
        }
      })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Table, _Table2.default);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flow = undefined;

var _Swap = __webpack_require__(1015);

var _Swap2 = _interopRequireDefault(_Swap);

var _Flow = __webpack_require__(1020);

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swap2.default;
exports.Flow = _Flow2.default;

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _toConsumableArray2 = __webpack_require__(148);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _tags = __webpack_require__(1154);

Object.defineProperty(exports, 'Input', {
  enumerable: true,
  get: function get() {
    return _tags.Input;
  }
});
Object.defineProperty(exports, 'NumberInput', {
  enumerable: true,
  get: function get() {
    return _tags.NumberInput;
  }
});
Object.defineProperty(exports, 'Checkbox', {
  enumerable: true,
  get: function get() {
    return _tags.Checkbox;
  }
});
Object.defineProperty(exports, 'Radio', {
  enumerable: true,
  get: function get() {
    return _tags.Radio;
  }
});
Object.defineProperty(exports, 'TextArea', {
  enumerable: true,
  get: function get() {
    return _tags.TextArea;
  }
});
Object.defineProperty(exports, 'Select', {
  enumerable: true,
  get: function get() {
    return _tags.Select;
  }
});

var _valuelink = __webpack_require__(1157);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _toConsumableArray3.default)((0, _keys2.default)(component.state))));
};

exports.default = _valuelink2.default;

/***/ }),
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = __webpack_require__(526);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coins = __webpack_require__(957);

var _Coins2 = _interopRequireDefault(_Coins);

var _Coin = __webpack_require__(237);

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coins = function Coins(_ref) {
  var className = _ref.className,
      names = _ref.names,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size;
  return _react2.default.createElement(
    'div',
    { styleName: 'coins', className: className },
    _react2.default.createElement(_Coin2.default, { name: names[0], size: size }),
    _react2.default.createElement(_Coin2.default, { name: names[1], size: size })
  );
};

exports.default = (0, _reactCssModules2.default)(Coins, _Coins2.default);

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapAuth = __webpack_require__(243);

var _SwapAuth2 = _interopRequireDefault(_SwapAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAuth2.default;

/***/ }),
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(1104);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidthContainer = function WidthContainer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      main = _ref.main,
      fullHeight = _ref.fullHeight,
      relative = _ref.relative,
      contentCentering = _ref.contentCentering,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'main', 'fullHeight', 'relative', 'contentCentering']);

  var containerStyleName = (0, _classnames2.default)('widthContainer', {
    'main': main,
    'fullHeight': fullHeight,
    'centeringContent': contentCentering
  });

  if (fullHeight || relative) {
    var containerInStyleName = (0, _classnames2.default)('widthContainerIn', {
      'fullHeight': fullHeight,
      'relative': relative
    });

    return _react2.default.createElement(
      'div',
      (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
      _react2.default.createElement(
        'div',
        { styleName: containerInStyleName },
        children
      )
    );
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: containerStyleName, className: className }, rest),
    children
  );
};

WidthContainer.propTypes = {
  children: _propTypes2.default.node,
  main: _propTypes2.default.bool, // uses for main container between header and footer with vertical paddings
  fullHeight: _propTypes2.default.bool,
  relative: _propTypes2.default.bool,
  contentCentering: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(WidthContainer, _WidthContainer2.default, { allowMultiple: true });

/***/ }),
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(361);

var _history = __webpack_require__(74);

var _redaction = __webpack_require__(32);

var _reduxLogger = __webpack_require__(781);

var _reduErs = __webpack_require__(360);

var _reduErs2 = _interopRequireDefault(_reduErs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _history.createBrowserHistory)();
var middleware = (0, _reactRouterRedux.routerMiddleware)(history);
var initialState = {}; // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}


var store = (0, _redaction.createStore)({
  reducers: (0, _assign2.default)({}, (0, _redaction.combineReducers)(_reduErs2.default)),
  middleware: [middleware].concat( true ? [] : [(0, _reduxLogger.createLogger)()]),
  initialState: initialState
});

exports.default = store;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(924);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(395);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(223);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeadline = function PageHeadline(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle;
  return _react2.default.createElement(
    'div',
    { styleName: 'headline' },
    children || _react2.default.createElement(
      _react.Fragment,
      null,
      title && _react2.default.createElement(
        _Title2.default,
        null,
        title
      ),
      subTitle && _react2.default.createElement(
        _SubTitle2.default,
        null,
        subTitle
      )
    )
  );
};

PageHeadline.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string
};

exports.default = (0, _reactCssModules2.default)(PageHeadline, _PageHeadline2.default);

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(926);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'subTitle' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(SubTitle, _SubTitle2.default);

/***/ }),
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _COINS = __webpack_require__(939);

var _COINS2 = _interopRequireDefault(_COINS);

var _ENV = __webpack_require__(940);

var _ENV2 = _interopRequireDefault(_ENV);

var _SERVICES = __webpack_require__(941);

var _SERVICES2 = _interopRequireDefault(_SERVICES);

var _NETWORKS = __webpack_require__(942);

var _NETWORKS2 = _interopRequireDefault(_NETWORKS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  COINS: _COINS2.default,
  ENV: _ENV2.default,
  SERVICES: _SERVICES2.default,
  NETWORKS: _NETWORKS2.default
};

/***/ }),
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coin = __webpack_require__(958);

var _Coin2 = _interopRequireDefault(_Coin);

var _CurrencyIcon = __webpack_require__(401);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Coin = function Coin(_ref) {
  var className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 40 : _ref$size,
      name = _ref.name;

  var style = {
    width: size ? size + 'px' : null
  };

  var iconProps = {
    name: name.toLowerCase()
  };

  var isIconExist = _CurrencyIcon.iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'icon'
    });
  } else {
    iconProps = (0, _assign2.default)({}, iconProps, {
      styleName: 'letter',
      style: {
        lineHeight: size + 'px',
        fontSize: size / 2 + 'px'
      }
    });
  }

  return _react2.default.createElement(
    'div',
    { styleName: 'coin', className: className, style: style },
    _react2.default.createElement(_CurrencyIcon2.default, iconProps)
  );
};

exports.default = (0, _reactCssModules2.default)(Coin, _Coin2.default);

/***/ }),
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(235);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _privateKeys = void 0;
var getPublicDataMethods = {};

var SwapAuth = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapAuth, _ServiceInterface);
  (0, _createClass3.default)(SwapAuth, null, [{
    key: 'name',
    get: function get() {
      return 'auth';
    }
  }]);

  function SwapAuth(privateKeys) {
    (0, _classCallCheck3.default)(this, SwapAuth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapAuth.__proto__ || (0, _getPrototypeOf2.default)(SwapAuth)).call(this));

    _this._serviceName = 'auth';
    _this.accounts = {};

    _privateKeys = privateKeys;
    return _this;
  }

  (0, _createClass3.default)(SwapAuth, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      (0, _keys2.default)(_privateKeys).forEach(function (name) {
        if ((0, _keys2.default)(_swap.constants.COINS).indexOf(name) < 0) {
          var error = 'SwapAuth._initService(): There is no instance with name "' + name + '".';
          error += 'Only [' + (0, _stringify2.default)((0, _keys2.default)(_swap.constants.COINS)).replace(/"/g, '\'') + '] available';

          throw new Error(error);
        }

        try {
          var instance = __webpack_require__(1071)("./" + name);
          instance = instance.default || instance;
          var account = instance.login(_privateKeys[name]);

          _this2.accounts[name] = account;
          getPublicDataMethods[name] = function () {
            return instance.getPublicData(account);
          };
        } catch (err) {
          throw new Error('SwapAuth._initService(): ' + err);
        }
      });
    }
  }, {
    key: 'getPublicData',
    value: function getPublicData() {
      var data = {
        peer: _swap2.default.services.room.peer
      };

      (0, _keys2.default)(getPublicDataMethods).forEach(function (name) {
        data[name] = getPublicDataMethods[name]();
      });

      return data;
    }
  }]);
  return SwapAuth;
}(_swap.ServiceInterface);

exports.default = SwapAuth;

/***/ }),
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(1129);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var overlayClassName = _ref.overlayClassName,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { styleName: 'overlay', className: overlayClassName },
    _react2.default.createElement(
      'div',
      { styleName: 'loader center', className: className },
      _react2.default.createElement('div', { styleName: 'loader1' }),
      _react2.default.createElement('div', { styleName: 'loader2' }),
      _react2.default.createElement('div', { styleName: 'loader3' })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Loader, _Loader2.default, { allowMultiple: true });

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(1135);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(168);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Overlay = __webpack_require__(1136);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Logo = __webpack_require__(436);

var _Logo2 = _interopRequireDefault(_Logo);

var _Center = __webpack_require__(1138);

var _Center2 = _interopRequireDefault(_Center);

var _CloseIcon = __webpack_require__(1140);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = (_dec = (0, _reactCssModules2.default)(_Modal2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || (0, _getPrototypeOf2.default)(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      var _this$props = _this.props,
          name = _this$props.name,
          data = _this$props.data,
          onClose = _this$props.onClose,
          disableClose = _this$props.disableClose;


      if (name === 'OfferModal') {
        _actions2.default.analytics.dataEvent('orderbook-addoffer-click-exit-button');
      }

      if (!disableClose) {
        _actions2.default.modals.close(name);

        if (typeof onClose === 'function') {
          onClose();
        }

        if (typeof data.onClose === 'function') {
          data.onClose();
        }
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          whiteLogo = _props.whiteLogo,
          title = _props.title,
          showCloseButton = _props.showCloseButton,
          disableClose = _props.disableClose,
          children = _props.children,
          titleUppercase = _props.titleUppercase;


      var titleStyleName = (0, _classnames2.default)('title', {
        'uppercase': titleUppercase
      });

      return _react2.default.createElement(
        _Overlay2.default,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'modal', className: className },
          Boolean(title || showCloseButton) && _react2.default.createElement(
            'div',
            { styleName: 'header' },
            _react2.default.createElement(
              _WidthContainer2.default,
              { styleName: 'headerContent' },
              _react2.default.createElement(_Logo2.default, { colored: !whiteLogo }),
              _react2.default.createElement(
                'div',
                { styleName: titleStyleName, role: 'title' },
                title
              ),
              showCloseButton && !disableClose && _react2.default.createElement(_CloseIcon2.default, { styleName: 'closeButton', onClick: this.close, 'data-testid': 'modalCloseIcon' })
            )
          ),
          _react2.default.createElement(
            'div',
            { styleName: 'contentContainer' },
            _react2.default.createElement(
              _Center2.default,
              { scrollable: true },
              _react2.default.createElement(
                'div',
                { styleName: 'content' },
                children
              )
            )
          )
        )
      );
    }
  }]);
  return Modal;
}(_react.Component), _class2.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.any,
  showCloseButton: _propTypes2.default.bool,
  data: _propTypes2.default.object,
  disableClose: _propTypes2.default.bool,
  titleUppercase: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
}, _class2.defaultProps = {
  data: {},
  whiteLogo: false,
  showCloseButton: true,
  fullWidth: false,
  disableClose: false,
  disableCloseOverlay: false,
  uppercase: false
}, _temp2)) || _class);
exports.default = Modal;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1148);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'div',
      { styleName: 'title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'content' },
      children
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Value = __webpack_require__(1149);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = function Value(_ref) {
  var value = _ref.value,
      currency = _ref.currency;
  return _react2.default.createElement(
    'span',
    { styleName: 'value' },
    _react2.default.createElement(
      'span',
      null,
      value,
      ' '
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'currency' },
      ' ',
      currency.toUpperCase()
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Value, _Value2.default);

/***/ }),
/* 251 */,
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(125);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(1164);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(1165);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (_dec = (0, _reactCssModules2.default)(_Input2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inputContainerClassName = _props.inputContainerClassName,
          inputClassName = _props.inputClassName,
          error = _props.valueLink.error,
          valueLink = _props.valueLink,
          multiline = _props.multiline,
          focusOnInit = _props.focusOnInit,
          disabled = _props.disabled,
          readOnly = _props.readOnly,
          rest = (0, _objectWithoutProperties3.default)(_props, ['className', 'inputContainerClassName', 'inputClassName', 'valueLink', 'valueLink', 'multiline', 'focusOnInit', 'disabled', 'readOnly']);


      var inputContainerStyleName = (0, _classnames2.default)('inputContainer', {
        'withError': error
      });

      return _react2.default.createElement(
        'div',
        { styleName: 'root', className: className },
        _react2.default.createElement(
          'div',
          { styleName: inputContainerStyleName, className: inputContainerClassName },
          _react2.default.createElement(multiline ? _TextArea2.default : _swValuelink.Input, (0, _assign2.default)({}, (0, _helpers.ignoreProps)(rest, 'styles'), {
            styleName: 'input',
            className: inputClassName,
            valueLink: valueLink,
            disabled: disabled || readOnly,
            autoFocus: !!focusOnInit,
            dir: 'auto',
            autoComplete: 'off'
          }))
        ),
        Boolean(error) && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          error
        )
      );
    }
  }]);
  return Input;
}(_react.Component), _class2.propTypes = {
  className: _propTypes2.default.string,
  rootClassName: _propTypes2.default.string,
  inputClassName: _propTypes2.default.string,
  placeholder: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  type: _propTypes2.default.string,
  valueLink: _propTypes2.default.object.isRequired,
  focusOnInit: _propTypes2.default.bool,
  multiline: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  required: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  intl: _propTypes2.default.object
}, _class2.defaultProps = {
  focusOnInit: false,
  multiline: false,
  disabled: false,
  readOnly: false,
  required: false,
  type: 'text'
}, _temp)) || _class);
exports.default = Input;

/***/ }),
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _notifications = __webpack_require__(768);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(769);

var modals = _interopRequireWildcard(_modals);

var _history = __webpack_require__(770);

var history = _interopRequireWildcard(_history);

var _loader = __webpack_require__(775);

var loader = _interopRequireWildcard(_loader);

var _user = __webpack_require__(776);

var user = _interopRequireWildcard(_user);

var _feeds = __webpack_require__(777);

var feeds = _interopRequireWildcard(_feeds);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  history: history,
  loader: loader,
  user: user,
  feeds: feeds
};

/***/ }),
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(925);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Title = function Title(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Title, _Title2.default);

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = __webpack_require__(224);

var _values2 = _interopRequireDefault(_values);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _constants = __webpack_require__(234);

var _constants2 = _interopRequireDefault(_constants);

var _StorageFactory = __webpack_require__(943);

var _StorageFactory2 = _interopRequireDefault(_StorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp() {
    (0, _classCallCheck3.default)(this, SwapApp);
  }

  (0, _createClass3.default)(SwapApp, [{
    key: 'setup',


    /**
     *
     * @param {object}  options
     * @param {string}  options.network
     * @param {object}  options.env
     * @param {array}   options.services
     * @param {array}   options.swaps
     * @param {array}   options.flows
     */
    value: function setup(options) {
      this.network = options.network || _constants2.default.NETWORKS.TESTNET;
      this.env = {};
      this.services = {};
      this.swaps = {};
      this.flows = {};

      this._addEnv(options.env || {});
      this._addServices(options.services || {});
      this._addSwaps(options.swaps || {});
      this._addFlows(options.flows || {});
    }

    // Configure -------------------------------------------------------- /

  }, {
    key: '_addEnv',
    value: function _addEnv(env) {
      (0, _keys2.default)(env).forEach(function (name) {
        if ((0, _values2.default)(_constants2.default.ENV).indexOf(name) < 0) {
          throw new Error('SwapApp.addEnv(): Only ' + (0, _values2.default)(_constants2.default.ENV) + ' available');
        }
      });

      this.env = env;
      this.env.storage = new _StorageFactory2.default(env.storage);
    }
  }, {
    key: '_addService',
    value: function _addService(service) {
      if (!service._serviceName) {
        throw new Error('SwapApp service should contain "_serviceName" property');
      }

      if (!(0, _values2.default)(_constants2.default.SERVICES).includes(service._serviceName)) {
        throw new Error('SwapApp service should contain "_serviceName" property should be one of ' + (0, _values2.default)(_constants2.default.SERVICES) + ', got "' + service._serviceName + '"');
      }

      this.services[service._serviceName] = service;
    }
  }, {
    key: '_addServices',
    value: function _addServices(services) {
      var _this = this;

      // add service to app by _serviceName
      services.forEach(function (service) {
        return _this._addService(service);
      });
      // spy expects
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._waitRelationsResolve();
      });
      // init services
      (0, _keys2.default)(this.services).forEach(function (serviceName) {
        return _this.services[serviceName]._tryInitService();
      });
    }
  }, {
    key: '_addSwap',
    value: function _addSwap(swap) {
      if (!swap._swapName) {
        throw new Error('SwapApp swap should contain "_swapName" property');
      }

      if (!(0, _values2.default)(_constants2.default.COINS).includes(swap._swapName.toUpperCase())) {
        throw new Error('SwapApp swap should contain "_swapName" property should be one of ' + (0, _values2.default)(_constants2.default.COINS) + ', got "' + swap._swapName.toUpperCase() + '"');
      }

      this.swaps[swap._swapName] = swap;

      if (typeof swap._initSwap === 'function') {
        swap._initSwap();
      }
    }
  }, {
    key: '_addSwaps',
    value: function _addSwaps(swaps) {
      var _this2 = this;

      swaps.forEach(function (swap) {
        _this2._addSwap(swap);
      });
    }
  }, {
    key: '_addFlow',
    value: function _addFlow(Flow) {
      var flowName = Flow.getName();

      if (!/^[A-Za-z]+2[A-Za-z]+$/.test(flowName)) {
        throw new Error('SwapApp flow "_flowName" property should be "^[A-Za-z]+2[A-Za-z]+$" format');
      }

      var flowNameLeftPart = flowName.match(/^[^\d]+/);
      var flowNameRightPart = flowName.match(/[^\d]+$/);

      if (!flowNameLeftPart || !flowNameRightPart || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameLeftPart[0].toUpperCase()) || !(0, _values2.default)(_constants2.default.COINS).includes(flowNameRightPart[0].toUpperCase())) {
        throw new Error('SwapApp flow "_flowName" property should contain only: ' + (0, _values2.default)(_constants2.default.COINS) + '. Got: "' + flowName.toUpperCase() + '"');
      }

      this.flows[flowName] = Flow;
    }
  }, {
    key: '_addFlows',
    value: function _addFlows(flows) {
      var _this3 = this;

      flows.forEach(function (flow) {
        _this3._addFlow(flow);
      });
    }

    // Public methods --------------------------------------------------- /

  }, {
    key: 'isMainNet',
    value: function isMainNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.MAINNET;
    }
  }, {
    key: 'isTestNet',
    value: function isTestNet() {
      return this.network.toLowerCase() === _constants2.default.NETWORKS.TESTNET;
    }
  }]);
  return SwapApp;
}();

exports.default = new SwapApp();

/***/ }),
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconNames = undefined;

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencyIcon = __webpack_require__(959);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

var _btc = __webpack_require__(960);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(961);

var _eth2 = _interopRequireDefault(_eth);

var _icx = __webpack_require__(962);

var _icx2 = _interopRequireDefault(_icx);

var _waves = __webpack_require__(963);

var _waves2 = _interopRequireDefault(_waves);

var _xrp = __webpack_require__(964);

var _xrp2 = _interopRequireDefault(_xrp);

var _nim = __webpack_require__(965);

var _nim2 = _interopRequireDefault(_nim);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  btc: _btc2.default,
  eth: _eth2.default,
  icx: _icx2.default,
  waves: _waves2.default,
  xrp: _xrp2.default,
  nim: _nim2.default
};

var iconNames = exports.iconNames = (0, _keys2.default)(icons);

var CurrencyIcon = function CurrencyIcon(_ref) {
  var className = _ref.className,
      style = _ref.style,
      name = _ref.name;

  var isIconExist = iconNames.includes(name.toLowerCase());

  if (isIconExist) {
    return _react2.default.createElement('img', {
      className: className,
      src: icons[name],
      alt: name + ' icon',
      role: 'image'
    });
  }

  return _react2.default.createElement(
    'span',
    {
      role: 'letter',
      styleName: 'text',
      className: className,
      style: style
    },
    name.charAt(0).toUpperCase()
  );
};

exports.default = (0, _reactCssModules2.default)(CurrencyIcon, _CurrencyIcon2.default);

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencySelect = __webpack_require__(973);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _DropDown = __webpack_require__(974);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Option = __webpack_require__(977);

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrencySelect = function CurrencySelect(_ref) {
  var className = _ref.className,
      selectedValue = _ref.selectedValue,
      onSelect = _ref.onSelect;
  return _react2.default.createElement(_DropDown2.default, {
    className: className,
    items: [{ title: 'ETH', icon: 'eth', value: 'eth' }, { title: 'BTC', icon: 'btc', value: 'btc' }, { title: 'NOXON', icon: 'noxon', value: 'noxon' }],
    selectedValue: selectedValue,
    selectedItemRender: function selectedItemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    itemRender: function itemRender(item) {
      return _react2.default.createElement(_Option2.default, item);
    },
    onSelect: onSelect
  });
};

exports.default = (0, _reactCssModules2.default)(CurrencySelect, _CurrencySelect2.default);

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Href = __webpack_require__(1003);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Href = function Href(_ref) {
  var children = _ref.children,
      to = _ref.to,
      redirect = _ref.redirect,
      tab = _ref.tab;

  if (to) {
    return _react2.default.createElement(
      _reactRouterDom.NavLink,
      { styleName: 'link' },
      children
    );
  }

  return _react2.default.createElement(
    'a',
    { styleName: 'link', href: redirect || tab, target: tab ? '_blank' : null },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(Href, _Href2.default);

/***/ }),
/* 404 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history-filter":"r9K_HC","history-filter__item":"xJUwLa","history-filter__item_active":"_2ZTLX3"};

/***/ }),
/* 405 */,
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(239);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {

  // TODO add destroy method with all events unsubscribe (when swap is finished)

  function Room(_ref) {
    var swapId = _ref.swapId,
        participantPeer = _ref.participantPeer;
    (0, _classCallCheck3.default)(this, Room);

    this.swapId = swapId;
    this.peer = participantPeer;
  }

  (0, _createClass3.default)(Room, [{
    key: 'on',
    value: function on(eventName, handler) {
      var _this = this;

      _swap2.default.services.room.on(eventName, function (_ref2) {
        var fromPeer = _ref2.fromPeer,
            swapId = _ref2.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref2, ['fromPeer', 'swapId']);

        if (fromPeer === _this.peer && swapId === _this.swapId) {
          handler(values);
        }
      });
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      var self = this;

      _swap2.default.services.room.on(eventName, function (_ref3) {
        var fromPeer = _ref3.fromPeer,
            swapId = _ref3.swapId,
            values = (0, _objectWithoutProperties3.default)(_ref3, ['fromPeer', 'swapId']);

        if (fromPeer === self.peer && swapId === self.swapId) {
          this.unsubscribe();
          handler(values);
        }
      });
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1) {
        var value = args[0];

        // value - eventName

        if (typeof value === 'string') {
          _swap2.default.services.room.sendMessage(this.peer, [{
            event: value,
            swapId: this.swapId
          }]);
        }
        // value - messages
        else if (Array.isArray(value)) {
            _swap2.default.services.room.sendMessage(this.peer, value);
          }
      } else {
        var eventName = args[0],
            message = args[1];


        _swap2.default.services.room.sendMessage(this.peer, [{
          event: eventName,
          data: (0, _extends3.default)({
            swapId: this.swapId
          }, message)
        }]);
      }
    }
  }]);
  return Room;
}();

exports.default = Room;

/***/ }),
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimerButton = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TimerButton, _Component);

  function TimerButton(_ref) {
    var timeLeft = _ref.timeLeft;
    (0, _classCallCheck3.default)(this, TimerButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TimerButton.__proto__ || (0, _getPrototypeOf2.default)(TimerButton)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      timeLeft: timeLeft
    };
    return _this;
  }

  (0, _createClass3.default)(TimerButton, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var timeLeft = this.state.timeLeft;
      var children = this.props.children;


      return _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: this.handleClick },
        children,
        ' ',
        timeLeft,
        's'
      );
    }
  }]);
  return TimerButton;
}(_react.Component), _class.propTypes = {
  timeLeft: _propTypes2.default.number, // seconds
  onClick: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  timeLeft: 10
}, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.timer = null;

  this.tick = function () {
    var timeLeft = _this2.state.timeLeft;

    var newTimeLeft = timeLeft - 1;

    if (newTimeLeft <= 0) {
      _this2.handleClick();
    } else {
      _this2.timer = setTimeout(_this2.tick, 1000);
      _this2.setState({
        timeLeft: newTimeLeft
      });
    }
  };

  this.handleClick = function () {
    var onClick = _this2.props.onClick;


    clearTimeout(_this2.timer);
    onClick();
  };
}, _temp);
exports.default = TimerButton;

/***/ }),
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':btc:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  var network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;

  if (!privateKey) {
    privateKey = _swap2.default.env.bitcoin.ECPair.makeRandom({ network: network }).toWIF();
  }

  account = new _swap2.default.env.bitcoin.ECPair.fromWIF(privateKey, network);

  account.__proto__.getPublicKey = function () {
    return account.getPublicKeyBuffer().toString('hex');
  };
  account.__proto__.getPrivateKey = function () {
    return privateKey;
  };

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.getAddress(),
    publicKey: account.getPublicKey()
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':eth:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  if (privateKey) {
    account = _swap2.default.env.web3.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    account = _swap2.default.env.web3.eth.accounts.create();
  }

  _swap2.default.env.web3.eth.accounts.wallet.add(account.privateKey);

  if (!_privateKey) {
    _swap2.default.env.storage.setItem(storageKey, account.privateKey);
  }

  return account;
};

var getPublicData = function getPublicData(account) {
  return {
    address: account.address,
    publicKey: null
  };
};

exports.default = {
  login: login,
  getPublicData: getPublicData
};

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapRoom = __webpack_require__(1072);

var _SwapRoom2 = _interopRequireDefault(_SwapRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapRoom2.default;

/***/ }),
/* 430 */,
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swap = __webpack_require__(12);

exports.default = new _swap.Events();

/***/ }),
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(1105);

var _Logo2 = _interopRequireDefault(_Logo);

var _logo = __webpack_require__(1106);

var _logo2 = _interopRequireDefault(_logo);

var _logoColored = __webpack_require__(1107);

var _logoColored2 = _interopRequireDefault(_logoColored);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = function Logo(_ref) {
  var colored = _ref.colored,
      withLink = _ref.withLink;

  var imgNode = _react2.default.createElement('img', {
    styleName: !withLink && 'logo',
    src: colored ? _logoColored2.default : _logo2.default,
    alt: 'swap.online logo'
  });

  if (withLink) {
    return _react2.default.createElement(
      _reactRouterDom.NavLink,
      { styleName: 'logo', to: _helpers.links.home },
      imgNode
    );
  }

  return imgNode;
};

exports.default = (0, _reactCssModules2.default)(Logo, _Logo2.default);

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(1163);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldLabel = function FieldLabel(_ref) {
  var children = _ref.children,
      inRow = _ref.inRow;
  return _react2.default.createElement(
    'div',
    { styleName: (0, _classnames2.default)('label', { 'inRow': inRow }) },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(FieldLabel, _FieldLabel2.default, { allowMultiple: true });

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(1180);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(437);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = (_dec = (0, _reactCssModules2.default)(_Notification2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Notification.__proto__ || (0, _getPrototypeOf2.default)(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mounted: false,
      removed: false
    }, _this.close = function () {
      var name = _this.props.name;


      _this.setState({
        removed: true
      }, function () {
        setTimeout(function () {
          _actions2.default.notifications.hide(name);
        }, 300);
      });
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.soundClick();
      setTimeout(function () {
        _this2.setState({
          mounted: true
        }, function () {
          setTimeout(_this2.close, 4000);
        });
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          mounted = _state.mounted,
          removed = _state.removed;
      var _props = this.props,
          children = _props.children,
          type = _props.type;


      var containerStyleName = (0, _classnames2.default)('container', {
        'mounted': mounted,
        'removed': removed
      });

      var notificationStyleName = (0, _classnames2.default)('notification', {
        'mounted': mounted,
        'removed': removed,
        'info': type === 'info',
        'success': type === 'success',
        'warning': type === 'warning',
        'error': type === 'error'
      });

      return _react2.default.createElement(
        'div',
        { styleName: containerStyleName },
        _react2.default.createElement(
          'div',
          { styleName: notificationStyleName, onClick: this.close },
          _react2.default.createElement(
            'div',
            { styleName: 'content' },
            children
          )
        )
      );
    }
  }]);
  return Notification;
}(_react.Component), _class2.childContextTypes = {
  close: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = Notification;

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(256);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(449);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(215);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(1048);

var _Root2 = _interopRequireDefault(_Root);

var _Loader = __webpack_require__(247);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Loader2.default, null), document.getElementById('root'));

var ipfsRoom = window.document.getElementById('ipfsRoom');

setInterval(ipfsRoom.onload = function () {
  _reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: _store.history, store: _store2.default, routes: _routes2.default }), document.getElementById('root'));
}, 500);

/***/ }),
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(127);

var _reactRouterDom = __webpack_require__(50);

var _helpers = __webpack_require__(11);

var _Home = __webpack_require__(713);

var _Home2 = _interopRequireDefault(_Home);

var _Balances = __webpack_require__(985);

var _Balances2 = _interopRequireDefault(_Balances);

var _History = __webpack_require__(1004);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(1013);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Swap = __webpack_require__(1014);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.home + 'orders/:buy-:sell', component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: _helpers.links.home, component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.balance, component: _Balances2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.history, component: _History2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.swap + '/:buy-:sell/:orderId', component: _Swap2.default }),
  _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
);

exports.default = routes;

/***/ }),
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// import Eos from 'eosjs'
// import config from 'app-config'
//
//
// const eos = Eos({
//   chainId: config.services.eos.chainId,
//   httpEndpoint: config.services.eos.httpEndpoint,
//   keyProvider: config.services.eos.keyProvider,
// })
//
// export default eos


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bitcoinjsLib = __webpack_require__(173);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  true ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 495 */,
/* 496 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 596 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  home: '/',
  balance: '/balances',
  history: '/history',
  swap: '/swap',
  feed: '/feed'
};

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(695);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResponseHandler = function createResponseHandler(req, opts) {
  var debug = opts.method.toUpperCase() + ' ' + opts.endpoint;

  return new _promise2.default(function (fulfill, reject) {
    return req.end(function (err, res) {
      var serverError = void 0;
      var body = res.body;

      // Errors

      if (!res && !err) {
        serverError = 'Connection failed: ' + debug;
      } else if (!res || res.statusCode >= 500) {
        serverError = 'We`re having technical issues at that moment. Please try again later';
      }

      if (serverError) {
        throw new Error(serverError);
      }

      if (err) {
        // TODO write Error notifier
        opts.onComplete();
        return reject({ resData: body, err: err, res: res });
      }

      if (!body) {
        try {
          body = JSON.parse(res.text);
        } catch (err) {
          return reject(err);
        }
      }

      var resData = opts.modifyResult(body);

      // Resolve

      fulfill(resData, res);
      opts.onComplete();
    });
  });
};

var defaultOptions = {
  sameOrigin: false,
  modifyResult: function modifyResult(resData) {
    return resData;
  },
  onComplete: function onComplete() {}

  /**
   *
   * @param {Object} options
   * @param {String} options.endpoint
   * @param {String} options.method
   * @param {Object} options.headers
   * @param {Object} options.query
   * @param {Object} options.body
   * @param {number} options.delay
   */
};var sendRequest = function sendRequest(options) {
  var opts = (0, _assign2.default)({}, defaultOptions, options);
  var req = _superagent2.default[opts.method](opts.endpoint);

  // req.set({
  //   'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
  //   ...(opts.headers || {}),
  // })

  if (opts.timeout) {
    req.timeout((0, _assign2.default)({
      response: 5000, // Wait 5 seconds for the server to start sending,
      deadline: 60000 }, opts.timeout));
  }

  if (opts.query) {
    req.query(opts.query);
  }

  if (opts.body) {
    req.send(opts.body);
  }

  if (opts.sameOrigin) {
    req.withCredentials();
  }

  var responseHandler = createResponseHandler(req, opts);

  responseHandler.abort = req.abort.bind(req);

  return responseHandler;
};

var requestByMethod = function requestByMethod(method) {
  return function (endpoint, opts) {
    return sendRequest((0, _assign2.default)({}, opts, { endpoint: endpoint, method: method }));
  };
};

exports.default = {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete')
};

/***/ }),
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localStorage = __webpack_require__(702);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(703);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(704);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(705);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  privateKeysSaved: 'privateKeysSaved',
  demoMoneyReceived: 'demoMoneyReceived'
};

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: "mainnet" + ":eth:privateKey",
  btc: "mainnet" + ":btc:privateKey",
  eos: "mainnet" + ":eos:privateKey"
};

/***/ }),
/* 704 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  SuccessWithdraw: 'SuccessWithdraw',
  Message: 'Message'
};

/***/ }),
/* 705 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  Withdraw: 'WithdrawModal',
  Offer: 'OfferModal',
  PrivateKeys: 'PrivateKeysModal'
};

/***/ }),
/* 706 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(346);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLocalStorageEnabled = void 0;

try {
  window.localStorage.setItem('test', 'test');
  window.localStorage.removeItem('test');
  isLocalStorageEnabled = true;
} catch (e) {
  isLocalStorageEnabled = false;
}

var setItem = function setItem(key, value) {
  if (isLocalStorageEnabled) {
    window.localStorage.setItem(key, (0, _stringify2.default)(value));
  }
};

var getItem = function getItem(key) {
  if (isLocalStorageEnabled) {
    var value = window.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  return undefined;
};

var removeItem = function removeItem(key) {
  if (isLocalStorageEnabled) {
    return window.localStorage.removeItem(key);
  }
};

var clear = function clear() {
  if (isLocalStorageEnabled) {
    window.localStorage.clear();
  }
};

exports.default = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
};

/***/ }),
/* 707 */,
/* 708 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;

/***/ }),
/* 709 */,
/* 710 */,
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getPageOffset = function getPageOffset() {
  // isCSS1Compat for old browsers support like IE < 9,
  // which do not have window.pageYOffset and window.scrollY
  // For more info check https://developer.mozilla.org/ru/docs/Web/API/Window/scrollY
  var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';
  var isSupportPageOffset = window.pageXOffset !== undefined;

  if (isSupportPageOffset) {

    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  return {
    x: isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
    y: isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  };
};

exports.default = getPageOffset;

/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollBarWidth = function getScrollBarWidth() {
  var outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps

  document.body.appendChild(outer);

  var widthNoScroll = outer.offsetWidth;

  // force scrollbars
  outer.style.overflow = 'scroll';

  // add innerdiv
  var inner = document.createElement('div');

  inner.style.width = '100%';
  outer.appendChild(inner);

  var widthWithScroll = inner.offsetWidth;

  // remove divs
  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

exports.default = getScrollBarWidth;

/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _PageHeadline = __webpack_require__(216);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(395);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(927);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Orders = __webpack_require__(929);

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(_ref) {
    var initialData = _ref.initialData,
        _ref$match$params = _ref.match.params,
        buy = _ref$match$params.buy,
        sell = _ref$match$params.sell;
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _initialiseProps.call(_this);

    var _ref2 = initialData || {},
        buyCurrency = _ref2.buyCurrency,
        sellCurrency = _ref2.sellCurrency;

    _this.state = {
      buyCurrency: buy || buyCurrency || 'eth',
      sellCurrency: sell || sellCurrency || 'btc',
      view: 'saveKeys'
    };
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (_helpers.localStorage.getItem(_helpers.constants.localStorage.privateKeysSaved)) {
        this.changeView('checkKeys');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency,
          view = _state.view;

      var filterOrders = '' + buyCurrency + sellCurrency;

      return _react2.default.createElement(
        'section',
        { style: { position: 'relative' } },
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              _Title2.default,
              null,
              'Swap.Online - CRYPTO-CURRENCY ',
              _react2.default.createElement(
                'abbr',
                { title: 'Over-The-Counter Market' },
                'OTC MARKET'
              )
            ),
            _react2.default.createElement(
              _SubTitle2.default,
              null,
              'We \u2665\uFE0F IPFS, JavaScript and \u26A1\uFE0FLightning Network. ',
              _react2.default.createElement('br', null),
              ' Check out our ',
              _react2.default.createElement(
                'a',
                { href: 'https://wiki.swap.online/en.pdf', target: '_balnk', rel: 'noreferrer noopener' },
                'project brief'
              ),
              ' and participate in ',
              _react2.default.createElement(
                'a',
                { href: 'http://swap.wpmix.net/#airdrop', traget: 'landframe' },
                'smart airdrop.'
              )
            )
          ),
          _react2.default.createElement(_Orders2.default, {
            filter: filterOrders,
            handleSellCurrencySelect: this.handleSellCurrencySelect,
            buyCurrency: buyCurrency,
            sellCurrency: sellCurrency,
            flipCurrency: this.flipCurrency
          })
        )
      );
    }
  }]);
  return Home;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleSellCurrencySelect = function (_ref3) {
    var value = _ref3.value;
    var _state2 = _this2.state,
        buyCurrency = _state2.buyCurrency,
        sellCurrency = _state2.sellCurrency;


    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    buyCurrency = value;

    _this2.setState({
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency
    });
  };

  this.flipCurrency = function () {
    var _state3 = _this2.state,
        buyCurrency = _state3.buyCurrency,
        sellCurrency = _state3.sellCurrency;


    _this2.setState({
      buyCurrency: sellCurrency,
      sellCurrency: buyCurrency
    });
  };

  this.handleClickTelegram = function () {
    _actions2.default.analytics.dataEvent('orders-click-telegram-group');
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
  };

  this.handleClickMailing = function () {
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
    _actions2.default.analytics.dataEvent('orders-click-start-swap');
  };
}, _temp);
exports.default = Home;

/***/ }),
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var open = function open(name, data) {
  return _reducers2.default.modals.open({ name: name, data: data });
};

var close = function close(name) {
  return _reducers2.default.modals.close(name);
};

exports.default = {
  open: open,
  close: close
};

/***/ }),
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(147);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var show = exports.show = function show(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data
  }));
};

var hide = function hide(state, name) {
  var closingNotification = state[name],
      otherNotifications = (0, _objectWithoutProperties3.default)(state, [name]);

  return otherNotifications;
};
exports.hide = hide;

/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(147);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is necessary to arrange the modals in the opening order, not alphabetical
var zIndex = 305;

var initialState = exports.initialState = {};

var open = exports.open = function open(state, _ref) {
  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({}, name, {
    name: name,
    data: data,
    zIndex: ++zIndex
  }));
};

var close = function close(state, name) {
  var closingModal = state[name],
      otherModals = (0, _objectWithoutProperties3.default)(state, [name]);


  zIndex -= 1;

  return otherModals;
};
exports.close = close;

/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransactions = exports.setFilter = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(148);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  transactions: [],
  filter: 'ALL'
};

var setFilter = exports.setFilter = function setFilter(state, payload) {
  return (0, _assign2.default)({}, state, {
    filter: payload
  });
};

var setTransactions = exports.setTransactions = function setTransactions(state, payload) {
  return (0, _assign2.default)({}, state, {
    transactions: [].concat((0, _toConsumableArray3.default)(state.transactions), (0, _toConsumableArray3.default)(payload))
  });
};

/***/ }),
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  isVisible: false
};

var setVisibility = exports.setVisibility = function setVisibility(state, payload) {
  return (0, _assign2.default)({}, state, {
    isVisible: payload
  });
};

/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTokenBalance = exports.setBalance = exports.setTokenAuthData = exports.setAuthData = exports.initialState = undefined;

var _defineProperty2 = __webpack_require__(147);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  ethData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    currency: 'ETH'
  },
  btcData: {
    address: '0x0',
    publicKey: '0x0',
    balance: 0,
    currency: 'BTC'
  },
  nimData: {
    address: '',
    balance: 0,
    currency: 'NIM'
  },
  eosData: {
    address: '',
    balance: 0,
    currency: 'EOS'
  },
  tokensData: {}
};

var setAuthData = exports.setAuthData = function setAuthData(state, _ref) {
  var name = _ref.name,
      data = _ref.data;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], data)));
};

var setTokenAuthData = exports.setTokenAuthData = function setTokenAuthData(state, _ref2) {
  var name = _ref2.name,
      data = _ref2.data;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state[name], data)))
  });
};

var setBalance = exports.setBalance = function setBalance(state, _ref3) {
  var name = _ref3.name,
      amount = _ref3.amount;
  return (0, _assign2.default)({}, state, (0, _defineProperty3.default)({
    tokensData: (0, _assign2.default)({}, state.tokensData)
  }, name, (0, _assign2.default)({}, state[name], {
    balance: Number(amount)
  })));
};

var setTokenBalance = exports.setTokenBalance = function setTokenBalance(state, _ref4) {
  var name = _ref4.name,
      amount = _ref4.amount;
  return (0, _assign2.default)({}, state, {
    tokensData: (0, _assign2.default)({}, state.tokensData, (0, _defineProperty3.default)({}, name, (0, _assign2.default)({}, state.tokensData[name], {
      balance: Number(amount)
    })))
  });
};

/***/ }),
/* 777 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteItems = exports.addItems = exports.initialState = undefined;

var _toConsumableArray2 = __webpack_require__(148);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: []
};

var addItems = exports.addItems = function addItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: [].concat((0, _toConsumableArray3.default)(payload))
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: payload
  });
};

/***/ }),
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show() {
  return _reducers2.default.loader.setVisibility(true);
};
var hide = function hide() {
  return _reducers2.default.loader.setVisibility(false);
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 783 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var show = function show(name, data) {
  return _reducers2.default.notifications.show({ name: name, data: data });
};

var hide = function hide(name) {
  return _reducers2.default.notifications.hide(name);
};

exports.default = {
  show: show,
  hide: hide
};

/***/ }),
/* 784 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setFilter = function setFilter(filter) {
  _reducers2.default.history.setFilter(filter);
};

var ordersFilter = function ordersFilter(filter) {
  _reducers2.default.orders.ordersFilter(filter);
};

exports.default = {
  setFilter: setFilter,
  ordersFilter: ordersFilter
};

/***/ }),
/* 785 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(148);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(364);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _asyncToGenerator2 = __webpack_require__(365);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _core = __webpack_require__(114);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sign = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var btcPrivateKey, ethPrivateKey, _ethPrivateKey;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            btcPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.btc);
            ethPrivateKey = localStorage.getItem(_helpers.constants.privateKeyNames.eth);
            _ethPrivateKey = _actions2.default.ethereum.login(ethPrivateKey);


            _actions2.default.bitcoin.login(btcPrivateKey);

            (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
              _actions2.default.token.login(_ethPrivateKey, _appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
            });
            // await actions.nimiq.login(_ethPrivateKey)

            // const eosMasterPrivateKey = localStorage.getItem(constants.privateKeyNames.eos)
            // await actions.eos.login(eosMasterPrivateKey)

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function sign() {
    return _ref.apply(this, arguments);
  };
}();

var getBalances = function getBalances() {
  _actions2.default.ethereum.getBalance();
  _actions2.default.bitcoin.getBalance();

  (0, _keys2.default)(_appConfig2.default.tokens).forEach(function (name) {
    _actions2.default.token.getBalance(_appConfig2.default.tokens[name].address, name, _appConfig2.default.tokens[name].decimals);
  });
  // actions.eos.getBalance()
  // actions.nimiq.getBalance()
};

var getDemoMoney =  true ? function () {} : function () {
  _helpers.request.get('https://swap.wpmix.net/demokeys.php', {}).then(function (r) {
    window.localStorage.clear();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, r[0]);
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, r[1]);
    localStorage.setItem(_helpers.constants.localStorage.demoMoneyReceived, true);
  });
};

var setExchangeRate = function setExchangeRate(buyCurrency, sellCurrency) {
  var url = 'https://api.coinbase.com/v2/exchange-rates?currency=' + buyCurrency.toUpperCase();

  return _helpers.request.get(url).then(function (_ref2) {
    var rates = _ref2.data.rates;
    return (0, _keys2.default)(rates).filter(function (k) {
      return k === sellCurrency.toUpperCase();
    }).map(function (k) {
      return rates[k];
    });
  }).catch(function () {
    return _appConfig2.default.exchangeRates['' + buyCurrency.toLowerCase() + sellCurrency.toLowerCase()];
  });
};

var setTransactions = function setTransactions() {
  return _promise2.default.all([_actions2.default.bitcoin.getTransaction(), _actions2.default.ethereum.getTransaction(), _actions2.default.token.getTransaction(_appConfig2.default.tokens.swap.address), _actions2.default.token.getTransaction(_appConfig2.default.tokens.noxon.address)]).then(function (transactions) {
    var _ref3;

    var data = (_ref3 = []).concat.apply(_ref3, [[]].concat((0, _toConsumableArray3.default)(transactions))).sort(function (a, b) {
      return b.date - a.date;
    });
    _reducers2.default.history.setTransactions(data);
  });
};

var getText = function getText() {
  var _getState = (0, _core.getState)(),
      _getState$user = _getState.user,
      ethData = _getState$user.ethData,
      btcData = _getState$user.btcData;

  var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!  \n    ';

  return text;
};

var downloadPrivateKeys = function downloadPrivateKeys() {
  var element = document.createElement('a');
  var text = getText();
  var message = 'Check your browser downloads';

  element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);

  _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
    message: message
  });
};

exports.default = {
  sign: sign,
  getBalances: getBalances,
  getDemoMoney: getDemoMoney,
  setExchangeRate: setExchangeRate,
  setTransactions: setTransactions,
  downloadPrivateKeys: downloadPrivateKeys
};

/***/ }),
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(346);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _bigi = __webpack_require__(62);

var _bigi2 = _interopRequireDefault(_bigi);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(114);

var _bitcoinjsLib = __webpack_require__(173);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var keyPair = void 0;

  if (privateKey) {
    var hash = _bitcoinjsLib2.default.crypto.sha256(privateKey);
    var d = _bigi2.default.fromBuffer(hash);

    keyPair = new _bitcoinjsLib2.default.ECPair(d, null, { network: _helpers.btc.network });
  } else {
    console.info('Created account Bitcoin ...');
    keyPair = _bitcoinjsLib2.default.ECPair.makeRandom({ network: _helpers.btc.network });
    privateKey = keyPair.toWIF();
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, privateKey);
  }

  var account = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line
  var address = account.getAddress();
  var publicKey = account.getPublicKeyBuffer().toString('hex');

  var data = {
    account: account,
    keyPair: keyPair,
    address: address,
    privateKey: privateKey,
    publicKey: publicKey
  };

  window.getBtcAddress = function () {
    return data.address;
  };

  console.info('Logged in with Bitcoin', data);
  _reducers2.default.user.setAuthData({ name: 'btcData', data: data });
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.btcData.address;

  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address).then(function (_ref) {
    var balance = _ref.balance;

    console.log('BTC Balance:', balance);
    _reducers2.default.user.setBalance({ name: 'btcData', amount: balance });
  }, function () {
    return _promise2.default.reject();
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address).then(function (_ref2) {
    var balance = _ref2.balance;
    return balance;
  });
};

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.btcData.address;

    var url = _appConfig2.default.api.bitpay + '/txs/?address=' + address;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      if (res) {
        transactions = res.txs.map(function (item) {
          return {
            type: 'btc',
            hash: item.txid,
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            value: item.vout[0].value,
            date: item.time * 1000,
            direction: address.toLocaleLowerCase() === item.vout[0].scriptPubKey.addresses[0].toLocaleLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
      } else {
        resolve([]);
        console.error('res:status BTC false', res);
      }
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function (resolve, reject) {
    var _getState3 = (0, _core.getState)(),
        privateKey = _getState3.user.btcData.privateKey;

    var newtx = {
      inputs: [{
        addresses: [from]
      }],
      outputs: [{
        addresses: [to],
        value: amount * 100000000
      }]
    };
    _helpers.request.post('https://api.blockcypher.com/v1/btc/test3/txs/new', {
      body: (0, _stringify2.default)(newtx)
    }).then(function (d) {
      var tmptx = (0, _assign2.default)({}, d, {
        pubkeys: []
      });

      var keys = new _bitcoinjsLib2.default.ECPair.fromWIF(privateKey, _helpers.btc.network); // eslint-disable-line

      tmptx.signatures = tmptx.tosign.map(function (toSign) {
        tmptx.pubkeys.push(keys.getPublicKeyBuffer().toString('hex'));

        return keys.sign(_bigi2.default.fromHex(toSign.toString('hex')).toBuffer()).toDER().toString('hex');
      });

      return _helpers.request.post('https://api.blockcypher.com/v1/btc/test3/txs/send', {
        body: (0, _stringify2.default)(tmptx)
      });
    }).then(function (res) {
      return resolve(res);
    }).catch(function (e) {
      return console.log(e);
    });
  });
};

var fetchUnspents = function fetchUnspents(address) {
  return _helpers.request.get(_appConfig2.default.api.bitpay + '/addr/' + address + '/utxo');
};

var broadcastTx = function broadcastTx(txRaw) {
  return _helpers.request.post(_appConfig2.default.api.bitpay + '/tx/send', {
    body: {
      rawtx: txRaw
    }
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchUnspents: fetchUnspents,
  broadcastTx: broadcastTx,
  fetchBalance: fetchBalance
};

/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(114);

var _web = __webpack_require__(135);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(privateKey) {
  var data = void 0;

  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account Ethereum ...');
    data = _web2.default.eth.accounts.create();
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, data.privateKey);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);

  _reducers2.default.user.setAuthData({ name: 'ethData', data: data });

  window.getEthAddress = function () {
    return data.address;
  };

  console.info('Logged in with Ethereum', data);

  return data.privateKey;
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  var url = _appConfig2.default.api.etherscan + '?module=account&action=balance&address=' + address + '&tag=latest&apikey=' + _appConfig2.default.apiKeys.etherscan;

  return _helpers.request.get(url).then(function (_ref) {
    var result = _ref.result;

    var amount = Number(_web2.default.utils.fromWei(result));

    _reducers2.default.user.setBalance({ name: 'ethData', amount: amount });
  }).catch(function () {
    console.log('app:showError', 'Ethereum service isn\'t available, try later');
  });
};

var fetchBalance = function fetchBalance(address) {
  var url = _appConfig2.default.api.etherscan + '?module=account&action=balance&address=' + address + '&tag=latest&apikey=' + _appConfig2.default.apiKeys.etherscan;
  return _helpers.request.get(url).then(function (_ref2) {
    var result = _ref2.result;
    return Number(_web2.default.utils.fromWei(result));
  });
};

// const fetchBalance = (address) =>
//   web3.eth.getBalance(address)
//     .then((wei) => Number(web3.utils.fromWei(wei)))

// export const getGas = () => {
//   web3.eth.getGasPrice().then((res) => {
//     gas = web3.utils.fromWei(res)
//   })
// }

var getTransaction = function getTransaction() {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = _appConfig2.default.api.etherscan + '?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=asc&apikey=' + _appConfig2.default.apiKeys.etherscan;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      console.log(res);
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            type: 'eth',
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            hash: item.hash,
            status: item.blockHash != null ? 1 : 0,
            value: _web2.default.utils.fromWei(item.value),
            address: item.to,
            date: item.timeStamp * 1000,
            direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
      } else {
        console.error('res:status ETH false', res);
      }
    });
  });
};

var send = function send(from, to, amount) {
  return new _promise2.default(function (resolve, reject) {
    var _getState3 = (0, _core.getState)(),
        privateKey = _getState3.user.ethData.privateKey;

    var params = {
      to: String(to).trim(),
      gasPrice: '20000000000',
      gas: '21000',
      value: _web2.default.utils.toWei(String(amount))
    };

    _web2.default.eth.accounts.signTransaction(params, privateKey).then(function (result) {
      return _web2.default.eth.sendSignedTransaction(result.rawTransaction);
    }).then(function (receipt) {
      resolve(receipt);
    });
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance
};

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _humanStandardTokenAbi = __webpack_require__(792);

var _humanStandardTokenAbi2 = _interopRequireDefault(_humanStandardTokenAbi);

var _helpers = __webpack_require__(11);

var _core = __webpack_require__(114);

var _web = __webpack_require__(135);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _bignumber = __webpack_require__(370);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ DECIMAL_PLACES: 21 });

var login = function login(privateKey, contractAddress, nameContract, decimals) {
  var data = void 0;
  if (privateKey) {
    data = _web2.default.eth.accounts.privateKeyToAccount(privateKey);
  } else {
    console.info('Created account ETH Token ...');
    data = _web2.default.eth.accounts.create();
    _web2.default.eth.accounts.wallet.add(data);
  }

  _web2.default.eth.accounts.wallet.add(data.privateKey);
  console.info('Logged in with ETH Token', data);

  setupContract(data.address, contractAddress, nameContract, decimals);
};

var setupContract = function setupContract(ethAddress, contractAddress, nameContract, decimals) {
  if (!_web2.default.eth.accounts.wallet[ethAddress]) {
    throw new Error('web3 does not have given address');
  }

  var data = {
    address: ethAddress,
    balance: 0,
    name: nameContract,
    currency: nameContract.toUpperCase(),
    contractAddress: contractAddress,
    decimals: decimals
  };

  _reducers2.default.user.setTokenAuthData({ name: data.name, data: data });
};

var getBalance = function getBalance(contractAddress, name, decimals) {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  var url = _appConfig2.default.api.etherscan + '?module=account&action=tokenbalance&contractaddress=' + contractAddress + '&address=' + address;

  return _helpers.request.get(url).then(function (_ref) {
    var result = _ref.result;

    var amount = new _bignumber.BigNumber(String(result)).dividedBy(new _bignumber.BigNumber(String(10)).pow(decimals)).toNumber();

    _reducers2.default.user.setTokenBalance({ name: name, amount: amount });
  }).catch(function (r) {
    return console.error('Token service isn\'t available, try later');
  });
};

var fetchBalance = function fetchBalance(address) {
  return _helpers.request.get('https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x60c205722c6c797c725a996cf9cca11291f90749&address=' + address).then(function (_ref2) {
    var result = _ref2.result;
    return result;
  });
};

var getTransaction = function getTransaction(contractAddress) {
  return new _promise2.default(function (resolve) {
    var _getState2 = (0, _core.getState)(),
        address = _getState2.user.ethData.address;

    var url = ['https://api-rinkeby.etherscan.io/api?module=account&action=tokentx', '&contractaddress=' + contractAddress, '&address=' + address, '&startblock=0&endblock=99999999', '&sort=asc&apikey=' + _appConfig2.default.apiKeys.blocktrail].join('');

    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      console.log(res);
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            confirmations: item.confirmations > 0 ? 'Confirmed' : 'Unconfirmed',
            type: item.tokenName,
            hash: item.hash,
            contractAddress: item.contractAddress,
            status: item.blockHash != null ? 1 : 0,
            value: item.value,
            address: item.to,
            date: item.timeStamp * 1000,
            direction: address.toLowerCase() === item.to.toLowerCase() ? 'in' : 'out'
          };
        });
        resolve(transactions);
        console.log('TOKEN', transactions);
      } else {
        console.error('res:status ETH false', res);
      }
    });
  });
};

var send = function send(from, to, amount, decimals) {
  var _getState3 = (0, _core.getState)(),
      address = _getState3.user.ethData.address;

  var tokenContract = void 0;

  var options = {
    from: address,
    gas: '' + _appConfig2.default.services.web3.gas,
    gasPrice: '' + _appConfig2.default.services.web3.gasPrice
  };

  tokenContract = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, from, options);

  var newAmount = new _bignumber.BigNumber(String(amount)).times(new _bignumber.BigNumber('10').pow(new _bignumber.BigNumber(String(decimals))));

  return new _promise2.default(function (resolve, reject) {
    return tokenContract.methods.transfer(to, newAmount).send().then(function (receipt) {
      resolve(receipt);
    });
  });
};

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send,
  fetchBalance: fetchBalance
};

/***/ }),
/* 792 */,
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(364);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(365);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var initWallet = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(privateKey) {
    var keyPair;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            keyPair = (0, _nimiq.ethKeyToKeyPair)(privateKey);
            return _context2.abrupt('return', new window.Nimiq.Wallet(keyPair));

          case 2:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function initWallet(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var init = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
    var _this = this;

    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return initNimiq();

          case 2:
            if (!initPromise) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt('return', initPromise);

          case 6:
            if (!isInitialized) {
              _context4.next = 8;
              break;
            }

            return _context4.abrupt('return', _promise2.default.resolve());

          case 8:

            initPromise = new _promise2.default(function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        window.nim = $;

                        _context3.next = 3;
                        return window.Nimiq.Consensus.nano();

                      case 3:
                        $.consensus = _context3.sent;

                        $.blockchain = $.consensus.blockchain;
                        $.accounts = $.blockchain.accounts;
                        $.mempool = $.consensus.mempool;
                        $.network = $.consensus.network;

                        $.consensus.on('established', function () {
                          window.Nimiq.Log.i('Consensus', 'Current state: height=' + $.blockchain.height + ', headHash=' + $.blockchain.headHash);
                          resolve();
                        });
                        $.network.connect();

                      case 10:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                }, _callee3, _this);
              }));

              return function (_x2) {
                return _ref4.apply(this, arguments);
              };
            }());

            return _context4.abrupt('return', initPromise);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function init() {
    return _ref3.apply(this, arguments);
  };
}();

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _nimiq = __webpack_require__(794);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = {};
var initNimiqPromise = void 0;
var isNimiqInitialized = false;
var initPromise = void 0;
var isInitialized = false;

var NETWORK = _appConfig2.default.entry === 'mainnet' ? 'main' : 'test';

var initNimiq = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!initNimiqPromise) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', initNimiqPromise);

          case 4:
            if (!isNimiqInitialized) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', _promise2.default.resolve());

          case 6:

            initNimiqPromise = new _promise2.default(function (resolve, reject) {
              if (!window.Nimiq) {
                console.error('Nimiq not present, add from CDN: https://cdn.nimiq.com/nimiq.js');
                reject();
              } else {
                window.Nimiq.init(function () {
                  isNimiqInitialized = true;
                  window.Nimiq.GenesisConfig.init(window.Nimiq.GenesisConfig.CONFIGS[NETWORK]);
                  resolve();
                });
              }
            });

            return _context.abrupt('return', initNimiqPromise);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function initNimiq() {
    return _ref.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(ethPrivateKey) {
    var data;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return init();

          case 2:
            _context5.next = 4;
            return initWallet(ethPrivateKey);

          case 4:
            $.wallet = _context5.sent;
            data = {
              balance: 0,
              address: $.wallet.address.toUserFriendlyAddress()
            };


            window.getNimAddress = function () {
              return data.address;
            };

            console.info('Logged in with Nimiq', data);
            _reducers2.default.user.setAuthData({ name: 'nimData', data: data });

            return _context5.abrupt('return', data);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, undefined);
  }));

  return function login(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

var getBalance = function () {
  var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
    var account, amount;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return init();

          case 2:
            _context6.next = 4;
            return $.consensus.getAccount($.wallet.address);

          case 4:
            account = _context6.sent;
            amount = window.Nimiq.Policy.satoshisToCoins(account.balance).toFixed(0);


            _reducers2.default.user.setBalance({ name: 'nimData', amount: amount });

            return _context6.abrupt('return', amount);

          case 8:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined);
  }));

  return function getBalance() {
    return _ref6.apply(this, arguments);
  };
}();

var getTransaction = function getTransaction() {};

var send = function () {
  var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(from, address, amount) {
    var _prepareTransaction, addr, value, fee, height, tx;

    return _regenerator2.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return init();

          case 2:
            _prepareTransaction = (0, _nimiq.prepareTransaction)($, address, amount), addr = _prepareTransaction.addr, value = _prepareTransaction.value, fee = _prepareTransaction.fee, height = _prepareTransaction.height;
            tx = $.wallet.createTransaction(addr, value, fee, height);


            $.consensus.relayTransaction(tx);
            $.consensus.subscribeAccounts([tx.recipient]);

            window.Nimiq.Log.i('TX', 'Waiting for Nimiq transaction [' + tx.hash().toHex() + '] to confirm, please wait...');

            (0, _nimiq.followTransaction)($, tx).then(function () {
              return window.Nimiq.Log.i('TX', 'Nimiq transaction [' + tx.hash().toHex() + '] confirmed!');
            }).then(function () {
              return getBalance();
            });

            return _context7.abrupt('return', tx);

          case 9:
          case 'end':
            return _context7.stop();
        }
      }
    }, _callee7, undefined);
  }));

  return function send(_x4, _x5, _x6) {
    return _ref7.apply(this, arguments);
  };
}();

exports.default = {
  login: login,
  getBalance: getBalance,
  getTransaction: getTransaction,
  send: send
};

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareTransaction = exports.followTransaction = exports.ethKeyToKeyPair = undefined;

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ethKeyToKeyPair = function ethKeyToKeyPair(ethKey) {
  if (!window.Nimiq) throw new Error('include Nimiq from CDN');

  var raw = ethKey.slice(0, 2) === '0x' ? ethKey.substring(2) : ethKey;
  var buf = Buffer.from(raw, 'hex');
  var privKey = new window.Nimiq.PrivateKey(buf);
  var publicKey = window.Nimiq.PublicKey.derive(privKey);

  return new window.Nimiq.KeyPair(privKey, publicKey);
};

var followTransaction = function followTransaction($, tx) {
  return new _promise2.default(function (resolve) {
    var id = $.mempool.on('transaction-mined', function (tx2) {
      if (tx.equals(tx2)) {
        $.mempool.off('transaction-mined', id);
        resolve();
      }
    });
  });
};

var prepareTransaction = function prepareTransaction($, address, amount) {
  var height = $.blockchain.height + 1;
  var addr = window.Nimiq.Address.fromUserFriendlyAddress(address);
  var value = window.Nimiq.Policy.coinsToSatoshis(amount);
  var fee = window.Nimiq.Policy.coinsToSatoshis(0);

  return { addr: addr, value: value, fee: fee, height: height };
};

exports.ethKeyToKeyPair = ethKeyToKeyPair;
exports.followTransaction = followTransaction;
exports.prepareTransaction = prepareTransaction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _core = __webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addItemToFeed = function addItemToFeed(feeds) {
  var filteredFeeds = feeds.filter(function (f) {
    return f.request.length !== 0;
  });
  _reducers2.default.feeds.addItems(filteredFeeds);
};

var deleteItemToFeed = function deleteItemToFeed(orderId) {
  var _getState = (0, _core.getState)(),
      feeds = _getState.feeds;

  var filteredFeeds = (0, _keys2.default)(feeds).map(function (k) {
    return feeds[k];
  }).filter(function (f) {
    return f.id === orderId;
  });

  console.log(filteredFeeds);

  _reducers2.default.feeds.deleteItems(filteredFeeds);
};

var getFeedDataFromOrder = function getFeedDataFromOrder(orders) {
  var feeds = orders.map(function (order) {
    return {
      peer: order.owner.peer,
      id: order.id,
      content: {
        sellCurrency: order.sellCurrency,
        buyCurrency: order.buyCurrency,
        sellAmount: order.sellAmount,
        buyAmount: order.buyAmount
      },
      request: order.requests
    };
  });

  addItemToFeed(feeds);
};

exports.default = {
  getFeedDataFromOrder: getFeedDataFromOrder,
  deleteItemToFeed: deleteItemToFeed
};

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers = __webpack_require__(36);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactGtmModule = __webpack_require__(797);

var _reactGtmModule2 = _interopRequireDefault(_reactGtmModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addEvent = function addEvent(name) {
  return _reducers2.default.addEvent(name);
}; //@ToDo ???
var dataEvent = function dataEvent(eventName) {

  window.dataLayer = window.dataLayer ? window.dataLayer : [];
  window.dataLayer.push({ 'event': eventName });

  console.log(window.dataLayer); //@ToDo delete
};

var tagManagerArgs = {
  gtmId: 'GTM-WK72GSV',
  dataLayerName: 'dataLayer'
};

_reactGtmModule2.default.initialize(tagManagerArgs);

exports.default = {
  addEvent: addEvent,
  dataEvent: dataEvent
};

/***/ }),
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_3j0ceJ"};

/***/ }),
/* 925 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1Sjfw-"};

/***/ }),
/* 926 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3J0EOu"};

/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(928);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubTitle = function SubTitle(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'div',
    { styleName: 'subTitle' },
    children
  );
};

exports.default = (0, _reactCssModules2.default)(SubTitle, _SubTitle2.default);

/***/ }),
/* 928 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_2AdbGo"};

/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Row = __webpack_require__(956);

var _Row2 = _interopRequireDefault(_Row);

var _Table = __webpack_require__(122);

var _Table2 = _interopRequireDefault(_Table);

var _SearchSwap = __webpack_require__(971);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _MyOrders = __webpack_require__(982);

var _MyOrders2 = _interopRequireDefault(_MyOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Orders = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Orders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Orders.__proto__ || (0, _getPrototypeOf2.default)(Orders)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      orders: _swap2.default.services.orders.items
    }, _this.updateOrders = function () {
      _this.setState({
        orders: _swap2.default.services.orders.items
      });

      var orders = _this.state.orders;


      if (orders.length !== 0) {
        _actions2.default.feed.getFeedDataFromOrder(orders);
      }
    }, _this.filterOrders = function (orders, filter) {
      return orders.filter(function (f) {
        return '' + f.buyCurrency.toLowerCase() + f.sellCurrency.toLowerCase() === filter;
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Orders, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _actions2.default.analytics.dataEvent('open-page-orders');
      _swap2.default.services.orders.on('new orders', this.updateOrders).on('new order', this.updateOrders).on('order update', this.updateOrders).on('remove order', this.updateOrders);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.orders.off('new orders', this.updateOrders).off('new order', this.updateOrders).off('order update', this.updateOrders).off('remove order', this.updateOrders);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          filter = _props.filter,
          sellCurrency = _props.sellCurrency,
          buyCurrency = _props.buyCurrency,
          handleSellCurrencySelect = _props.handleSellCurrencySelect,
          flipCurrency = _props.flipCurrency;

      var titles = ['EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'ACTIONS'];
      var orders = this.state.orders;


      console.log('ORDERS', _swap2.default.services.orders);

      var filteredOrders = this.filterOrders(orders, filter);
      var mePeer = _swap2.default.services.room.peer;
      var myOrders = orders.filter(function (order) {
        return order.owner.peer === mePeer;
      });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_MyOrders2.default, {
          orders: myOrders,
          updateOrders: this.updateOrders
        }),
        _react2.default.createElement(_SearchSwap2.default, {
          updateFilter: handleSellCurrencySelect,
          buyCurrency: buyCurrency,
          sellCurrency: sellCurrency,
          flipCurrency: flipCurrency
        }),
        _react2.default.createElement(
          'h3',
          null,
          'All orders'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: filteredOrders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, {
              key: index,
              row: row,
              update: _this2.updateOrders
            });
          }
        })
      );
    }
  }]);
  return Orders;
}(_react.Component);

exports.default = Orders;

/***/ }),
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  eth: 'ETH',
  btc: 'BTC',
  nim: 'NIM',

  // ETH Tokens
  noxon: 'NOXON',
  swap: 'SWAP'
};

/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  web3: 'web3',
  bitcoin: 'bitcoin',
  Ipfs: 'Ipfs',
  IpfsRoom: 'IpfsRoom',
  storage: 'storage'
};

/***/ }),
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  auth: 'auth',
  room: 'room',
  orders: 'orders',
  swaps: 'swaps'
};

/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet'
};

/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(235);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StorageFactory = function () {
  function StorageFactory(storage) {
    (0, _classCallCheck3.default)(this, StorageFactory);

    this.prefix = 'swap:';
    this.storage = storage || global.localStorage;

    try {
      this.storage.setItem('test', 'test');
      this.storage.getItem('test');
      this.storage.removeItem('test');
    } catch (err) {
      throw new Error('SwapApp.env.StorageFactory: ' + err);
    }
  }

  (0, _createClass3.default)(StorageFactory, [{
    key: 'setItem',
    value: function setItem(key, value) {
      this.storage.setItem('' + this.prefix + key, (0, _stringify2.default)(value));
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      var value = this.storage.getItem('' + this.prefix + key);

      try {
        return JSON.parse(value);
      } catch (err) {
        console.error('SwapApp.env.storage.getItem(' + key + ') parse error. Looks like the value was created w/o setItem method');
        console.error(err);
        return undefined;
      }
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      return this.storage.removeItem('' + this.prefix + key);
    }
  }]);
  return StorageFactory;
}();

exports.default = StorageFactory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 944 */,
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _SwapApp = __webpack_require__(396);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceInterface = function () {
  (0, _createClass3.default)(ServiceInterface, [{
    key: '_constructor',


    // _constructor for aggregation
    value: function _constructor() {
      // service name, within it will be stored in SwapApp.services
      this._serviceName = null;
      this._dependsOn = null;
      this._spyHandlers = [];
    }
  }]);

  function ServiceInterface() {
    (0, _classCallCheck3.default)(this, ServiceInterface);

    this._constructor();
  }

  (0, _createClass3.default)(ServiceInterface, [{
    key: '_waitRelationsResolve',
    value: function _waitRelationsResolve() {
      var _this = this;

      if (this._dependsOn && this._dependsOn.length) {
        var dependsOnMap = {};

        this._dependsOn.forEach(function (Service) {
          dependsOnMap[Service.name] = {
            initialized: false
          };

          _SwapApp2.default.services[Service.name]._addWaitRelationHandler(function () {
            dependsOnMap[Service.name].initialized = true;

            var areAllExpectsInitialized = (0, _keys2.default)(dependsOnMap).every(function (serviceName) {
              return dependsOnMap[serviceName].initialized;
            });

            if (areAllExpectsInitialized) {
              _this.initService();
            }
          });
        });
      }
    }
  }, {
    key: '_addWaitRelationHandler',
    value: function _addWaitRelationHandler(handler) {
      this._spyHandlers.push(handler);
    }
  }, {
    key: '_tryInitService',
    value: function _tryInitService() {
      if (!this._dependsOn || !this._dependsOn.length) {
        this.initService();
        this._spyHandlers.forEach(function (handler) {
          return handler();
        });
        this._spyHandlers = [];
      }
    }
  }, {
    key: 'initService',
    value: function initService() {
      // init service on SwapApp mounting
    }
  }]);
  return ServiceInterface;
}();

exports.default = ServiceInterface;

/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapInterface = function () {
  function SwapInterface() {
    (0, _classCallCheck3.default)(this, SwapInterface);

    // service name, within it will be stored in SwapApp.swaps
    this._swapName = null;
  }

  (0, _createClass3.default)(SwapInterface, [{
    key: "_initSwap",
    value: function _initSwap() {
      // init service on SwapApp mounting
    }
  }]);
  return SwapInterface;
}();

exports.default = SwapInterface;

/***/ }),
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {
  (0, _createClass3.default)(Collection, [{
    key: "_constructor",


    // _constructor for aggregation
    value: function _constructor() {
      this.items = [];
      this.itemIds = {};
    }
  }]);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);

    this._constructor();
  }

  /**
   * Add item at the start of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  (0, _createClass3.default)(Collection, [{
    key: "prepend",
    value: function prepend(item, key) {
      this.items.unshift(item);
      if (key) {
        for (var _key in this.itemIds) {
          if (this.itemIds.hasOwnProperty(_key)) {
            this.itemIds[_key] += 1;
          }
        }
        this.itemIds[key] = 0;
      }
      return item;
    }

    /**
     * Add item at the end of current collection
     * @param item
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "append",
    value: function append(item, key) {
      this.items.push(item);
      if (key) {
        this.itemIds[key] = this.items.length - 1;
      }
      return item;
    }

    /**
     * Remove item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "removeByIndex",
    value: function removeByIndex(index) {
      this.items = this.items.splice(index, 1);
    }

    /**
     * Remove item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "removeByKey",
    value: function removeByKey(key) {
      var _this = this;

      var index = this.itemIds[key];

      if (index !== undefined) {
        this.items.splice(index, 1);
        delete this.itemIds[key];

        (0, _keys2.default)(this.itemIds).forEach(function (key) {
          if (_this.itemIds[key] > index) {
            _this.itemIds[key]--;
          }
        });
      }
    }

    /**
     * Get index of item in current collection
     * @param item
     * @returns {number}
     */

  }, {
    key: "indexOf",
    value: function indexOf(item) {
      return this.items.indexOf(item);
    }

    /**
     * Get item by index from current collection
     * @param index
     * @returns {*}
     */

  }, {
    key: "getByIndex",
    value: function getByIndex(index) {
      return this.items[index];
    }

    /**
     * Get item by key [id] from current collection
     * @param key {string|number}
     * @returns {*}
     */

  }, {
    key: "getByKey",
    value: function getByKey(key) {
      return this.items[this.itemIds[key]];
    }
  }, {
    key: "isExist",
    value: function isExist(item) {
      return this.items.includes(item);
    }

    /**
     * Check if item with such name exists in current collection
     * @param key {string|number}
     * @returns {boolean}
     */

  }, {
    key: "isExistByKey",
    value: function isExistByKey(key) {
      return Boolean(this.getByKey(key));
    }
  }]);
  return Collection;
}();

exports.default = Collection;

/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Event = function () {

  /**
   *
   * @param name {string}
   */
  function Event(name) {
    (0, _classCallCheck3.default)(this, Event);

    this.name = name;
    this.handlers = [];
  }

  /**
   * Add handler to current Event
   *
   * @param handler {function}
   */


  (0, _createClass3.default)(Event, [{
    key: "addHandler",
    value: function addHandler(handler) {
      var _this = this;

      this.handlers.push(handler.bind({
        unsubscribe: function unsubscribe() {
          _this.removeHandler(handler);
        }
      }));
    }

    /**
     * Remove handler from current Event
     *
     * @param handler {function}
     * @returns {Array.<T>|*}
     */

  }, {
    key: "removeHandler",
    value: function removeHandler(handler) {
      var handlerIndex = this.handlers.indexOf(handler);

      this.handlers.splice(handlerIndex, 1);
    }

    /**
     * Call all handlers in all priorities of current Event
     *
     * @param eventArgs {...array}
     */

  }, {
    key: "call",
    value: function call() {
      for (var _len = arguments.length, eventArgs = Array(_len), _key = 0; _key < _len; _key++) {
        eventArgs[_key] = arguments[_key];
      }

      this.handlers.forEach(function (handler) {
        try {
          handler.apply(undefined, eventArgs);
        } catch (err) {
          console.error(err);
        }
      });
    }
  }]);
  return Event;
}();

var EventAggregator = function () {
  function EventAggregator() {
    (0, _classCallCheck3.default)(this, EventAggregator);

    this.events = {};
  }

  /**
   * Get Event by name
   *
   * @param name
   * @returns {*}
   */


  (0, _createClass3.default)(EventAggregator, [{
    key: "getEvent",
    value: function getEvent(name) {
      var event = this.events[name];

      if (!event) {
        event = new Event(name);
        this.events[name] = event;
      }

      return event;
    }

    /**
     *
     * @param name {string}
     * @param handler {function}
     * @returns {{ event: *, handler: * }}
     */

  }, {
    key: "subscribe",
    value: function subscribe(name, handler) {
      var event = this.getEvent(name);

      event.addHandler(handler);

      return { event: event, handler: handler };
    }

    /**
     *
     * @param eventName {string}
     * @param handler {function}
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(eventName, handler) {
      var event = this.getEvent(eventName);

      event.removeHandler(handler);
    }

    /**
     *
     * @param name {string}
     * @param eventArgs {...array}
     */

  }, {
    key: "dispatch",
    value: function dispatch(name) {
      var event = this.getEvent(name);

      if (event) {
        for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          eventArgs[_key2 - 1] = arguments[_key2];
        }

        event.call.apply(event, eventArgs);
      }
    }

    /**
     * Subscribe to Event and unsubscribe after call
     *
     * @param eventName {string}
     * @param handler {function}
     * @returns {{ event: *, handlerWrapper: (function(...[*])) }}
     */

  }, {
    key: "once",
    value: function once(eventName, handler) {
      var event = this.getEvent(eventName);

      var handlerWrapper = function handlerWrapper() {
        var result = handler.apply(undefined, arguments);
        if (result) {
          event.removeHandler(handlerWrapper);
        }
      };

      event.addHandler(handlerWrapper);

      return { event: event, handlerWrapper: handlerWrapper };
    }
  }]);
  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 949 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pullProps = __webpack_require__(950);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(951);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _typeforce = __webpack_require__(952);

var _typeforce2 = _interopRequireDefault(_typeforce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pullProps: _pullProps2.default,
  ignoreProps: _ignoreProps2.default,
  typeforce: _typeforce2.default
};

/***/ }),
/* 950 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pullProps = function pullProps(obj) {
  for (var _len = arguments.length, props = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  var result = {};

  props.forEach(function (propName) {
    result[propName] = obj[propName];
  });

  return result;
};

exports.default = pullProps;

/***/ }),
/* 951 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ignoreProps = function ignoreProps() {
  for (var _len = arguments.length, ignored = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    ignored[_key - 1] = arguments[_key];
  }

  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var list = {};

  (0, _keys2.default)(props).forEach(function (key) {
    if (!ignored.includes(key)) {
      list[key] = props[key];
    }
  });

  return list;
};

exports.default = ignoreProps;

/***/ }),
/* 952 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(953);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _values = __webpack_require__(224);

var _values2 = _interopRequireDefault(_values);

var _isCoinAddress, _isPublicKey;

var _typeforce = __webpack_require__(954);

var _typeforce2 = _interopRequireDefault(_typeforce);

var _constants = __webpack_require__(234);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = function check() {
  try {
    return _typeforce2.default.apply(undefined, arguments);
  } catch (err) {
    console.error(err);
    return false;
  }
};

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var isCoinName = function isCoinName(value) {
  return (0, _values2.default)(_constants2.default.COINS).map(function (v) {
    return v.toLowerCase();
  }).includes(value.toLowerCase());
};

var isCoinAddress = (_isCoinAddress = {}, (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.eth, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{34}$/.test(value);
}), (0, _defineProperty3.default)(_isCoinAddress, _constants2.default.COINS.nim, function (value) {
  return typeof value === 'string' && /^0x[A-Fa-f0-9]{40}$/.test(value);
}), _isCoinAddress);

var isPublicKey = (_isPublicKey = {}, (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.eth, '?String'), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.btc, function (value) {
  return typeof value === 'string' && /^[A-Za-z0-9]{66}$/.test(value);
}), (0, _defineProperty3.default)(_isPublicKey, _constants2.default.COINS.nim, '?String'), _isPublicKey);

exports.default = {
  t: _typeforce2.default,
  check: check,
  isNumeric: isNumeric,
  isCoinName: isCoinName,
  isCoinAddress: isCoinAddress,
  isPublicKey: isPublicKey
};

/***/ }),
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(50);

var _Coins = __webpack_require__(162);

var _Coins2 = _interopRequireDefault(_Coins);

var _RequestButton = __webpack_require__(966);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

var _RemoveButton = __webpack_require__(968);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      exchangeRate: null
    }, _this.getExchangeRate = function (buyCurrency, sellCurrency) {

      if (sellCurrency === 'noxon') {
        sellCurrency = 'eth';
      } else if (buyCurrency === 'noxon') {
        buyCurrency = 'eth';
      }

      _actions2.default.user.setExchangeRate(buyCurrency, sellCurrency).then(function (exchangeRate) {
        _this.setState({
          exchangeRate: exchangeRate
        });
      });
    }, _this.removeOrder = function (orderId) {
      _swap2.default.services.orders.remove(orderId);
      _actions2.default.feed.deleteItemToFeed(orderId);

      _this.props.update();
    }, _this.sendRequest = function (orderId) {
      // const order = SwapApp.services.orders.getByKey(orderId)
      //
      // order.sendRequest((isAccepted) => {
      //   console.log(`user ${order.owner.peer} ${isAccepted ? 'accepted' : 'declined'} your request`)
      //
      // })
      //
      // this.props.update()
      _actions2.default.analytics.dataEvent('orders-click-start-swap');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var row = this.props.row;


      if (row === undefined) {
        return null;
      }
      var buyCurrency = row.buyCurrency,
          sellCurrency = row.sellCurrency;


      this.getExchangeRate(buyCurrency, sellCurrency);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var row = this.props.row;
      var exchangeRate = this.state.exchangeRate;


      if (row === undefined) {
        return null;
      }

      var id = row.id,
          buyCurrency = row.buyCurrency,
          sellCurrency = row.sellCurrency,
          buyAmount = row.buyAmount,
          sellAmount = row.sellAmount,
          isRequested = row.isRequested,
          ownerPeer = row.owner.peer;

      var mePeer = _swap2.default.services.room.peer;

      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
        ),
        _react2.default.createElement(
          'td',
          null,
          buyCurrency.toUpperCase() + ' ' + buyAmount
        ),
        _react2.default.createElement(
          'td',
          null,
          sellCurrency.toUpperCase() + ' ' + sellAmount
        ),
        _react2.default.createElement(
          'td',
          null,
          exchangeRate
        ),
        _react2.default.createElement(
          'td',
          null,
          mePeer === ownerPeer ? _react2.default.createElement(_RemoveButton2.default, { removeOrder: function removeOrder() {
              return _this2.removeOrder(id);
            } }) : _react2.default.createElement(
            _react.Fragment,
            null,
            isRequested ? _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement(
                'div',
                { style: { color: 'red' } },
                'REQUESTING'
              )
            ) : _react2.default.createElement(
              'a',
              { href: 'https://testnet.swap.online', target: '_blank', rel: 'noreferrer noopener' },
              _react2.default.createElement(_RequestButton2.default, { sendRequest: function sendRequest() {
                  return _this2.sendRequest(id);
                } })
            )
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component), _class.propTypes = {
  row: _propTypes2.default.object
}, _temp2);
exports.default = Row;

/***/ }),
/* 957 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_1TWvrk"};

/***/ }),
/* 958 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coin":"_1wYXYN","icon":"mK0HOH","letter":"_1Nd751"};

/***/ }),
/* 959 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"_3WoNsh"};

/***/ }),
/* 960 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/btc_8edde4.svg";

/***/ }),
/* 961 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/eth_aa4ec5.svg";

/***/ }),
/* 962 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/icx_d6bb3b.svg";

/***/ }),
/* 963 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/waves_de7e9b.svg";

/***/ }),
/* 964 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/xrp_3be55b.svg";

/***/ }),
/* 965 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/nim_e23886.svg";

/***/ }),
/* 966 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RequestButton = __webpack_require__(967);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestButton = (_dec = (0, _reactCssModules2.default)(_RequestButton2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RequestButton, _Component);

  function RequestButton() {
    (0, _classCallCheck3.default)(this, RequestButton);
    return (0, _possibleConstructorReturn3.default)(this, (RequestButton.__proto__ || (0, _getPrototypeOf2.default)(RequestButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RequestButton, [{
    key: 'render',
    value: function render() {
      var sendRequest = this.props.sendRequest;


      return _react2.default.createElement('div', { styleName: 'button', onClick: sendRequest });
    }
  }]);
  return RequestButton;
}(_react.Component)) || _class);
exports.default = RequestButton;

/***/ }),
/* 967 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2R1jZb"};

/***/ }),
/* 968 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(969);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveButton = (_dec = (0, _reactCssModules2.default)(_RemoveButton2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RemoveButton, _Component);

  function RemoveButton() {
    (0, _classCallCheck3.default)(this, RemoveButton);
    return (0, _possibleConstructorReturn3.default)(this, (RemoveButton.__proto__ || (0, _getPrototypeOf2.default)(RemoveButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(RemoveButton, [{
    key: 'render',
    value: function render() {
      var removeOrder = this.props.removeOrder;


      return _react2.default.createElement('div', { styleName: 'button', onClick: removeOrder });
    }
  }]);
  return RemoveButton;
}(_react.Component)) || _class);
exports.default = RemoveButton;

/***/ }),
/* 969 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2dmdAo"};

/***/ }),
/* 970 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"_16xGSI"};

/***/ }),
/* 971 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SearchSwap = __webpack_require__(972);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _CurrencySelect = __webpack_require__(402);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _Flip = __webpack_require__(979);

var _Flip2 = _interopRequireDefault(_Flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSwap = function SearchSwap(_ref) {
  var buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency,
      updateFilter = _ref.updateFilter,
      flipCurrency = _ref.flipCurrency;
  return _react2.default.createElement(
    'div',
    { styleName: 'choice' },
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        'p',
        { styleName: 'text' },
        'You want to buy'
      ),
      _react2.default.createElement(_CurrencySelect2.default, {
        styleName: 'currencySelect',
        selectedValue: buyCurrency,
        onSelect: updateFilter
      })
    ),
    _react2.default.createElement(_Flip2.default, { onClick: flipCurrency }),
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        'p',
        { styleName: 'text' },
        'You want to sell'
      ),
      _react2.default.createElement(_CurrencySelect2.default, {
        styleName: 'currencySelect',
        selectedValue: sellCurrency,
        onSelect: updateFilter
      })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(SearchSwap, _SearchSwap2.default);

/***/ }),
/* 972 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"_3zIboc","choice":"_1TXLKZ","row":"_2lapE0","text":"_11f2Sj"};

/***/ }),
/* 973 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DropDown = __webpack_require__(975);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _toggle = __webpack_require__(976);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = (_dec = (0, _toggle2.default)(), _dec2 = (0, _reactCssModules2.default)(_DropDown2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(DropDown, _Component);

  function DropDown(_ref) {
    var initialValue = _ref.initialValue,
        selectedValue = _ref.selectedValue;
    (0, _classCallCheck3.default)(this, DropDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DropDown.__proto__ || (0, _getPrototypeOf2.default)(DropDown)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      selectedValue: initialValue || selectedValue || 0
    };
    return _this;
  }

  (0, _createClass3.default)(DropDown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          items = _props.items,
          isToggleActive = _props.isToggleActive;


      var dropDownStyleName = (0, _classnames2.default)('dropDown', {
        'active': isToggleActive
      });

      return _react2.default.createElement(
        'div',
        { styleName: dropDownStyleName, className: className },
        _react2.default.createElement(
          'div',
          { styleName: 'selectedItem', onClick: this.toggle },
          _react2.default.createElement('div', { styleName: 'arrow' }),
          this.renderSelectedItem()
        ),
        isToggleActive && _react2.default.createElement(
          'div',
          { styleName: 'select' },
          items.map(function (item) {
            return _react2.default.createElement(
              'div',
              {
                key: item.value,
                styleName: 'option',
                onClick: function onClick() {
                  return _this2.handleOptionClick(item);
                }
              },
              _this2.renderItem(item)
            );
          })
        )
      );
    }
  }]);
  return DropDown;
}(_react.Component), _class2.propTypes = {
  initialValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    title: _propTypes2.default.string.isRequired,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
  })),
  selectedItemRender: _propTypes2.default.func,
  itemRender: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  isToggleActive: _propTypes2.default.bool.isRequired, // @toggle
  toggleOpen: _propTypes2.default.func.isRequired, // @toggle
  toggleClose: _propTypes2.default.func.isRequired // @toggle
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.toggle = function () {
    var _props2 = _this3.props,
        isToggleActive = _props2.isToggleActive,
        toggleOpen = _props2.toggleOpen,
        toggleClose = _props2.toggleClose;


    if (isToggleActive) {
      toggleClose();
    } else {
      toggleOpen();
    }
  };

  this.handleOptionClick = function (item) {
    var _props3 = _this3.props,
        toggleClose = _props3.toggleClose,
        selectedValue = _props3.selectedValue,
        onSelect = _props3.onSelect;

    // if there is no passed `selectedValue` then change it

    if (typeof selectedValue === 'undefined') {
      _this3.setState({
        selectedValue: item.value
      });
    }

    // for example we'd like to change `selectedValue` manually
    if (typeof onSelect === 'function') {
      onSelect(item);
    }

    toggleClose();
  };

  this.renderSelectedItem = function () {
    var _props4 = _this3.props,
        items = _props4.items,
        selectedItemRender = _props4.selectedItemRender;


    var selectedValue = typeof _this3.props.selectedValue !== 'undefined' ? _this3.props.selectedValue : _this3.state.selectedValue;
    var selectedItem = items.find(function (_ref2) {
      var value = _ref2.value;
      return value === selectedValue;
    });

    if (typeof selectedItemRender === 'function') {
      return selectedItemRender(selectedItem);
    }

    return selectedItem.title;
  };

  this.renderItem = function (item) {
    var itemRender = _this3.props.itemRender;


    if (typeof itemRender === 'function') {
      return itemRender(item);
    }

    return item.title;
  };
}, _temp)) || _class) || _class);
exports.default = DropDown;

/***/ }),
/* 975 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropDown":"_3TGsDm","active":"_241k3D","arrow":"_4VDBhE","selectedItem":"_30-6Oj","select":"_2ukQw7","option":"_1fOZbQ"};

/***/ }),
/* 976 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { processClick: false };
  return function (Component) {
    return function (_PureComponent) {
      (0, _inherits3.default)(WrappedComponent, _PureComponent);

      function WrappedComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrappedComponent.__proto__ || (0, _getPrototypeOf2.default)(WrappedComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          isToggleActive: false
        }, _this.toggleClose = function (event) {
          if (options.processClick) {
            event.stopPropagation();

            document.removeEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: false
          });
        }, _this.toggleOpen = function (event) {
          var isToggleActive = _this.state.isToggleActive;


          if (isToggleActive) {
            return;
          }

          if (options.processClick) {
            event.stopPropagation();

            document.addEventListener('click', _this.toggleClose);
          }

          _this.setState({
            isToggleActive: true
          });
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(WrappedComponent, [{
        key: 'render',
        value: function render() {

          return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, this.state, {
            toggleOpen: this.toggleOpen,
            toggleClose: this.toggleClose
          }));
        }
      }]);
      return WrappedComponent;
    }(_react.PureComponent);
  };
};

/***/ }),
/* 977 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Option = __webpack_require__(978);

var _Option2 = _interopRequireDefault(_Option);

var _CurrencyIcon = __webpack_require__(401);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = function Option(_ref) {
  var icon = _ref.icon,
      title = _ref.title;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(_CurrencyIcon2.default, { styleName: 'icon', name: icon }),
    title
  );
};

exports.default = (0, _reactCssModules2.default)(Option, _Option2.default);

/***/ }),
/* 978 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"wo-HER"};

/***/ }),
/* 979 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Flip = __webpack_require__(980);

var _Flip2 = _interopRequireDefault(_Flip);

var _flip = __webpack_require__(981);

var _flip2 = _interopRequireDefault(_flip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Flip(_ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement('img', { src: _flip2.default, alt: '', onClick: onClick, styleName: 'trade-panel__change' });
}

exports.default = (0, _reactCssModules2.default)(Flip, _Flip2.default);

/***/ }),
/* 980 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"trade-panel__change":"_2LOdkU"};

/***/ }),
/* 981 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/flip_d738de.svg";

/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Table = __webpack_require__(122);

var _Table2 = _interopRequireDefault(_Table);

var _RowFeeds = __webpack_require__(983);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyOrders = function (_PureComponent) {
  (0, _inherits3.default)(MyOrders, _PureComponent);

  function MyOrders() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MyOrders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MyOrders.__proto__ || (0, _getPrototypeOf2.default)(MyOrders)).call.apply(_ref, [this].concat(args))), _this), _this.acceptRequest = function (orderId, participantPeer) {
      var order = _swap2.default.services.orders.getByKey(orderId);

      order.acceptRequest(participantPeer);
      _this.props.updateOrders();
    }, _this.declineRequest = function (orderId, participantPeer) {
      var order = _swap2.default.services.orders.getByKey(orderId);

      order.declineRequest(participantPeer);
      _this.props.updateOrders();
    }, _this.removeOrder = function (orderId) {
      _swap2.default.services.orders.remove(orderId);
      _actions2.default.feed.deleteItemToFeed(orderId);

      _this.props.updateOrders();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MyOrders, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var titles = ['EXCHANGE', 'YOU BUY', 'YOU SELL', 'EXCHANGE RATE', 'ACTIONS'];

      var orders = this.props.orders;


      if (orders.length <= 0 || orders.length === undefined) {
        return null;
      }

      console.log(orders);

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          { style: { marginTop: '50px' } },
          'Your orders'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: orders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowFeeds2.default, {
              key: index,
              row: row,
              acceptRequest: _this2.acceptRequest,
              declineRequest: _this2.declineRequest,
              removeOrder: _this2.removeOrder,
              update: _this2.updateOrders
            });
          }
        })
      );
    }
  }]);
  return MyOrders;
}(_react.PureComponent);

exports.default = MyOrders;

/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(50);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RowFeeds = __webpack_require__(984);

var _RowFeeds2 = _interopRequireDefault(_RowFeeds);

var _Coins = __webpack_require__(162);

var _Coins2 = _interopRequireDefault(_Coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowFeeds = function RowFeeds(_ref) {
  var row = _ref.row,
      mePeer = _ref.mePeer,
      acceptRequest = _ref.acceptRequest,
      declineRequest = _ref.declineRequest,
      removeOrder = _ref.removeOrder;


  if (row === 'undefined') {
    return null;
  }

  var requests = row.requests,
      buyAmount = row.buyAmount,
      buyCurrency = row.buyCurrency,
      sellAmount = row.sellAmount,
      sellCurrency = row.sellCurrency,
      id = row.id;


  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
    ),
    _react2.default.createElement(
      'td',
      null,
      buyCurrency.toUpperCase() + ' ' + buyAmount.toNumber().toFixed(3)
    ),
    _react2.default.createElement(
      'td',
      null,
      sellCurrency.toUpperCase() + ' ' + sellAmount.toNumber().toFixed(3)
    ),
    _react2.default.createElement(
      'td',
      null,
      _appConfig2.default.exchangeRates['' + buyCurrency.toLowerCase() + sellCurrency.toLowerCase()]
    ),
    _react2.default.createElement(
      'td',
      null,
      Boolean(requests && requests.length) ? _react2.default.createElement(
        'div',
        { styleName: 'buttons' },
        _react2.default.createElement(
          'div',
          { styleName: 'delete', onClick: function onClick() {
              return declineRequest(id, requests[0].peer);
            } },
          'Decline'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
          _react2.default.createElement(
            'div',
            { styleName: 'accept', onClick: function onClick() {
                return acceptRequest(id, requests[0].peer);
              } },
            'Accept'
          )
        )
      ) : _react2.default.createElement(
        'div',
        { styleName: 'delete', onClick: function onClick() {
            return removeOrder(id);
          } },
        ' Delete order'
      )
    )
  );
};

RowFeeds.propTypes = {
  row: _propTypes2.default.object
};

exports.default = (0, _reactCssModules2.default)(RowFeeds, _RowFeeds2.default, { allowMultiple: true });

// mePeer === ownerPeer && (
//   <div styleName="userTooltip" key={id}>
//     <div styleName="currency">
//       <span><span styleName="coin">{buyCurrency}</span> {buyAmount.toNumber().toFixed(5)}</span>
//       <span styleName="arrow"><img src={ArrowRightSvg} alt="" /></span>
//       <span> <span styleName="coin">{sellCurrency}</span> {sellAmount.toNumber().toFixed(5)} </span>
//     </div>
//     {
//       Boolean(requests && requests.length) ? (
//         <div styleName="buttons">
//           <div styleName="delete" onClick={() => declineRequest(id, requests[0].peer)} >Decline</div>
//           <Link to={`${links.swap}/${sellCurrency}-${buyCurrency}/${id}`}>
//             <div styleName="accept" onClick={() => acceptRequest(id, requests[0].peer)} >Accept</div>
//           </Link>
//         </div>
//       ) : (
//         <div styleName="delete" onClick={() => removeOrder(id)} > Delete order</div>
//       )
//     }
//   </div>
// )

/***/ }),
/* 984 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_3fhX3C","buy":"_2e83r_","accept":"_2ClHjy","sell":"_3kCurQ","delete":"_1RcmYq","currency":"_3St5DH","coin":"_1b2RPo","buttons":"_3L8CPG","arrow":"_1U9SQc"};

/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _PageHeadline = __webpack_require__(216);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(223);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _SaveKeys = __webpack_require__(986);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _Table = __webpack_require__(122);

var _Table2 = _interopRequireDefault(_Table);

var _Confirm = __webpack_require__(991);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _Row = __webpack_require__(993);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Balances = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData,
      eosData = _ref$user.eosData,
      nimData = _ref$user.nimData;
  return {
    items: [ethData, btcData /* eosData  nimData */],
    tokensData: tokensData
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Balances, _Component);

  function Balances() {
    var _ref2;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Balances);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Balances.__proto__ || (0, _getPrototypeOf2.default)(Balances)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      view: 'off'
    }, _this.handleClear =  true ? function () {} : function (event) {
      event.preventDefault();
      window.localStorage.clear();
      window.location.reload();
    }, _this.handleDownload = function () {
      _actions2.default.user.downloadPrivateKeys();
      _this.changeView('on');
    }, _this.handleConfirm = function () {
      _this.changeView('checkKeys');
      localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Balances, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.user.getBalances();
      _actions2.default.analytics.dataEvent('open-page-balances');
      // if (!localStorage.getItem(constants.localStorage.privateKeysSaved)) {
      //   actions.modals.open(constants.modals.PrivateKeys, {})
      // }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var view = this.state.view;
      var _props = this.props,
          items = _props.items,
          tokensData = _props.tokensData;

      var titles = ['Coin', 'Name', 'Balance', 'Address', ''];

      (0, _keys2.default)(tokensData).map(function (k) {
        return items.push(tokensData[k]);
      });

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
          _PageHeadline2.default,
          null,
          _react2.default.createElement(
            _SubTitle2.default,
            null,
            'Balances'
          ),
          view === 'off' && _react2.default.createElement(_SaveKeys2.default, { isDownload: this.handleDownload, isChange: function isChange() {
              return _this2.changeView('on');
            } })
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: items,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
          }
        }),
        _react2.default.createElement(_Confirm2.default, {
          title: 'Are you sure ?',
          isConfirm: function isConfirm() {
            return _this2.handleConfirm();
          },
          isReject: function isReject() {
            return _this2.changeView('off');
          },
          animation: view === 'on'
        }),
        false && _react2.default.createElement(
          'a',
          { href: '', onClick: this.handleClear },
          'Exit (clear localstorage)'
        )
      );
    }
  }]);
  return Balances;
}(_react.Component)) || _class);
exports.default = Balances;

/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SaveKeys = __webpack_require__(987);

var _SaveKeys2 = _interopRequireDefault(_SaveKeys);

var _Field = __webpack_require__(988);

var _Field2 = _interopRequireDefault(_Field);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveKeys = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData;
  return {
    btcData: btcData,
    ethData: ethData
  };
}), _dec2 = (0, _reactCssModules2.default)(_SaveKeys2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(SaveKeys, _Component);

  function SaveKeys() {
    (0, _classCallCheck3.default)(this, SaveKeys);
    return (0, _possibleConstructorReturn3.default)(this, (SaveKeys.__proto__ || (0, _getPrototypeOf2.default)(SaveKeys)).apply(this, arguments));
  }

  (0, _createClass3.default)(SaveKeys, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ethData = _props.ethData,
          btcData = _props.btcData,
          isChange = _props.isChange,
          isDownload = _props.isDownload;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { styleName: 'title' },
          'These are your private keys. Download the keys by  clicking on ',
          _react2.default.createElement('br', null),
          'the button or take a screenshot of this page, then confirm it and click here. ',
          _react2.default.createElement('br', null),
          isChange && _react2.default.createElement(
            'a',
            { href: '', onClick: function onClick(event) {
                event.preventDefault();isChange();
              } },
            'I saved the keys in a safe place'
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'row' },
          _react2.default.createElement(
            _Button2.default,
            { brand: true, onClick: isDownload },
            'Download'
          ),
          _react2.default.createElement(
            'div',
            { style: { marginLeft: '15px', marginTop: '10px' } },
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey.toString()
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey.toString()
            })
          )
        )
      );
    }
  }]);
  return SaveKeys;
}(_react.Component)) || _class) || _class);
exports.default = SaveKeys;

/***/ }),
/* 987 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_34whwW","row":"_1iYant"};

/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(989);

var _Field2 = _interopRequireDefault(_Field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field = function Field(_ref) {
  var privateKey = _ref.privateKey,
      label = _ref.label;
  return _react2.default.createElement(
    'div',
    { styleName: 'row' },
    _react2.default.createElement(
      'strong',
      null,
      label,
      ':  '
    ),
    ' ',
    privateKey
  );
};

exports.default = (0, _reactCssModules2.default)(Field, _Field2.default);

/***/ }),
/* 989 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_37f8Rw"};

/***/ }),
/* 990 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"qJheS4","fullWidth":"_2Gzkvz","brand":"_3zY6WO","green":"_s-GvI","white":"ewAS27","gray":"_9dfBig","disabled":"_1WzQpi"};

/***/ }),
/* 991 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Confirm = __webpack_require__(992);

var _Confirm2 = _interopRequireDefault(_Confirm);

var _SubTitle = __webpack_require__(223);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var isConfirm = _ref.isConfirm,
      isReject = _ref.isReject,
      title = _ref.title,
      animation = _ref.animation;
  return _react2.default.createElement(
    'div',
    { styleName: animation ? 'confirm animation' : 'confirm' },
    _react2.default.createElement(
      _SubTitle2.default,
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isConfirm },
        'Yes'
      ),
      _react2.default.createElement(
        _Button2.default,
        { brand: true, onClick: isReject },
        'No'
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Confirm, _Confirm2.default, { allowMultiple: true });

/***/ }),
/* 992 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"confirm":"_3hz-0j","animation":"_2QfucO","open":"_1BY5jO","row":"_3sMVTN"};

/***/ }),
/* 993 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(994);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(237);

var _Coin2 = _interopRequireDefault(_Coin);

var _WithdrawButton = __webpack_require__(995);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

var _ReloadButton = __webpack_require__(997);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _LinkAcount = __webpack_require__(1002);

var _LinkAcount2 = _interopRequireDefault(_LinkAcount);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Row.__proto__ || (0, _getPrototypeOf2.default)(Row)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isBalanceFetching: false,
      viewText: false
    }, _this.handleReloadBalance = function () {
      var isBalanceFetching = _this.state.isBalanceFetching;


      if (isBalanceFetching) {
        return null;
      }

      _this.setState({
        isBalanceFetching: true
      });

      var _this$props = _this.props,
          currency = _this$props.currency,
          contractAddress = _this$props.contractAddress,
          decimals = _this$props.decimals;

      var action = void 0;

      currency = currency.toLowerCase();

      if (currency === 'eth') {
        action = _actions2.default.ethereum.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-eth');
      } else if (currency === 'btc') {
        action = _actions2.default.bitcoin.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-btc');
      } else if (currency === 'eos') {
        action = _actions2.default.eos.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-eos');
      } else {
        action = _actions2.default.token.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-token');
      }

      action(contractAddress, currency, decimals).then(function () {
        _this.setState({
          isBalanceFetching: false
        });
      }, function () {
        _this.setState({
          isBalanceFetching: false
        });
      });
    }, _this.handleCopiedAddress = function () {
      _this.setState({ viewText: true });
      var el = document.createElement('textarea');
      el.value = _this.textAddress.innerText;
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setTimeout(function () {
        _this.setState({ viewText: false });
      }, 800);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Row, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          isBalanceFetching = _state.isBalanceFetching,
          viewText = _state.viewText;
      var _props = this.props,
          currency = _props.currency,
          balance = _props.balance,
          address = _props.address,
          contractAddress = _props.contractAddress,
          decimals = _props.decimals;


      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(_Coin2.default, { name: currency, size: 40 })
        ),
        _react2.default.createElement(
          'td',
          null,
          currency.toUpperCase()
        ),
        _react2.default.createElement(
          'td',
          { style: { minWidth: '80px' } },
          isBalanceFetching ? _react2.default.createElement(_InlineLoader2.default, null) : balance
        ),
        _react2.default.createElement(
          'td',
          { ref: function ref(td) {
              return _this2.textAddress = td;
            } },
          _react2.default.createElement(
            _LinkAcount2.default,
            { type: currency, address: address },
            address
          )
        ),
        _react2.default.createElement(
          'td',
          { style: { position: 'relative' } },
          _react2.default.createElement(
            'button',
            { styleName: 'button', onClick: this.handleCopiedAddress },
            'Copy'
          ),
          _react2.default.createElement(_ReloadButton2.default, { styleName: 'reloadButton', onClick: this.handleReloadBalance }),
          _react2.default.createElement(_WithdrawButton2.default, { data: { currency: currency, balance: balance, address: address, contractAddress: contractAddress, decimals: decimals } }),
          viewText && _react2.default.createElement(
            'p',
            { styleName: 'copied' },
            'Address copied to clipboard'
          )
        )
      );
    }
  }]);
  return Row;
}(_react.Component)) || _class);
exports.default = Row;

/***/ }),
/* 994 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"VULoRE","copied":"_2Yltkm","button":"_2a2uAb"};

/***/ }),
/* 995 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(996);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawButton = function WithdrawButton(_ref) {
  var data = _ref.data;
  return _react2.default.createElement(
    'div',
    {
      styleName: 'withdrawButton',
      onClick: function onClick() {
        _actions2.default.analytics.dataEvent('balances-withdraw-' + data.currency.toLowerCase());
        _actions2.default.modals.open(_helpers.constants.modals.Withdraw, data);
      }
    },
    'Withdraw'
  );
};

exports.default = (0, _reactCssModules2.default)(WithdrawButton, _WithdrawButton2.default);

/***/ }),
/* 996 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2yf2Si"};

/***/ }),
/* 997 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(998);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(999);

var _ReloadIcon2 = _interopRequireDefault(_ReloadIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadButton = function ReloadButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'reloadButton', className: className, onClick: onClick },
    _react2.default.createElement(_ReloadIcon2.default, { styleName: 'icon' })
  );
};

exports.default = (0, _reactCssModules2.default)(ReloadButton, _ReloadButton2.default);

/***/ }),
/* 998 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2NgnzZ","icon":"tps3tZ"};

/***/ }),
/* 999 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(1000);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),
/* 1000 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/reload_d8d88b.svg";

/***/ }),
/* 1001 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ellipsis":"_2Zo-qQ","ellipsis1":"_2_LbWQ","ellipsis2":"_2fJ8Hd","ellipsis3":"_2Nlot5"};

/***/ }),
/* 1002 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(403);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkAccount = function LinkAccount(_ref) {
  var type = _ref.type,
      children = _ref.children,
      address = _ref.address;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/address/' + address },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/address/' + address },
      children
    ),
    type.toLowerCase() === 'swap' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/token/' + _appConfig2.default.tokens.swap + '?a=' + address },
      children
    ),
    type.toLowerCase() === 'noxon' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/token/' + _appConfig2.default.tokens.noxon + '?a=' + address },
      children
    ),
    type.toLowerCase() === 'eos' && _react2.default.createElement(
      _Href2.default,
      { tab: '' + _appConfig2.default.link.eos },
      children
    )
  );
};

exports.default = LinkAccount;

/***/ }),
/* 1003 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"link":"_1bLBL3"};

/***/ }),
/* 1004 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _PageHeadline = __webpack_require__(216);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Table = __webpack_require__(122);

var _Table2 = _interopRequireDefault(_Table);

var _Filter = __webpack_require__(1005);

var _Filter2 = _interopRequireDefault(_Filter);

var _Row = __webpack_require__(1007);

var _Row2 = _interopRequireDefault(_Row);

var _SwapsHistory = __webpack_require__(1010);

var _SwapsHistory2 = _interopRequireDefault(_SwapsHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterHistory = function filterHistory(items, filter) {
  if (filter === 'SENT') {
    return items.filter(function (_ref) {
      var direction = _ref.direction;
      return direction === 'out';
    });
  }

  if (filter === 'RECEIVED') {
    return items.filter(function (_ref2) {
      var direction = _ref2.direction;
      return direction === 'in';
    });
  }

  return items;
};

var History = (_dec = (0, _redaction.connect)(function (_ref3) {
  var _ref3$history = _ref3.history,
      transactions = _ref3$history.transactions,
      filter = _ref3$history.filter;
  return {
    items: filterHistory(transactions, filter)
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(History, _Component);

  function History() {
    var _ref4;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, History);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = History.__proto__ || (0, _getPrototypeOf2.default)(History)).call.apply(_ref4, [this].concat(args))), _this), _this.state = {
      orders: _swap2.default.services.orders.items
    }, _this.updateOrders = function () {
      _this.setState({
        orders: _swap2.default.services.orders.items
      });

      var orders = _this.state.orders;


      if (orders.length !== 0) {
        _actions2.default.feed.getFeedDataFromOrder(orders);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(History, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _actions2.default.analytics.dataEvent('open-page-history');
      _actions2.default.user.setTransactions();
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _swap2.default.services.orders.on('new orders', this.updateOrders).on('new order', this.updateOrders).on('order update', this.updateOrders).on('remove order', this.updateOrders).on('new order request', this.updateOrders);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.orders.off('new orders', this.updateOrders).off('new order', this.updateOrders).off('order update', this.updateOrders).off('remove order', this.updateOrders).off('new order request', this.updateOrders);
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.items;
      var orders = this.state.orders;

      var titles = ['Coin', 'Status', 'Statement', 'Amount'];
      var mePeer = _swap2.default.services.room.peer;
      var historyOrders = orders.filter(function (order) {
        return mePeer === order.owner.peer;
      });

      return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(_PageHeadline2.default, { subTitle: 'History' }),
        _react2.default.createElement(_SwapsHistory2.default, { orders: historyOrders }),
        _react2.default.createElement(
          'h3',
          null,
          'All transactions'
        ),
        _react2.default.createElement(_Filter2.default, null),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: items,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
          }
        })
      );
    }
  }]);
  return History;
}(_react.Component)) || _class);
exports.default = History;

/***/ }),
/* 1005 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(32);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(404);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterLink = __webpack_require__(1006);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = (_dec = (0, _redaction.connect)({
  'activeFilter': 'history.filter'
}), _dec2 = (0, _reactCssModules2.default)(_Filter2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Filter, _Component);

  function Filter() {
    (0, _classCallCheck3.default)(this, Filter);
    return (0, _possibleConstructorReturn3.default)(this, (Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).apply(this, arguments));
  }

  (0, _createClass3.default)(Filter, [{
    key: 'render',
    value: function render() {
      var activeFilter = this.props.activeFilter;

      return _react2.default.createElement(
        'div',
        { styleName: 'history-filter' },
        _react2.default.createElement(_FilterLink2.default, {
          name: 'All',
          onClick: function onClick() {
            _actions2.default.filter.setFilter('ALL');_actions2.default.analytics.dataEvent('history-click-all');
          },
          active: activeFilter === 'ALL'
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Sent',
          onClick: function onClick() {
            _actions2.default.filter.setFilter('SENT');_actions2.default.analytics.dataEvent('history-click-sent');
          },
          active: activeFilter === 'SENT'
        }),
        _react2.default.createElement(_FilterLink2.default, {
          name: 'Received',
          onClick: function onClick() {
            _actions2.default.filter.setFilter('RECEIVED');_actions2.default.analytics.dataEvent('history-click-received');
          },
          active: activeFilter === 'RECEIVED'
        })
      );
    }
  }]);
  return Filter;
}(_react.Component)) || _class) || _class);
exports.default = Filter;


Filter.propTypes = {
  activeFilter: _propTypes2.default.string
};

/***/ }),
/* 1006 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(404);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FilterLink(_ref) {
  var name = _ref.name,
      active = _ref.active,
      onClick = _ref.onClick;


  function click(event) {
    event.preventDefault();
    onClick();
  }

  return _react2.default.createElement(
    'a',
    {
      href: '',
      styleName: active ? 'history-filter__item  history-filter__item_active' : 'history-filter__item',
      onClick: click
    },
    name
  );
}

FilterLink.propTypes = {
  name: _propTypes2.default.string.isRequired,
  active: _propTypes2.default.bool.isRequired
};

exports.default = (0, _reactCssModules2.default)(FilterLink, _Filter2.default, { allowMultiple: true });

/***/ }),
/* 1007 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(1008);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(237);

var _Coin2 = _interopRequireDefault(_Coin);

var _LinkTransaction = __webpack_require__(1009);

var _LinkTransaction2 = _interopRequireDefault(_LinkTransaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var type = _ref.type,
      date = _ref.date,
      direction = _ref.direction,
      hash = _ref.hash,
      value = _ref.value,
      confirmations = _ref.confirmations;

  var statusStyleName = (0, _classnames2.default)('status', {
    'in': direction === 'in',
    'out': direction !== 'in'
  });

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coin2.default, { name: type, size: 40 })
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: statusStyleName },
        direction === 'in' ? 'Received ' : 'Sent '
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'date' },
        (0, _moment2.default)(date).format('MM/DD/YYYY hh:mm A')
      ),
      _react2.default.createElement(
        _LinkTransaction2.default,
        { type: type, styleName: 'address', hash: hash },
        hash
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: confirmations === 'Confirmed' ? 'confirm cell' : 'unconfirmed cell' },
        confirmations
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'div',
        { styleName: 'amount' },
        value
      )
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Row, _Row2.default, { allowMultiple: true });

/***/ }),
/* 1008 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"status":"B1fidj","in":"_2WudR1","out":"_3MGYaP","cell":"_3iy6qi","confirm":"_38S3z2","unconfirmed":"_2NV1PP","date":"_3qRLEP","address":"qb31A4","amount":"z9ksse"};

/***/ }),
/* 1009 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _Href = __webpack_require__(403);

var _Href2 = _interopRequireDefault(_Href);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LinkTransaction = function LinkTransaction(_ref) {
  var type = _ref.type,
      children = _ref.children,
      hash = _ref.hash;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    type.toLowerCase() === 'eth' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'btc' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.bitpay + '/tx/' + hash },
      children
    ),
    type.toLowerCase() === 'noxon' && _react2.default.createElement(
      _Href2.default,
      { tab: _appConfig2.default.link.etherscan + '/tx/' + hash },
      children
    )
  );
};

exports.default = LinkTransaction;

/***/ }),
/* 1010 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(122);

var _Table2 = _interopRequireDefault(_Table);

var _RowHistory = __webpack_require__(1011);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapsHistory = function (_PureComponent) {
  (0, _inherits3.default)(SwapsHistory, _PureComponent);

  function SwapsHistory() {
    (0, _classCallCheck3.default)(this, SwapsHistory);
    return (0, _possibleConstructorReturn3.default)(this, (SwapsHistory.__proto__ || (0, _getPrototypeOf2.default)(SwapsHistory)).apply(this, arguments));
  }

  (0, _createClass3.default)(SwapsHistory, [{
    key: 'render',
    value: function render() {
      var orders = this.props.orders;

      var titles = ['Exchange', 'You buy', 'You sell', 'Exchange rate', 'Status', 'Link'];

      if (orders.length <= 0 || orders.length === undefined) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { style: { marginBottom: '50px' } },
        _react2.default.createElement(
          'h3',
          null,
          'Swaps history'
        ),
        _react2.default.createElement(_Table2.default, {
          titles: titles,
          rows: orders,
          rowRender: function rowRender(row, index) {
            return _react2.default.createElement(_RowHistory2.default, {
              key: index,
              row: row
            });
          }
        })
      );
    }
  }]);
  return SwapsHistory;
}(_react.PureComponent);

exports.default = SwapsHistory;

/***/ }),
/* 1011 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(50);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RowHistory = __webpack_require__(1012);

var _RowHistory2 = _interopRequireDefault(_RowHistory);

var _Coins = __webpack_require__(162);

var _Coins2 = _interopRequireDefault(_Coins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowHistory = function RowHistory(_ref) {
  var row = _ref.row;


  if (row === 'undefined') {
    return null;
  }

  var buyAmount = row.buyAmount,
      buyCurrency = row.buyCurrency,
      sellAmount = row.sellAmount,
      isProcessing = row.isProcessing,
      sellCurrency = row.sellCurrency,
      isMy = row.isMy,
      id = row.id;


  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_Coins2.default, { names: [buyCurrency, sellCurrency] })
    ),
    _react2.default.createElement(
      'td',
      null,
      buyCurrency.toUpperCase() + ' ' + buyAmount.toNumber().toFixed(3)
    ),
    _react2.default.createElement(
      'td',
      null,
      sellCurrency.toUpperCase() + ' ' + sellAmount.toNumber().toFixed(3)
    ),
    _react2.default.createElement(
      'td',
      null,
      _appConfig2.default.exchangeRates['' + buyCurrency.toLowerCase() + sellCurrency.toLowerCase()]
    ),
    _react2.default.createElement(
      'td',
      null,
      isProcessing ? 'Completed' : 'Uncompleted'
    ),
    _react2.default.createElement(
      'td',
      null,
      isMy ? _react2.default.createElement(
        'p',
        null,
        'Link to the swap'
      ) : _react2.default.createElement(
        'p',
        null,
        'Link to the swap'
      )
    )
  );
};

RowHistory.propTypes = {
  row: _propTypes2.default.object
};

exports.default = (0, _reactCssModules2.default)(RowHistory, _RowHistory2.default, { allowMultiple: true });

/***/ }),
/* 1012 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"_2Z_jhL","delete":"eDuZ67","currency":"_2vYSxF","coin":"_17Dby6","buy":"_35V0oz","sell":"_3BVZDc","buttons":"Plxv_t","arrow":"poSVpG"};

/***/ }),
/* 1013 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(
    "div",
    { className: "container" },
    _react2.default.createElement(
      "h2",
      { className: "description__sub-title" },
      "Page not found!"
    )
  );
}

/***/ }),
/* 1014 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(123);

var _swap2 = _interopRequireDefault(_swap);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _BtcToEth = __webpack_require__(1044);

var _BtcToEth2 = _interopRequireDefault(_BtcToEth);

var _EthToBtc = __webpack_require__(1045);

var _EthToBtc2 = _interopRequireDefault(_EthToBtc);

var _EthTokenToBtc = __webpack_require__(1046);

var _EthTokenToBtc2 = _interopRequireDefault(_EthTokenToBtc);

var _BtcToEthToken = __webpack_require__(1047);

var _BtcToEthToken2 = _interopRequireDefault(_BtcToEthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swapComponents = {
  'BTC2ETH': _BtcToEth2.default,
  'ETH2BTC': _EthToBtc2.default,
  'NOXON2BTC': _EthTokenToBtc2.default,
  'BTC2NOXON': _BtcToEthToken2.default,
  'SWAP2BTC': _EthTokenToBtc2.default,
  'BTC2SWAP': _BtcToEthToken2.default
};

var SwapComponent = function (_PureComponent) {
  (0, _inherits3.default)(SwapComponent, _PureComponent);

  function SwapComponent() {
    (0, _classCallCheck3.default)(this, SwapComponent);
    return (0, _possibleConstructorReturn3.default)(this, (SwapComponent.__proto__ || (0, _getPrototypeOf2.default)(SwapComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(SwapComponent, [{
    key: 'render',
    value: function render() {
      var orderId = this.props.match.params.orderId;


      if (!orderId) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        );
      }

      var swap = new _swap2.default(orderId);
      var SwapComponent = swapComponents[swap.flow._flowName.toUpperCase()];

      return _react2.default.createElement(
        'div',
        { style: { paddingLeft: '30px', paddingTop: '30px' } },
        _react2.default.createElement(SwapComponent, { swap: swap })
      );
    }
  }]);
  return SwapComponent;
}(_react.PureComponent);

exports.default = SwapComponent;

/***/ }),
/* 1015 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(239);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _bignumber = __webpack_require__(405);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _Room = __webpack_require__(406);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swap = function () {
  function Swap(id) {
    (0, _classCallCheck3.default)(this, Swap);

    this.id = null;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    var data = _swap2.default.env.storage.getItem('swap.' + id);

    if (!data) {
      var order = _swap2.default.services.orders.getByKey(id);

      data = this._getDataFromOrder(order);
    }

    this.update(data);

    this.events = new _swap.Events();

    this.room = new _Room2.default({
      participantPeer: this.participant.peer
    });

    // NOXON2BTC
    // BTC2NOXON
    var Flow = _swap2.default.flows[data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase()];

    if (!Flow) {
      throw new Error('Flow with name "' + data.sellCurrency.toUpperCase() + '2' + data.buyCurrency.toUpperCase() + '" not found in SwapApp.flows');
    }

    this.flow = new Flow(this);
  }

  (0, _createClass3.default)(Swap, [{
    key: '_getDataFromOrder',
    value: function _getDataFromOrder(order) {
      // TODO add check order format (typeforce)

      var data = _swap.util.pullProps(order, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');

      var isMy = data.isMy,
          buyCurrency = data.buyCurrency,
          sellCurrency = data.sellCurrency,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          rest = (0, _objectWithoutProperties3.default)(data, ['isMy', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount']);


      var swap = (0, _extends3.default)({}, rest, {
        isMy: isMy,
        buyCurrency: isMy ? buyCurrency : sellCurrency,
        sellCurrency: isMy ? sellCurrency : buyCurrency,
        buyAmount: isMy ? buyAmount : sellAmount,
        sellAmount: isMy ? sellAmount : buyAmount
      });

      if (!swap.participant && !isMy) {
        swap.participant = swap.owner;
      }

      return swap;
    }
  }, {
    key: '_pullRequiredData',
    value: function _pullRequiredData(data) {
      return _swap.util.pullProps(data, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      var data = this._pullRequiredData(this);

      _swap2.default.env.storage.setItem('swap.' + this.id, data);
    }
  }, {
    key: 'update',
    value: function update(values) {
      var _this = this;

      (0, _keys2.default)(values).forEach(function (key) {
        if (key === 'buyAmount' || key === 'sellAmount') {
          _this[key] = new _bignumber2.default(String(values[key]));
        } else {
          _this[key] = values[key];
        }
      });
      this._saveState();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this.events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this.events.unsubscribe(eventName, handler);
    }
  }]);
  return Swap;
}();

exports.default = Swap;

/***/ }),
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = __webpack_require__(422);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap2 = __webpack_require__(12);

var _swap3 = _interopRequireDefault(_swap2);

var _Room = __webpack_require__(406);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flow = function () {
  function Flow(swap) {
    (0, _classCallCheck3.default)(this, Flow);

    this.swap = swap;
    this.steps = [];

    this.state = {
      step: 0,
      isWaitingForOwner: false
    };
  }

  (0, _createClass3.default)(Flow, [{
    key: '_persistState',
    value: function _persistState() {
      var _this = this;

      var state = _swap3.default.env.storage.getItem('flow.' + this.swap.id);

      if (state) {
        this.state = (0, _extends3.default)({}, this.state, state);
      }

      this.swap.room.on('persist state', function (values) {
        _this.setState(values, true);
      });
    }
  }, {
    key: '_persistSteps',
    value: function _persistSteps() {
      var _this2 = this;

      this.steps = [].concat((0, _toConsumableArray3.default)(this._getInitialSteps()), (0, _toConsumableArray3.default)(this._getSteps()));

      // wait events placed
      setTimeout(function () {
        _this2.goStep(_this2.state.step);
      }, 0);
    }
  }, {
    key: '_getInitialSteps',
    value: function _getInitialSteps() {
      var _this3 = this;

      var flow = this;

      return [

      // Check if order exists

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _swap, orderId, owner;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _swap = _this3.swap, orderId = _swap.id, owner = _swap.owner;

                // TODO how can we don't know who is participant???
                // TODO if there is no participant in `order` then no need to create Flow...
                // if there is no order it orderCollection that means owner is offline, so `swap.owner` will be undefined

                if (!owner) {
                  flow.setState({
                    isWaitingForOwner: true
                  });

                  _swap3.default.services.room.on('new orders', function (_ref2) {
                    var orders = _ref2.orders;

                    var order = orders.find(function (_ref3) {
                      var id = _ref3.id;
                      return id === orderId;
                    });

                    if (order) {
                      this.unsubscribe();

                      var _order = orders.getByKey(orderId);

                      // TODO move this to Swap.js
                      flow.swap.room = new _Room2.default({
                        participantPeer: _order.owner.peer
                      });
                      flow.swap.update((0, _extends3.default)({}, _order, {
                        participant: _order.owner
                      }));
                      flow.finishStep({
                        isWaitingForOwner: false
                      });
                    }
                  });
                } else {
                  flow.finishStep();
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))];
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      return [];
    }
  }, {
    key: '_saveState',
    value: function _saveState() {
      _swap3.default.env.storage.setItem('flow.' + this.swap.id, this.state);
    }
  }, {
    key: 'finishStep',
    value: function finishStep(data) {
      this.goNextStep(data);
    }
  }, {
    key: 'goNextStep',
    value: function goNextStep(data) {
      var step = this.state.step;

      var newStep = step + 1;

      this.swap.events.dispatch('leave step', step);

      this.setState((0, _extends3.default)({
        step: newStep
      }, data || {}), true);

      this.goStep(newStep);
    }
  }, {
    key: 'goStep',
    value: function goStep(index) {
      this.swap.events.dispatch('enter step', index);
      this.steps[index]();
    }
  }, {
    key: 'setState',
    value: function setState(values, save) {
      this.state = (0, _extends3.default)({}, this.state, values);

      if (save) {
        this._saveState();
      }

      this.swap.events.dispatch('state update', this.state, values);
    }
  }]);
  return Flow;
}();

exports.default = Flow;

/***/ }),
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEth = function (_Component) {
  (0, _inherits3.default)(BtcToEth, _Component);

  function BtcToEth(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEth);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEth.__proto__ || (0, _getPrototypeOf2.default)(BtcToEth)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var secret = _this.state.secret;


      _this.swap.flow.submitSecret(secret);
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.getRefundTxHex = function () {
      var _this$state = _this.state,
          refundTxHex = _this$state.refundTxHex,
          flow = _this$state.flow,
          secret = _this$state.secret;


      if (refundTxHex) {
        return refundTxHex;
      } else if (flow.btcScriptValues) {
        _this.swap.flow.btcSwap.getRefundHexTransaction({
          scriptValues: flow.btcScriptValues,
          secret: secret
        }).then(function (txHex) {
          _this.setState({
            refundTxHex: txHex
          });
        });
      }
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078',
      refundTxHex: null
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEth, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow;

      var refundTxHex = this.getRefundTxHex();
      console.log('FLOW', flow);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.tryRefund },
          'TRY REFUND'
        ),
        flow.refundTransactionHash && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.blocktrail.com/tBTC/tx/' + flow.refundTransactionHash,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.refundTransactionHash
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Waiting participant confirm this swap'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: 'https://www.blocktrail.com/tBTC/tx/' + flow.btcScriptCreatingTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptCreatingTransactionHash
                )
              )
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          refundTxHex && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Refund hex transaction:'
            ),
            refundTxHex
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://rinkeby.etherscan.io/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          )
        )
      );
    }
  }]);
  return BtcToEth;
}(_react.Component);

exports.default = BtcToEth;

/***/ }),
/* 1045 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.signSwap = function () {
      _this.swap.flow.sign();
    };

    _this.confirmBTCScriptChecked = function () {
      _this.swap.flow.verifyBtcScript();
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.tryRefund = function () {
      _this.swap.flow.tryRefund();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state
    };
    return _this;
  }

  (0, _createClass3.default)(EthToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var flow = this.state.flow;

      console.log('FLOW', flow);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { onClick: this.tryRefund },
          'TRY REFUND'
        ),
        flow.refundTransactionHash && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://rinkeby.etherscan.io/tx/' + flow.refundTransactionHash,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.refundTransactionHash
            )
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toNumber(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toNumber(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          'h3',
          null,
          '1. Please confirm your participation to begin the deal'
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          !flow.isSignFetching && !flow.isMeSigned && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { onClick: this.signSwap },
              'Confirm'
            )
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: 'https://rinkeby.etherscan.io/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Script address:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: 'https://www.blocktrail.com/tBTC/address/' + flow.btcScriptValues.address,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.btcScriptValues.address
                )
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'pre',
              null,
              _react2.default.createElement(
                'code',
                { className: 'code' },
                '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
              )
            ),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                'button',
                { onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toNumber()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            'h3',
            null,
            '4. Creating Ethereum Contract. Please wait, it will take a while'
          ),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://rinkeby.etherscan.io/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.ethSwapCreationTransactionHash
              )
            )
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://www.blocktrail.com/tBTC/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          )
        )
      );
    }
  }]);
  return EthToBtc;
}(_react.Component);

exports.default = EthToBtc;

/***/ }),
/* 1046 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(423);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthToBtc.__proto__ || (0, _getPrototypeOf2.default)(EthToBtc)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.signSwap = function () {
      _this.swap.flow.sign();
    };

    _this.confirmBTCScriptChecked = function () {
      _this.swap.flow.verifyBtcScript();
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state
    };
    return _this;
  }

  (0, _createClass3.default)(EthToBtc, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var flow = this.state.flow;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toString(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toString(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          'h3',
          null,
          '1. Please confirm your participation to begin the deal'
        ),
        flow.step === 1 && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            null,
            'Confirmation of the transaction is necessary for crediting the reputation. If a user does not bring the deal to the end he gets a negative reputation.'
          ),
          !flow.isSignFetching && !flow.isMeSigned && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { onClick: this.signSwap },
              'Confirm'
            )
          ),
          (flow.isSignFetching || flow.signTransactionHash) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h4',
              null,
              'Please wait. Confirmation processing'
            ),
            flow.signTransactionHash && _react2.default.createElement(
              'div',
              null,
              'Transaction:',
              _react2.default.createElement(
                'strong',
                null,
                _react2.default.createElement(
                  'a',
                  {
                    href: _appConfig2.default.link.etherscan + '/tx/' + flow.signTransactionHash,
                    target: '_blank',
                    rel: 'noopener noreferrer'
                  },
                  flow.signTransactionHash
                )
              )
            ),
            flow.isSignFetching && _react2.default.createElement(_InlineLoader2.default, null)
          )
        ),
        flow.isMeSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Waiting BTC Owner creates Secret Key, creates BTC Script and charges it'
          ),
          flow.step === 2 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.secretHash && flow.btcScriptValues && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Bitcoin Script created and charged. Please check the information below'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'pre',
              null,
              _react2.default.createElement(
                'code',
                { className: 'code' },
                '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.recipientPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.ownerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
              )
            ),
            flow.step === 3 && _react2.default.createElement(
              _react.Fragment,
              null,
              _react2.default.createElement('br', null),
              _react2.default.createElement(
                _TimerButton2.default,
                { onClick: this.confirmBTCScriptChecked },
                'Everything is OK. Continue'
              )
            )
          ),
          flow.step === 4 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please fund the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toString()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { type: 'button', onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 4 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            'h3',
            null,
            '4. Creating Ethereum Contract. Please wait, it will take a while'
          ),
          flow.step === 5 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.ethSwapCreationTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapCreationTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.hash
              )
            )
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '5. Waiting BTC Owner adds Secret Key to ETH Contact'
            ),
            !flow.isEthWithdrawn && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
          ),
          flow.btcSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.btcSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 7 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isBtcWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '7. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          )
        )
      );
    }
  }]);
  return EthToBtc;
}(_react.Component);

exports.default = EthToBtc;

/***/ }),
/* 1047 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _InlineLoader = __webpack_require__(97);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _TimerButton = __webpack_require__(423);

var _TimerButton2 = _interopRequireDefault(_TimerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEthToken = function (_Component) {
  (0, _inherits3.default)(BtcToEthToken, _Component);

  function BtcToEthToken(_ref) {
    var swap = _ref.swap;
    (0, _classCallCheck3.default)(this, BtcToEthToken);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcToEthToken.__proto__ || (0, _getPrototypeOf2.default)(BtcToEthToken)).call(this));

    _this.handleFlowStateUpdate = function (values) {
      _this.setState({
        flow: values
      });
    };

    _this.submitSecret = function () {
      var secret = _this.state.secret;


      _this.swap.flow.submitSecret(secret);
    };

    _this.updateBalance = function () {
      _this.swap.flow.syncBalance();
    };

    _this.swap = swap;

    _this.state = {
      flow: _this.swap.flow.state,
      secret: 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078'
    };
    return _this;
  }

  (0, _createClass3.default)(BtcToEthToken, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.swap.on('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swap.off('state update', this.handleFlowStateUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          secret = _state.secret,
          flow = _state.flow;


      return _react2.default.createElement(
        'div',
        null,
        this.swap.id && _react2.default.createElement(
          'strong',
          null,
          this.swap.sellAmount.toString(),
          ' ',
          this.swap.sellCurrency,
          ' \u27F6 ',
          this.swap.buyAmount.toString(),
          ' ',
          this.swap.buyCurrency
        ),
        !this.swap.id && (this.swap.isMy ? _react2.default.createElement(
          'h3',
          null,
          'This order doesn\'t have a buyer'
        ) : _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'The order creator is offline. Waiting for him..'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        )),
        flow.isWaitingForOwner && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            'Waiting for other user when he connect to the order'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '1. Waiting participant confirm this swap'
          ),
          _react2.default.createElement(_InlineLoader2.default, null)
        ),
        flow.isParticipantSigned && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '2. Create a secret key'
          ),
          !flow.secretHash ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: 'Secret Key', defaultValue: secret }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { onClick: this.submitSecret },
              'Confirm'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Save the secret key! Otherwise there will be a chance you loose your money!'
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Key: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secret
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'Secret Hash: ',
              _react2.default.createElement(
                'strong',
                null,
                flow.secretHash
              )
            )
          ),
          flow.step === 3 && !flow.isBalanceEnough && !flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              'Not enough money for this swap. Please charge the balance'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                'Your balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  flow.balance
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement(
                'div',
                null,
                'Required balance: ',
                _react2.default.createElement(
                  'strong',
                  null,
                  this.swap.sellAmount.toString()
                ),
                ' ',
                this.swap.sellCurrency
              ),
              _react2.default.createElement('hr', null),
              _react2.default.createElement(
                'span',
                null,
                flow.address
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _TimerButton2.default,
              { type: 'button', onClick: this.updateBalance },
              'Continue'
            )
          ),
          flow.step === 3 && flow.isBalanceFetching && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              null,
              'Checking balance..'
            ),
            _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '3. Creating Bitcoin Script. Please wait, it will take a while'
            ),
            !flow.btcScriptValues && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          flow.btcScriptCreatingTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noreferrer noopener',
                  href: _appConfig2.default.link.bitpay + '/tx/' + flow.btcScriptCreatingTransactionHash
                },
                flow.btcScriptCreatingTransactionHash
              )
            )
          ),
          (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
            ),
            !flow.isEthContractFunded && _react2.default.createElement(_InlineLoader2.default, null)
          ),
          (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
            'h3',
            null,
            '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
          ),
          flow.ethSwapWithdrawTransactionHash && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: _appConfig2.default.link.etherscan + '/tx/' + flow.ethSwapWithdrawTransactionHash,
                  target: '_blank',
                  rel: 'noreferrer noopener'
                },
                flow.ethSwapWithdrawTransactionHash
              )
            )
          ),
          flow.step === 6 && _react2.default.createElement(_InlineLoader2.default, null),
          flow.isEthWithdrawn && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'h3',
              null,
              '6. Money was transferred to your wallet. Check the balance.'
            ),
            _react2.default.createElement(
              'h2',
              null,
              'Thank you for using Swap.Online!'
            )
          )
        )
      );
    }
  }]);
  return BtcToEthToken;
}(_react.Component);

exports.default = BtcToEthToken;

/***/ }),
/* 1048 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterRedux = __webpack_require__(361);

var _reactRedux = __webpack_require__(353);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(1049);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Root, _React$PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, (Root.__proto__ || (0, _getPrototypeOf2.default)(Root)).apply(this, arguments));
  }

  (0, _createClass3.default)(Root, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          history = _props.history,
          store = _props.store,
          routes = _props.routes;

      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(
            _App2.default,
            null,
            routes
          )
        )
      );
    }
  }]);
  return Root;
}(_react2.default.PureComponent), _class.propTypes = {
  store: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.element.isRequired
}, _temp);
exports.default = Root;

/***/ }),
/* 1049 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(127);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(32);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(1050);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(1051);

var _newSwap = __webpack_require__(1052);

var _Header = __webpack_require__(1102);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(1125);

var _Footer2 = _interopRequireDefault(_Footer);

var _Loader = __webpack_require__(247);

var _Loader2 = _interopRequireDefault(_Loader);

var _RequestLoader = __webpack_require__(1130);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(1131);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(168);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(1176);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('en-gb');

var App = (_dec = (0, _redaction.connect)({
  ethAddress: 'user.ethData.address',
  btcAddress: 'user.btcData.address',
  // nimAddress: 'user.nimData.address',
  tokenAddress: 'user.tokensData.noxon.address',
  // eosAddress: 'user.eosData.address',
  isVisible: 'loader.isVisible'
}), _dec2 = (0, _reactCssModules2.default)(_App2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fetching: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (!localStorage.getItem(_helpers.constants.localStorage.demoMoneyReceived)) {
        _actions2.default.user.getDemoMoney();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _actions2.default.user.sign();
        (0, _newSwap.createSwapApp)();
        _this2.setState({
          fetching: true
        });
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var fetching = this.state.fetching;
      var _props = this.props,
          children = _props.children,
          ethAddress = _props.ethAddress,
          btcAddress = _props.btcAddress,
          tokenAddress = _props.tokenAddress;

      var isFetching = !ethAddress || !btcAddress || !tokenAddress || !fetching;

      if (isFetching) {
        return _react2.default.createElement(_Loader2.default, null);
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'main' },
          children
        ),
        _react2.default.createElement(_Footer2.default, null),
        _react2.default.createElement(_RequestLoader2.default, null),
        _react2.default.createElement(_ModalConductor2.default, null),
        _react2.default.createElement(_NotificationConductor2.default, null)
      );
    }
  }]);
  return App;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes2.default.element.isRequired
}, _temp2)) || _class) || _class) || _class);
exports.default = App;

/***/ }),
/* 1050 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_3gjuKq"};

/***/ }),
/* 1051 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"UVZ-gM","btn":"_2xXs60"};

/***/ }),
/* 1052 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSwapApp = undefined;

var _web = __webpack_require__(135);

var _web2 = _interopRequireDefault(_web);

var _bitcoinjsLib = __webpack_require__(173);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(165);

var _swap4 = _interopRequireDefault(_swap3);

var _swap5 = __webpack_require__(429);

var _swap6 = _interopRequireDefault(_swap5);

var _swap7 = __webpack_require__(1073);

var _swap8 = _interopRequireDefault(_swap7);

var _swap9 = __webpack_require__(1084);

var _swap10 = __webpack_require__(1088);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.createOrder = function (_ref) {
  var buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency,
      buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount;

  var data = {
    buyCurrency: '' + buyCurrency,
    sellCurrency: '' + sellCurrency,
    buyAmount: Number(buyAmount),
    sellAmount: Number(sellAmount)
  };

  _swap2.default.services.orders.create(data);

  return 'Order create';
}; /* eslint-disable import/no-mutable-exports,max-len */


var createSwapApp = function createSwapApp() {
  _swap2.default.setup({

    network:  true ? 'mainnet' : 'testnet',

    env: {
      web3: _web2.default,
      bitcoin: _bitcoinjsLib2.default,
      Ipfs: window.Ipfs,
      IpfsRoom: window.IpfsRoom,
      storage: window.localStorage
    },

    services: [new _swap4.default({
      // TODO need init swapApp only after private keys created!!!!!!!!!!!!!!!!!!!
      eth: localStorage.getItem(_helpers.constants.privateKeyNames.eth),
      btc: localStorage.getItem(_helpers.constants.privateKeyNames.btc)
    }), new _swap6.default({
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [
          // '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
          '/dns4/discovery.libp2p.array.io/tcp/9091/wss/p2p-websocket-star/']
        }
      }
    }), new _swap8.default()],

    swaps: [new _swap9.EthSwap({
      address: _appConfig2.default.eth.contract,
      abi: [{ "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ratingContractAddress", "type": "address" }], "name": "setReputationAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "abort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }], "name": "createSwap", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "checkSign", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "sign", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Sign", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Abort", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.ethereum.fetchBalance(address);
      }
    }), new _swap9.BtcSwap({
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.bitcoin.fetchBalance(address);
      },
      fetchUnspents: function fetchUnspents(scriptAddress) {
        return _actions2.default.bitcoin.fetchUnspents(scriptAddress);
      },
      broadcastTx: function broadcastTx(txRaw) {
        return _actions2.default.bitcoin.broadcastTx(txRaw);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.noxon,
      address: '0xBA5c6DC3CAcdE8EA754e47c817846f771944518F',
      abi: [{ "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ratingContractAddress", "type": "address" }], "name": "setReputationAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "abort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "token", "type": "address" }, { "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }], "name": "createSwap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "checkSign", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "sign", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Sign", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Abort", "type": "event" }],
      tokenAddress: _appConfig2.default.tokens.noxon.address,
      tokenAbi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getBurnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unlockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionlocked", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "lockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "burnAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newManager", "type": "address" }], "name": "changeManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "addToReserve", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "burnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenAddress", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferAnyERC20Token", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "NoxonInit", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptManagership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_emissionedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_burnedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "etherReserved", "type": "uint256" }], "name": "EtherReserved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address);
      }
    }), new _swap9.EthTokenSwap({
      name: _swap.constants.COINS.swap,
      address: '0xBA5c6DC3CAcdE8EA754e47c817846f771944518F',
      abi: [{ "constant": false, "inputs": [{ "name": "_secret", "type": "bytes32" }, { "name": "_ownerAddress", "type": "address" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "getSecret", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ratingContractAddress", "type": "address" }], "name": "setReputationAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "participantSigns", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "abort", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }, { "name": "", "type": "address" }], "name": "swaps", "outputs": [{ "name": "token", "type": "address" }, { "name": "secret", "type": "bytes32" }, { "name": "secretHash", "type": "bytes20" }, { "name": "createdAt", "type": "uint256" }, { "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_secretHash", "type": "bytes20" }, { "name": "_participantAddress", "type": "address" }, { "name": "_value", "type": "uint256" }, { "name": "_token", "type": "address" }], "name": "createSwap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "checkSign", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "close", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ratingContractAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "sign", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_ownerAddress", "type": "address" }], "name": "getBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_participantAddress", "type": "address" }], "name": "refund", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Sign", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "createdAt", "type": "uint256" }], "name": "CreateSwap", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Withdraw", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Close", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Refund", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Abort", "type": "event" }],
      tokenAddress: _appConfig2.default.tokens.swap.address,
      tokenAbi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "getBurnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unlockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionlocked", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "lockEmission", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "burnAll", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newManager", "type": "address" }], "name": "changeManager", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_newOwner", "type": "address" }], "name": "changeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "emissionPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "addToReserve", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "burnPrice", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "tokenAddress", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "transferAnyERC20Token", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "NoxonInit", "outputs": [{ "name": "", "type": "bool" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "acceptManagership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_emissionedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBought", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "indexed": false, "name": "ethers", "type": "uint256" }, { "indexed": false, "name": "_burnedPrice", "type": "uint256" }, { "indexed": false, "name": "amountOfTokens", "type": "uint256" }], "name": "TokenBurned", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "etherReserved", "type": "uint256" }], "name": "EtherReserved", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_from", "type": "address" }, { "indexed": true, "name": "_to", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_owner", "type": "address" }, { "indexed": true, "name": "_spender", "type": "address" }, { "indexed": false, "name": "_value", "type": "uint256" }], "name": "Approval", "type": "event" }],
      fetchBalance: function fetchBalance(address) {
        return _actions2.default.token.fetchBalance(address);
      }
    })],

    flows: [_swap10.ETH2BTC, _swap10.BTC2ETH, (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.noxon), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.noxon), (0, _swap10.ETHTOKEN2BTC)(_swap.constants.COINS.swap), (0, _swap10.BTC2ETHTOKEN)(_swap.constants.COINS.swap)]
  });
};

exports.createSwapApp = createSwapApp;

/***/ }),
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 165,
	"./SwapAuth": 243,
	"./SwapAuth.js": 243,
	"./btc": 427,
	"./btc.js": 427,
	"./eth": 428,
	"./eth.js": 428,
	"./index": 165,
	"./index.js": 165
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1071;

/***/ }),
/* 1072 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(235);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(166);

var _typeof3 = _interopRequireDefault(_typeof2);

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapRoom = function (_ServiceInterface) {
  (0, _inherits3.default)(SwapRoom, _ServiceInterface);
  (0, _createClass3.default)(SwapRoom, null, [{
    key: 'name',
    get: function get() {
      return 'room';
    }
  }]);

  function SwapRoom(config) {
    (0, _classCallCheck3.default)(this, SwapRoom);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapRoom.__proto__ || (0, _getPrototypeOf2.default)(SwapRoom)).call(this));

    _this._handleUserOnline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user online', peer);
      }
    };

    _this._handleUserOffline = function (peer) {
      if (peer !== _this.peer) {
        _this._events.dispatch('user offline', peer);
      }
    };

    _this._handleNewMessage = function (message) {
      var from = message.from,
          data = message.data;


      if (from === _this.peer) {
        return;
      }

      var parsedData = void 0;

      try {
        parsedData = JSON.parse(data.toString());
      } catch (err) {
        console.error('parse message data err:', err);
      }

      var _parsedData = parsedData,
          fromAddress = _parsedData.fromAddress,
          messages = _parsedData.messages,
          sign = _parsedData.sign;

      var recover = _this._recoverMessage(messages, sign);

      if (recover !== fromAddress) {
        console.error('Wrong message sign! Message from: ' + fromAddress + ', recover: ' + recover);
        return;
      }

      if (messages && messages.length) {
        messages.forEach(function (_ref) {
          var event = _ref.event,
              data = _ref.data;

          _this._events.dispatch(event, (0, _extends3.default)({
            fromPeer: from
          }, data || {}));
        });
      }
    };

    if (!config || (typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
      throw new Error('SwapRoomService: "config" of type object required');
    }

    _this._serviceName = 'room';
    _this._config = config;
    _this._events = new _swap.Events();
    _this.peer = null;
    _this.connection = null;
    return _this;
  }

  (0, _createClass3.default)(SwapRoom, [{
    key: 'initService',
    value: function initService() {
      var _this2 = this;

      if (!_swap2.default.env.Ipfs) {
        throw new Error('SwapRoomService: Ipfs required');
      }
      if (!_swap2.default.env.IpfsRoom) {
        throw new Error('SwapRoomService: IpfsRoom required');
      }

      var ipfs = new _swap2.default.env.Ipfs(this._config);

      ipfs.once('error', function (err) {
        console.log('IPFS error!', err);
      });

      ipfs.once('ready', function () {
        return ipfs.id(function (err, info) {
          console.info('IPFS ready!');

          if (err) {
            throw err;
          }

          _this2._init({
            peer: info.id,
            ipfsConnection: ipfs
          });
        });
      });
    }
  }, {
    key: '_init',
    value: function _init(_ref2) {
      var peer = _ref2.peer,
          ipfsConnection = _ref2.ipfsConnection;

      this.peer = peer;

      this.connection = _swap2.default.env.IpfsRoom(ipfsConnection, 'swap.online', {
        pollInterval: 5000
      });

      this.connection.on('peer joined', this._handleUserOnline);
      this.connection.on('peer left', this._handleUserOffline);
      this.connection.on('message', this._handleNewMessage);

      this._events.dispatch('ready');
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      this._events.subscribe(eventName, handler);
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      this._events.unsubscribe(eventName, handler);
    }
  }, {
    key: 'once',
    value: function once(eventName, handler) {
      this._events.once(eventName, handler);
    }
  }, {
    key: '_recoverMessage',
    value: function _recoverMessage(message, sign) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var recover = _swap2.default.env.web3.eth.accounts.recover(hash, sign.signature);

      return recover;
    }
  }, {
    key: '_signMessage',
    value: function _signMessage(message) {
      var hash = _swap2.default.env.web3.utils.soliditySha3((0, _stringify2.default)(message));
      var sign = _swap2.default.env.web3.eth.accounts.sign(hash, _swap2.default.services.auth.accounts.eth.privateKey);

      return sign;
    }
  }, {
    key: 'sendMessage',
    value: function sendMessage() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1) {
        var messages = args[0];

        var sign = this._signMessage(messages);

        this.connection.broadcast((0, _stringify2.default)({
          fromAddress: _swap2.default.services.auth.accounts.eth.address,
          messages: messages,
          sign: sign
        }));
      } else {
        var peer = args[0],
            _messages = args[1];

        var _sign = this._signMessage(_messages);

        this.connection.sendTo(peer, (0, _stringify2.default)({
          fromAddress: _swap2.default.services.auth.accounts.eth.address,
          messages: _messages,
          sign: _sign
        }));
      }
    }
  }]);
  return SwapRoom;
}(_swap.ServiceInterface);

exports.default = SwapRoom;

/***/ }),
/* 1073 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SwapOrders = __webpack_require__(1074);

var _SwapOrders2 = _interopRequireDefault(_SwapOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapOrders2.default;

/***/ }),
/* 1074 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(239);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _bignumber = __webpack_require__(405);

var _bignumber2 = _interopRequireDefault(_bignumber);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(429);

var _swap4 = _interopRequireDefault(_swap3);

var _aggregation2 = __webpack_require__(1075);

var _aggregation3 = _interopRequireDefault(_aggregation2);

var _events = __webpack_require__(431);

var _events2 = _interopRequireDefault(_events);

var _Order = __webpack_require__(1083);

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqueId = function () {
  var id = Date.now();
  return function () {
    return _swap2.default.services.room.peer + '-' + ++id;
  };
}();

var checkIncomeOrderFormat = function checkIncomeOrderFormat(order) {
  var format = {
    id: '?String',
    owner: (0, _extends3.default)({
      peer: 'String',
      reputation: _swap.util.typeforce.t.maybe(_swap.util.typeforce.isNumeric)
    }, function () {
      var result = {};
      (0, _keys2.default)(_swap.constants.COINS).forEach(function (key) {
        result[key] = _swap.util.typeforce.t.maybe({
          address: _swap.util.typeforce.isCoinAddress[_swap.constants.COINS[key]],
          publicKey: _swap.util.typeforce.isPublicKey[_swap.constants.COINS[key]]
        });
      });
      return result;
    }()),
    buyCurrency: _swap.util.typeforce.isCoinName,
    sellCurrency: _swap.util.typeforce.isCoinName,
    buyAmount: _swap.util.typeforce.isNumeric,
    sellAmount: _swap.util.typeforce.isNumeric,
    isProcessing: '?Boolean',
    isRequested: '?Boolean'
  };

  var isValid = _swap.util.typeforce.check(format, order, true);

  if (!isValid) {
    console.log('Wrong income order format. Excepted:', format, 'got:', order);
  }

  return isValid;
};

var checkIncomeOrderOwner = function checkIncomeOrderOwner(_ref, fromPeer) {
  var peer = _ref.owner.peer;
  return peer === fromPeer;
};

var checkIncomeOrder = function checkIncomeOrder(order, fromPeer) {
  var isFormatValid = checkIncomeOrderFormat(order);
  var isOwnerValid = checkIncomeOrderOwner(order, fromPeer);

  return isFormatValid && isOwnerValid;
};

var SwapOrders = function (_aggregation) {
  (0, _inherits3.default)(SwapOrders, _aggregation);
  (0, _createClass3.default)(SwapOrders, null, [{
    key: 'name',
    get: function get() {
      return 'orders';
    }
  }]);

  function SwapOrders() {
    (0, _classCallCheck3.default)(this, SwapOrders);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SwapOrders.__proto__ || (0, _getPrototypeOf2.default)(SwapOrders)).call(this));

    _this._handleReady = function () {
      _this._persistMyOrders();
    };

    _this._handleUserOnline = function (peer) {
      var myOrders = _this.getMyOrders();

      if (myOrders.length) {
        // clean orders from other additional props
        myOrders = myOrders.map(function (item) {
          return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing');
        });

        _swap2.default.services.room.sendMessage(peer, [{
          event: 'new orders',
          data: {
            orders: myOrders
          }
        }]);
      }
    };

    _this._handleUserOffline = function (peer) {
      var peerOrders = _this.getPeerOrders(peer);

      if (peerOrders.length) {
        peerOrders.forEach(function (_ref2) {
          var id = _ref2.id;

          _this._handleRemove(id);
        });
      }
    };

    _this._handleNewOrders = function (_ref3) {
      var fromPeer = _ref3.fromPeer,
          orders = _ref3.orders;

      // ductape to check if such orders already exist
      var filteredOrders = orders.filter(function (_ref4) {
        var id = _ref4.id,
            peer = _ref4.owner.peer;
        return !_this.getByKey(id) && peer === fromPeer;
      });

      _this._handleMultipleCreate({ orders: filteredOrders, fromPeer: fromPeer });
    };

    _this._handleNewOrder = function (_ref5) {
      var fromPeer = _ref5.fromPeer,
          order = _ref5.order;

      if (order && order.owner && order.owner.peer === fromPeer) {
        if (checkIncomeOrder(order, fromPeer)) {
          _this._handleCreate(order);
        }
      }
    };

    _this._handleRemoveOrder = function (_ref6) {
      var fromPeer = _ref6.fromPeer,
          orderId = _ref6.orderId;

      var order = _this.getByKey(orderId);

      if (order && order.owner && order.owner.peer === fromPeer) {
        _this._handleRemove(orderId);
      }
    };

    _this._serviceName = 'orders';
    _this._dependsOn = [_swap4.default];
    return _this;
  }

  (0, _createClass3.default)(SwapOrders, [{
    key: 'initService',
    value: function initService() {
      console.log('init');
      _swap2.default.services.room.on('ready', this._handleReady);
      _swap2.default.services.room.on('user online', this._handleUserOnline);
      _swap2.default.services.room.on('user offline', this._handleUserOffline);
      _swap2.default.services.room.on('new orders', this._handleNewOrders);
      _swap2.default.services.room.on('new order', this._handleNewOrder);
      _swap2.default.services.room.on('remove order', this._handleRemoveOrder);
    }
  }, {
    key: '_persistMyOrders',
    value: function _persistMyOrders() {
      var _this2 = this;

      this.getMyOrders().forEach(function (orderData) {
        _this2._handleCreate(orderData);
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.id
     * @param {object} data.owner
     * @param {string} data.owner.peer
     * @param {number} data.owner.reputation
     * @param {object} data.owner.<currency>
     * @param {string} data.owner.<currency>.address
     * @param {string} data.owner.<currency>.publicKey
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     * @param {boolean} data.isProcessing
     * @param {boolean} data.isRequested
     */

  }, {
    key: '_create',
    value: function _create(data) {
      var id = data.id,
          buyAmount = data.buyAmount,
          sellAmount = data.sellAmount,
          rest = (0, _objectWithoutProperties3.default)(data, ['id', 'buyAmount', 'sellAmount']);


      var order = new _Order2.default(this, (0, _extends3.default)({
        id: id || getUniqueId(),
        buyAmount: new _bignumber2.default(String(buyAmount)),
        sellAmount: new _bignumber2.default(String(sellAmount))
      }, rest));

      this.append(order, order.id);

      return order;
    }
  }, {
    key: '_handleCreate',
    value: function _handleCreate(data) {
      var order = this._create(data);

      if (order) {
        _events2.default.dispatch('new order', order);
      }
    }
  }, {
    key: '_handleMultipleCreate',
    value: function _handleMultipleCreate(_ref7) {
      var _this3 = this;

      var orders = _ref7.orders,
          fromPeer = _ref7.fromPeer;

      var newOrders = [];

      orders.forEach(function (data) {
        if (checkIncomeOrder(data, fromPeer)) {
          var order = _this3._create(data);

          newOrders.push(order);
        }
      });

      if (newOrders.length) {
        _events2.default.dispatch('new orders', newOrders);
      }
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: '_handleRemove',
    value: function _handleRemove(orderId) {
      try {
        var order = this.getByKey(orderId);

        if (order) {
          this.removeByKey(orderId);
          _events2.default.dispatch('remove order', order);
        }
      } catch (err) {}
    }
  }, {
    key: '_saveMyOrders',
    value: function _saveMyOrders() {
      var myOrders = this.items.filter(function (_ref8) {
        var peer = _ref8.owner.peer;
        return peer === _swap2.default.services.room.peer;
      });

      // clean orders from other additional props
      // TODO need to add functionality to sync `requests` for users who going offline / online
      // problem: when I going online and persisting my orders need to show only online users requests,
      // but then user comes online need to change status. Ofc we can leave this bcs developers can do this themselves
      // with filters - skip requests where user is offline, but it looks like not very good
      myOrders = myOrders.map(function (item) {
        return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'participant', 'requests', 'isRequested', 'isProcessing');
      });

      _swap2.default.env.storage.setItem('myOrders', myOrders);
    }
  }, {
    key: 'getMyOrders',
    value: function getMyOrders() {
      return _swap2.default.env.storage.getItem('myOrders') || [];
    }
  }, {
    key: 'getPeerOrders',
    value: function getPeerOrders(peer) {
      return this.items.filter(function (_ref9) {
        var owner = _ref9.owner;
        return peer === owner.peer;
      });
    }

    /**
     *
     * @param {object} data
     * @param {string} data.buyCurrency
     * @param {string} data.sellCurrency
     * @param {number} data.buyAmount
     * @param {number} data.sellAmount
     */

  }, {
    key: 'create',
    value: function create(data) {
      var order = this._create((0, _extends3.default)({}, data, {
        owner: _swap2.default.services.auth.getPublicData()
      }));
      this._saveMyOrders();

      _swap2.default.services.room.sendMessage([{
        event: 'new order',
        data: {
          order: _swap.util.pullProps(order, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing')
        }
      }]);
    }

    /**
     *
     * @param {string} orderId
     */

  }, {
    key: 'remove',
    value: function remove(orderId) {
      this.removeByKey(orderId);
      _swap2.default.services.room.sendMessage([{
        event: 'remove order',
        data: {
          orderId: orderId
        }
      }]);
      this._saveMyOrders();
    }
  }, {
    key: 'on',
    value: function on(eventName, handler) {
      _events2.default.subscribe(eventName, handler);
      return this;
    }
  }, {
    key: 'off',
    value: function off(eventName, handler) {
      _events2.default.unsubscribe(eventName, handler);
      return this;
    }
  }]);
  return SwapOrders;
}((0, _aggregation3.default)(_swap.ServiceInterface, _swap.Collection));

exports.default = SwapOrders;

/***/ }),
/* 1075 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = __webpack_require__(430);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = __webpack_require__(233);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertySymbols = __webpack_require__(1078);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(1080);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 Allows multiple extending
 */

var aggregation = function aggregation(baseClass) {
  for (var _len = arguments.length, mixins = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    mixins[_key - 1] = arguments[_key];
  }

  var base = function (_baseClass) {
    (0, _inherits3.default)(_Combined, _baseClass);

    function _Combined() {
      var _ref;

      (0, _classCallCheck3.default)(this, _Combined);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _Combined.__proto__ || (0, _getPrototypeOf2.default)(_Combined)).call.apply(_ref, [this].concat(args)));

      mixins.forEach(function (mixin) {
        mixin.prototype._constructor.call(_this);
      });
      return _this;
    }

    return _Combined;
  }(baseClass);

  var copyProps = function copyProps(target, source) {
    (0, _getOwnPropertyNames2.default)(source).concat((0, _getOwnPropertySymbols2.default)(source)).forEach(function (prop) {
      if (prop.match(/^(?:_?constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
        return;
      }

      (0, _defineProperty2.default)(target, prop, (0, _getOwnPropertyDescriptor2.default)(source, prop));
    });
  };

  mixins.forEach(function (mixin) {
    copyProps(base.prototype, mixin.prototype);
    copyProps(base, mixin);
  });

  return base;
};

exports.default = aggregation;

/***/ }),
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(422);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = __webpack_require__(70);

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__(98);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _events = __webpack_require__(431);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Order = function () {

  /**
   *
   * @param {object}  parent
   * @param {object}  data
   * @param {string}  data.id
   * @param {object}  data.owner
   * @param {string}  data.owner.peer
   * @param {number}  data.owner.reputation
   * @param {object}  data.owner.<currency>
   * @param {string}  data.owner.<currency>.address
   * @param {string}  data.owner.<currency>.publicKey
   * @param {string}  data.buyCurrency
   * @param {string}  data.sellCurrency
   * @param {number}  data.buyAmount
   * @param {number}  data.sellAmount
   */
  function Order(parent, data) {
    (0, _classCallCheck3.default)(this, Order);

    this.id = data.id;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    this.collection = parent;
    this.requests = []; // income requests
    this.isRequested = false; // outcome request status
    this.isProcessing = false; // if swap isProcessing

    this._update((0, _extends3.default)({}, data, {
      isMy: data.owner.peer === _swap2.default.services.room.peer
    }));

    this._onMount();
  }

  (0, _createClass3.default)(Order, [{
    key: '_onMount',
    value: function _onMount() {
      var _this = this;

      _swap2.default.services.room.on('request swap', function (_ref) {
        var orderId = _ref.orderId,
            participant = _ref.participant;

        if (orderId === _this.id && !_this.requests.find(function (_ref2) {
          var peer = _ref2.peer;
          return peer === participant.peer;
        })) {
          _this.requests.push(participant);

          _events2.default.dispatch('new order request', {
            orderId: orderId,
            participant: participant
          });
        }
      });
    }
  }, {
    key: '_update',
    value: function _update(values) {
      var _this2 = this;

      (0, _keys2.default)(values).forEach(function (key) {
        _this2[key] = values[key];
      });
    }
  }, {
    key: 'update',
    value: function update(values) {
      this._update(values);
      this.collection._saveMyOrders();

      _events2.default.dispatch('swap update', this, values);
    }

    /**
     *
     * @param callback - awaiting for response - accept / decline
     */

  }, {
    key: 'sendRequest',
    value: function sendRequest(callback) {
      var self = this;

      if (_swap2.default.services.room.peer === this.owner.peer) {
        console.warn('You are the owner of this Order. You can\'t send request to yourself.');
        return;
      }

      if (this.isRequested) {
        console.warn('You have already requested this swap.');
        return;
      }

      this.update({
        isRequested: true
      });

      _swap2.default.services.room.sendMessage(this.owner.peer, [{
        event: 'request swap',
        data: {
          orderId: this.id,
          // TODO why do we send this info?
          participant: _swap2.default.services.auth.getPublicData()
        }
      }]);

      _swap2.default.services.room.on('accept swap request', function (_ref3) {
        var orderId = _ref3.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isProcessing: true,
            isRequested: false
          });

          callback(true);
        }
      });

      _swap2.default.services.room.on('decline swap request', function (_ref4) {
        var orderId = _ref4.orderId;

        if (orderId === self.id) {
          this.unsubscribe();

          self.update({
            isRequested: false
          });

          // TODO think about preventing user from sent requests every N seconds
          callback(false);
        }
      });
    }
  }, {
    key: 'acceptRequest',
    value: function acceptRequest(participantPeer) {
      var participant = this.requests.find(function (_ref5) {
        var peer = _ref5.peer;
        return peer === participantPeer;
      });

      this.update({
        isRequested: false,
        isProcessing: true,
        participant: participant,
        requests: []
      });

      _swap2.default.services.room.sendMessage(participantPeer, [{
        event: 'accept swap request',
        data: {
          orderId: this.id
        }
      }]);
    }
  }, {
    key: 'declineRequest',
    value: function declineRequest(participantPeer) {
      var index = void 0;

      this.requests.some(function (_ref6, _index) {
        var peer = _ref6.peer;

        if (peer === participantPeer) {
          index = _index;
        }
        return index !== undefined;
      });

      var requests = [].concat((0, _toConsumableArray3.default)(this.requests.slice(0, index)), (0, _toConsumableArray3.default)(this.requests.slice(index + 1)));

      this.update({
        isRequested: false,
        requests: requests
      });

      _swap2.default.services.room.sendMessage(participantPeer, [{
        event: 'decline swap request',
        data: {
          orderId: this.id
        }
      }]);
    }
  }]);
  return Order;
}();

exports.default = Order;

/***/ }),
/* 1084 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EthTokenSwap = exports.BtcSwap = exports.EthSwap = undefined;

var _EthSwap = __webpack_require__(1085);

var _EthSwap2 = _interopRequireDefault(_EthSwap);

var _EthTokenSwap = __webpack_require__(1086);

var _EthTokenSwap2 = _interopRequireDefault(_EthTokenSwap);

var _BtcSwap = __webpack_require__(1087);

var _BtcSwap2 = _interopRequireDefault(_BtcSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EthSwap = _EthSwap2.default;
exports.BtcSwap = _BtcSwap2.default;
exports.EthTokenSwap = _EthTokenSwap2.default;

/***/ }),
/* 1085 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(163);

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthSwap(options) {
    (0, _classCallCheck3.default)(this, EthSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthSwap.__proto__ || (0, _getPrototypeOf2.default)(EthSwap)).call(this));

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthSwap: "abi" required');
    }

    _this.address = options.address;
    _this.abi = options.abi;

    _this._swapName = _swap.constants.COINS.eth;
    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'sign',
    value: function sign(data, handleTransactionHash) {
      var _this2 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this2.gasLimit
                  };
                  _context.next = 3;
                  return _this2.contract.methods.sign(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {number} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this3 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;


      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var _contract$methods;

          var hash, params, values, receipt;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this3.gasLimit,
                    value: Math.floor(_swap2.default.env.web3.utils.toWei(amount.toString()))
                  };
                  values = [hash, participantAddress];
                  _context2.next = 5;
                  return (_contract$methods = _this3.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  receipt = _context2.sent;


                  resolve(receipt);

                case 7:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */

  }, {
    key: 'getBalance',
    value: function getBalance(data) {
      var _this4 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  balance = void 0;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return _this4.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context3.sent;
                  _context3.next = 10;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](1);

                  reject(_context3.t0);

                case 10:

                  resolve(balance);

                case 11:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[1, 7]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkBalance',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data) {
        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context4.next = 3;
                return this.getBalance({ ownerAddress: ownerAddress });

              case 3:
                balance = _context4.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function checkBalance(_x7) {
        return _ref4.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this5 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var _secret, params, receipt;

          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this5.gasLimit
                  };
                  _context5.next = 4;
                  return _this5.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  receipt = _context5.sent;


                  resolve(receipt);

                case 6:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this5);
        }));

        return function (_x8, _x9) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this6 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this6.gasLimit
                  };
                  _context6.next = 3;
                  return _this6.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context6.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, _this6);
        }));

        return function (_x10, _x11) {
          return _ref6.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this7 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this7.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context7.sent;
                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context7.next = 11;
                  break;

                case 8:
                  _context7.prev = 8;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 11:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[0, 8]]);
        }));

        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'close',
    value: function close(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, result;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit
                  };
                  _context8.prev = 1;
                  _context8.next = 4;
                  return _this8.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  result = _context8.sent;


                  resolve(result);
                  _context8.next = 11;
                  break;

                case 8:
                  _context8.prev = 8;
                  _context8.t0 = _context8['catch'](1);

                  reject(_context8.t0);

                case 11:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8, [[1, 8]]);
        }));

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthSwap;
}(_swap.SwapInterface);

exports.default = EthSwap;

/***/ }),
/* 1086 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(163);

var _promise2 = _interopRequireDefault(_promise);

var _values = __webpack_require__(224);

var _values2 = _interopRequireDefault(_values);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthTokenSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.name
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {string}    options.tokenAddress
   * @param {array}     options.tokenAbi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthTokenSwap(options) {
    (0, _classCallCheck3.default)(this, EthTokenSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EthTokenSwap.__proto__ || (0, _getPrototypeOf2.default)(EthTokenSwap)).call(this));

    if (!options.name) {
      throw new Error('EthTokenSwap: "name" required');
    }
    if (!(0, _values2.default)(_swap.constants.COINS).includes(options.name.toUpperCase())) {
      throw new Error('EthTokenSwap: "name" should be correct');
    }
    if (typeof options.address !== 'string') {
      throw new Error('EthTokenSwap: "address" required');
    }
    if (!Array.isArray(options.abi)) {
      throw new Error('EthTokenSwap: "abi" required');
    }
    if (typeof options.tokenAddress !== 'string') {
      throw new Error('EthTokenSwap: "tokenAddress" required');
    }
    if (!Array.isArray(options.tokenAbi)) {
      throw new Error('EthTokenSwap: "tokenAbi" required');
    }

    _this._swapName = options.name.toUpperCase();

    _this.address = options.address;
    _this.abi = options.abi;
    _this.tokenAddress = options.tokenAddress;
    _this.tokenAbi = options.tokenAbi;

    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  (0, _createClass3.default)(EthTokenSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
      this.ERC20 = new _swap2.default.env.web3.eth.Contract(this.tokenAbi, this.tokenAddress);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'sign',
    value: function sign(data, handleTransactionHash) {
      var _this2 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
          var params, result;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this2.gasLimit
                  };
                  _context.prev = 1;
                  _context.next = 4;
                  return _this2.contract.methods.sign(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  result = _context.sent;


                  resolve(result);
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context['catch'](1);

                  reject(_context.t0);

                case 11:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[1, 8]]);
        }));

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'approve',
    value: function approve(data, handleTransactionHash) {
      var _this3 = this;

      var amount = data.amount;


      return new _promise2.default(function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _this3.ERC20.methods.approve(_this3.address, amount.toNumber()).send({
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this3.gasLimit
                  }).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2['catch'](0);

                  reject(_context2.t0);

                case 10:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this3, [[0, 7]]);
        }));

        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.owner
     * @param {string} data.spender
     * @returns {Promise}
     */

  }, {
    key: 'checkAllowance',
    value: function checkAllowance(data) {
      var _this4 = this;

      var owner = data.owner,
          spender = data.spender;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
          var result;
          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return _this4.ERC20.methods.allowance(owner, spender).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  result = _context3.sent;


                  resolve(result);
                  _context3.next = 10;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3['catch'](0);

                  reject(_context3.t0);

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this4, [[0, 7]]);
        }));

        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.participantAddress
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'create',
    value: function create(data, handleTransactionHash) {
      var _this5 = this;

      var secretHash = data.secretHash,
          participantAddress = data.participantAddress,
          amount = data.amount;


      return new _promise2.default(function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
          var hash, values, params, _contract$methods, result;

          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  hash = '0x' + secretHash.replace(/^0x/, '');
                  values = [hash, participantAddress, amount.toNumber(), _this5.tokenAddress];
                  params = { from: _swap2.default.services.auth.accounts.eth.address, gas: _this5.gasLimit };
                  _context4.prev = 3;
                  _context4.next = 6;
                  return (_contract$methods = _this5.contract.methods).createSwap.apply(_contract$methods, values).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 6:
                  result = _context4.sent;


                  resolve(result);
                  _context4.next = 13;
                  break;

                case 10:
                  _context4.prev = 10;
                  _context4.t0 = _context4['catch'](3);

                  reject(_context4.t0);

                case 13:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, _this5, [[3, 10]]);
        }));

        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @returns {Promise}
     */

  }, {
    key: 'getBalance',
    value: function getBalance(data) {
      var _this6 = this;

      var ownerAddress = data.ownerAddress;


      return new _promise2.default(function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
          var balance;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  balance = void 0;
                  _context5.prev = 1;
                  _context5.next = 4;
                  return _this6.contract.methods.getBalance(ownerAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 4:
                  balance = _context5.sent;
                  _context5.next = 10;
                  break;

                case 7:
                  _context5.prev = 7;
                  _context5.t0 = _context5['catch'](1);

                  reject(_context5.t0);

                case 10:

                  resolve(balance);

                case 11:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, _this6, [[1, 7]]);
        }));

        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.ownerAddress
     * @param {BigNumber} data.expectedValue
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var ownerAddress, expectedValue, balance;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                ownerAddress = data.ownerAddress, expectedValue = data.expectedValue;
                _context6.next = 3;
                return this.getBalance({ ownerAddress: ownerAddress });

              case 3:
                balance = _context6.sent;

                if (!expectedValue.isGreaterThan(balance)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt('return', 'Expected value: ' + expectedValue.toNumber() + ', got: ' + balance);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function checkBalance(_x11) {
        return _ref6.apply(this, arguments);
      }

      return checkBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {string} data.secret
     * @param {string} data.ownerAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash) {
      var _this7 = this;

      var ownerAddress = data.ownerAddress,
          secret = data.secret;


      return new _promise2.default(function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var _secret, params, result;

          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _secret = '0x' + secret.replace(/^0x/, '');
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this7.gasLimit
                  };
                  _context7.prev = 2;
                  _context7.next = 5;
                  return _this7.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 5:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 12;
                  break;

                case 9:
                  _context7.prev = 9;
                  _context7.t0 = _context7['catch'](2);

                  reject(_context7.t0);

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this7, [[2, 9]]);
        }));

        return function (_x12, _x13) {
          return _ref7.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      var _this8 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(resolve, reject) {
          var params, receipt;
          return _regenerator2.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this8.gasLimit
                  };
                  _context8.next = 3;
                  return _this8.contract.methods.refund(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 3:
                  receipt = _context8.sent;


                  resolve(receipt);

                case 5:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8, _this8);
        }));

        return function (_x14, _x15) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @returns {Promise}
     */

  }, {
    key: 'getSecret',
    value: function getSecret(data) {
      var _this9 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(resolve, reject) {
          var secret, secretValue;
          return _regenerator2.default.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.prev = 0;
                  _context9.next = 3;
                  return _this9.contract.methods.getSecret(participantAddress).call({
                    from: _swap2.default.services.auth.accounts.eth.address
                  });

                case 3:
                  secret = _context9.sent;
                  secretValue = secret && !/^0x0+/.test(secret) ? secret : null;


                  resolve(secretValue);
                  _context9.next = 11;
                  break;

                case 8:
                  _context9.prev = 8;
                  _context9.t0 = _context9['catch'](0);

                  reject(_context9.t0);

                case 11:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9, _this9, [[0, 8]]);
        }));

        return function (_x16, _x17) {
          return _ref9.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {string} data.participantAddress
     * @param handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'close',
    value: function close(data, handleTransactionHash) {
      var _this10 = this;

      var participantAddress = data.participantAddress;


      return new _promise2.default(function () {
        var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(resolve, reject) {
          var params, result;
          return _regenerator2.default.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  params = {
                    from: _swap2.default.services.auth.accounts.eth.address,
                    gas: _this10.gasLimit
                  };
                  _context10.prev = 1;
                  _context10.next = 4;
                  return _this10.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                    if (typeof handleTransactionHash === 'function') {
                      handleTransactionHash(hash);
                    }
                  }).on('error', function (err) {
                    reject(err);
                  });

                case 4:
                  result = _context10.sent;


                  resolve(result);
                  _context10.next = 11;
                  break;

                case 8:
                  _context10.prev = 8;
                  _context10.t0 = _context10['catch'](1);

                  reject(_context10.t0);

                case 11:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10, _this10, [[1, 8]]);
        }));

        return function (_x18, _x19) {
          return _ref10.apply(this, arguments);
        };
      }());
    }
  }]);
  return EthTokenSwap;
}(_swap.SwapInterface);

exports.default = EthTokenSwap;

/***/ }),
/* 1087 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(166);

var _typeof3 = _interopRequireDefault(_typeof2);

var _promise = __webpack_require__(163);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcSwap = function (_SwapInterface) {
  (0, _inherits3.default)(BtcSwap, _SwapInterface);

  /**
   *
   * @param options
   * @param options.fetchBalance
   * @param options.fetchUnspents
   * @param options.broadcastTx
   */
  function BtcSwap(options) {
    (0, _classCallCheck3.default)(this, BtcSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BtcSwap.__proto__ || (0, _getPrototypeOf2.default)(BtcSwap)).call(this));

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.fetchUnspents !== 'function') {
      throw new Error('EthSwap: "fetchUnspents" required');
    }
    if (typeof options.broadcastTx !== 'function') {
      throw new Error('EthSwap: "broadcastTx" required');
    }

    _this._swapName = _swap.constants.COINS.btc;
    _this.fetchBalance = options.fetchBalance;
    _this.fetchUnspents = options.fetchUnspents;
    _this.broadcastTx = options.broadcastTx;
    return _this;
  }

  (0, _createClass3.default)(BtcSwap, [{
    key: '_initSwap',
    value: function _initSwap() {
      this.network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;
    }

    /**
     *
     * @param {object} data
     * @param {object} data.script
     * @param {*} data.txRaw
     * @param {string} data.secret
     * @private
     */

  }, {
    key: '_signTransaction',
    value: function _signTransaction(data) {
      var script = data.script,
          txRaw = data.txRaw,
          secret = data.secret;


      var hashType = _swap2.default.env.bitcoin.Transaction.SIGHASH_ALL;
      var signatureHash = txRaw.hashForSignature(0, script, hashType);
      var signature = _swap2.default.services.auth.accounts.btc.sign(signatureHash).toScriptSignature(hashType);

      var scriptSig = _swap2.default.env.bitcoin.script.scriptHash.input.encode([signature, _swap2.default.services.auth.accounts.btc.getPublicKeyBuffer(), Buffer.from(secret.replace(/^0x/, ''), 'hex')], script);

      txRaw.setInputScript(0, scriptSig);
    }

    /**
     *
     * @param {object} data
     * @param {string} data.secretHash
     * @param {string} data.ownerPublicKey
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @returns {{scriptAddress: *, script: (*|{ignored})}}
     */

  }, {
    key: 'createScript',
    value: function createScript(data) {
      var secretHash = data.secretHash,
          ownerPublicKey = data.ownerPublicKey,
          recipientPublicKey = data.recipientPublicKey,
          lockTime = data.lockTime;


      var script = _swap2.default.env.bitcoin.script.compile([_swap2.default.env.bitcoin.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUALVERIFY, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUAL, _swap2.default.env.bitcoin.opcodes.OP_IF, Buffer.from(recipientPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ELSE, _swap2.default.env.bitcoin.script.number.encode(lockTime), _swap2.default.env.bitcoin.opcodes.OP_CHECKLOCKTIMEVERIFY, _swap2.default.env.bitcoin.opcodes.OP_DROP, Buffer.from(ownerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ENDIF]);

      var scriptPubKey = _swap2.default.env.bitcoin.script.scriptHash.output.encode(_swap2.default.env.bitcoin.crypto.hash160(script));
      var scriptAddress = _swap2.default.env.bitcoin.address.fromOutputScript(scriptPubKey, this.network);

      return {
        scriptAddress: scriptAddress,
        script: script
      };
    }

    /**
     *
     * @param {object} data
     * @param {string} data.recipientPublicKey
     * @param {number} data.lockTime
     * @param {object} expected
     * @param {number} expected.value
     * @param {number} expected.lockTime
     * @param {string} expected.recipientPublicKey
     * @returns {Promise.<string>}
     */

  }, {
    key: 'checkScript',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data, expected) {
        var recipientPublicKey, lockTime, _createScript, scriptAddress, script, unspents, totalUnspent, expectedValue;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                recipientPublicKey = data.recipientPublicKey, lockTime = data.lockTime;
                _createScript = this.createScript(data), scriptAddress = _createScript.scriptAddress, script = _createScript.script;
                _context.next = 4;
                return this.fetchUnspents(scriptAddress);

              case 4:
                unspents = _context.sent;
                totalUnspent = unspents.reduce(function (summ, _ref2) {
                  var satoshis = _ref2.satoshis;
                  return summ + satoshis;
                }, 0);
                expectedValue = expected.value.multipliedBy(1e8);

                if (!expectedValue.isGreaterThan(totalUnspent)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt('return', 'Expected script value: ' + expectedValue.toNumber() + ', got: ' + totalUnspent);

              case 9:
                if (!(expected.lockTime > lockTime)) {
                  _context.next = 11;
                  break;
                }

                return _context.abrupt('return', 'Expected script lockTime: ' + expected.lockTime + ', got: ' + lockTime);

              case 11:
                if (!(expected.recipientPublicKey !== recipientPublicKey)) {
                  _context.next = 13;
                  break;
                }

                return _context.abrupt('return', 'Expected script recipient publicKey: ' + expected.recipientPublicKey + ', got: ' + recipientPublicKey);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkScript(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return checkScript;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {BigNumber} data.amount
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'fundScript',
    value: function fundScript(data, handleTransactionHash) {
      var _this2 = this;

      var scriptValues = data.scriptValues,
          amount = data.amount;


      return new _promise2.default(function () {
        var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
          var _createScript2, scriptAddress, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw, result;

          return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _createScript2 = _this2.createScript(scriptValues), scriptAddress = _createScript2.scriptAddress;
                  tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this2.network);
                  _context2.next = 5;
                  return _this2.fetchUnspents(_swap2.default.services.auth.accounts.btc.getAddress());

                case 5:
                  unspents = _context2.sent;
                  fundValue = amount.multipliedBy(1e8).toNumber(); // TODO check for number length (if need slice it)

                  feeValue = 15000; // TODO how to get this value

                  totalUnspent = unspents.reduce(function (summ, _ref4) {
                    var satoshis = _ref4.satoshis;
                    return summ + satoshis;
                  }, 0);
                  skipValue = totalUnspent - fundValue - feeValue;


                  unspents.forEach(function (_ref5) {
                    var txid = _ref5.txid,
                        vout = _ref5.vout;
                    return tx.addInput(txid, vout);
                  });
                  tx.addOutput(scriptAddress, fundValue);
                  tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), skipValue);
                  tx.inputs.forEach(function (input, index) {
                    tx.sign(index, _swap2.default.services.auth.accounts.btc);
                  });

                  txRaw = tx.buildIncomplete();


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId());
                  }
                  console.log(txRaw);
                  _context2.prev = 17;
                  _context2.next = 20;
                  return _this2.broadcastTx(txRaw.toHex());

                case 20:
                  result = _context2.sent;


                  resolve(result);
                  _context2.next = 27;
                  break;

                case 24:
                  _context2.prev = 24;
                  _context2.t0 = _context2['catch'](17);

                  reject(_context2.t0);

                case 27:
                  _context2.next = 32;
                  break;

                case 29:
                  _context2.prev = 29;
                  _context2.t1 = _context2['catch'](0);

                  reject(_context2.t1);

                case 32:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 29], [17, 24]]);
        }));

        return function (_x3, _x4) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object|string} data - scriptValues or wallet address
     * @returns {Promise.<void>}
     */

  }, {
    key: 'getBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(data) {
        var address, _createScript3, scriptAddress, unspents, totalUnspent;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                address = void 0;

                if (!(typeof data === 'string')) {
                  _context3.next = 5;
                  break;
                }

                address = data;
                _context3.next = 11;
                break;

              case 5:
                if (!((typeof data === 'undefined' ? 'undefined' : (0, _typeof3.default)(data)) === 'object')) {
                  _context3.next = 10;
                  break;
                }

                _createScript3 = this.createScript(data), scriptAddress = _createScript3.scriptAddress;


                address = scriptAddress;
                _context3.next = 11;
                break;

              case 10:
                throw new Error('Wrong data type');

              case 11:
                _context3.next = 13;
                return this.fetchUnspents(address);

              case 13:
                unspents = _context3.sent;
                totalUnspent = unspents && unspents.length && unspents.reduce(function (summ, _ref7) {
                  var satoshis = _ref7.satoshis;
                  return summ + satoshis;
                }, 0) || 0;
                return _context3.abrupt('return', totalUnspent);

              case 16:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getBalance(_x5) {
        return _ref6.apply(this, arguments);
      }

      return getBalance;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawRawTransaction',
    value: function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(data, isRefund) {
        var scriptValues, secret, _createScript4, script, scriptAddress, tx, unspents, feeValue, totalUnspent, txRaw;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                scriptValues = data.scriptValues, secret = data.secret;
                _createScript4 = this.createScript(scriptValues), script = _createScript4.script, scriptAddress = _createScript4.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(this.network);
                _context4.next = 5;
                return this.fetchUnspents(scriptAddress);

              case 5:
                unspents = _context4.sent;
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref9) {
                  var satoshis = _ref9.satoshis;
                  return summ + satoshis;
                }, 0);


                if (isRefund) {
                  tx.setLockTime(scriptValues.lockTime);
                }

                unspents.forEach(function (_ref10) {
                  var txid = _ref10.txid,
                      vout = _ref10.vout;
                  return tx.addInput(txid, vout, 0xfffffffe);
                });
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), totalUnspent - feeValue);

                txRaw = tx.buildIncomplete();


                this._signTransaction({
                  script: script,
                  secret: secret,
                  txRaw: txRaw
                });

                return _context4.abrupt('return', txRaw);

              case 14:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getWithdrawRawTransaction(_x6, _x7) {
        return _ref8.apply(this, arguments);
      }

      return getWithdrawRawTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'getWithdrawHexTransaction',
    value: function () {
      var _ref11 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(data, isRefund) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getWithdrawRawTransaction(data, isRefund);

              case 2:
                txRaw = _context5.sent;
                return _context5.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getWithdrawHexTransaction(_x8, _x9) {
        return _ref11.apply(this, arguments);
      }

      return getWithdrawHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundRawTransaction',
    value: function getRefundRawTransaction(data) {
      return this.getWithdrawRawTransaction(data, true);
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @returns {Promise}
     */

  }, {
    key: 'getRefundHexTransaction',
    value: function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(data) {
        var txRaw;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getRefundRawTransaction(data);

              case 2:
                txRaw = _context6.sent;
                return _context6.abrupt('return', txRaw.toHex());

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getRefundHexTransaction(_x10) {
        return _ref12.apply(this, arguments);
      }

      return getRefundHexTransaction;
    }()

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @param {boolean} isRefund
     * @returns {Promise}
     */

  }, {
    key: 'withdraw',
    value: function withdraw(data, handleTransactionHash, isRefund) {
      var _this3 = this;

      return new _promise2.default(function () {
        var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
          var txRaw, result;
          return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return _this3.getWithdrawRawTransaction(data, isRefund);

                case 3:
                  txRaw = _context7.sent;


                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(txRaw.getId());
                  }

                  _context7.next = 7;
                  return _this3.broadcastTx(txRaw.toHex());

                case 7:
                  result = _context7.sent;


                  resolve(result);
                  _context7.next = 14;
                  break;

                case 11:
                  _context7.prev = 11;
                  _context7.t0 = _context7['catch'](0);

                  reject(_context7.t0);

                case 14:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7, _this3, [[0, 11]]);
        }));

        return function (_x11, _x12) {
          return _ref13.apply(this, arguments);
        };
      }());
    }

    /**
     *
     * @param {object} data
     * @param {object} data.scriptValues
     * @param {string} data.secret
     * @param {function} handleTransactionHash
     * @returns {Promise}
     */

  }, {
    key: 'refund',
    value: function refund(data, handleTransactionHash) {
      return this.withdraw(data, handleTransactionHash, true);
    }
  }]);
  return BtcSwap;
}(_swap.SwapInterface);

exports.default = BtcSwap;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1088 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BTC2ETHTOKEN = exports.ETHTOKEN2BTC = exports.BTC2ETH = exports.ETH2BTC = undefined;

var _ETH2BTC = __webpack_require__(1089);

var _ETH2BTC2 = _interopRequireDefault(_ETH2BTC);

var _BTC2ETH = __webpack_require__(1090);

var _BTC2ETH2 = _interopRequireDefault(_BTC2ETH);

var _ETHTOKEN2BTC = __webpack_require__(1100);

var _ETHTOKEN2BTC2 = _interopRequireDefault(_ETHTOKEN2BTC);

var _BTC2ETHTOKEN = __webpack_require__(1101);

var _BTC2ETHTOKEN2 = _interopRequireDefault(_BTC2ETHTOKEN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ETH2BTC = _ETH2BTC2.default;
exports.BTC2ETH = _BTC2ETH2.default;
exports.ETHTOKEN2BTC = _ETHTOKEN2BTC2.default;
exports.BTC2ETHTOKEN = _BTC2ETHTOKEN2.default;

/***/ }),
/* 1089 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(167);

var _get3 = _interopRequireDefault(_get2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ETH2BTC = function (_Flow) {
  (0, _inherits3.default)(ETH2BTC, _Flow);
  (0, _createClass3.default)(ETH2BTC, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.eth + '2' + _swap.constants.COINS.btc;
    }
  }]);

  function ETH2BTC(swap) {
    (0, _classCallCheck3.default)(this, ETH2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ETH2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC)).call(this, swap));

    _this._flowName = ETH2BTC.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isMeSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      ethSwapCreationTransactionHash: null,
      isEthContractFunded: false,

      secret: null,
      isEthClosed: false,

      isEthWithdrawn: false,
      isBtcWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false
    };

    (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(ETH2BTC, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(ETH2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETH2BTC.prototype), '_persistState', this).call(this);

      // console.log('START GETTING SECRET')
      //
      // this.ethSwap.getSecret({
      //   participantAddress: this.swap.participant.eth.address,
      // })
      //   .then((res) => {
      //     console.log('SECRET', res)
      //   })
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Sign swap to start

      function () {
        // this.sign()
      },

      // 2. Wait participant create, fund BTC Script

      function () {
        flow.swap.room.once('create btc script', function (_ref) {
          var scriptValues = _ref.scriptValues;

          flow.finishStep({
            secretHash: scriptValues.secretHash,
            btcScriptValues: scriptValues
          });
        });
      },

      // 3. Verify BTC Script

      function () {
        // this.verifyBtcScript()
      },

      // 4. Check balance

      function () {
        _this2.syncBalance();
      },

      // 5. Create ETH Contract

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, participant, buyAmount, sellAmount, utcNow, getLockTime, scriptCheckResult, swapData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 1;
                }; // 1 hour from now

                _context.next = 5;
                return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                  value: buyAmount,
                  recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  lockTime: getLockTime()
                });

              case 5:
                scriptCheckResult = _context.sent;

                if (!scriptCheckResult) {
                  _context.next = 10;
                  break;
                }

                console.error('Btc script check error:', scriptCheckResult);
                flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                return _context.abrupt('return');

              case 10:

                console.log('BUG check');

                swapData = {
                  participantAddress: participant.eth.address,
                  secretHash: flow.state.secretHash,
                  amount: sellAmount
                };
                _context.next = 14;
                return _this2.ethSwap.create(swapData, function (hash) {
                  flow.setState({
                    ethSwapCreationTransactionHash: hash
                  });
                });

              case 14:

                console.log('BUG create');

                flow.swap.room.sendMessage('create eth contract');

                flow.finishStep({
                  isEthContractFunded: true
                });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })),

      // 6. Wait participant withdraw

      function () {
        var participant = flow.swap.participant;

        var timer = void 0;

        var checkSecretExist = function checkSecretExist() {
          timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var secret;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    secret = void 0;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return flow.ethSwap.getSecret({
                      participantAddress: participant.eth.address
                    });

                  case 4:
                    secret = _context2.sent;
                    _context2.next = 9;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2['catch'](1);

                  case 9:

                    if (secret) {
                      if (!flow.state.isEthWithdrawn) {
                        // redundant condition but who cares :D
                        flow.finishStep({
                          isEthWithdrawn: true,
                          secret: secret
                        });
                      }
                    } else {
                      checkSecretExist();
                    }

                  case 10:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2, [[1, 7]]);
          })), 20 * 1000);
        };

        checkSecretExist();

        flow.swap.room.once('finish eth withdraw', function () {
          if (!flow.state.isEthWithdrawn) {
            clearTimeout(timer);
            timer = null;

            flow.finishStep({
              isEthWithdrawn: true
            });
          }
        });
      },

      // 7. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var participant, _flow$state, secret, isEthClosed, btcScriptValues, balance;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                participant = flow.swap.participant;
                _flow$state = flow.state, secret = _flow$state.secret, isEthClosed = _flow$state.isEthClosed, btcScriptValues = _flow$state.btcScriptValues;

                if (btcScriptValues) {
                  _context3.next = 5;
                  break;
                }

                console.error('There is no "btcScriptValues" in state. No way to continue swap...');
                return _context3.abrupt('return');

              case 5:
                if (secret) {
                  _context3.next = 17;
                  break;
                }

                _context3.prev = 6;
                _context3.next = 9;
                return flow.ethSwap.getSecret({
                  participantAddress: participant.eth.address
                });

              case 9:
                secret = _context3.sent;


                flow.setState({
                  secret: secret
                });
                _context3.next = 17;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3['catch'](6);

                // TODO user can stuck here after page reload...
                console.error(_context3.t0);
                return _context3.abrupt('return');

              case 17:
                if (secret) {
                  _context3.next = 28;
                  break;
                }

                _context3.next = 20;
                return flow.btcSwap.getBalance(btcScriptValues);

              case 20:
                balance = _context3.sent;


                console.log('balance', balance);

                if (!(balance === 0)) {
                  _context3.next = 26;
                  break;
                }

                console.log('Look like you already did withdraw');

                flow.finishStep({
                  isBtcWithdrawn: true
                });

                return _context3.abrupt('return');

              case 26:

                console.error('FAIL! secret: ' + secret + ', balance: ' + balance);
                return _context3.abrupt('return');

              case 28:
                if (isEthClosed) {
                  _context3.next = 39;
                  break;
                }

                _context3.prev = 29;
                _context3.next = 32;
                return flow.ethSwap.close({
                  participantAddress: participant.eth.address
                });

              case 32:

                flow.setState({
                  isEthClosed: true
                });
                _context3.next = 39;
                break;

              case 35:
                _context3.prev = 35;
                _context3.t1 = _context3['catch'](29);

                // TODO notify user that smth goes wrong
                console.error(_context3.t1);
                return _context3.abrupt('return');

              case 39:
                _context3.next = 41;
                return flow.btcSwap.withdraw({
                  scriptValues: flow.state.btcScriptValues,
                  secret: secret
                }, function (hash) {
                  flow.setState({
                    btcSwapWithdrawTransactionHash: hash
                  });
                });

              case 41:

                flow.finishStep({
                  isBtcWithdrawn: true
                });

              case 42:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2, [[6, 13], [29, 35]]);
      })),

      // 8. Finish

      function () {}];
    }
  }, {
    key: 'sign',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var _this3 = this;

        var participant;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                participant = this.swap.participant;


                this.setState({
                  isSignFetching: true
                });

                _context4.next = 4;
                return this.ethSwap.sign({
                  participantAddress: participant.eth.address
                }, function (signTransactionHash) {
                  _this3.setState({
                    signTransactionHash: signTransactionHash
                  });
                });

              case 4:

                this.swap.room.sendMessage('swap sign');

                this.finishStep({
                  isMeSigned: true
                });

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function sign() {
        return _ref5.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: 'verifyBtcScript',
    value: function verifyBtcScript() {
      this.finishStep({
        btcScriptVerified: true
      });
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context5.next = 4;
                return this.ethSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

              case 4:
                balance = _context5.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  });
                } else {
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function syncBalance() {
        return _ref6.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this4 = this;

      var participant = this.swap.participant;


      this.ethSwap.refund({
        participantAddress: participant.eth.address
      }, function (hash) {
        _this4.setState({
          refundTransactionHash: hash
        });
      }).then(function () {
        _this4.setState({
          isRefunded: true
        });
      });
    }
  }]);
  return ETH2BTC;
}(_swap3.Flow);

exports.default = ETH2BTC;

/***/ }),
/* 1090 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(167);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(432);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2ETH = function (_Flow) {
  (0, _inherits3.default)(BTC2ETH, _Flow);
  (0, _createClass3.default)(BTC2ETH, null, [{
    key: 'getName',
    value: function getName() {
      return _swap.constants.COINS.btc + '2' + _swap.constants.COINS.eth;
    }
  }]);

  function BTC2ETH(swap) {
    (0, _classCallCheck3.default)(this, BTC2ETH);

    var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETH.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH)).call(this, swap));

    _this._flowName = BTC2ETH.getName();

    _this.ethSwap = _swap2.default.swaps[_swap.constants.COINS.eth];
    _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];
    _this.myBtcAddress = _swap2.default.services.auth.accounts.btc.getAddress();

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionHash: null,
      isSignFetching: false,
      isParticipantSigned: false,

      btcScriptCreatingTransactionHash: null,
      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      isEthContractFunded: false,

      ethSwapWithdrawTransactionHash: null,
      isEthWithdrawn: false,

      refundTransactionHash: null,
      isRefunded: false
    };

    (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistSteps', _this).call(_this);
    _this._persistState();
    return _this;
  }

  (0, _createClass3.default)(BTC2ETH, [{
    key: '_persistState',
    value: function _persistState() {
      (0, _get3.default)(BTC2ETH.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETH.prototype), '_persistState', this).call(this);

      // this.ethSwap.getBalance({
      //   ownerAddress: this.swap.participant.eth.address,
      // })
      //   .then((balance) => {
      //     console.log('balance:', balance)
      //   })
    }
  }, {
    key: '_getSteps',
    value: function _getSteps() {
      var _this2 = this;

      var flow = this;

      return [

      // 1. Signs

      function () {
        flow.swap.room.once('swap sign', function () {
          flow.finishStep({
            isParticipantSigned: true
          });
        });
      },

      // 2. Create secret, secret hash

      function () {
        // this.submitSecret()
      },

      // 3. Check balance

      function () {
        _this2.syncBalance();
      },

      // 4. Create BTC Script, fund, notify participant

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _flow$swap, sellAmount, participant, utcNow, getLockTime, scriptValues;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;

                // TODO move this somewhere!

                utcNow = function utcNow() {
                  return Math.floor(Date.now() / 1000);
                };

                getLockTime = function getLockTime() {
                  return utcNow() + 3600 * 3;
                }; // 3 hours from now

                scriptValues = {
                  secretHash: flow.state.secretHash,
                  ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                  recipientPublicKey: participant.btc.publicKey,
                  lockTime: getLockTime()
                };
                _context.next = 6;
                return flow.btcSwap.fundScript({
                  scriptValues: scriptValues,
                  amount: sellAmount
                }, function (hash) {
                  flow.setState({
                    btcScriptCreatingTransactionHash: hash
                  });
                });

              case 6:

                console.log('BUG fund');

                flow.swap.room.sendMessage('create btc script', {
                  scriptValues: scriptValues
                });

                flow.finishStep({
                  isBtcScriptFunded: true,
                  btcScriptValues: scriptValues
                });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })),

      // 5. Wait participant creates ETH Contract

      function () {
        var participant = flow.swap.participant;

        var timer = void 0;

        var checkEthBalance = function checkEthBalance() {
          timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var balance;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return flow.ethSwap.getBalance({
                      ownerAddress: participant.eth.address
                    });

                  case 2:
                    balance = _context2.sent;


                    if (balance > 0) {
                      if (!flow.state.isEthContractFunded) {
                        // redundant condition but who cares :D
                        flow.finishStep({
                          isEthContractFunded: true
                        });
                      }
                    } else {
                      checkEthBalance();
                    }

                  case 4:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, _this2);
          })), 20 * 1000);
        };

        checkEthBalance();

        flow.swap.room.once('create eth contract', function () {
          if (!flow.state.isEthContractFunded) {
            clearTimeout(timer);
            timer = null;

            flow.finishStep({
              isEthContractFunded: true
            });
          }
        });
      },

      // 6. Withdraw

      (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                data = {
                  ownerAddress: participant.eth.address,
                  secret: flow.state.secret
                };
                _context3.next = 4;
                return flow.ethSwap.checkBalance({
                  ownerAddress: participant.eth.address,
                  expectedValue: buyAmount
                });

              case 4:
                balanceCheckResult = _context3.sent;

                if (!balanceCheckResult) {
                  _context3.next = 9;
                  break;
                }

                console.error('Eth balance check error:', balanceCheckResult);
                flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                return _context3.abrupt('return');

              case 9:
                _context3.next = 11;
                return flow.ethSwap.withdraw(data, function (hash) {
                  flow.setState({
                    ethSwapWithdrawTransactionHash: hash
                  });
                });

              case 11:

                flow.swap.room.sendMessage('finish eth withdraw');

                flow.finishStep({
                  isEthWithdrawn: true
                });

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      })),

      // 7. Finish

      function () {}];
    }
  }, {
    key: 'submitSecret',
    value: function submitSecret(secret) {
      var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

      this.finishStep({
        secret: secret,
        secretHash: secretHash
      });
    }
  }, {
    key: 'syncBalance',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var sellAmount, balance, isEnoughMoney;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                sellAmount = this.swap.sellAmount;


                this.setState({
                  isBalanceFetching: true
                });

                _context4.next = 4;
                return this.btcSwap.fetchBalance(this.myBtcAddress);

              case 4:
                balance = _context4.sent;
                isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                if (isEnoughMoney) {
                  this.finishStep({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: true
                  });
                } else {
                  this.setState({
                    balance: balance,
                    isBalanceFetching: false,
                    isBalanceEnough: false
                  });
                }

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function syncBalance() {
        return _ref4.apply(this, arguments);
      }

      return syncBalance;
    }()
  }, {
    key: 'tryRefund',
    value: function tryRefund() {
      var _this3 = this;

      this.btcSwap.refund({
        scriptValues: this.state.btcScriptValues,
        secret: this.state.secret
      }, function (hash) {
        _this3.setState({
          refundTransactionHash: hash
        });
      }).then(function () {
        _this3.setState({
          isRefunded: true
        });
      });
    }
  }]);
  return BTC2ETH;
}(_swap3.Flow);

exports.default = BTC2ETH;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(167);

var _get3 = _interopRequireDefault(_get2);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tokenName) {
  var ETHTOKEN2BTC = function (_Flow) {
    (0, _inherits3.default)(ETHTOKEN2BTC, _Flow);
    (0, _createClass3.default)(ETHTOKEN2BTC, null, [{
      key: 'getName',
      value: function getName() {
        return tokenName.toUpperCase() + '2' + _swap.constants.COINS.btc;
      }
    }]);

    function ETHTOKEN2BTC(swap) {
      (0, _classCallCheck3.default)(this, ETHTOKEN2BTC);

      var _this = (0, _possibleConstructorReturn3.default)(this, (ETHTOKEN2BTC.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC)).call(this, swap));

      _this._flowName = ETHTOKEN2BTC.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      if (!_this.ethTokenSwap) {
        throw new Error('ETHTOKEN2BTC: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('ETHTOKEN2BTC: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isMeSigned: false,

        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        ethSwapCreationTransactionHash: null,
        isEthContractFunded: false,

        secret: null,
        isEthClosed: false,

        isEthWithdrawn: false,
        isBtcWithdrawn: false,

        refundTransactionHash: null
      };

      (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(ETHTOKEN2BTC, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(ETHTOKEN2BTC.prototype.__proto__ || (0, _getPrototypeOf2.default)(ETHTOKEN2BTC.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;

        return [

        // 1. Sign swap to start

        function () {
          // this.sign()
        },

        // 2. Wait participant create, fund BTC Script

        function () {
          flow.swap.room.once('create btc script', function (_ref) {
            var scriptValues = _ref.scriptValues;

            flow.finishStep({
              secretHash: scriptValues.secretHash,
              btcScriptValues: scriptValues
            });
          });
        },

        // 3. Verify BTC Script

        function () {
          // this.verifyBtcScript()
        },

        // 4. Check balance

        function () {
          _this2.syncBalance();
        },

        // 5. Create ETH Contract

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, participant, buyAmount, sellAmount, utcNow, getLockTime, scriptCheckResult, swapData;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, participant = _flow$swap.participant, buyAmount = _flow$swap.buyAmount, sellAmount = _flow$swap.sellAmount;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 1;
                  }; // 1 hour from now

                  _context.next = 5;
                  return flow.btcSwap.checkScript(flow.state.btcScriptValues, {
                    value: buyAmount,
                    recipientPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                    lockTime: getLockTime()
                  });

                case 5:
                  scriptCheckResult = _context.sent;

                  if (!scriptCheckResult) {
                    _context.next = 10;
                    break;
                  }

                  console.error('Btc script check error:', scriptCheckResult);
                  flow.swap.events.dispatch('btc script check error', scriptCheckResult);
                  return _context.abrupt('return');

                case 10:
                  swapData = {
                    participantAddress: participant.eth.address,
                    secretHash: flow.state.secretHash,
                    amount: sellAmount
                  };
                  _context.next = 13;
                  return flow.ethTokenSwap.approve({
                    amount: sellAmount
                  });

                case 13:
                  _context.next = 15;
                  return flow.ethTokenSwap.create(swapData, function (hash) {
                    flow.setState({
                      ethSwapCreationTransactionHash: hash
                    });
                  });

                case 15:

                  flow.swap.room.sendMessage('create eth contract');

                  flow.finishStep({
                    isEthContractFunded: true
                  });

                case 17:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 6. Wait participant withdraw

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          var checkSecretExist = function checkSecretExist() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var secret;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      secret = void 0;
                      _context2.prev = 1;
                      _context2.next = 4;
                      return flow.ethTokenSwap.getSecret({
                        participantAddress: participant.eth.address
                      });

                    case 4:
                      secret = _context2.sent;
                      _context2.next = 9;
                      break;

                    case 7:
                      _context2.prev = 7;
                      _context2.t0 = _context2['catch'](1);

                    case 9:

                      if (secret) {
                        if (!flow.state.isEthWithdrawn) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthWithdrawn: true,
                            secret: secret
                          });
                        }
                      } else {
                        checkSecretExist();
                      }

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2, [[1, 7]]);
            })), 20 * 1000);
          };

          checkSecretExist();

          flow.swap.room.once('finish eth withdraw', function () {
            if (!flow.state.isEthWithdrawn) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthWithdrawn: true
              });
            }
          });
        },

        // 7. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var participant, _flow$state, secret, isEthClosed, data;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  participant = flow.swap.participant;
                  _flow$state = flow.state, secret = _flow$state.secret, isEthClosed = _flow$state.isEthClosed;
                  data = {
                    participantAddress: participant.eth.address

                    // if there is no secret in state then request it
                  };

                  if (secret) {
                    _context3.next = 15;
                    break;
                  }

                  _context3.prev = 4;
                  _context3.next = 7;
                  return flow.ethTokenSwap.getSecret(data);

                case 7:
                  secret = _context3.sent;


                  flow.setState({
                    secret: secret
                  });
                  _context3.next = 15;
                  break;

                case 11:
                  _context3.prev = 11;
                  _context3.t0 = _context3['catch'](4);

                  // TODO notify user that smth goes wrong
                  console.error(_context3.t0);
                  return _context3.abrupt('return');

                case 15:
                  if (secret) {
                    _context3.next = 18;
                    break;
                  }

                  console.error('Secret required! Got ' + secret);
                  return _context3.abrupt('return');

                case 18:
                  if (isEthClosed) {
                    _context3.next = 29;
                    break;
                  }

                  _context3.prev = 19;
                  _context3.next = 22;
                  return flow.ethTokenSwap.close(data);

                case 22:

                  flow.setState({
                    isEthClosed: true
                  });
                  _context3.next = 29;
                  break;

                case 25:
                  _context3.prev = 25;
                  _context3.t1 = _context3['catch'](19);

                  // TODO notify user that smth goes wrong
                  console.error(_context3.t1);
                  return _context3.abrupt('return');

                case 29:
                  _context3.next = 31;
                  return flow.btcSwap.withdraw({
                    scriptValues: flow.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    flow.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 31:

                  flow.finishStep({
                    isBtcWithdrawn: true
                  });

                case 32:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2, [[4, 11], [19, 25]]);
        })),

        // 8. Finish

        function () {}];
      }
    }, {
      key: 'sign',
      value: function () {
        var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var _this3 = this;

          var participant;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  participant = this.swap.participant;


                  this.setState({
                    isSignFetching: true
                  });

                  _context4.next = 4;
                  return this.ethTokenSwap.sign({
                    participantAddress: participant.eth.address
                  }, function (hash) {
                    _this3.setState({
                      hash: hash
                    });
                  });

                case 4:

                  this.swap.room.sendMessage('swap sign');

                  this.finishStep({
                    isMeSigned: true
                  });

                case 6:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function sign() {
          return _ref5.apply(this, arguments);
        }

        return sign;
      }()
    }, {
      key: 'verifyBtcScript',
      value: function verifyBtcScript() {
        this.finishStep({
          btcScriptVerified: true
        });
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context5.next = 4;
                  return this.ethTokenSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

                case 4:
                  balance = _context5.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function syncBalance() {
          return _ref6.apply(this, arguments);
        }

        return syncBalance;
      }()
    }, {
      key: 'tryRefund',
      value: function () {
        var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
          var _this4 = this;

          var participant, _state, secret, btcScriptValues;

          return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  participant = this.swap.participant;
                  _state = this.state, secret = _state.secret, btcScriptValues = _state.btcScriptValues;


                  secret = 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078';

                  _context6.prev = 3;

                  console.log('TRYING REFUND!');

                  _context6.prev = 5;
                  _context6.next = 8;
                  return this.ethTokenSwap.refund({
                    participantAddress: participant.eth.address
                  }, function (hash) {
                    _this4.setState({
                      refundTransactionHash: hash
                    });
                  });

                case 8:

                  console.log('SUCCESS REFUND!');
                  return _context6.abrupt('return');

                case 12:
                  _context6.prev = 12;
                  _context6.t0 = _context6['catch'](5);

                  console.err('REFUND FAILED!', _context6.t0);

                case 15:
                  _context6.next = 20;
                  break;

                case 17:
                  _context6.prev = 17;
                  _context6.t1 = _context6['catch'](3);

                  console.error('Mbe it\'s still under lockTime?! ' + _context6.t1);

                case 20:

                  if (!btcScriptValues) {
                    console.error('You can\'t do refund w/o btc script values! Try wait until lockTime expires on eth contract!');
                  }

                  if (secret) {
                    _context6.next = 32;
                    break;
                  }

                  _context6.prev = 22;
                  _context6.next = 25;
                  return this.ethTokenSwap.getSecret(data);

                case 25:
                  secret = _context6.sent;
                  _context6.next = 32;
                  break;

                case 28:
                  _context6.prev = 28;
                  _context6.t2 = _context6['catch'](22);

                  console.error('Can\'t receive secret from contract');
                  return _context6.abrupt('return');

                case 32:

                  console.log('TRYING WITHDRAW!');

                  _context6.prev = 33;
                  _context6.next = 36;
                  return this.btcSwap.withdraw({
                    scriptValues: this.state.btcScriptValues,
                    secret: secret
                  }, function (hash) {
                    _this4.setState({
                      btcSwapWithdrawTransactionHash: hash
                    });
                  });

                case 36:

                  console.log('SUCCESS WITHDRAW!');
                  _context6.next = 42;
                  break;

                case 39:
                  _context6.prev = 39;
                  _context6.t3 = _context6['catch'](33);

                  console.error('WITHDRAW FAILED!', _context6.t3);

                case 42:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6, this, [[3, 17], [5, 12], [22, 28], [33, 39]]);
        }));

        function tryRefund() {
          return _ref7.apply(this, arguments);
        }

        return tryRefund;
      }()
    }]);
    return ETHTOKEN2BTC;
  }(_swap3.Flow);

  return ETHTOKEN2BTC;
};

/***/ }),
/* 1101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(72);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(73);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(39);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(43);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(44);

var _inherits3 = _interopRequireDefault(_inherits2);

var _get2 = __webpack_require__(167);

var _get3 = _interopRequireDefault(_get2);

var _crypto = __webpack_require__(432);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tokenName) {
  var BTC2ETHTOKEN = function (_Flow) {
    (0, _inherits3.default)(BTC2ETHTOKEN, _Flow);
    (0, _createClass3.default)(BTC2ETHTOKEN, null, [{
      key: 'getName',
      value: function getName() {
        return _swap.constants.COINS.btc + '2' + tokenName.toUpperCase();
      }
    }]);

    function BTC2ETHTOKEN(swap) {
      (0, _classCallCheck3.default)(this, BTC2ETHTOKEN);

      var _this = (0, _possibleConstructorReturn3.default)(this, (BTC2ETHTOKEN.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN)).call(this, swap));

      _this._flowName = BTC2ETHTOKEN.getName();

      _this.ethTokenSwap = _swap2.default.swaps[tokenName.toUpperCase()];
      _this.btcSwap = _swap2.default.swaps[_swap.constants.COINS.btc];

      if (!_this.ethTokenSwap) {
        throw new Error('BTC2ETH: "ethTokenSwap" of type object required');
      }
      if (!_this.btcSwap) {
        throw new Error('BTC2ETH: "btcSwap" of type object required');
      }

      _this.state = {
        step: 0,

        signTransactionHash: null,
        isSignFetching: false,
        isParticipantSigned: false,

        btcScriptCreatingTransactionHash: null,
        secretHash: null,
        btcScriptValues: null,

        btcScriptVerified: false,

        isBalanceFetching: false,
        isBalanceEnough: false,
        balance: null,

        isEthContractFunded: false,

        ethSwapWithdrawTransactionHash: null,
        isEthWithdrawn: false
      };

      (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistSteps', _this).call(_this);
      _this._persistState();
      return _this;
    }

    (0, _createClass3.default)(BTC2ETHTOKEN, [{
      key: '_persistState',
      value: function _persistState() {
        (0, _get3.default)(BTC2ETHTOKEN.prototype.__proto__ || (0, _getPrototypeOf2.default)(BTC2ETHTOKEN.prototype), '_persistState', this).call(this);
      }
    }, {
      key: '_getSteps',
      value: function _getSteps() {
        var _this2 = this;

        var flow = this;

        return [

        // 1. Signs

        function () {
          flow.swap.room.once('swap sign', function () {
            flow.finishStep({
              isParticipantSigned: true
            });
          });
        },

        // 2. Create secret, secret hash

        function () {
          // this.submitSecret()
        },

        // 3. Check balance

        function () {
          _this2.syncBalance();
        },

        // 4. Create BTC Script, fund, notify participant

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var _flow$swap, sellAmount, participant, utcNow, getLockTime, scriptValues;

          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _flow$swap = flow.swap, sellAmount = _flow$swap.sellAmount, participant = _flow$swap.participant;

                  // TODO move this somewhere!

                  utcNow = function utcNow() {
                    return Math.floor(Date.now() / 1000);
                  };

                  getLockTime = function getLockTime() {
                    return utcNow() + 3600 * 3;
                  }; // 3 hours from now

                  scriptValues = {
                    secretHash: flow.state.secretHash,
                    ownerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                    recipientPublicKey: participant.btc.publicKey,
                    lockTime: getLockTime()
                  };
                  _context.next = 6;
                  return flow.btcSwap.fundScript({
                    scriptValues: scriptValues,
                    amount: sellAmount
                  }, function (hash) {
                    flow.setState({
                      btcScriptCreatingTransactionHash: hash
                    });
                  });

                case 6:

                  flow.swap.room.sendMessage('create btc script', {
                    scriptValues: scriptValues
                  });

                  flow.finishStep({
                    isBtcScriptFunded: true,
                    btcScriptValues: scriptValues
                  });

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        })),

        // 5. Wait participant creates ETH Contract

        function () {
          var participant = flow.swap.participant;

          var timer = void 0;

          var checkEthBalance = function checkEthBalance() {
            timer = setTimeout((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
              var balance;
              return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return flow.ethTokenSwap.getBalance({
                        ownerAddress: participant.eth.address
                      });

                    case 2:
                      balance = _context2.sent;


                      if (balance > 0) {
                        if (!flow.state.isEthContractFunded) {
                          // redundant condition but who cares :D
                          flow.finishStep({
                            isEthContractFunded: true
                          });
                        }
                      } else {
                        checkEthBalance();
                      }

                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee2, _this2);
            })), 20 * 1000);
          };

          checkEthBalance();

          flow.swap.room.once('create eth contract', function () {
            if (!flow.state.isEthContractFunded) {
              clearTimeout(timer);
              timer = null;

              flow.finishStep({
                isEthContractFunded: true
              });
            }
          });
        },

        // 6. Withdraw

        (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
          var _flow$swap2, buyAmount, participant, data, balanceCheckResult;

          return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _flow$swap2 = flow.swap, buyAmount = _flow$swap2.buyAmount, participant = _flow$swap2.participant;
                  data = {
                    ownerAddress: participant.eth.address,
                    secret: flow.state.secret
                  };
                  _context3.next = 4;
                  return flow.ethTokenSwap.checkBalance({
                    ownerAddress: participant.eth.address,
                    expectedValue: buyAmount
                  });

                case 4:
                  balanceCheckResult = _context3.sent;

                  if (!balanceCheckResult) {
                    _context3.next = 9;
                    break;
                  }

                  console.error('Eth balance check error:', balanceCheckResult);
                  flow.swap.events.dispatch('eth balance check error', balanceCheckResult);
                  return _context3.abrupt('return');

                case 9:
                  _context3.next = 11;
                  return flow.ethTokenSwap.withdraw(data, function (hash) {
                    flow.setState({
                      ethSwapWithdrawTransactionHash: hash
                    });
                  });

                case 11:

                  flow.swap.room.sendMessage('finish eth withdraw');

                  flow.finishStep({
                    isEthWithdrawn: true
                  });

                case 13:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        })),

        // 7. Finish

        function () {}];
      }
    }, {
      key: 'submitSecret',
      value: function submitSecret(secret) {
        var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

        this.finishStep({
          secret: secret,
          secretHash: secretHash
        });
      }
    }, {
      key: 'syncBalance',
      value: function () {
        var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
          var sellAmount, balance, isEnoughMoney;
          return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  sellAmount = this.swap.sellAmount;


                  this.setState({
                    isBalanceFetching: true
                  });

                  _context4.next = 4;
                  return this.btcSwap.fetchBalance(_swap2.default.services.auth.accounts.btc.getAddress());

                case 4:
                  balance = _context4.sent;
                  isEnoughMoney = sellAmount.isLessThanOrEqualTo(balance);


                  if (isEnoughMoney) {
                    this.finishStep({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: true
                    });
                  } else {
                    this.setState({
                      balance: balance,
                      isBalanceFetching: false,
                      isBalanceEnough: false
                    });
                  }

                case 7:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function syncBalance() {
          return _ref4.apply(this, arguments);
        }

        return syncBalance;
      }()
    }]);
    return BTC2ETHTOKEN;
  }(_swap3.Flow);

  return BTC2ETHTOKEN;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2).Buffer))

/***/ }),
/* 1102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(1103);

var _Header2 = _interopRequireDefault(_Header);

var _WidthContainer = __webpack_require__(168);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Logo = __webpack_require__(436);

var _Logo2 = _interopRequireDefault(_Logo);

var _Nav = __webpack_require__(1108);

var _Nav2 = _interopRequireDefault(_Nav);

var _User = __webpack_require__(1110);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_dec = (0, _reactCssModules2.default)(_Header2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { styleName: 'header' },
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'container' },
          _react2.default.createElement(_Logo2.default, { withLink: true }),
          _react2.default.createElement(_Nav2.default, null),
          _react2.default.createElement(_User2.default, null)
        )
      );
    }
  }]);
  return Header;
}(_react.Component)) || _class);
exports.default = Header;

/***/ }),
/* 1103 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"qZaPkJ","container":"_1AYBnf"};

/***/ }),
/* 1104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_3BXipS","widthContainerIn":"_3Igl7j","relative":"_3gxpYb","fullHeight":"_1GF4SW","centeringContent":"_3RUiHP","main":"_3aO2EZ"};

/***/ }),
/* 1105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"kQLHsU"};

/***/ }),
/* 1106 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo_3436dc.svg";

/***/ }),
/* 1107 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo-colored_eb1f60.svg";

/***/ }),
/* 1108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(1109);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Orders', link: _helpers.links.home }, { title: 'Balances', link: _helpers.links.balance }, { title: 'History', link: _helpers.links.history }];

var Nav = (_dec = (0, _reactCssModules2.default)(_Nav2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Nav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.handleScrollTo = function (scrollDuration) {
      var scrollStep = -window.scrollY / (scrollDuration / 15);
      var scrollInterval = setInterval(function () {
        window.scrollY !== 0 ? window.scrollBy(0, scrollStep) : clearInterval(scrollInterval);
      }, 15);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { styleName: 'nav' },
        nav.map(function (_ref2) {
          var title = _ref2.title,
              link = _ref2.link;
          return _react2.default.createElement(
            _reactRouterDom.NavLink,
            {
              onClick: function onClick() {
                return _this2.handleScrollTo(500);
              },
              exact: true,
              key: title,
              styleName: 'link',
              to: link,
              activeClassName: _Nav2.default.active
            },
            title
          );
        })
      );
    }
  }]);
  return Nav;
}(_react.Component)) || _class);
exports.default = Nav;

/***/ }),
/* 1109 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_34R6Y0","link":"_16Gtic","active":"_2Mv-fo"};

/***/ }),
/* 1110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;
// import Question from './controls/Question/Question'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _User = __webpack_require__(1111);

var _User2 = _interopRequireDefault(_User);

var _Sound = __webpack_require__(437);

var _Sound2 = _interopRequireDefault(_Sound);

var _AddOfferButton = __webpack_require__(1112);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

var _UserAvatar = __webpack_require__(1114);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _UserTooltip = __webpack_require__(1117);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _MenuIcon = __webpack_require__(1120);

var _MenuIcon2 = _interopRequireDefault(_MenuIcon);

var _NavMobile = __webpack_require__(1123);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items'
}), _dec2 = (0, _reactCssModules2.default)(_User2.default), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = User.__proto__ || (0, _getPrototypeOf2.default)(User)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: true,
      menuVisible: false
    }, _this.handleChangeView = function () {
      _this.setState({
        view: true
      });
    }, _this.updateOrders = function () {
      _this.setState({
        orders: _swap2.default.services.orders.items
      });

      var orders = _this.state.orders;


      if (orders.length !== 0) {
        _actions2.default.feed.getFeedDataFromOrder(orders);
      }
    }, _this.handleToggleTooltip = function () {
      _this.setState({
        view: !_this.state.view
      });
    }, _this.acceptRequest = function (orderId, participantPeer) {
      var order = _swap2.default.services.orders.getByKey(orderId);

      order.acceptRequest(participantPeer);

      setTimeout(function () {
        _this.handleToggleTooltip();
      }, 800);

      _this.updateOrders();
    }, _this.soundClick = function () {
      var audio = new Audio();
      audio.src = _Sound2.default;
      audio.autoplay = true;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(User, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _swap2.default.services.orders.on('new order request', this.updateOrders);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.orders.off('new order request', this.updateOrders);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          view = _state.view,
          menuVisible = _state.menuVisible;
      var feeds = this.props.feeds;

      var mePeer = _swap2.default.services.room.peer;

      return _react2.default.createElement(
        'div',
        { styleName: 'user-cont' },
        _react2.default.createElement(_MenuIcon2.default, { onClick: function onClick() {
            return _this2.setState({ menuVisible: !menuVisible });
          } }),
        _react2.default.createElement(_NavMobile2.default, { view: menuVisible }),
        _react2.default.createElement(_AddOfferButton2.default, null),
        _react2.default.createElement(_UserAvatar2.default, {
          isToggle: this.handleToggleTooltip,
          feeds: feeds,
          mePeer: mePeer,
          soundClick: this.soundClick,
          changeView: this.handleChangeView
        }),
        view && _react2.default.createElement(_UserTooltip2.default, {
          view: view,
          feeds: feeds,
          mePeer: mePeer,
          acceptRequest: this.acceptRequest
        })
      );
    }
  }]);
  return User;
}(_react2.default.Component)) || _class) || _class);
exports.default = User;

/***/ }),
/* 1111 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user-cont":"_33Ia7P","hidden":"_3MuJfF"};

/***/ }),
/* 1112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOfferButton = __webpack_require__(1113);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddOfferButton = (_dec = (0, _reactCssModules2.default)(_AddOfferButton2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AddOfferButton, _Component);

  function AddOfferButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddOfferButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AddOfferButton.__proto__ || (0, _getPrototypeOf2.default)(AddOfferButton)).call.apply(_ref, [this].concat(args))), _this), _this.handleClick = function () {
      _actions2.default.modals.open(_helpers.constants.modals.Offer, {});
      _actions2.default.analytics.dataEvent('orderbook-click-addoffer-button');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AddOfferButton, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          {
            styleName: 'button',
            onClick: this.handleClick
          },
          'Add offer'
        ),
        _react2.default.createElement('div', {
          styleName: 'buttonMobile',
          onClick: this.handleClick
        })
      );
    }
  }]);
  return AddOfferButton;
}(_react.Component)) || _class);
exports.default = AddOfferButton;

/***/ }),
/* 1113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3-kNLg","buttonMobile":"_3jxypg"};

/***/ }),
/* 1114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserAvatar = __webpack_require__(1115);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _avatar = __webpack_require__(1116);

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = (_dec = (0, _reactCssModules2.default)(_UserAvatar2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(UserAvatar, _Component);

  function UserAvatar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserAvatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = UserAvatar.__proto__ || (0, _getPrototypeOf2.default)(UserAvatar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      feeds: null,
      animation: 'user'
    }, _this.handleClick = function () {
      var isToggle = _this.props.isToggle;


      isToggle();
      _this.setState({
        animation: 'user'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(UserAvatar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _props = this.props,
          feeds = _props.feeds,
          soundClick = _props.soundClick,
          changeView = _props.changeView;


      if (nextProps.feeds.length > feeds.length) {
        changeView();

        this.setState({
          feeds: nextProps.feeds,
          animation: 'user shake new'
        });

        setTimeout(function () {
          _this2.setState({
            animation: 'user new'
          });
        }, 820);

        soundClick();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var animation = this.state.animation;


      return _react2.default.createElement(
        'div',
        { styleName: animation, onClick: this.handleClick },
        _react2.default.createElement('img', { styleName: 'bell', src: _avatar2.default, alt: 'Bell' })
      );
    }
  }]);
  return UserAvatar;
}(_react.Component)) || _class);
exports.default = UserAvatar;

/***/ }),
/* 1115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user":"_3R8ezp","bell":"_18U74M","status":"_1EDMx_","new":"_3UWWZN","shake":"_3RMI-t"};

/***/ }),
/* 1116 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/avatar_e241ff.svg";

/***/ }),
/* 1117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(50);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserTooltip = __webpack_require__(1118);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _arrowRight = __webpack_require__(1119);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTooltip = function UserTooltip(_ref) {
  var feeds = _ref.feeds,
      mePeer = _ref.mePeer,
      acceptRequest = _ref.acceptRequest,
      view = _ref.view;
  return _react2.default.createElement(
    'div',
    { styleName: 'column' },
    view && feeds.length < 3 ? feeds.map(function (row) {
      var request = row.request,
          _row$content = row.content,
          buyAmount = _row$content.buyAmount,
          buyCurrency = _row$content.buyCurrency,
          sellAmount = _row$content.sellAmount,
          sellCurrency = _row$content.sellCurrency,
          id = row.id,
          ownerPeer = row.peer;


      return mePeer === ownerPeer && request.map(function (_ref2) {
        var peer = _ref2.peer,
            reputation = _ref2.reputation;
        return _react2.default.createElement(
          'div',
          { styleName: 'userTooltip' },
          _react2.default.createElement(
            'div',
            { key: peer },
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'User with ',
              _react2.default.createElement(
                'b',
                null,
                reputation
              ),
              ' reputation wants to swap'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'currency' },
              _react2.default.createElement(
                'span',
                null,
                buyAmount.toString(),
                ' ',
                _react2.default.createElement(
                  'span',
                  { styleName: 'coin' },
                  buyCurrency
                )
              ),
              _react2.default.createElement(
                'span',
                { styleName: 'arrow' },
                _react2.default.createElement('img', { src: _arrowRight2.default, alt: '' })
              ),
              _react2.default.createElement(
                'span',
                null,
                sellAmount.toString(),
                ' ',
                _react2.default.createElement(
                  'span',
                  { styleName: 'coin' },
                  sellCurrency
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.swap + '/' + sellCurrency + '-' + buyCurrency + '/' + id },
            _react2.default.createElement('div', { styleName: 'checked', onClick: function onClick() {
                return acceptRequest(id, peer);
              } })
          )
        );
      });
    }) : _react2.default.createElement(
      'div',
      { styleName: 'feed' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: _helpers.links.feed },
        ' Go to the feed page'
      )
    )
  );
};

UserTooltip.propTypes = {
  feeds: _propTypes2.default.array,
  mePeer: _propTypes2.default.string,
  acceptRequest: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(UserTooltip, _UserTooltip2.default, { allowMultiple: true });

/***/ }),
/* 1118 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"column":"_1gVhNf","feed":"_2nP3zE","userTooltip":"ZUrxv8","title":"_3Wmf4W","currency":"n4WzMO","coin":"FTx5Zs","arrow":"_1HGghg","checked":"Rrpe2k","icon":"hRKJDr"};

/***/ }),
/* 1119 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/arrow-right_861e95.svg";

/***/ }),
/* 1120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _MenuIcon = __webpack_require__(1121);

var _MenuIcon2 = _interopRequireDefault(_MenuIcon);

var _menu = __webpack_require__(1122);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuIcon = function MenuIcon(_ref) {
  var onClick = _ref.onClick;
  return _react2.default.createElement(
    'div',
    { styleName: 'menu', onClick: onClick },
    _react2.default.createElement('img', { src: _menu2.default, styleName: 'menuImg', alt: '' })
  );
};

exports.default = (0, _reactCssModules2.default)(MenuIcon, _MenuIcon2.default);

/***/ }),
/* 1121 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu":"_1UkgHE","menuImg":"_1J2Fju"};

/***/ }),
/* 1122 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/menu_06ffc9.svg";

/***/ }),
/* 1123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactRouterDom = __webpack_require__(50);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NavMobile = __webpack_require__(1124);

var _NavMobile2 = _interopRequireDefault(_NavMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Orders', link: _helpers.links.home }, { title: 'Balances', link: _helpers.links.balance }, { title: 'History', link: _helpers.links.history }];

var NavMobile = function NavMobile(_ref) {
  var view = _ref.view;
  return _react2.default.createElement(
    'div',
    { styleName: view ? 'nav' : 'nav hide' },
    nav.map(function (_ref2) {
      var title = _ref2.title,
          link = _ref2.link;
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          exact: true,
          key: title,
          styleName: 'link',
          to: link,
          activeClassName: _NavMobile2.default.active
        },
        title
      );
    }),
    false && _react2.default.createElement(
      'div',
      {
        key: 'Get demo money',
        styleName: 'button',
        onClick: function onClick() {
          return _actions2.default.user.getDemoMoney();
        }
      },
      'Get demo money'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(NavMobile, _NavMobile2.default, { allowMultiple: true });

/***/ }),
/* 1124 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_2cBFU2","open":"_2lEv-g","hide":"tZV82X","link":"_2-UEI7","button":"_2LQQgA"};

/***/ }),
/* 1125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Footer = __webpack_require__(1126);

var _Footer2 = _interopRequireDefault(_Footer);

var _Info = __webpack_require__(1127);

var _Info2 = _interopRequireDefault(_Info);

var _WidthContainer = __webpack_require__(168);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = (_dec = (0, _reactCssModules2.default)(_Footer2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Footer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      userOnline: 0,
      connected: false
    }, _this.handleUserJoin = function () {
      var userOnline = _this.state.userOnline;

      userOnline++;
      _this.setState({
        userOnline: userOnline
      });
    }, _this.handleUserLeft = function () {
      var userOnline = _this.state.userOnline;

      userOnline--;
      _this.setState({
        userOnline: userOnline
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Footer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      setTimeout(function () {
        var connected = _swap2.default.services.room.connection._ipfs.isOnline();

        _swap2.default.services.room.connection.on('peer joined', _this2.handleUserJoin);
        _this2.setState({
          connected: connected
        });
      }, 8000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _swap2.default.services.room.connection.off('peer joined', this.handleUserLeft);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          userOnline = _state.userOnline,
          connected = _state.connected;

      var server = _swap2.default.services.room._config.config.Addresses.Swarm[0].split('/')[2];

      return _react2.default.createElement(
        'div',
        { styleName: 'footer' },
        _react2.default.createElement(
          _WidthContainer2.default,
          { styleName: 'container' },
          _react2.default.createElement(_Info2.default, {
            serverAddress: server,
            userOnline: userOnline,
            connected: connected
          })
        )
      );
    }
  }]);
  return Footer;
}(_react.Component)) || _class);
exports.default = Footer;

/***/ }),
/* 1126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"footer":"_3I8ngW","container":"_19TQvN"};

/***/ }),
/* 1127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Info = __webpack_require__(1128);

var _Info2 = _interopRequireDefault(_Info);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Info = function Info(_ref) {
  var userOnline = _ref.userOnline,
      connected = _ref.connected,
      serverAddress = _ref.serverAddress;
  return _react2.default.createElement(
    'div',
    { styleName: 'title' },
    _react2.default.createElement(
      'span',
      { styleName: connected ? 'connect' : 'disconnect' },
      connected ? 'Connected' : 'Loading or not available'
    ),
    ' to IPFS signal ',
    serverAddress,
    ' / peers online: ',
    userOnline
  );
};

exports.default = (0, _reactCssModules2.default)(Info, _Info2.default, { allowMultiple: true });

/***/ }),
/* 1128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_1C587Y","connect":"_34nV3E","disconnect":"_2UdlK9"};

/***/ }),
/* 1129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"_3V4vPK","loader":"_37qfX_","small":"_1Cc0hi","center":"_3wUrWW","loader1":"B8rIc7","loader2":"_2dF68e","loader3":"_1fAQsv"};

/***/ }),
/* 1130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _Loader = __webpack_require__(247);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestLoader = function RequestLoader(_ref) {
  var isVisible = _ref.isVisible;
  return isVisible && _react2.default.createElement(_Loader2.default, null);
};

exports.default = (0, _redaction.connect)({
  isVisible: 'loader.isVisible'
})(RequestLoader);

/***/ }),
/* 1131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(32);

var _helpers = __webpack_require__(11);

var _modals = __webpack_require__(1132);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(1175);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalConductor = (_dec = (0, _redaction.connect)({
  modals: 'modals'
}), _dec2 = (0, _reactCssModules2.default)(_ModalConductor2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalConductor, _Component);

  function ModalConductor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalConductor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ModalConductor.__proto__ || (0, _getPrototypeOf2.default)(ModalConductor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      offsetTop: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ModalConductor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var modals = _ref2.modals;
      var offsetTop = this.state.offsetTop;


      var myOffsetTop = (0, _helpers.getPageOffset)().y;

      // When modal is showing add overflow: hidden to body and padding-right: ${scrollWidth}
      // to prevent screen from blinking
      if ((0, _keys2.default)(modals).length) {
        document.body.classList.add('withOpenedModal');
        document.body.style.paddingRight = (0, _helpers.getScrollBarWidth)() + 'px';

        if (myOffsetTop > 0) {
          this.setState({
            offsetTop: myOffsetTop
          });
        }
      } else {
        document.body.classList.remove('withOpenedModal');
        document.body.style.paddingRight = '0px';

        if (offsetTop > 0) {
          window.scrollTo(0, offsetTop);

          this.setState({
            offsetTop: 0
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var modals = this.props.modals;


      var modalNames = (0, _keys2.default)(modals);
      var areModalsExist = Boolean(modalNames.length);

      return areModalsExist && _react2.default.createElement(
        'div',
        { styleName: 'modalConductor' },
        modalNames.map(function (key) {
          var _modals$key = modals[key],
              name = _modals$key.name,
              _modals$key$data = _modals$key.data,
              data = _modals$key$data === undefined ? {} : _modals$key$data,
              zIndex = _modals$key.zIndex;


          return _react2.default.createElement(_modals2.default[name], {
            key: name,
            name: name,
            data: data,
            style: { zIndex: zIndex }
          });
        })
      );
    }
  }]);
  return ModalConductor;
}(_react.Component), _class2.propTypes = {
  modals: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = ModalConductor;

/***/ }),
/* 1132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _OfferModal = __webpack_require__(1133);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _WithdrawModal = __webpack_require__(1169);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _PrivateKeysModal = __webpack_require__(1171);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OfferModal: _OfferModal2.default,
  WithdrawModal: _WithdrawModal2.default,
  PrivateKeysModal: _PrivateKeysModal2.default
};

/***/ }),
/* 1133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _OfferModal = __webpack_require__(1134);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Modal = __webpack_require__(248);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfirmOffer = __webpack_require__(1142);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _AddOffer = __webpack_require__(1153);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_OfferModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Offer.__proto__ || (0, _getPrototypeOf2.default)(Offer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'editOffer', // editOffer / confirmOffer
      offer: {}
    }, _this.handleMoveToConfirmation = function (offer) {
      _this.setState({
        view: 'confirmOffer',
        offer: offer
      });
    }, _this.handleMoveToOfferEditing = function () {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _this.setState({
        view: 'editOffer'
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Offer, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          view = _state.view,
          offer = _state.offer;
      var name = this.props.name;


      var title = view === 'editOffer' ? 'Add offer' : 'Confirm offer';

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: title },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'editOffer' ? _react2.default.createElement(_AddOffer2.default, { initialData: offer, onNext: this.handleMoveToConfirmation }) : _react2.default.createElement(_ConfirmOffer2.default, { offer: offer, onBack: this.handleMoveToOfferEditing })
        )
      );
    }
  }]);
  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 1134 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"_2EHTMr"};

/***/ }),
/* 1135 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3d-lMl","header":"utYl-8","headerContent":"_2FzjWy","title":"_1H7w4U","uppercase":"_1XykmZ","closeButton":"_3UgYwG","contentContainer":"_2OSr4P","content":"_2SEeRQ"};

/***/ }),
/* 1136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(1137);

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);

  var props = (0, _helpers.ignoreProps)(rest, 'closePortal');

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: 'overlay' }, props),
    children
  );
};

Overlay.propTypes = {
  children: _propTypes2.default.node
};

exports.default = (0, _reactCssModules2.default)(Overlay, _Overlay2.default);

/***/ }),
/* 1137 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"a_1CO5"};

/***/ }),
/* 1138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(1139);

var _Center2 = _interopRequireDefault(_Center);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Center = function Center(_ref) {
  var children = _ref.children,
      scrollable = _ref.scrollable,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'scrollable']);

  // TODO move overflow to Modal and any other cases where it belongs
  var styleName = (0, _classnames2.default)('centringContainer', {
    'scrollable': scrollable
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest),
    _react2.default.createElement(
      'div',
      { styleName: 'centringContent' },
      children
    )
  );
};

Center.propTypes = {
  children: _propTypes2.default.node,
  scrollable: _propTypes2.default.bool
};

Center.defaultProps = {
  scrollable: false
};

exports.default = (0, _reactCssModules2.default)(Center, _Center2.default, { allowMultiple: true });

/***/ }),
/* 1139 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1uK09U","scrollable":"_1K6mUM","centringContent":"_1xMZgg"};

/***/ }),
/* 1140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(1141);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CloseIcon = function CloseIcon(_ref) {
  var whiteColor = _ref.whiteColor,
      brandColor = _ref.brandColor,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['whiteColor', 'brandColor']);

  var styleName = (0, _classnames2.default)('button', {
    'whiteColor': whiteColor,
    'brandColor': brandColor
  });

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ styleName: styleName }, rest, { role: 'closeButton' }),
    _react2.default.createElement('div', { styleName: 'icon', role: 'closeIcon' })
  );
};

CloseIcon.propTypes = {
  whiteColor: _propTypes2.default.bool,
  brandColor: _propTypes2.default.bool
};

exports.default = (0, _reactCssModules2.default)(CloseIcon, _CloseIcon2.default, { allowMultiple: true });

/***/ }),
/* 1141 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3KAFwf","whiteColor":"_1qVzDl","icon":"_2g6BBl","brandColor":"_1ZJhlM"};

/***/ }),
/* 1142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swap = __webpack_require__(12);

var _swap2 = _interopRequireDefault(_swap);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ConfirmOffer = __webpack_require__(1143);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _ButtonsInRow = __webpack_require__(1144);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

var _Coins = __webpack_require__(162);

var _Coins2 = _interopRequireDefault(_Coins);

var _Amounts = __webpack_require__(1146);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _ExchangeRate = __webpack_require__(1150);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Fee = __webpack_require__(1152);

var _Fee2 = _interopRequireDefault(_Fee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmOffer = (_dec = (0, _reactCssModules2.default)(_ConfirmOffer2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ConfirmOffer, _Component);

  function ConfirmOffer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmOffer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ConfirmOffer.__proto__ || (0, _getPrototypeOf2.default)(ConfirmOffer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buyAmount: null,
      sellAmount: null,
      sellCurrency: null,
      buyCurrency: null,
      exchangeRate: null
    }, _this.handleConfirm = function () {
      _this.createOrder();
      _actions2.default.modals.close('OfferModal');
    }, _this.createOrder = function () {
      var _this$state = _this.state,
          buyAmount = _this$state.buyAmount,
          sellAmount = _this$state.sellAmount,
          buyCurrency = _this$state.buyCurrency,
          sellCurrency = _this$state.sellCurrency;


      var data = {
        buyCurrency: '' + buyCurrency,
        sellCurrency: '' + sellCurrency,
        buyAmount: Number(buyAmount),
        sellAmount: Number(sellAmount)
      };
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _swap2.default.services.orders.create(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ConfirmOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props$offer = this.props.offer,
          sellAmount = _props$offer.sellAmount,
          buyAmount = _props$offer.buyAmount,
          sellCurrency = _props$offer.sellCurrency,
          buyCurrency = _props$offer.buyCurrency,
          exchangeRate = _props$offer.exchangeRate;

      this.setState({ sellAmount: sellAmount, buyAmount: buyAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency, exchangeRate: exchangeRate });

      if (true) {
        if (sellCurrency === 'eth' && sellAmount > 0.1) {
          this.setState({
            sellAmount: 0.1,
            buyAmount: 0.007
          });
        } else if (sellCurrency === 'btc' && sellAmount > 0.007) {
          this.setState({
            sellAmount: 0.007,
            buyAmount: 0.1
          });
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var onBack = this.props.onBack;
      var _state = this.state,
          buyAmount = _state.buyAmount,
          sellAmount = _state.sellAmount,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency,
          exchangeRate = _state.exchangeRate;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Coins2.default, { styleName: 'coins', names: [buyCurrency, sellCurrency], size: 100 }),
        _react2.default.createElement(_Amounts2.default, { buyAmount: buyAmount, sellAmount: sellAmount, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_ExchangeRate2.default, { value: exchangeRate, buyCurrency: buyCurrency, sellCurrency: sellCurrency }),
        _react2.default.createElement(_Fee2.default, { amount: 0.0001, currency: sellCurrency }),
        _react2.default.createElement(
          _ButtonsInRow2.default,
          { styleName: 'buttonsInRow' },
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', gray: true, onClick: onBack },
            'Back'
          ),
          _react2.default.createElement(
            _Button2.default,
            { styleName: 'button', id: 'confirm', brand: true, onClick: this.handleConfirm },
            'Add'
          )
        )
      );
    }
  }]);
  return ConfirmOffer;
}(_react.Component)) || _class);
exports.default = ConfirmOffer;

/***/ }),
/* 1143 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_2SFTdv","buttonsInRow":"_3Z13ki","button":"_1IOrqN"};

/***/ }),
/* 1144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(1145);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonsInRow = function ButtonsInRow(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    rest,
    _react2.default.createElement(
      'div',
      { styleName: 'twoButtonsInRow' },
      children
    )
  );
};

ButtonsInRow.propTypes = {
  children: _propTypes2.default.node.isRequired
};

exports.default = (0, _reactCssModules2.default)(ButtonsInRow, _ButtonsInRow2.default);

/***/ }),
/* 1145 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_2KYO-l"};

/***/ }),
/* 1146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Amounts = __webpack_require__(1147);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _Row = __webpack_require__(249);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(250);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Amounts = function Amounts(_ref) {
  var buyAmount = _ref.buyAmount,
      sellAmount = _ref.sellAmount,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange' },
    _react2.default.createElement(_Value2.default, { value: sellAmount, currency: sellCurrency }),
    _react2.default.createElement('div', { styleName: 'arrow' }),
    _react2.default.createElement(_Value2.default, { value: buyAmount, currency: buyCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(Amounts, _Amounts2.default);

/***/ }),
/* 1147 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"arrow":"_1JeVyh"};

/***/ }),
/* 1148 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_3kZbpm","title":"_2-aWLd","content":"_2ALy7S"};

/***/ }),
/* 1149 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_1MvMZq","currency":"ka6sxH"};

/***/ }),
/* 1150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ExchangeRate = __webpack_require__(1151);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Row = __webpack_require__(249);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(250);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExchangeRate = function ExchangeRate(_ref) {
  var value = _ref.value,
      buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Exchange rate' },
    _react2.default.createElement(_Value2.default, { value: 1, currency: buyCurrency }),
    _react2.default.createElement(
      'div',
      { styleName: 'equal' },
      '='
    ),
    _react2.default.createElement(_Value2.default, { value: value, currency: sellCurrency })
  );
};

exports.default = (0, _reactCssModules2.default)(ExchangeRate, _ExchangeRate2.default);

/***/ }),
/* 1151 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"equal":"_62CYy3"};

/***/ }),
/* 1152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(249);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(250);

var _Value2 = _interopRequireDefault(_Value);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fee = function Fee(_ref) {
  var amount = _ref.amount,
      currency = _ref.currency;
  return _react2.default.createElement(
    _Row2.default,
    { title: 'Miner fee' },
    _react2.default.createElement(_Value2.default, { value: amount, currency: currency })
  );
};

exports.default = Fee;

/***/ }),
/* 1153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(32);

var _appConfig = __webpack_require__(27);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _helpers = __webpack_require__(11);

var _swValuelink = __webpack_require__(125);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _bignumber = __webpack_require__(370);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOffer = __webpack_require__(1160);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

var _Group = __webpack_require__(1161);

var _Group2 = _interopRequireDefault(_Group);

var _Select = __webpack_require__(1167);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ DECIMAL_PLACES: 4, ROUNDING_MODE: 4, EXPONENTIAL_AT: [-7, 14], RANGE: 1e+7, CRYPTO: true });

var AddOffer = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokensData = _ref$user.tokensData;
  return {
    items: [ethData, btcData],
    tokensData: tokensData
  };
}), _dec2 = (0, _reactCssModules2.default)(_AddOffer2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(AddOffer, _Component);

  function AddOffer(_ref2) {
    var initialData = _ref2.initialData;
    (0, _classCallCheck3.default)(this, AddOffer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddOffer.__proto__ || (0, _getPrototypeOf2.default)(AddOffer)).call(this));

    _initialiseProps.call(_this);

    var _ref3 = initialData || {},
        exchangeRate = _ref3.exchangeRate,
        buyAmount = _ref3.buyAmount,
        sellAmount = _ref3.sellAmount,
        buyCurrency = _ref3.buyCurrency,
        sellCurrency = _ref3.sellCurrency;

    _this.state = {
      exchangeRate: exchangeRate || _appConfig2.default.exchangeRates.ethbtc,
      buyAmount: buyAmount || '',
      sellAmount: sellAmount || '',
      buyCurrency: buyCurrency || 'eth',
      sellCurrency: sellCurrency || 'btc',
      EventWasSend: false
    };
    return _this;
  }

  (0, _createClass3.default)(AddOffer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _actions2.default.user.getBalances();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _state = this.state,
          buyCurrency = _state.buyCurrency,
          sellCurrency = _state.sellCurrency;

      this.getExchangeRate(buyCurrency, sellCurrency);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          tokensData = _props.tokensData;
      var _state2 = this.state,
          exchangeRate = _state2.exchangeRate,
          buyAmount = _state2.buyAmount,
          sellAmount = _state2.sellAmount,
          buyCurrency = _state2.buyCurrency,
          sellCurrency = _state2.sellCurrency;

      var blocked = true;

      if (true) {
        var noxoneth = '' + buyCurrency + sellCurrency === 'noxoneth' || '' + buyCurrency + sellCurrency === 'ethnoxon';
        var btcnoxon = '' + buyCurrency + sellCurrency === 'noxonbtc' || '' + buyCurrency + sellCurrency === 'btcnoxon';
        blocked = !noxoneth && !btcnoxon;
      }

      var linked = _swValuelink2.default.all(this, 'exchangeRate', 'buyAmount', 'sellAmount');
      var isDisabled = !exchangeRate || !blocked || !buyAmount && !sellAmount;

      (0, _keys2.default)(tokensData).map(function (k) {
        return items.push(tokensData[k]);
      });
      var item = items.filter(function (item) {
        return item.currency.toLowerCase() === '' + sellCurrency;
      });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Group2.default, {
          label: 'Exchange rate',
          inputValueLink: linked.exchangeRate.onChange(this.handleExchangeRateChange),
          currency: false,
          id: 'exchangeRate'
        }),
        _react2.default.createElement(_Select2.default, {
          changeBalance: this.changeBalance,
          balance: item[0].balance,
          currency: item[0].currency
        }),
        _react2.default.createElement(_Group2.default, {
          styleName: 'sellGroup',
          label: 'Sell',
          inputValueLink: linked.sellAmount.onChange(this.handleSellAmountChange),
          selectedCurrencyValue: sellCurrency,
          onCurrencySelect: this.handleSellCurrencySelect,
          id: 'sellAmount'
        }),
        _react2.default.createElement(_Group2.default, {
          label: 'Buy',
          inputValueLink: linked.buyAmount.onChange(this.handleBuyAmountChange),
          selectedCurrencyValue: buyCurrency,
          onCurrencySelect: this.handleBuyCurrencySelect,
          id: 'buyAmount'
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            fullWidth: true,
            brand: true,
            disabled: isDisabled,
            onClick: this.handleNext
          },
          'Next'
        )
      );
    }
  }]);
  return AddOffer;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getExchangeRate = function (buyCurrency, sellCurrency) {

    if (sellCurrency === 'noxon') {
      sellCurrency = 'eth';
    } else if (buyCurrency === 'noxon') {
      buyCurrency = 'eth';
    }

    _actions2.default.user.setExchangeRate(buyCurrency, sellCurrency).then(function (exchangeRate) {
      _this2.setState({
        exchangeRate: exchangeRate
      });
    });
  };

  this.handleExchangeRateChange = function (value) {
    var _state3 = _this2.state,
        buyAmount = _state3.buyAmount,
        sellAmount = _state3.sellAmount;


    buyAmount = new _bignumber.BigNumber(String(buyAmount) || 0);
    sellAmount = buyAmount.multipliedBy(new _bignumber.BigNumber(String(value) || 0));

    _this2.setState({
      buyAmount: buyAmount.toNumber(),
      sellAmount: sellAmount.toNumber()
    });
  };

  this.handleBuyCurrencySelect = function (_ref4) {
    var value = _ref4.value;
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency,
        buyAmount = _state4.buyAmount,
        sellAmount = _state4.sellAmount;

    // init:    buyCurrency = ETH, sellCurrency = BTC, value = BTC
    // result:  buyCurrency = BTC, sellCurrency = ETH

    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    buyCurrency = value;

    _this2.getExchangeRate(buyCurrency, sellCurrency);

    var exchangeRate = _this2.state.exchangeRate;


    if (buyAmount) {
      sellAmount = new _bignumber.BigNumber(String(buyAmount)).multipliedBy(exchangeRate).toNumber();
    }

    _this2.setState({
      exchangeRate: exchangeRate,
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      sellAmount: sellAmount
    });
  };

  this.handleSellCurrencySelect = function (_ref5) {
    var value = _ref5.value;
    var _state5 = _this2.state,
        buyCurrency = _state5.buyCurrency,
        sellCurrency = _state5.sellCurrency,
        buyAmount = _state5.buyAmount,
        sellAmount = _state5.sellAmount;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    sellCurrency = value;

    _this2.getExchangeRate(buyCurrency, sellCurrency);

    var exchangeRate = _this2.state.exchangeRate;


    if (buyAmount) {
      sellAmount = new _bignumber.BigNumber(String(buyAmount)).multipliedBy(exchangeRate).toNumber();
    }

    _this2.setState({
      exchangeRate: exchangeRate,
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      sellAmount: sellAmount
    });
  };

  this.handleBuyAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      sellAmount: new _bignumber.BigNumber(String(value) || 0).multipliedBy(exchangeRate).toNumber()
    });
  };

  this.handleSellAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    _this2.setState({
      buyAmount: new _bignumber.BigNumber(String(value) || 0).dividedBy(exchangeRate).toNumber()
    });
  };

  this.handleNext = function () {
    var _state6 = _this2.state,
        exchangeRate = _state6.exchangeRate,
        buyAmount = _state6.buyAmount,
        sellAmount = _state6.sellAmount,
        buyCurrency = _state6.buyCurrency,
        sellCurrency = _state6.sellCurrency;

    var blocked = true;

    if (true) {
      var noxoneth = '' + buyCurrency + sellCurrency === 'noxoneth' || '' + buyCurrency + sellCurrency === 'ethnoxon';
      var btcnoxon = '' + buyCurrency + sellCurrency === 'noxonbtc' || '' + buyCurrency + sellCurrency === 'btcnoxon';
      blocked = !noxoneth && !btcnoxon;
    }

    var onNext = _this2.props.onNext;


    _actions2.default.analytics.dataEvent('orderbook-addoffer-click-next-button');

    var isDisabled = !exchangeRate || !buyAmount || !sellAmount || !blocked;

    if (!isDisabled) {
      onNext(_this2.state);
    }
  };

  this.changeBalance = function (value) {
    _this2.setState({
      sellAmount: value
    });
    _this2.handleSellAmountChange(value);
  };
}, _temp)) || _class) || _class);
exports.default = AddOffer;

/***/ }),
/* 1154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.Input = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(30);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = __webpack_require__(147);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(1155);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(42);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setValue = function setValue(x, e) {
  return e.target.value;
};
var setBoolValue = function setBoolValue(x, e) {
  return Boolean(e.target.checked);
};

var validationClasses = function validationClasses(_ref, value, error) {
  var className = _ref.className,
      invalidClass = _ref.invalidClass,
      requiredClass = _ref.requiredClass;

  var _cx;

  return (0, _classnames2.default)(className, (_cx = {}, (0, _defineProperty3.default)(_cx, invalidClass || 'invalid', Boolean(error)), (0, _defineProperty3.default)(_cx, requiredClass || 'required', Boolean(error && value === '')), _cx));
};

var Input = function Input(props) {
  var valueLink = props.valueLink,
      checkedLink = props.checkedLink,
      pattern = props.pattern,
      mask = props.mask,
      maskChar = props.maskChar,
      maskReplace = props.maskReplace,
      rest = (0, _objectWithoutProperties3.default)(props, ['valueLink', 'checkedLink', 'pattern', 'mask', 'maskChar', 'maskReplace']);

  var link = valueLink || checkedLink;

  switch (props.type) {
    case 'checkbox':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: Boolean(link.value),
        onChange: link.action(setBoolValue)
      }));
    case 'radio':
      return _react2.default.createElement('input', (0, _extends3.default)({}, rest, {
        checked: link.value === props.value,
        onChange: function onChange(e) {
          if (e.target.checked) {
            link.set(props.value);
          }
        }
      }));
    default:
      var className = validationClasses(rest, valueLink.value, valueLink.error);
      var node = Boolean(mask) ? _reactInputMask2.default : 'input';

      var nodeProps = (0, _assign2.default)({}, rest, {
        className: className,
        value: typeof valueLink.value !== 'undefined' ? String(valueLink.value) : '',
        onChange: valueLink.action(function (x, e) {
          var val = e.target.value;

          if (pattern && val) {
            val = val.replace(new RegExp('[^' + pattern + ']+', 'g'), '');
          }

          if (mask && val) {
            if (maskReplace) {
              return val.replace(maskReplace, '');
            } else if (maskReplace !== null && maskReplace !== false) {
              return val.replace(/[^0-9]+/g, '');
            }
          }
          return val;
        })
      });

      if (mask) {
        nodeProps.mask = mask;
        nodeProps.maskChar = maskChar;
      }

      return _react2.default.createElement(node, nodeProps);
  }
};

var NumberInput = function (_Component) {
  (0, _inherits3.default)(NumberInput, _Component);

  function NumberInput() {
    (0, _classCallCheck3.default)(this, NumberInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NumberInput.__proto__ || (0, _getPrototypeOf2.default)(NumberInput)).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;

      var asNumber = Number(value);

      _this.setValue(value);

      if (value && !isNaN(asNumber)) {
        _this.props.valueLink.update(function (x) {
          // Update link if value is changed
          if (asNumber !== Number(x)) {
            return asNumber;
          }
        });
      }
    };

    _this.onKeyPress = function (event) {
      var _this$props = _this.props,
          integer = _this$props.integer,
          positive = _this$props.positive;
      var charCode = event.charCode,
          ctrlKey = event.ctrlKey;


      var allowedCharCodes = (positive ? [] : [45]).concat(integer ? [] : [46]);

      if (ctrlKey) {
        return;
      }

      if (charCode && (charCode < 48 || charCode > 57) && allowedCharCodes.indexOf(charCode) < 0) {
        event.preventDefault();
      }
    };
    return _this;
  }

  (0, _createClass3.default)(NumberInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setAndConvert(this.props.valueLink.value);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var next = nextProps.valueLink;


      if (Number(next.value) !== Number(this.value)) {
        this.setAndConvert(next.value); // keep state being synced
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(x) {
      // We're not using native state in order to avoid race condition.
      this.value = String(x);
      this.error = this.value === '' || isNaN(Number(x));

      this.forceUpdate();
    }
  }, {
    key: 'setAndConvert',
    value: function setAndConvert(x) {
      var value = Number(x);

      if (this.props.positive) {
        value = Math.abs(x);
      }
      if (this.props.integer) {
        value = Math.round(value);
      }

      this.setValue(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);

      var error = valueLink.error || this.error;

      return _react2.default.createElement('input', (0, _extends3.default)({}, (0, _helpers.ignoreProps)(props, 'positive', 'integer'), {
        type: 'text',
        className: validationClasses(props, this.value, error),
        value: this.value,
        onKeyPress: this.onKeyPress,
        onChange: this.onChange
      }));
    }
  }]);
  return NumberInput;
}(_react.Component);

/**
 * Wrapper for standard <textarea/> to be compliant with React 0.14 valueLink semantic.
 * Simple supports for link validation - adds 'invalid' class if link has an error.
 *
 *     <TextArea valueLink={ linkToText } />
 */


var TextArea = function TextArea(_ref2) {
  var valueLink = _ref2.valueLink,
      props = (0, _objectWithoutProperties3.default)(_ref2, ['valueLink']);
  return _react2.default.createElement('textarea', (0, _extends3.default)({}, props, {
    className: validationClasses(props, valueLink.value, valueLink.error),
    value: valueLink.value,
    onChange: valueLink.action(setValue)
  }));
};

/**
 * Wrapper for standard <select/> to be compliant with React 0.14 valueLink semantic.
 * Regular <option/> tags must be used:
 *
 *     <Select valueLink={ linkToSelectedValue }>
 *         <option value="a">A</option>
 *         <option value="b">B</option>
 *     </Select>
 */
var Select = function Select(_ref3) {
  var valueLink = _ref3.valueLink,
      children = _ref3.children,
      props = (0, _objectWithoutProperties3.default)(_ref3, ['valueLink', 'children']);
  return _react2.default.createElement(
    'select',
    (0, _extends3.default)({}, props, {
      value: valueLink.value,
      onChange: valueLink.action(setValue)
    }),
    children
  );
};

/**
 * Simple custom <Radio/> tag implementation. Can be easily styled.
 * Intended to be used with offhand bool link:
 *
 *    <Radio checkedLink={ linkToValue.equals( optionValue ) />
 */
var Radio = function Radio(_ref4) {
  var _ref4$className = _ref4.className,
      className = _ref4$className === undefined ? 'radio' : _ref4$className,
      checkedLink = _ref4.checkedLink,
      children = _ref4.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function () {
        return true;
      })
    },
    children
  );
};

/**
 * Simple custom <Checkbox /> tag implementation.
 * Takes any type of boolean link. Can be easily styled.
 *
 *     <Checkbox checkedLink={ boolLink } />
 */
var Checkbox = function Checkbox(_ref5) {
  var _ref5$className = _ref5.className,
      className = _ref5$className === undefined ? 'checkbox' : _ref5$className,
      checkedLink = _ref5.checkedLink,
      children = _ref5.children;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, { 'selected': checkedLink.value }),
      onClick: checkedLink.action(function (x) {
        return !x;
      })
    },
    children
  );
};

exports.Input = Input;
exports.TextArea = TextArea;
exports.Select = Select;
exports.Radio = Radio;
exports.Checkbox = Checkbox;
exports.NumberInput = NumberInput;

/***/ }),
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */,
/* 1159 */,
/* 1160 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sellGroup":"EElyaT","button":"_3riRsA"};

/***/ }),
/* 1161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(1162);

var _Group2 = _interopRequireDefault(_Group);

var _FieldLabel = __webpack_require__(438);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(252);

var _Input2 = _interopRequireDefault(_Input);

var _CurrencySelect = __webpack_require__(402);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var className = _ref.className,
      label = _ref.label,
      id = _ref.id,
      inputValueLink = _ref.inputValueLink,
      _ref$currency = _ref.currency,
      currency = _ref$currency === undefined ? true : _ref$currency,
      selectedCurrencyValue = _ref.selectedCurrencyValue,
      onCurrencySelect = _ref.onCurrencySelect;
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _FieldLabel2.default,
      { inRow: true },
      label
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'groupField', className: className },
      _react2.default.createElement(_Input2.default, {
        styleName: 'inputRoot',
        inputContainerClassName: _Group2.default.inputContainer,
        valueLink: inputValueLink,
        pattern: '0-9\\.',
        id: id
      }),
      currency && _react2.default.createElement(_CurrencySelect2.default, {
        styleName: 'currencySelect',
        selectedValue: selectedCurrencyValue,
        onSelect: onCurrencySelect
      })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Group, _Group2.default);

/***/ }),
/* 1162 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_2QVvGM","inputRoot":"_2gYR9R","inputContainer":"zgZs0H","currencySelect":"_3zcmBj"};

/***/ }),
/* 1163 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1AbkiC","inRow":"_2Hoger"};

/***/ }),
/* 1164 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_1aWblp","inputContainer":"_2di3Mb","disabled":"_3u8Uu2","withError":"_3RwSrH","input":"_3T0zd_","label":"_3xlNvF","error":"_3LmV0i"};

/***/ }),
/* 1165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = __webpack_require__(59);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(49);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(1166);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';

var TextareaAutosize = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextareaAutosize, _Component);

  function TextareaAutosize() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextareaAutosize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextareaAutosize.__proto__ || (0, _getPrototypeOf2.default)(TextareaAutosize)).call.apply(_ref, [this].concat(args))), _this), _this.dispatchEvent = function (EVENT_TYPE, defer) {
      var event = document.createEvent('Event');

      event.initEvent(EVENT_TYPE, true, false);

      var dispatch = function dispatch() {
        return _this.textareaEl.dispatchEvent(event);
      };

      if (defer) {
        setTimeout(dispatch);
      } else {
        dispatch();
      }
    }, _this.getValue = function (_ref2) {
      var valueLink = _ref2.valueLink,
          value = _ref2.value;
      return valueLink ? valueLink.value : value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextareaAutosize, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _autosize2.default)(this.textareaEl);

      if (this.props.onResize) {
        this.textareaEl.addEventListener(RESIZED, this.props.onResize);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onResize) {
        this.textareaEl.removeEventListener(RESIZED, this.props.onResize);
      }

      this.dispatchEvent(DESTROY);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValue(nextProps) !== this.getValue(this.props)) {
        this.dispatchEvent(UPDATE, true);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          valueLink = _props.valueLink,
          props = (0, _objectWithoutProperties3.default)(_props, ['valueLink']);


      return _react2.default.createElement('textarea', (0, _extends3.default)({
        ref: function ref(el) {
          return _this2.textareaEl = el;
        }
      }, props, {
        value: valueLink.value,
        onChange: valueLink.action(function (x, e) {
          return e.target.value;
        })
      }));
    }
  }]);
  return TextareaAutosize;
}(_react.Component), _class.propTypes = {
  valueLink: _propTypes2.default.object.isRequired,
  onResize: _propTypes2.default.func
}, _class.defaultProps = {
  rows: 1
}, _temp2);
exports.default = TextareaAutosize;

/***/ }),
/* 1166 */,
/* 1167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Select = __webpack_require__(1168);

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function Select(_ref) {
  var balance = _ref.balance,
      currency = _ref.currency,
      changeBalance = _ref.changeBalance;
  return _react2.default.createElement(
    'div',
    { styleName: 'groupField' },
    _react2.default.createElement(
      'p',
      null,
      currency + ' ' + balance.toFixed(3)
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 10);
        } },
      '1/10'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 4);
        } },
      '1/4'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance / 2);
        } },
      '1/2'
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'cell', onClick: function onClick() {
          return changeBalance(balance);
        } },
      'ALL'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Select, _Select2.default);

/***/ }),
/* 1168 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"_1TBx4e","cell":"_1fGtMw"};

/***/ }),
/* 1169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(11);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(125);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawModal = __webpack_require__(1170);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _Modal = __webpack_require__(248);

var _Modal2 = _interopRequireDefault(_Modal);

var _FieldLabel = __webpack_require__(438);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(252);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawModal = (_dec = (0, _reactCssModules2.default)(_WithdrawModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(WithdrawModal, _React$Component);

  function WithdrawModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithdrawModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithdrawModal.__proto__ || (0, _getPrototypeOf2.default)(WithdrawModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isSubmitted: false,
      address: '',
      amount: ''
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          to = _this$state.address,
          amount = _this$state.amount;
      var _this$props$data = _this.props.data,
          currency = _this$props$data.currency,
          contractAddress = _this$props$data.contractAddress,
          address = _this$props$data.address,
          decimals = _this$props$data.decimals;


      if (!to || !amount || amount < 0.01) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      var action = void 0;

      if (currency === 'ETH') {
        action = _actions2.default.ethereum;
      } else if (currency === 'BTC') {
        action = _actions2.default.bitcoin;
      } else if (currency === 'NIM') {
        action = _actions2.default.nimiq;
      } else {
        action = _actions2.default.token;
      }

      _actions2.default.loader.show();

      action.send(contractAddress || address, to, Number(amount), decimals).then(function () {
        _actions2.default.loader.hide();

        _actions2.default.notifications.show(_helpers.constants.notifications.SuccessWithdraw, {
          amount: amount,
          currency: currency,
          address: to
        });
      });
    }, _this.setAmount = function (amount) {
      _this.setState({
        amount: amount
      });
    }, _this.setAddress = function (address) {
      _this.setState({
        address: address
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithdrawModal, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          isSubmitted = _state.isSubmitted,
          address = _state.address,
          amount = _state.amount;
      var _props = this.props,
          name = _props.name,
          data = _props.data;


      var linked = _swValuelink2.default.all(this, 'address', 'amount');
      var isDisabled = !address || !amount;

      if (isSubmitted) {
        linked.amount.check(function (value) {
          return value >= 0.01;
        }, 'Amount must be greater than 0.01');
      }

      return _react2.default.createElement(
        _Modal2.default,
        { name: name, title: 'Withdraw ' + data.currency.toUpperCase() },
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Address'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.address }),
        _react2.default.createElement(
          _FieldLabel2.default,
          { inRow: true },
          'Amount'
        ),
        _react2.default.createElement(_Input2.default, { valueLink: linked.amount, pattern: '0-9\\.' }),
        !linked.amount.error && _react2.default.createElement(
          'div',
          { styleName: 'note' },
          'No less than 0.01'
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            styleName: 'button',
            brand: true,
            fullWidth: true,
            disabled: isDisabled,
            onClick: this.handleSubmit
          },
          'Transfer'
        )
      );
    }
  }]);
  return WithdrawModal;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.object
}, _temp2)) || _class);
exports.default = WithdrawModal;

/***/ }),
/* 1170 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"note":"_rh3p5","button":"_36O4pp"};

/***/ }),
/* 1171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(32);

var _moment = __webpack_require__(66);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(125);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(11);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PrivateKeysModal = __webpack_require__(1172);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _Field = __webpack_require__(1173);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(248);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateKeysModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData'
}), _dec2 = (0, _reactCssModules2.default)(_PrivateKeysModal2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(PrivateKeysModal, _React$PureComponent);

  function PrivateKeysModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PrivateKeysModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PrivateKeysModal.__proto__ || (0, _getPrototypeOf2.default)(PrivateKeysModal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      view: 'saveKeys', // saveKeys, checkKeys
      ethValidated: false,
      btcValidated: false
    }, _this.changeView = function (view) {
      _this.setState({
        view: view
      });
    }, _this.close = function () {
      var name = _this.props.name;


      _helpers.localStorage.setItem(_helpers.constants.localStorage.privateKeysSaved, true);
      _actions2.default.modals.close(name);
    }, _this.getText = function () {
      var _this$props = _this.props,
          ethData = _this$props.ethData,
          btcData = _this$props.btcData;


      var text = '\n' + window.location.hostname + ' emergency instruction\n\r\n\n\r\n\n#ETHEREUM\n\r\n\n\r\n\nEthereum address: ' + ethData.address + '  \r\n\nPrivate key: ' + ethData.privateKey + '\r\n\n\r\n\n\r\n\nHow to access tokens and ethers: \r\n\n1. Go here https://www.myetherwallet.com/#send-transaction \r\n\n2. Select \'Private key\'\r\n\n3. paste private key to input and click "unlock"\r\n\n\r\n\n\r\n\n\r\n\n# BITCOIN\r\n\n\r\n\n\r\n\nBitcoin address: ' + btcData.address + '\r\n\nPrivate key: ' + btcData.privateKey + '\r\n\n\r\n\n\r\n\n1. Go to blockchain.info\r\n\n2. login\r\n\n3. Go to settings > addresses > import\r\n\n4. paste private key and click "Ok"\r\n\n\r\n\n\r\n\n* We don`t store your private keys and will not be able to restore them!  \n    ';

      return text;
    }, _this.handleDownload = function () {
      var element = document.createElement('a');
      var text = _this.getText();
      var message = 'Check your browser downloads';

      element.setAttribute('href', 'data:text/plaincharset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', window.location.hostname + '_keys_' + (0, _moment2.default)().format('DD.MM.YYYY') + '.txt');

      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      _this.changeView('checkKeys');

      _actions2.default.notifications.show(_helpers.constants.notifications.Message, {
        message: message
      });
    }, _this.handleSendByEmail = function () {
      var text = _this.getText();

      window.open('mailto:?subject=Your_Subject&body=' + text);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PrivateKeysModal, [{
    key: 'render',
    value: function render() {
      var view = this.state.view;
      var _props = this.props,
          name = _props.name,
          ethData = _props.ethData,
          btcData = _props.btcData;


      var ethValidated = _swValuelink2.default.state(this, 'ethValidated');
      var btcValidated = _swValuelink2.default.state(this, 'btcValidated');
      var isValidated = ethValidated.value && btcValidated.value;

      return _react2.default.createElement(
        _Modal2.default,
        {
          styleName: 'modal',
          name: name,
          showCloseButton: false,
          whiteLogo: true,
          title: 'CAUTION!'
        },
        _react2.default.createElement(
          'div',
          { styleName: 'content' },
          view === 'saveKeys' ? _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Before you continue be sure to save your private keys!',
              _react2.default.createElement('br', null),
              'It`s very important because If you don`t',
              _react2.default.createElement('br', null),
              'there is a big chance you`ll loose your money.'
            ),
            _react2.default.createElement(
              'div',
              { styleName: 'subTitle' },
              'We don`t store your private keys and will not be able to restore them!'
            ),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, styleName: 'button', onClick: this.handleDownload },
              'Download instruction'
            )
          ) : _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
              'div',
              { styleName: 'title' },
              'Please fill information below from instruction.txt file. We`d like to be sure that you saved the private keys before you can continue to the site.'
            ),
            _react2.default.createElement(_Field2.default, {
              label: ethData.currency,
              privateKey: ethData.privateKey,
              valueLink: ethValidated
            }),
            _react2.default.createElement(_Field2.default, {
              label: btcData.currency,
              privateKey: btcData.privateKey,
              valueLink: btcValidated
            }),
            isValidated && _react2.default.createElement(
              _Button2.default,
              { white: true, styleName: 'button', onClick: this.close },
              'GO TO THE SITE!'
            )
          )
        )
      );
    }
  }]);
  return PrivateKeysModal;
}(_react2.default.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  ethData: _propTypes2.default.object.isRequired,
  btcData: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = PrivateKeysModal;

/***/ }),
/* 1172 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3ixJuZ","content":"_3o3Tl_","title":"_1HvQwA","subTitle":"_2vKFTm","button":"_19cTFn"};

/***/ }),
/* 1173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(125);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1174);

var _Field2 = _interopRequireDefault(_Field);

var _Input = __webpack_require__(252);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(71);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field2 = (_dec = (0, _reactCssModules2.default)(_Field2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Field2, _React$Component);

  function Field2() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Field2.__proto__ || (0, _getPrototypeOf2.default)(Field2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      error: false,
      success: false
    }, _this.handleCheck = function () {
      var _this$state = _this.state,
          value = _this$state.value,
          error = _this$state.error,
          success = _this$state.success;
      var _this$props = _this.props,
          valueLink = _this$props.valueLink,
          privateKey = _this$props.privateKey;


      if (error || success) {
        return;
      }

      if (value !== privateKey) {
        _this.setState({
          error: true
        });
      } else {
        valueLink.set(true);
        _this.setState({
          success: true
        });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Field2, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          success = _state.success;
      var label = this.props.label;


      var linkedValue = _swValuelink2.default.state(this, 'value');

      return _react2.default.createElement(
        'div',
        { styleName: 'container' },
        _react2.default.createElement(
          'div',
          { styleName: 'section' },
          _react2.default.createElement(
            'div',
            { styleName: 'label' },
            label.toUpperCase()
          ),
          _react2.default.createElement(_Input2.default, {
            styleName: 'input',
            placeholder: 'Write private key here...',
            valueLink: linkedValue
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              styleName: 'button',
              white: !success,
              green: success,
              onClick: this.handleCheck
            },
            success ? 'OK' : 'Check'
          )
        ),
        error && _react2.default.createElement(
          'div',
          { styleName: 'error' },
          'You should pass correct value! Reload page and enter key again'
        )
      );
    }
  }]);
  return Field2;
}(_react2.default.Component), _class2.propTypes = {
  label: _propTypes2.default.string.isRequired,
  privateKey: _propTypes2.default.string.isRequired,
  valueLink: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = Field2;

/***/ }),
/* 1174 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_2VJQBX","section":"_3kogcs","label":"_2soNit","input":"BtOAgk","button":"guRICj","error":"vB1kUx"};

/***/ }),
/* 1175 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"qe8yZ6"};

/***/ }),
/* 1176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _keys = __webpack_require__(54);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(32);

var _notifications = __webpack_require__(1177);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(1183);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConductor = (_dec = (0, _redaction.connect)({
  notifications: 'notifications'
}), _dec2 = (0, _reactCssModules2.default)(_NotificationConductor2.default), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NotificationConductor, _Component);

  function NotificationConductor() {
    (0, _classCallCheck3.default)(this, NotificationConductor);
    return (0, _possibleConstructorReturn3.default)(this, (NotificationConductor.__proto__ || (0, _getPrototypeOf2.default)(NotificationConductor)).apply(this, arguments));
  }

  (0, _createClass3.default)(NotificationConductor, [{
    key: 'render',
    value: function render() {
      var notifications = this.props.notifications;


      var notificationNames = (0, _keys2.default)(notifications);
      var areNotificationsExist = Boolean(notificationNames.length);

      return areNotificationsExist && _react2.default.createElement(
        'div',
        { styleName: 'notificationConductor' },
        notificationNames.map(function (key) {
          var _notifications$key = notifications[key],
              name = _notifications$key.name,
              _notifications$key$da = _notifications$key.data,
              data = _notifications$key$da === undefined ? {} : _notifications$key$da;


          return _react2.default.createElement(_notifications2.default[name], {
            key: name,
            name: name,
            data: data
          });
        })
      );
    }
  }]);
  return NotificationConductor;
}(_react.Component), _class2.propTypes = {
  notifications: _propTypes2.default.object
}, _temp)) || _class) || _class);
exports.default = NotificationConductor;

/***/ }),
/* 1177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SuccessWithdraw = __webpack_require__(1178);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(1181);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),
/* 1178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(1179);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(439);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessWithdraw = (_dec = (0, _reactCssModules2.default)(_SuccessWithdraw2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SuccessWithdraw, _Component);

  function SuccessWithdraw() {
    (0, _classCallCheck3.default)(this, SuccessWithdraw);
    return (0, _possibleConstructorReturn3.default)(this, (SuccessWithdraw.__proto__ || (0, _getPrototypeOf2.default)(SuccessWithdraw)).apply(this, arguments));
  }

  (0, _createClass3.default)(SuccessWithdraw, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          _props$data = _props.data,
          amount = _props$data.amount,
          currency = _props$data.currency,
          address = _props$data.address;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          amount,
          ' ',
          currency
        ),
        ' were successfully transferred to ',
        address,
        '!'
      );
    }
  }]);
  return SuccessWithdraw;
}(_react.Component)) || _class);
exports.default = SuccessWithdraw;

/***/ }),
/* 1179 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_3M190E"};

/***/ }),
/* 1180 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_1rGs3i","mounted":"_3e2bwy","removed":"_359s7d","notification":"_2HVVjT","content":"_2sHyls"};

/***/ }),
/* 1181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = __webpack_require__(4);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(5);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(6);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(7);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(1);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(1182);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(439);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactCssModules2.default)(_Message2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || (0, _getPrototypeOf2.default)(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          message = _props.data.message;


      return _react2.default.createElement(
        _Notification2.default,
        { name: name },
        _react2.default.createElement(
          'span',
          { styleName: 'value' },
          message
        )
      );
    }
  }]);
  return Message;
}(_react.Component)) || _class);
exports.default = Message;

/***/ }),
/* 1182 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"xt8YYA"};

/***/ }),
/* 1183 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"_8T39zz"};

/***/ })
],[440]);