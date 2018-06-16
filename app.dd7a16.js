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
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getScrollBarWidth = exports.getPageOffset = exports.ignoreProps = exports.localStorage = exports.constants = exports.request = exports.links = exports.web3 = exports.btc = undefined;

var _btc = __webpack_require__(381);

var _btc2 = _interopRequireDefault(_btc);

var _web = __webpack_require__(78);

var _web2 = _interopRequireDefault(_web);

var _links = __webpack_require__(581);

var _links2 = _interopRequireDefault(_links);

var _request = __webpack_require__(582);

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__(616);

var _constants2 = _interopRequireDefault(_constants);

var _localStorage = __webpack_require__(621);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _ignoreProps = __webpack_require__(623);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _getPageOffset = __webpack_require__(626);

var _getPageOffset2 = _interopRequireDefault(_getPageOffset);

var _getScrollBarWidth = __webpack_require__(627);

var _getScrollBarWidth2 = _interopRequireDefault(_getScrollBarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Getters
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
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _modals = __webpack_require__(788);

var _modals2 = _interopRequireDefault(_modals);

var _loader = __webpack_require__(831);

var _loader2 = _interopRequireDefault(_loader);

var _notifications = __webpack_require__(832);

var _notifications2 = _interopRequireDefault(_notifications);

var _filter = __webpack_require__(833);

var _filter2 = _interopRequireDefault(_filter);

var _user = __webpack_require__(834);

var _user2 = _interopRequireDefault(_user);

var _bitcoin = __webpack_require__(837);

var _bitcoin2 = _interopRequireDefault(_bitcoin);

var _ethereum = __webpack_require__(838);

var _ethereum2 = _interopRequireDefault(_ethereum);

var _token = __webpack_require__(839);

var _token2 = _interopRequireDefault(_token);

var _nimiq = __webpack_require__(841);

var _nimiq2 = _interopRequireDefault(_nimiq);

var _feed = __webpack_require__(843);

var _feed2 = _interopRequireDefault(_feed);

var _analytics = __webpack_require__(844);

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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.util = exports.constants = exports.Events = exports.Collection = exports.SwapInterface = exports.ServiceInterface = undefined;

var _SwapApp = __webpack_require__(331);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _ServiceInterface = __webpack_require__(856);

var _ServiceInterface2 = _interopRequireDefault(_ServiceInterface);

var _SwapInterface = __webpack_require__(857);

var _SwapInterface2 = _interopRequireDefault(_SwapInterface);

var _Collection = __webpack_require__(858);

var _Collection2 = _interopRequireDefault(_Collection);

var _Events = __webpack_require__(859);

var _Events2 = _interopRequireDefault(_Events);

var _constants = __webpack_require__(332);

var _constants2 = _interopRequireDefault(_constants);

var _util = __webpack_require__(860);

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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _redaction = __webpack_require__(27);

var _reduErs = __webpack_require__(327);

var _reduErs2 = _interopRequireDefault(_reduErs);

var _store = __webpack_require__(190);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redaction.wrapReducers)(_reduErs2.default, _store2.default.dispatch);

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Flow = undefined;

var _Swap = __webpack_require__(911);

var _Swap2 = _interopRequireDefault(_Swap);

var _Flow = __webpack_require__(912);

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Swap2.default;
exports.Flow = _Flow2.default;

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
// resolve object in webpack
exports.default = {"propENV":"mainnet.prod","paths":{},"publicPath":"https://swap.online/","http":{"host":"localhost","port":9001},"i18nDate":{"month":"long","day":"numeric","hour":"numeric","minute":"numeric"},"env":"production","entry":"mainnet","base":"https://swap.online/","services":{"web3":{"provider":"https://mainnet.infura.io/5lcMmHUURYg8F20GLGSr","noxonToken":"0x9E4AD79049282F942c1b4c9b418F0357A0637017","rate":0.1,"gas":100000,"gasPrice":"20000000000"}},"api":{"blocktrail":"https://api.blocktrail.com/v1/BTC","bitpay":"https://insight.bitpay.com/api","etherscan":"https://api.etherscan.io/api"},"apiKeys":{"etherscan":"RHHFPNMAZMD6I4ZWBZBF6FA11CMW9AXZNM","blocktrail":"1835368c0fa8e71907ca26f3c978ab742a7db42e"}};

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Button = __webpack_require__(916);

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
      onClick = props.onClick;


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
      onClick: onClick
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
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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


  Event.prototype.addHandler = function addHandler(handler) {
    var _this = this;

    this.handlers.push(handler.bind({
      unsubscribe: function unsubscribe() {
        _this.removeHandler(handler);
      }
    }));
  };

  /**
   * Remove handler from current Event
   *
   * @param handler {function}
   * @returns {Array.<T>|*}
   */


  Event.prototype.removeHandler = function removeHandler(handler) {
    var handlerIndex = this.handlers.indexOf(handler);

    this.handlers.splice(handlerIndex, 1);
  };

  /**
   * Call all handlers in all priorities of current Event
   *
   * @param eventArgs {...array}
   */


  Event.prototype.call = function call() {
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
  };

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


  EventAggregator.prototype.getEvent = function getEvent(name) {
    var event = this.events[name];

    if (!event) {
      event = new Event(name);
      this.events[name] = event;
    }

    return event;
  };

  /**
   *
   * @param name {string}
   * @param handler {function}
   * @returns {{ event: *, handler: * }}
   */


  EventAggregator.prototype.subscribe = function subscribe(name, handler) {
    var event = this.getEvent(name);

    event.addHandler(handler);

    return { event: event, handler: handler };
  };

  /**
   *
   * @param eventName {string}
   * @param handler {function}
   */


  EventAggregator.prototype.unsubscribe = function unsubscribe(eventName, handler) {
    var event = this.getEvent(eventName);

    event.removeHandler(handler);
  };

  /**
   *
   * @param name {string}
   * @param eventArgs {...array}
   */


  EventAggregator.prototype.dispatch = function dispatch(name) {
    var event = this.getEvent(name);

    if (event) {
      for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        eventArgs[_key2 - 1] = arguments[_key2];
      }

      event.call.apply(event, eventArgs);
    }
  };

  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _web = __webpack_require__(436);

var _web2 = _interopRequireDefault(_web);

var _appConfig = __webpack_require__(62);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = new _web2.default(new _web2.default.providers.HttpProvider(_appConfig2.default.services.web3.provider));

exports.default = web3;

/***/ }),
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getState = exports.reducers = undefined;

var _store = __webpack_require__(190);

var _store2 = _interopRequireDefault(_store);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getState = function getState() {
  return _store2.default.getState();
};

exports.reducers = _reducers2.default;
exports.getState = getState;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.swapApp = undefined;

var _web = __webpack_require__(78);

var _web2 = _interopRequireDefault(_web);

var _bitcoinjsLib = __webpack_require__(100);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _helpers = __webpack_require__(12);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(127);

var _swap4 = _interopRequireDefault(_swap3);

var _swap5 = __webpack_require__(336);

var _swap6 = _interopRequireDefault(_swap5);

var _swap7 = __webpack_require__(867);

var _swap8 = _interopRequireDefault(_swap7);

var _swap9 = __webpack_require__(879);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localClear = localStorage.clear.bind(localStorage); /* eslint-disable import/no-mutable-exports,max-len */


localStorage.clear = function () {
  var ethPrivateKey = localStorage.getItem('testnet:eth:privateKey');
  var btcPrivateKey = localStorage.getItem('testnet:btc:privateKey');

  localClear();

  localStorage.setItem('testnet:eth:privateKey', ethPrivateKey);
  localStorage.setItem('testnet:btc:privateKey', btcPrivateKey);
};

_swap2.default.setup({
  network: 'testnet',
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
        '/dns4/star.wpmix.net/tcp/443/wss/p2p-websocket-star']
      }
    }
  }), new _swap8.default()],
  swaps: [new _swap9.EthSwap({
    address: '0xe08907e0e010a339646de2cc56926994f58c4db2',
    abi: [{ 'constant': false, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'abort', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'close', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ratingContractAddress', 'type': 'address' }], 'name': 'setReputationAddress', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'sign', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'checkSign', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'getInfo', 'outputs': [{ 'name': '', 'type': 'bytes32' }, { 'name': '', 'type': 'bytes20' }, { 'name': '', 'type': 'uint256' }, { 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'unsafeGetSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }],
    fetchBalance: function fetchBalance(address) {
      return _actions2.default.ethereum.fetchBalance(address);
    }
  }), new _swap9.EthTokenSwap({
    address: '0x527458d3d3a3af763dbe2ccc5688d64161e81d97',
    abi: [{ 'constant': false, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'abort', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'close', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_secretHash', 'type': 'bytes20' }, { 'name': '_participantAddress', 'type': 'address' }, { 'name': '_value', 'type': 'uint256' }, { 'name': '_token', 'type': 'address' }], 'name': 'createSwap', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'refund', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_ratingContractAddress', 'type': 'address' }], 'name': 'setReputationAddress', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'sign', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'constant': false, 'inputs': [{ 'name': '_secret', 'type': 'bytes32' }, { 'name': '_ownerAddress', 'type': 'address' }], 'name': 'withdraw', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }], 'name': 'checkSign', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'getInfo', 'outputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'bytes32' }, { 'name': '', 'type': 'bytes20' }, { 'name': '', 'type': 'uint256' }, { 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_participantAddress', 'type': 'address' }], 'name': 'getSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'participantSigns', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'ratingContractAddress', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '', 'type': 'address' }, { 'name': '', 'type': 'address' }], 'name': 'swaps', 'outputs': [{ 'name': 'token', 'type': 'address' }, { 'name': 'secret', 'type': 'bytes32' }, { 'name': 'secretHash', 'type': 'bytes20' }, { 'name': 'createdAt', 'type': 'uint256' }, { 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_ownerAddress', 'type': 'address' }, { 'name': '_participantAddress', 'type': 'address' }], 'name': 'unsafeGetSecret', 'outputs': [{ 'name': '', 'type': 'bytes32' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }],
    tokenAddress: '0x60c205722c6c797c725a996cf9cca11291f90749',
    tokenAbi: [{ 'constant': true, 'inputs': [], 'name': 'name', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_spender', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'approve', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'totalSupply', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_from', 'type': 'address' }, { 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transferFrom', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'getBurnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'decimals', 'outputs': [{ 'name': '', 'type': 'uint8' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'manager', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'unlockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }], 'name': 'balanceOf', 'outputs': [{ 'name': 'balance', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionlocked', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptOwnership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'lockEmission', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'owner', 'outputs': [{ 'name': '', 'type': 'address' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'symbol', 'outputs': [{ 'name': '', 'type': 'string' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'burnAll', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newManager', 'type': 'address' }], 'name': 'changeManager', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_newOwner', 'type': 'address' }], 'name': 'changeOwner', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': '_to', 'type': 'address' }, { 'name': '_amount', 'type': 'uint256' }], 'name': 'transfer', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'emissionPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'addToReserve', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': true, 'inputs': [], 'name': 'burnPrice', 'outputs': [{ 'name': '', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [{ 'name': 'tokenAddress', 'type': 'address' }, { 'name': 'amount', 'type': 'uint256' }], 'name': 'transferAnyERC20Token', 'outputs': [{ 'name': 'success', 'type': 'bool' }], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'constant': true, 'inputs': [{ 'name': '_owner', 'type': 'address' }, { 'name': '_spender', 'type': 'address' }], 'name': 'allowance', 'outputs': [{ 'name': 'remaining', 'type': 'uint256' }], 'payable': false, 'stateMutability': 'view', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'NoxonInit', 'outputs': [{ 'name': '', 'type': 'bool' }], 'payable': true, 'stateMutability': 'payable', 'type': 'function' }, { 'constant': false, 'inputs': [], 'name': 'acceptManagership', 'outputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'function' }, { 'inputs': [], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor' }, { 'payable': true, 'stateMutability': 'payable', 'type': 'fallback' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_emissionedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBought', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': 'buyer', 'type': 'address' }, { 'indexed': false, 'name': 'ethers', 'type': 'uint256' }, { 'indexed': false, 'name': '_burnedPrice', 'type': 'uint256' }, { 'indexed': false, 'name': 'amountOfTokens', 'type': 'uint256' }], 'name': 'TokenBurned', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': false, 'name': 'etherReserved', 'type': 'uint256' }], 'name': 'EtherReserved', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_from', 'type': 'address' }, { 'indexed': true, 'name': '_to', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Transfer', 'type': 'event' }, { 'anonymous': false, 'inputs': [{ 'indexed': true, 'name': '_owner', 'type': 'address' }, { 'indexed': true, 'name': '_spender', 'type': 'address' }, { 'indexed': false, 'name': '_value', 'type': 'uint256' }], 'name': 'Approval', 'type': 'event' }],
    fetchBalance: function fetchBalance(address) {
      return _actions2.default.token.fetchBalance(address);
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
  })]
});

console.log('swapApp public data', _swap2.default.services.auth.getPublicData());

exports.swapApp = _swap2.default;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ignoreProps = exports.pullProps = exports.localStorage = exports.setupEnv = exports.env = undefined;

var _localStorage = __webpack_require__(931);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _pullProps = __webpack_require__(932);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(933);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

var _env = __webpack_require__(345);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.env = _env.env;
exports.setupEnv = _env.setupEnv;
exports.localStorage = _localStorage2.default;
exports.pullProps = _pullProps2.default;
exports.ignoreProps = _ignoreProps2.default;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Select = exports.TextArea = exports.Radio = exports.Checkbox = exports.NumberInput = exports.Input = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _tags = __webpack_require__(982);

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

var _valuelink = __webpack_require__(985);

var _valuelink2 = _interopRequireDefault(_valuelink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this.state = { foo: '', bar: '' }  =>   Link.all(this, 'foo', 'bar')
_valuelink2.default.allFields = function (component) {
  return _valuelink2.default.all.apply(_valuelink2.default, [component].concat((0, _keys2.default)(component.state)));
};

exports.default = _valuelink2.default;

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
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
/* 114 */,
/* 115 */,
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PageHeadline = __webpack_require__(768);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(316);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(188);

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
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SwapAuth = __webpack_require__(191);

var _SwapAuth2 = _interopRequireDefault(_SwapAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapAuth2.default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _InlineLoader = __webpack_require__(900);

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
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.BTC2ETHTOKEN = exports.ETHTOKEN2BTC = exports.BTC2ETH = exports.ETH2BTC = undefined;

var _ETH2BTC = __webpack_require__(910);

var _ETH2BTC2 = _interopRequireDefault(_ETH2BTC);

var _BTC2ETH = __webpack_require__(913);

var _BTC2ETH2 = _interopRequireDefault(_BTC2ETH);

var _ETHTOKEN2BTC = __webpack_require__(914);

var _ETHTOKEN2BTC2 = _interopRequireDefault(_ETHTOKEN2BTC);

var _BTC2ETHTOKEN = __webpack_require__(915);

var _BTC2ETHTOKEN2 = _interopRequireDefault(_BTC2ETHTOKEN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ETH2BTC = _ETH2BTC2.default;
exports.BTC2ETH = _BTC2ETH2.default;
exports.ETHTOKEN2BTC = _ETHTOKEN2BTC2.default;
exports.BTC2ETHTOKEN = _BTC2ETHTOKEN2.default;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Loader = __webpack_require__(919);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader(_ref) {
  var overlayClassName = _ref.overlayClassName,
      className = _ref.className,
      _ref$overlay = _ref.overlay,
      overlay = _ref$overlay === undefined ? true : _ref$overlay;
  return _react2.default.createElement(
    'div',
    { styleName: overlay ? 'overlay' : '', className: overlayClassName },
    _react2.default.createElement(
      'div',
      { styleName: overlay ? 'loader center' : 'loader', className: className },
      _react2.default.createElement('div', { styleName: 'loader1' }),
      _react2.default.createElement('div', { styleName: 'loader2' }),
      _react2.default.createElement('div', { styleName: 'loader3' })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Loader, _Loader2.default, { allowMultiple: true });

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pubSubRoom = __webpack_require__(930);

var _pubSubRoom2 = _interopRequireDefault(_pubSubRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pubSubRoom2.default;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.storage = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Events = __webpack_require__(74);

var _Events2 = _interopRequireDefault(_Events);

var _util = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Storage = function () {
  function Storage() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        data = _ref.data,
        storeKey = _ref.storeKey;

    (0, _classCallCheck3.default)(this, Storage);

    this.storeKey = storeKey;
    this.events = new _Events2.default();

    if (data) {
      this._update(data);
    }

    this._persistState();
  }

  Storage.prototype._persistState = function _persistState() {
    if (this.storeKey) {
      var data = _util.localStorage.getItem(this.storeKey);

      this._update(data);
    }
  };

  Storage.prototype._update = function _update(values) {
    var _this = this;

    if (values) {
      (0, _keys2.default)(values).forEach(function (key) {
        _this[key] = values[key];
      });
    }
  };

  Storage.prototype.update = function update(values) {
    this._update(values);

    var data = (0, _util.ignoreProps)(this, 'events', 'storeKey');

    if (this.storeKey) {
      _util.localStorage.setItem(this.storeKey, data);
    }

    _Events.events.dispatch('new storage values', values);
    _Events.events.dispatch('storage update', data);
  };

  Storage.prototype.on = function on(eventName, handler) {
    this.events.subscribe(eventName, handler);
  };

  Storage.prototype.off = function off(eventName, handler) {
    this.events.unsubscribe(eventName, handler);
  };

  return Storage;
}();

var storage = new Storage();

exports.default = Storage;
exports.storage = storage;

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
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
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
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
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SubTitle = __webpack_require__(770);

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
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.history = undefined;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _reactRouterRedux = __webpack_require__(328);

var _history = __webpack_require__(54);

var _redaction = __webpack_require__(27);

var _reduxLogger = __webpack_require__(830);

var _reduErs = __webpack_require__(327);

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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(192);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _privateKeys = void 0;

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

    var _this = (0, _possibleConstructorReturn3.default)(this, _ServiceInterface.call(this));

    _this._serviceName = 'auth';
    _this.accounts = {};
    _this.getPublicDataMethods = {};

    _privateKeys = privateKeys;
    return _this;
  }

  SwapAuth.prototype.initService = function initService() {
    var _this2 = this;

    (0, _keys2.default)(_privateKeys).forEach(function (name) {
      if (_swap.constants.COINS.indexOf(name) < 0) {
        var error = 'SwapAuth._initService(): There is no instance with name "' + name + '".';
        error += 'Only [' + (0, _stringify2.default)(_swap.constants.COINS).replace(/"/g, '\'') + '] available';

        throw new Error(error);
      }

      try {
        var instance = __webpack_require__(865)("./" + name);
        instance = instance.default || instance;
        var account = instance.login(_privateKeys[name]);

        _this2.accounts[name] = account;
        _this2.getPublicDataMethods[name] = function () {
          return instance.getPublicData(account);
        };
      } catch (err) {
        throw new Error('SwapAuth._initService(): ' + err);
      }
    });
  };

  SwapAuth.prototype.getPublicData = function getPublicData() {
    var _this3 = this;

    var data = {
      peer: _swap2.default.services.room.peer
    };

    (0, _keys2.default)(this.getPublicDataMethods).forEach(function (name) {
      data[name] = _this3.getPublicDataMethods[name]();
    });

    return data;
  };

  return SwapAuth;
}(_swap.ServiceInterface);

exports.default = SwapAuth;

/***/ }),
/* 192 */,
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coin = __webpack_require__(885);

var _Coin2 = _interopRequireDefault(_Coin);

var _CurrencyIcon = __webpack_require__(318);

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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Table = __webpack_require__(890);

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
          return rowRender(row, row.id || rowIndex);
        }
      })
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Table, _Table2.default);

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WidthContainer = __webpack_require__(942);

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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Modal = __webpack_require__(963);

var _Modal2 = _interopRequireDefault(_Modal);

var _WidthContainer = __webpack_require__(195);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Overlay = __webpack_require__(964);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Logo = __webpack_require__(347);

var _Logo2 = _interopRequireDefault(_Logo);

var _Center = __webpack_require__(966);

var _Center2 = _interopRequireDefault(_Center);

var _CloseIcon = __webpack_require__(968);

var _CloseIcon2 = _interopRequireDefault(_CloseIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = (_dec = (0, _reactCssModules2.default)(_Modal2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.close = function () {
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

  Modal.prototype.render = function render() {
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
  };

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
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(976);

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
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Value = __webpack_require__(977);

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
      value
    ),
    _react2.default.createElement(
      'span',
      { styleName: 'currency' },
      currency.toUpperCase()
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Value, _Value2.default);

/***/ }),
/* 199 */,
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(93);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Input = __webpack_require__(993);

var _Input2 = _interopRequireDefault(_Input);

var _TextArea = __webpack_require__(994);

var _TextArea2 = _interopRequireDefault(_TextArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = (_dec = (0, _reactCssModules2.default)(_Input2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(Input, _Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Input.prototype.render = function render() {
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
  };

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
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
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
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
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
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Title = __webpack_require__(769);

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
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencySelect = __webpack_require__(775);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

var _DropDown = __webpack_require__(776);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _Option = __webpack_require__(779);

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
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.iconNames = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CurrencyIcon = __webpack_require__(781);

var _CurrencyIcon2 = _interopRequireDefault(_CurrencyIcon);

var _btc = __webpack_require__(782);

var _btc2 = _interopRequireDefault(_btc);

var _eth = __webpack_require__(783);

var _eth2 = _interopRequireDefault(_eth);

var _icx = __webpack_require__(784);

var _icx2 = _interopRequireDefault(_icx);

var _waves = __webpack_require__(785);

var _waves2 = _interopRequireDefault(_waves);

var _xrp = __webpack_require__(786);

var _xrp2 = _interopRequireDefault(_xrp);

var _nim = __webpack_require__(787);

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
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _notifications = __webpack_require__(820);

var notifications = _interopRequireWildcard(_notifications);

var _modals = __webpack_require__(821);

var modals = _interopRequireWildcard(_modals);

var _history = __webpack_require__(822);

var history = _interopRequireWildcard(_history);

var _loader = __webpack_require__(823);

var loader = _interopRequireWildcard(_loader);

var _user = __webpack_require__(824);

var user = _interopRequireWildcard(_user);

var _feeds = __webpack_require__(825);

var feeds = _interopRequireWildcard(_feeds);

var _orders = __webpack_require__(826);

var orders = _interopRequireWildcard(_orders);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  notifications: notifications,
  modals: modals,
  history: history,
  loader: loader,
  user: user,
  feeds: feeds,
  orders: orders
};

/***/ }),
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _constants = __webpack_require__(332);

var _constants2 = _interopRequireDefault(_constants);

var _StorageFactory = __webpack_require__(855);

var _StorageFactory2 = _interopRequireDefault(_StorageFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp() {
    (0, _classCallCheck3.default)(this, SwapApp);
  }

  /**
   *
   * @param {object}  options
   * @param {string}  options.network
   * @param {object}  options.env
   * @param {array}   options.services
   * @param {array}   options.swaps
   */
  SwapApp.prototype.setup = function setup(options) {
    this.network = options.network || _constants2.default.NETWORKS.TESTNET;
    this.env = {};
    this.swaps = {};
    this.services = {};

    this._addEnv(options.env || {});
    this._addServices(options.services || {});
    this._addSwaps(options.swaps || {});
  };

  // Configure -------------------------------------------------------- /

  SwapApp.prototype._addEnv = function _addEnv(env) {
    (0, _keys2.default)(env).forEach(function (name) {
      if (_constants2.default.ENV.indexOf(name) < 0) {
        var list = (0, _stringify2.default)(_constants2.default.ENV).replace(/"/g, '\'');
        var error = 'SwapApp.addEnv(): Only ' + list + ' available';

        throw new Error(error);
      }
    });

    this.env = env;
    this.env.storage = new _StorageFactory2.default(env.storage);
  };

  SwapApp.prototype._addService = function _addService(service) {
    if (!service._serviceName) {
      throw new Error('SwapApp service should contain "_serviceName" property');
    }

    if (_constants2.default.SERVICES.indexOf(service._serviceName) < 0) {
      var list = (0, _stringify2.default)(_constants2.default.SERVICES).replace(/"/g, '\'');
      var error = 'SwapApp.addServices(): Only ' + list + ' available';

      throw new Error(error);
    }

    this.services[service._serviceName] = service;
  };

  SwapApp.prototype._addServices = function _addServices(services) {
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
  };

  SwapApp.prototype._addSwap = function _addSwap(swap) {
    if (!swap._swapName) {
      throw new Error('SwapApp swap should contain "_swapName" property');
    }

    if (_constants2.default.SWAPS.indexOf(swap._swapName) < 0) {
      var list = (0, _stringify2.default)(_constants2.default.SWAPS).replace(/"/g, '\'');
      var error = 'SwapApp.addSwaps(): Only ' + list + ' available';

      throw new Error(error);
    }

    this.swaps[swap._swapName] = swap;

    if (typeof swap._initSwap === 'function') {
      swap._initSwap();
    }
  };

  SwapApp.prototype._addSwaps = function _addSwaps(swaps) {
    var _this2 = this;

    swaps.forEach(function (swap) {
      _this2._addSwap(swap);
    });
  };

  // Public methods --------------------------------------------------- /

  SwapApp.prototype.isMainNet = function isMainNet() {
    return this.network.toLowerCase() === _constants2.default.NETWORKS.MAINNET;
  };

  SwapApp.prototype.isTestNet = function isTestNet() {
    return this.network.toLowerCase() === _constants2.default.NETWORKS.TESTNET;
  };

  return SwapApp;
}();

window.app = new SwapApp();

exports.default = window.app;

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _COINS = __webpack_require__(850);

var _COINS2 = _interopRequireDefault(_COINS);

var _ENV = __webpack_require__(851);

var _ENV2 = _interopRequireDefault(_ENV);

var _SERVICES = __webpack_require__(852);

var _SERVICES2 = _interopRequireDefault(_SERVICES);

var _SWAPS = __webpack_require__(853);

var _SWAPS2 = _interopRequireDefault(_SWAPS);

var _NETWORKS = __webpack_require__(854);

var _NETWORKS2 = _interopRequireDefault(_NETWORKS);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  COINS: _COINS2.default,
  ENV: _ENV2.default,
  SERVICES: _SERVICES2.default,
  SWAPS: _SWAPS2.default,
  NETWORKS: _NETWORKS2.default
};

/***/ }),
/* 333 */,
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = function login(_privateKey) {
  var storageKey = _swap2.default.network + ':btc:privateKey';
  var privateKey = _privateKey || _swap2.default.env.storage.getItem(storageKey);
  var account = void 0;

  if (!privateKey) {
    privateKey = _swap2.default.env.bitcoin.ECPair.makeRandom({ network: _swap2.default.env.bitcoin.networks.testnet }).toWIF();
  }

  account = new _swap2.default.env.bitcoin.ECPair.fromWIF(privateKey, _swap2.default.env.bitcoin.networks.testnet);

  account.__proto__.getPublicKey = function () {
    return account.getPublicKeyBuffer().toString('hex');
  };
  account.__proto__.getPrivateKey = function () {
    return privateKey;
  };

  _swap2.default.env.storage.setItem(storageKey, privateKey);

  return account;
}; /* eslint new-cap: 0, no-proto: 0 */

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
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _swap = __webpack_require__(18);

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

  _swap2.default.env.storage.setItem(storageKey, account.privateKey);
  _swap2.default.env.web3.eth.accounts.wallet.add(account.privateKey);

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
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SwapRoom = __webpack_require__(866);

var _SwapRoom2 = _interopRequireDefault(_SwapRoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapRoom2.default;

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _swap = __webpack_require__(18);

exports.default = new _swap.Events();

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Coins = __webpack_require__(884);

var _Coins2 = _interopRequireDefault(_Coins);

var _Coin = __webpack_require__(193);

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
/* 339 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"history-filter":"_1QKxEw","history-filter__item":"_1L29kz","history-filter__item_active":"_3clnGG"};

/***/ }),
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {
  function Room(_ref) {
    var swapId = _ref.swapId,
        participantPeer = _ref.participantPeer;
    (0, _classCallCheck3.default)(this, Room);

    this.swapId = swapId;
    this.peer = participantPeer;
  }

  Room.prototype.subscribe = function subscribe(eventName, handler) {
    var _this = this;

    _swap2.default.services.room.events.subscribe(eventName, function (_ref2) {
      var fromPeer = _ref2.fromPeer,
          swapId = _ref2.swapId,
          values = (0, _objectWithoutProperties3.default)(_ref2, ['fromPeer', 'swapId']);

      if (fromPeer === _this.peer && swapId === _this.swapId) {
        handler(values);
      }
    });
  };

  Room.prototype.once = function once(eventName, handler) {
    var self = this;

    _swap2.default.services.room.events.subscribe(eventName, function (_ref3) {
      var fromPeer = _ref3.fromPeer,
          swapId = _ref3.swapId,
          values = (0, _objectWithoutProperties3.default)(_ref3, ['fromPeer', 'swapId']);

      if (fromPeer === self.peer && swapId === self.swapId) {
        console.error('INCOME SwapSwapApp.services.room event "' + eventName + '"');

        this.unsubscribe();
        handler(values);
      }
    });
  };

  Room.prototype.sendMessage = function sendMessage() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      var value = args[0];

      // value - eventName

      if (typeof value === 'string') {
        console.error('OUTCOME SwapSwapApp.services.room event "' + value + '"');

        _swap2.default.services.room.connection.sendTo(this.peer, (0, _stringify2.default)([{
          event: value,
          swapId: this.swapId
        }]));
      }
      // value - messages
      else if (Array.isArray(value)) {
          value.forEach(function (_ref4) {
            var event = _ref4.event;

            console.log('OUTCOME SwapSwapApp.services.room event "' + event + '"');
          });

          _swap2.default.services.room.connection.sendTo(this.peer, (0, _stringify2.default)(value));
        }
    } else {
      var eventName = args[0],
          message = args[1];


      console.log('OUTCOME SwapSwapApp.services.room event "' + eventName + '"');

      _swap2.default.services.room.connection.sendTo(this.peer, (0, _stringify2.default)([{
        event: eventName,
        data: (0, _assign2.default)({
          swapId: this.swapId
        }, message)
      }]));
    }
  };

  return Room;
}();

exports.default = Room;

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.setupEnv = exports.env = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var env = {
  web3: null,
  bitcoinJs: null,
  Ipfs: null,
  IpfsRoom: null,
  localStorage: global.localStorage
};

var setupEnv = function setupEnv(values) {
  (0, _keys2.default)(values).forEach(function (key) {
    env[key] = values[key];
  });
};

exports.env = env;
exports.setupEnv = setupEnv;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _Events = __webpack_require__(74);

var _Collection2 = __webpack_require__(934);

var _Collection3 = _interopRequireDefault(_Collection2);

var _Storage = __webpack_require__(132);

var _Order = __webpack_require__(935);

var _Order2 = _interopRequireDefault(_Order);

var _room = __webpack_require__(131);

var _room2 = _interopRequireDefault(_room);

var _util = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrderCollection = function (_Collection) {
  (0, _inherits3.default)(OrderCollection, _Collection);

  function OrderCollection() {
    (0, _classCallCheck3.default)(this, OrderCollection);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Collection.call(this));

    _this._onMount();
    return _this;
  }

  OrderCollection.prototype._onMount = function _onMount() {
    var _this2 = this;

    _room2.default.subscribe('ready', function () {
      _this2._persistMyOrders();
    });

    _room2.default.subscribe('user online', function (peer) {
      var myOrders = _this2.getMyOrders();

      if (myOrders.length) {
        // clean orders from other additional props
        myOrders = myOrders.map(function (item) {
          return (0, _util.pullProps)(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing');
        });

        console.log('Send my orders to ' + peer, myOrders);

        _room2.default.sendMessage(peer, [{
          event: 'new orders',
          data: {
            orders: myOrders
          }
        }]);
      }
    });

    _room2.default.subscribe('user offline', function (peer) {
      var peerOrders = _this2.getPeerOrders(peer);

      if (peerOrders.length) {
        peerOrders.forEach(function (_ref) {
          var id = _ref.id;

          _this2._handleRemove(id);
        });
      }
    });

    _room2.default.subscribe('new orders', function (_ref2) {
      var fromPeer = _ref2.fromPeer,
          orders = _ref2.orders;

      // ductape to check if such orders already exist
      var filteredOrders = orders.filter(function (_ref3) {
        var id = _ref3.id;
        return !_this2.getByKey(id);
      });

      console.log('Receive orders from ' + fromPeer, filteredOrders);

      _this2._handleMultipleCreate(filteredOrders);
    });

    _room2.default.subscribe('new order', function (_ref4) {
      var data = _ref4.order;

      _this2._handleCreate(data);
    });

    _room2.default.subscribe('remove order', function (_ref5) {
      var orderId = _ref5.orderId;

      _this2._handleRemove(orderId);
    });
  };

  OrderCollection.prototype._persistMyOrders = function _persistMyOrders() {
    var _this3 = this;

    this.getMyOrders().forEach(function (orderData) {
      _this3._handleCreate(orderData);
    });
  };

  OrderCollection.prototype._create = function _create(data) {
    var order = new _Order2.default({
      collection: this,
      data: data
    });

    this.append(order, order.id);

    return order;
  };

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
   */


  OrderCollection.prototype._handleCreate = function _handleCreate(data) {
    var order = this._create(data);

    _Events.events.dispatch('new order', order);
  };

  OrderCollection.prototype._handleMultipleCreate = function _handleMultipleCreate(ordersData) {
    var _this4 = this;

    var orders = [];

    ordersData.forEach(function (data) {
      var order = _this4._create(data);
      orders.push(order);
    });

    _Events.events.dispatch('new orders', orders);
  };

  /**
   *
   * @param {string} orderId
   */


  OrderCollection.prototype._handleRemove = function _handleRemove(orderId) {
    var order = this.getByKey(orderId);

    this.removeByKey(orderId);
    _Events.events.dispatch('remove order', order);
  };

  OrderCollection.prototype._saveMyOrders = function _saveMyOrders() {
    var myOrders = this.items.filter(function (_ref6) {
      var peer = _ref6.owner.peer;
      return peer === _Storage.storage.me.peer;
    });

    // clean orders from other additional props
    // TODO need to add functionality to sync `requests` for users who going offline / online
    // problem: when I going online and persisting my orders need to show only online users requests,
    // but then user comes online need to change status. Ofc we can leave this bcs developers can do this themselves
    // with filters - skip requests where user is offline, but it looks like not very good
    myOrders = myOrders.map(function (item) {
      return (0, _util.pullProps)(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'participant', 'requests', 'isRequested', 'isProcessing');
    });

    _util.localStorage.setItem('myOrders', myOrders);
  };

  OrderCollection.prototype.getMyOrders = function getMyOrders() {
    return _util.localStorage.getItem('myOrders') || [];
  };

  OrderCollection.prototype.getPeerOrders = function getPeerOrders(peer) {
    return this.items.filter(function (_ref7) {
      var owner = _ref7.owner;
      return peer === owner.peer;
    });
  };

  /**
   *
   * @param {object} data
   * @param {string} data.buyCurrency
   * @param {string} data.sellCurrency
   * @param {number} data.buyAmount
   * @param {number} data.sellAmount
   */


  OrderCollection.prototype.create = function create(data) {
    var order = this._create((0, _assign2.default)({}, data, {
      owner: _Storage.storage.me
    }));
    this._saveMyOrders();

    _room2.default.sendMessage([{
      event: 'new order',
      data: {
        order: (0, _util.pullProps)(order, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing')
      }
    }]);
  };

  /**
   *
   * @param {string} orderId
   */


  OrderCollection.prototype.remove = function remove(orderId) {
    this.removeByKey(orderId);
    _room2.default.sendMessage([{
      event: 'remove order',
      data: {
        orderId: orderId
      }
    }]);
    this._saveMyOrders();
  };

  return OrderCollection;
}(_Collection3.default);

exports.default = new OrderCollection();

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(55);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Logo = __webpack_require__(943);

var _Logo2 = _interopRequireDefault(_Logo);

var _logo = __webpack_require__(944);

var _logo2 = _interopRequireDefault(_logo);

var _logoColored = __webpack_require__(945);

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
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "71af1b68ea0f662eb88996ea7a25bf8a.mp4";

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FieldLabel = __webpack_require__(992);

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
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Notification = __webpack_require__(1007);

var _Notification2 = _interopRequireDefault(_Notification);

var _Sound = __webpack_require__(348);

var _Sound2 = _interopRequireDefault(_Sound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notification = (_dec = (0, _reactCssModules2.default)(_Notification2.default, { allowMultiple: true }), _dec(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(Notification, _Component);

  function Notification() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
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

  Notification.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.soundClick();
    setTimeout(function () {
      _this2.setState({
        mounted: true
      }, function () {
        setTimeout(_this2.close, 4000);
      });
    }, 0);
  };

  Notification.prototype.render = function render() {
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
  };

  return Notification;
}(_react.Component), _class2.childContextTypes = {
  close: _propTypes2.default.func
}, _temp2)) || _class);
exports.default = Notification;

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(202);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = __webpack_require__(360);

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(190);

var _store2 = _interopRequireDefault(_store);

var _Root = __webpack_require__(925);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './ipfs'
// import IpfsRoom from './ipfs-pubsub-room'


// window.IpfsRoom = IpfsRoom


_reactDom2.default.render(_react2.default.createElement(_Root2.default, { history: _store.history, store: _store2.default, routes: _routes2.default }), document.getElementById('root'));

/***/ }),
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


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(95);

var _reactRouterDom = __webpack_require__(55);

var _helpers = __webpack_require__(12);

var _Home = __webpack_require__(628);

var _Home2 = _interopRequireDefault(_Home);

var _Balances = __webpack_require__(891);

var _Balances2 = _interopRequireDefault(_Balances);

var _History = __webpack_require__(901);

var _History2 = _interopRequireDefault(_History);

var _NotFound = __webpack_require__(907);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Swap = __webpack_require__(908);

var _Swap2 = _interopRequireDefault(_Swap);

var _Feed = __webpack_require__(921);

var _Feed2 = _interopRequireDefault(_Feed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _react2.default.createElement(_reactRouter.Route, { exact: true, path: _helpers.links.home, component: _Home2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.balance, component: _Balances2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.history, component: _History2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.feed, component: _Feed2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: _helpers.links.swap + '/:orderId', component: _Swap2.default }),
  _react2.default.createElement(_reactRouter.Route, { component: _NotFound2.default })
);

exports.default = routes;

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
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _bitcoinjsLib = __webpack_require__(100);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var network =  true ? _bitcoinjsLib2.default.networks.bitcoin : _bitcoinjsLib2.default.networks.testnet;

exports.default = {
  network: network
};

/***/ }),
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
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 405 */,
/* 406 */
/***/ (function(module, exports) {

/* (ignored) */

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
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
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
/* 470 */,
/* 471 */,
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
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 506 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
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
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  home: '/',
  balance: '/balance',
  history: '/history',
  swap: '/swap',
  feed: '/feed'
};

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _superagent = __webpack_require__(610);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createResponseHandler = function createResponseHandler(req, opts) {
  var debug = opts.method.toUpperCase() + ' ' + opts.endpoint;

  return new _promise2.default(function (fulfill, reject) {
    return req.end(function (err, res) {
      var serverError = void 0;
      var body = res.body; // eslint-disable-line

      try {
        if (!body) {
          body = JSON.parse(res.text);
        }

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

        var resData = opts.modifyResult(body);

        // Resolve

        fulfill(resData, res);
        opts.onComplete();
      } catch (err) {
        console.log(err);
        reject(err);
      }
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
/* 595 */,
/* 596 */,
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
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _localStorage = __webpack_require__(617);

var _localStorage2 = _interopRequireDefault(_localStorage);

var _privateKeyNames = __webpack_require__(618);

var _privateKeyNames2 = _interopRequireDefault(_privateKeyNames);

var _notifications = __webpack_require__(619);

var _notifications2 = _interopRequireDefault(_notifications);

var _modals = __webpack_require__(620);

var _modals2 = _interopRequireDefault(_modals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  localStorage: _localStorage2.default,
  privateKeyNames: _privateKeyNames2.default,
  notifications: _notifications2.default,
  modals: _modals2.default
};

/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  privateKeysSaved: 'privateKeysSaved'
};

/***/ }),
/* 618 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  eth: "mainnet" + ":eth:privateKey",
  btc: "mainnet" + ":btc:privateKey"
};

/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  SuccessWithdraw: 'SuccessWithdraw',
  Message: 'Message'
};

/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  Withdraw: 'WithdrawModal',
  Offer: 'OfferModal',
  PrivateKeys: 'PrivateKeysModal'
};

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

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
/* 622 */,
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

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
/* 624 */,
/* 625 */,
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 627 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageHeadline = __webpack_require__(116);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Title = __webpack_require__(316);

var _Title2 = _interopRequireDefault(_Title);

var _SubTitle = __webpack_require__(188);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _Href = __webpack_require__(771);

var _Href2 = _interopRequireDefault(_Href);

var _SearchSwap = __webpack_require__(773);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Orders = __webpack_require__(849);

var _Orders2 = _interopRequireDefault(_Orders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(_ref) {
    var initialData = _ref.initialData;
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

    _initialiseProps.call(_this);

    var _ref2 = initialData || {},
        buyCurrency = _ref2.buyCurrency,
        sellCurrency = _ref2.sellCurrency;

    _this.state = {
      buyCurrency: buyCurrency || 'eth',
      sellCurrency: sellCurrency || 'btc'
    };
    return _this;
  }

  Home.prototype.render = function render() {
    var _state = this.state,
        buyCurrency = _state.buyCurrency,
        sellCurrency = _state.sellCurrency;

    var filterOrders = '' + buyCurrency + sellCurrency;

    return _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        _PageHeadline2.default,
        null,
        _react2.default.createElement(
          _Title2.default,
          null,
          'Swap.Online'
        ),
        _react2.default.createElement(
          _SubTitle2.default,
          null,
          'We are working to start swap.online as soon as possible.',
          _react2.default.createElement('br', null),
          'Subscribe to ',
          _react2.default.createElement(
            'a',
            { href: 'https://t.me/swaponlineint', onClick: this.handleClickTelegram, target: '_blank' },
            'telegram'
          ),
          ' and ',
          _react2.default.createElement(
            'a',
            { href: '/', target: '_blank', onClick: this.handleClickMailing },
            'mailing list'
          )
        )
      ),
      _react2.default.createElement(_SearchSwap2.default, {
        updateFilter: this.handleSellCurrencySelect,
        buyCurrency: buyCurrency,
        sellCurrency: sellCurrency
      }),
      _react2.default.createElement(_Orders2.default, { filter: filterOrders })
    );
  };

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
/* 671 */,
/* 672 */,
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
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
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
/* 736 */,
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"headline":"_0kjEr"};

/***/ }),
/* 769 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"title":"_2DXQm_"};

/***/ }),
/* 770 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"subTitle":"_3xZD8p"};

/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(55);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Href = __webpack_require__(772);

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
/* 772 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"link":"_1RXNDW"};

/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SearchSwap = __webpack_require__(774);

var _SearchSwap2 = _interopRequireDefault(_SearchSwap);

var _CurrencySelect = __webpack_require__(317);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSwap = function SearchSwap(_ref) {
  var buyCurrency = _ref.buyCurrency,
      sellCurrency = _ref.sellCurrency,
      updateFilter = _ref.updateFilter;
  return _react2.default.createElement(
    'div',
    { styleName: 'choice' },
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        'p',
        { styleName: 'text' },
        'You want buy'
      ),
      _react2.default.createElement(_CurrencySelect2.default, {
        styleName: 'currencySelect',
        selectedValue: buyCurrency,
        onSelect: updateFilter
      })
    ),
    _react2.default.createElement(
      'div',
      { styleName: 'row' },
      _react2.default.createElement(
        'p',
        { styleName: 'text' },
        'You want sell'
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
/* 774 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"currencySelect":"_3OWa5t","choice":"_1Emj0F","row":"xJgabA","text":"fFcGkk"};

/***/ }),
/* 775 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _DropDown = __webpack_require__(777);

var _DropDown2 = _interopRequireDefault(_DropDown);

var _toggle = __webpack_require__(778);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropDown = (_dec = (0, _toggle2.default)(), _dec2 = (0, _reactCssModules2.default)(_DropDown2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(DropDown, _Component);

  function DropDown(_ref) {
    var initialValue = _ref.initialValue,
        selectedValue = _ref.selectedValue;
    (0, _classCallCheck3.default)(this, DropDown);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

    _initialiseProps.call(_this);

    _this.state = {
      selectedValue: initialValue || selectedValue || 0
    };
    return _this;
  }

  DropDown.prototype.render = function render() {
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
  };

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
/* 777 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"dropDown":"_3dP7tS","active":"_2ugFLw","arrow":"_3YMxCM","selectedItem":"_3MyRdn","select":"_369zfM","option":"_2DKZg5"};

/***/ }),
/* 778 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

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
        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, WrappedComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.state = {
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

      WrappedComponent.prototype.render = function render() {

        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, this.state, {
          toggleOpen: this.toggleOpen,
          toggleClose: this.toggleClose
        }));
      };

      return WrappedComponent;
    }(_react.PureComponent);
  };
};

/***/ }),
/* 779 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Option = __webpack_require__(780);

var _Option2 = _interopRequireDefault(_Option);

var _CurrencyIcon = __webpack_require__(318);

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
/* 780 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"_1ncL6U"};

/***/ }),
/* 781 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"text":"_33KTXr"};

/***/ }),
/* 782 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/btc_f4b66d.svg";

/***/ }),
/* 783 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/eth_262e9a.svg";

/***/ }),
/* 784 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/icx_cda046.svg";

/***/ }),
/* 785 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/waves_54c731.svg";

/***/ }),
/* 786 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/xrp_db0377.svg";

/***/ }),
/* 787 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/nim_954328.svg";

/***/ }),
/* 788 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reducers = __webpack_require__(31);

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
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
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
/* 820 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hide = exports.show = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {};

var show = exports.show = function show(state, _ref) {
  var _Object$assign2;

  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (_Object$assign2 = {}, _Object$assign2[name] = {
    name: name,
    data: data
  }, _Object$assign2));
};

var hide = function hide(state, name) {
  var closingNotification = state[name],
      otherNotifications = (0, _objectWithoutProperties3.default)(state, [name]);

  return otherNotifications;
};
exports.hide = hide;

/***/ }),
/* 821 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.close = exports.open = exports.initialState = undefined;

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// this is necessary to arrange the modals in the opening order, not alphabetical
var zIndex = 305;

var initialState = exports.initialState = {};

var open = exports.open = function open(state, _ref) {
  var _Object$assign2;

  var name = _ref.name,
      _ref$data = _ref.data,
      data = _ref$data === undefined ? {} : _ref$data;
  return (0, _assign2.default)({}, state, (_Object$assign2 = {}, _Object$assign2[name] = {
    name: name,
    data: data,
    zIndex: ++zIndex
  }, _Object$assign2));
};

var close = function close(state, name) {
  var closingModal = state[name],
      otherModals = (0, _objectWithoutProperties3.default)(state, [name]);


  zIndex -= 1;

  return otherModals;
};
exports.close = close;

/***/ }),
/* 822 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setTransactions = exports.setFilter = exports.initialState = undefined;

var _assign = __webpack_require__(9);

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
    transactions: [].concat(state.transactions, payload)
  });
};

/***/ }),
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setVisibility = exports.initialState = undefined;

var _assign = __webpack_require__(9);

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
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.setTokenData = exports.setBalance = exports.setAuthData = exports.initialState = undefined;

var _assign = __webpack_require__(9);

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
  tokenData: {
    address: '',
    balance: 0,
    currency: 'NOXON'
  },
  nimData: {
    address: '',
    balance: 0,
    currency: 'NIM'
  }
};

var setAuthData = exports.setAuthData = function setAuthData(state, _ref) {
  var _Object$assign2;

  var name = _ref.name,
      data = _ref.data;
  return (0, _assign2.default)({}, state, (_Object$assign2 = {}, _Object$assign2[name] = (0, _assign2.default)({}, state[name], data), _Object$assign2));
};

var setBalance = exports.setBalance = function setBalance(state, _ref2) {
  var _Object$assign3;

  var name = _ref2.name,
      amount = _ref2.amount;
  return (0, _assign2.default)({}, state, (_Object$assign3 = {}, _Object$assign3[name] = (0, _assign2.default)({}, state[name], {
    balance: Number(amount)
  }), _Object$assign3));
};

var setTokenData = exports.setTokenData = function setTokenData(state, _ref3) {
  var _Object$assign4;

  var name = _ref3.name;
  return (0, _assign2.default)({}, state, (_Object$assign4 = {}, _Object$assign4[name] = (0, _assign2.default)({}, state[name]), _Object$assign4));
};

/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.deleteItems = exports.addItems = exports.initialState = undefined;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = exports.initialState = {
  items: []
};

var addItems = exports.addItems = function addItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: [].concat(payload)
  });
};

var deleteItems = exports.deleteItems = function deleteItems(state, payload) {
  return (0, _assign2.default)({}, state, {
    items: payload
  });
};

/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var initialState = exports.initialState = {
  filter: 'none'
};

var ordersFilter = exports.ordersFilter = function ordersFilter(state, payload) {
  return {
    filter: payload
  };
};

/***/ }),
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reducers = __webpack_require__(31);

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
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reducers = __webpack_require__(31);

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
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reducers = __webpack_require__(31);

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
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

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
            _actions2.default.token.login(_ethPrivateKey);
            // await actions.nimiq.login(_ethPrivateKey)

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
  _actions2.default.token.getBalance();
  // actions.nimiq.getBalance()
};

var getDemoMoney =  true ? function () {} : function () {
  _helpers.request.get('https://swap.wpmix.net/demokeys.php', {}).then(function (r) {
    localStorage.setItem(_helpers.constants.privateKeyNames.btc, r[0]);
    localStorage.setItem(_helpers.constants.privateKeyNames.eth, r[1]);
    global.location.reload();
  });
};

var setTransactions = function setTransactions(ethAddress, btcAddress) {
  return _promise2.default.all([_actions2.default.bitcoin.getTransaction(btcAddress), _actions2.default.ethereum.getTransaction(ethAddress), _actions2.default.token.getTransaction(ethAddress)]).then(function (transactions) {
    var _ref2;

    var data = (_ref2 = []).concat.apply(_ref2, [[]].concat(transactions)).sort(function (a, b) {
      return b.date - a.date;
    });
    _reducers2.default.history.setTransactions(data);
  });
};

exports.default = {
  sign: sign,
  getBalances: getBalances,
  getDemoMoney: getDemoMoney,
  setTransactions: setTransactions
};

/***/ }),
/* 835 */,
/* 836 */,
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _bigi = __webpack_require__(49);

var _bigi2 = _interopRequireDefault(_bigi);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(90);

var _bitcoinjsLib = __webpack_require__(100);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(62);

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

var getTransaction = function getTransaction(address) {
  return new _promise2.default(function (resolve) {

    var url = _appConfig2.default.api.blocktrail + '/address/' + address + '/transactions?api_key=' + _appConfig2.default.apiKeys.blocktrail;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      if (res.total) {
        transactions = res.data.map(function (item) {
          return {
            type: 'btc',
            status: item.block_hash != null ? 1 : 0,
            value: item.outputs[0].value / 1e8,
            address: item.outputs[0].address,
            date: new Date(Date.parse(item.time)).getTime(),
            direction: address.toLocaleLowerCase() === item.outputs[0].address.toLocaleLowerCase() ? 'in' : 'out'
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
    var _getState2 = (0, _core.getState)(),
        privateKey = _getState2.user.btcData.privateKey;

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
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(90);

var _web = __webpack_require__(78);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(62);

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

var getTransaction = function getTransaction(address) {
  return new _promise2.default(function (resolve) {
    var url = _appConfig2.default.api.etherscan + '?module=account&action=txlist&address=' + address + '&startblock=0&endblock=99999999&sort=asc&apikey=' + _appConfig2.default.apiKeys.etherscan;
    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            type: 'eth',
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
    var _getState2 = (0, _core.getState)(),
        privateKey = _getState2.user.ethData.privateKey;

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
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _humanStandardTokenAbi = __webpack_require__(840);

var _humanStandardTokenAbi2 = _interopRequireDefault(_humanStandardTokenAbi);

var _helpers = __webpack_require__(12);

var _core = __webpack_require__(90);

var _web = __webpack_require__(78);

var _web2 = _interopRequireDefault(_web);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(62);

var _appConfig2 = _interopRequireDefault(_appConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noxonContract = void 0;

var setupContract = function setupContract(ethAddress) {
  if (!_web2.default.eth.accounts.wallet[ethAddress]) {
    throw new Error('web3 does not have given address');
  }

  var options = {
    from: ethAddress,
    gas: '' + _appConfig2.default.services.web3.gas,
    gasPrice: '' + _appConfig2.default.services.web3.gasPrice
  };

  noxonContract = new _web2.default.eth.Contract(_humanStandardTokenAbi2.default, _appConfig2.default.services.web3.noxonToken, options);
};

var login = function login(privateKey) {
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

  _reducers2.default.user.setAuthData({ name: 'tokenData', data: data });
  setupContract(data.address);
};

var getBalance = function getBalance() {
  var _getState = (0, _core.getState)(),
      address = _getState.user.ethData.address;

  return _helpers.request.get(_appConfig2.default.api.etherscan + '?module=account&action=tokenbalance&contractaddress=' + noxonContract._address + '&address=' + address).then(function (_ref) {
    var amount = _ref.result;

    console.log('tokenAddress', noxonContract._address);
    console.log('result', amount);
    _reducers2.default.user.setBalance({ name: 'tokenData', amount: amount });
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

var getTransaction = function getTransaction(address) {
  return new _promise2.default(function (resolve) {
    var url = ['https://api-rinkeby.etherscan.io/api?module=account&action=tokentx', '&contractaddress=' + _appConfig2.default.services.web3.noxonToken, '&address=' + address, '&startblock=0&endblock=99999999', '&sort=asc&apikey=' + _appConfig2.default.apiKeys.blocktrail].join('');

    var transactions = void 0;

    _helpers.request.get(url).then(function (res) {
      console.log('res', res);
      if (res.status) {
        transactions = res.result.filter(function (item) {
          return item.value > 0;
        }).map(function (item) {
          return {
            type: item.tokenName,
            contractAddress: item.contractAddress,
            status: item.blockHash != null ? 1 : 0,
            value: item.value,
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
    return noxonContract.methods.transfer(to, amount).send().then(function (receipt) {
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
/* 840 */,
/* 841 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(41);

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

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _appConfig = __webpack_require__(62);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _nimiq = __webpack_require__(842);

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
/* 842 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;
exports.prepareTransaction = exports.followTransaction = exports.ethKeyToKeyPair = undefined;

var _promise = __webpack_require__(33);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).Buffer))

/***/ }),
/* 843 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _core = __webpack_require__(90);

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
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reducers = __webpack_require__(31);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactGtmModule = __webpack_require__(845);

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
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _newSwap = __webpack_require__(91);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Row = __webpack_require__(883);

var _Row2 = _interopRequireDefault(_Row);

var _Table = __webpack_require__(194);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Orders = function (_Component) {
  (0, _inherits3.default)(Orders, _Component);

  function Orders() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Orders);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      orders: _newSwap.swapApp.services.orders.items
    }, _this.updateOrders = function () {
      _this.setState({
        orders: _newSwap.swapApp.services.orders.items
      });

      var orders = _this.state.orders;


      if (orders.length !== 0) {
        _actions2.default.feed.getFeedDataFromOrder(orders);
      }
    }, _this.filterOrders = function (orders, filter) {
      return orders.filter(function (f) {
        return '' + f.buyCurrency + f.sellCurrency === filter;
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Orders.prototype.componentWillMount = function componentWillMount() {
    _actions2.default.analytics.dataEvent('open-page-orders');
    _newSwap.swapApp.services.orders.on('new orders', this.updateOrders).on('new order', this.updateOrders).on('order update', this.updateOrders).on('remove order', this.updateOrders);
  };

  Orders.prototype.componentWillUnmount = function componentWillUnmount() {
    _newSwap.swapApp.services.orders.off('new orders', this.updateOrders).off('new order', this.updateOrders).off('order update', this.updateOrders).off('remove order', this.updateOrders);
  };

  Orders.prototype.render = function render() {
    var _this2 = this;

    var titles = ['EXCHANGE', 'BUY', 'SELL', 'EXCHANGE RATE', ''];
    var orders = this.state.orders;
    var filter = this.props.filter;

    var filteredOrders = this.filterOrders(orders, filter);

    return _react2.default.createElement(_Table2.default, {
      titles: titles,
      rows: filteredOrders,
      rowRender: function rowRender(row, index) {
        return _react2.default.createElement(_Row2.default, {
          key: index,
          row: row,
          update: _this2.updateOrders
        });
      }
    });
  };

  return Orders;
}(_react.Component);

exports.default = Orders;

/***/ }),
/* 850 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ['eth', 'btc', 'nim'];

/***/ }),
/* 851 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ['web3', 'bitcoin', 'Ipfs', 'IpfsRoom', 'storage'];

/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ['auth', 'room', 'orders', 'swaps'];

/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = ['ethSwap', 'ethTokenSwap', 'btcSwap'];

/***/ }),
/* 854 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  MAINNET: 'mainnet',
  TESTNET: 'testnet'
};

/***/ }),
/* 855 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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

  StorageFactory.prototype.setItem = function setItem(key, value) {
    this.storage.setItem('' + this.prefix + key, (0, _stringify2.default)(value));
  };

  StorageFactory.prototype.getItem = function getItem(key) {
    var value = this.storage.getItem('' + this.prefix + key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return undefined;
    }
  };

  StorageFactory.prototype.removeItem = function removeItem(key) {
    return this.storage.removeItem('' + this.prefix + key);
  };

  return StorageFactory;
}();

exports.default = StorageFactory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 856 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _SwapApp = __webpack_require__(331);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServiceInterface = function () {

  // _constructor for aggregation
  ServiceInterface.prototype._constructor = function _constructor() {
    // service name, within it will be stored in SwapApp.services
    this._serviceName = null;
    this._dependsOn = null;
    this._spyHandlers = [];
  };

  function ServiceInterface() {
    (0, _classCallCheck3.default)(this, ServiceInterface);

    this._constructor();
  }

  ServiceInterface.prototype._waitRelationsResolve = function _waitRelationsResolve() {
    var _this = this;

    if (this._dependsOn && this._dependsOn.length) {
      var dependsOnMap = {};

      this._dependsOn.forEach(function (Service) {
        dependsOnMap[Service.name] = {
          initialized: false
        };
        _SwapApp2.default.services[Service.name]._addWaitRelationHandler(function () {
          _this._dependsOn[Service.name].initialized = true;

          var areAllExpectsInitialized = (0, _keys2.default)(_this._dependsOn).every(function (serviceName) {
            return _this._dependsOn[serviceName].initialized;
          });

          if (areAllExpectsInitialized) {
            _this.initService();
          }
        });
      });

      this._dependsOn = dependsOnMap;
    }
  };

  ServiceInterface.prototype._addWaitRelationHandler = function _addWaitRelationHandler(handler) {
    this._spyHandlers.push(handler);
  };

  ServiceInterface.prototype._tryInitService = function _tryInitService() {
    if (!this._dependsOn) {
      this.initService();
      this._spyHandlers.forEach(function (handler) {
        return handler();
      });
      this._spyHandlers = [];
    }
  };

  ServiceInterface.prototype.initService = function initService() {
    // init service on SwapApp mounting
  };

  return ServiceInterface;
}();

exports.default = ServiceInterface;

/***/ }),
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapInterface = function () {
  function SwapInterface() {
    (0, _classCallCheck3.default)(this, SwapInterface);

    // service name, within it will be stored in SwapApp.swaps
    this._serviceName = null;
  }

  SwapInterface.prototype._initSwap = function _initSwap() {
    // init service on SwapApp mounting
  };

  return SwapInterface;
}();

exports.default = SwapInterface;

/***/ }),
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {

  // _constructor for aggregation
  Collection.prototype._constructor = function _constructor() {
    this.items = [];
    this.itemIds = {};
  };

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


  Collection.prototype.prepend = function prepend(item, key) {
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
  };

  /**
   * Add item at the end of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.append = function append(item, key) {
    this.items.push(item);
    if (key) {
      this.itemIds[key] = this.items.length - 1;
    }
    return item;
  };

  /**
   * Remove item by index from current collection
   * @param index
   * @returns {*}
   */


  Collection.prototype.removeByIndex = function removeByIndex(index) {
    this.items = this.items.splice(index, 1);
  };

  /**
   * Remove item by key [id] from current collection
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.removeByKey = function removeByKey(key) {
    var _this = this;

    console.log('removeByKey', key);
    console.log('items', [].concat(this.items));
    console.log('itemIds', (0, _assign2.default)({}, this.itemIds));

    var index = this.itemIds[key];

    console.log('index', index);

    if (index !== undefined) {
      this.items.splice(index, 1);
      delete this.itemIds[key];

      console.log('items after removing', [].concat(this.items));

      (0, _keys2.default)(this.itemIds).forEach(function (key) {
        if (_this.itemIds[key] > index) {
          _this.itemIds[key]--;
        }
      });

      console.log('items after reindexing', [].concat(this.items));
    }
  };

  /**
   * Get index of item in current collection
   * @param item
   * @returns {number}
   */


  Collection.prototype.indexOf = function indexOf(item) {
    return this.items.indexOf(item);
  };

  /**
   * Get item by index from current collection
   * @param index
   * @returns {*}
   */


  Collection.prototype.getByIndex = function getByIndex(index) {
    return this.items[index];
  };

  /**
   * Get item by key [id] from current collection
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.getByKey = function getByKey(key) {
    return this.items[this.itemIds[key]];
  };

  Collection.prototype.isExist = function isExist(item) {
    return this.items.includes(item);
  };

  /**
   * Check if item with such name exists in current collection
   * @param key {string|number}
   * @returns {boolean}
   */


  Collection.prototype.isExistByKey = function isExistByKey(key) {
    return Boolean(this.getByKey(key));
  };

  return Collection;
}();

exports.default = Collection;

/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.events = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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


  Event.prototype.addHandler = function addHandler(handler) {
    var _this = this;

    this.handlers.push(handler.bind({
      unsubscribe: function unsubscribe() {
        _this.removeHandler(handler);
      }
    }));
  };

  /**
   * Remove handler from current Event
   *
   * @param handler {function}
   * @returns {Array.<T>|*}
   */


  Event.prototype.removeHandler = function removeHandler(handler) {
    var handlerIndex = this.handlers.indexOf(handler);

    this.handlers.splice(handlerIndex, 1);
  };

  /**
   * Call all handlers in all priorities of current Event
   *
   * @param eventArgs {...array}
   */


  Event.prototype.call = function call() {
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
  };

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


  EventAggregator.prototype.getEvent = function getEvent(name) {
    var event = this.events[name];

    if (!event) {
      event = new Event(name);
      this.events[name] = event;
    }

    return event;
  };

  /**
   *
   * @param name {string}
   * @param handler {function}
   * @returns {{ event: *, handler: * }}
   */


  EventAggregator.prototype.subscribe = function subscribe(name, handler) {
    var event = this.getEvent(name);

    event.addHandler(handler);

    return { event: event, handler: handler };
  };

  /**
   *
   * @param eventName {string}
   * @param handler {function}
   */


  EventAggregator.prototype.unsubscribe = function unsubscribe(eventName, handler) {
    var event = this.getEvent(eventName);

    event.removeHandler(handler);
  };

  /**
   *
   * @param name {string}
   * @param eventArgs {...array}
   */


  EventAggregator.prototype.dispatch = function dispatch(name) {
    var event = this.getEvent(name);

    if (event) {
      for (var _len2 = arguments.length, eventArgs = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        eventArgs[_key2 - 1] = arguments[_key2];
      }

      event.call.apply(event, eventArgs);
    }
  };

  /**
   * Subscribe to Event and unsubscribe after call
   *
   * @param eventName {string}
   * @param handler {function}
   * @returns {{ event: *, handlerWrapper: (function(...[*])) }}
   */


  EventAggregator.prototype.once = function once(eventName, handler) {
    var event = this.getEvent(eventName);

    var handlerWrapper = function handlerWrapper() {
      var result = handler.apply(undefined, arguments);
      if (result) {
        event.removeHandler(handlerWrapper);
      }
    };

    event.addHandler(handlerWrapper);

    return { event: event, handlerWrapper: handlerWrapper };
  };

  return EventAggregator;
}();

var events = new EventAggregator();

exports.default = EventAggregator;
exports.events = events;

/***/ }),
/* 860 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pullProps = __webpack_require__(861);

var _pullProps2 = _interopRequireDefault(_pullProps);

var _ignoreProps = __webpack_require__(862);

var _ignoreProps2 = _interopRequireDefault(_ignoreProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  pullProps: _pullProps2.default,
  ignoreProps: _ignoreProps2.default
};

/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 862 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

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
/* 863 */,
/* 864 */,
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": 127,
	"./SwapAuth": 191,
	"./SwapAuth.js": 191,
	"./btc": 334,
	"./btc.js": 334,
	"./eth": 335,
	"./eth.js": 335,
	"./index": 127,
	"./index.js": 127
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
webpackContext.id = 865;

/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(115);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(192);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

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

    var _this = (0, _possibleConstructorReturn3.default)(this, _ServiceInterface.call(this));

    _this.handleUserOnline = function (peer) {
      if (peer !== _this.peer) {
        _this.events.dispatch('user online', peer);
      }
    };

    _this.handleUserOffline = function (peer) {
      if (peer !== _this.peer) {
        _this.events.dispatch('user offline', peer);
      }
    };

    _this.handleNewMessage = function (message) {
      if (message.from === _this.peer) {
        return;
      }

      var data = JSON.parse(message.data.toString());

      if (data && data.length) {
        data.forEach(function (_ref) {
          var event = _ref.event,
              data = _ref.data;

          _this.events.dispatch(event, (0, _assign2.default)({}, data || {}, { fromPeer: message.from }));
        });
      }
    };

    if (!config || (typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
      throw new Error('SwapRoomService: "config" of type object required');
    }

    _this._serviceName = 'room';
    _this.events = new _swap.Events();
    _this.config = config;
    _this.peer = null;
    return _this;
  }

  SwapRoom.prototype.initService = function initService() {
    var _this2 = this;

    if (!_swap2.default.env.Ipfs) {
      throw new Error('SwapRoomService: Ipfs required');
    }
    if (!_swap2.default.env.IpfsRoom) {
      throw new Error('SwapRoomService: IpfsRoom required');
    }

    var ipfs = new _swap2.default.env.Ipfs(this.config);

    ipfs.once('error', function (err) {
      console.log('IPFS error!', err);
    });

    ipfs.once('ready', function () {
      return ipfs.id(function (err, info) {
        console.info('IPFS ready!', info);

        if (err) {
          throw err;
        }

        _this2._init({
          peer: info.id,
          ipfsConnection: ipfs
        });
      });
    });
  };

  SwapRoom.prototype._init = function _init(_ref2) {
    var peer = _ref2.peer,
        ipfsConnection = _ref2.ipfsConnection;

    this.peer = peer;

    this.connection = _swap2.default.env.IpfsRoom(ipfsConnection, '../swap.online', {
      pollInterval: 5000
    });

    this.connection.on('peer joined', this.handleUserOnline);
    this.connection.on('peer left', this.handleUserOffline);
    this.connection.on('message', this.handleNewMessage);

    this.events.dispatch('ready');
  };

  SwapRoom.prototype.subscribe = function subscribe(eventName, handler) {
    this.events.subscribe(eventName, handler);
  };

  SwapRoom.prototype.once = function once(eventName, handler) {
    this.events.once(eventName, handler);
  };

  SwapRoom.prototype.sendMessage = function sendMessage() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      var message = args[0];


      this.connection.broadcast((0, _stringify2.default)(message));
    } else {
      var peer = args[0],
          _message = args[1];


      this.connection.sendTo(peer, (0, _stringify2.default)(_message));
    }
  };

  return SwapRoom;
}(_swap.ServiceInterface);

exports.default = SwapRoom;

/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SwapOrders = __webpack_require__(868);

var _SwapOrders2 = _interopRequireDefault(_SwapOrders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SwapOrders2.default;

/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(192);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(336);

var _swap4 = _interopRequireDefault(_swap3);

var _aggregation2 = __webpack_require__(869);

var _aggregation3 = _interopRequireDefault(_aggregation2);

var _events = __webpack_require__(337);

var _events2 = _interopRequireDefault(_events);

var _Order = __webpack_require__(878);

var _Order2 = _interopRequireDefault(_Order);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqueId = function () {
  var id = Date.now();
  return function () {
    return _swap2.default.services.room.peer + '-' + ++id;
  };
}();

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

    var _this = (0, _possibleConstructorReturn3.default)(this, _aggregation.call(this));

    _this._serviceName = 'orders';
    _this._dependsOn = [_swap4.default];
    return _this;
  }

  SwapOrders.prototype.initService = function initService() {
    var _this2 = this;

    _swap2.default.services.room.subscribe('ready', function () {
      _this2._persistMyOrders();
    });

    _swap2.default.services.room.subscribe('user online', function (peer) {
      var myOrders = _this2.getMyOrders();

      if (myOrders.length) {
        // clean orders from other additional props
        myOrders = myOrders.map(function (item) {
          return _swap.util.pullProps(item, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing');
        });

        console.log('Send my orders to ' + peer, myOrders);

        _swap2.default.services.room.sendMessage(peer, [{
          event: 'new orders',
          data: {
            orders: myOrders
          }
        }]);
      }
    });

    _swap2.default.services.room.subscribe('user offline', function (peer) {
      var peerOrders = _this2.getPeerOrders(peer);

      if (peerOrders.length) {
        peerOrders.forEach(function (_ref) {
          var id = _ref.id;

          _this2._handleRemove(id);
        });
      }
    });

    _swap2.default.services.room.subscribe('new orders', function (_ref2) {
      var fromPeer = _ref2.fromPeer,
          orders = _ref2.orders;

      // ductape to check if such orders already exist
      var filteredOrders = orders.filter(function (_ref3) {
        var id = _ref3.id,
            peer = _ref3.owner.peer;
        return !_this2.getByKey(id) && peer === fromPeer;
      });

      console.log('Receive orders from ' + fromPeer, filteredOrders);

      _this2._handleMultipleCreate(filteredOrders);
    });

    _swap2.default.services.room.subscribe('new order', function (_ref4) {
      var fromPeer = _ref4.fromPeer,
          order = _ref4.order;

      if (order && order.owner && order.owner.peer === fromPeer) {
        _this2._handleCreate(order);
      }
    });

    _swap2.default.services.room.subscribe('remove order', function (_ref5) {
      var fromPeer = _ref5.fromPeer,
          orderId = _ref5.orderId;

      var order = _this2.getByKey(orderId);

      if (order && order.owner && order.owner.peer === fromPeer) {
        _this2._handleRemove(orderId);
      }
    });
  };

  SwapOrders.prototype._persistMyOrders = function _persistMyOrders() {
    var _this3 = this;

    this.getMyOrders().forEach(function (orderData) {
      _this3._handleCreate(orderData);
    });
  };

  SwapOrders.prototype._create = function _create(data) {
    var order = new _Order2.default(this, (0, _assign2.default)({}, data, {
      id: data.id || getUniqueId()
    }));

    this.append(order, order.id);

    return order;
  };

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
   */


  SwapOrders.prototype._handleCreate = function _handleCreate(data) {
    var order = this._create(data);

    _events2.default.dispatch('new order', order);
  };

  SwapOrders.prototype._handleMultipleCreate = function _handleMultipleCreate(ordersData) {
    var _this4 = this;

    var orders = [];

    ordersData.forEach(function (data) {
      var order = _this4._create(data);
      orders.push(order);
    });

    _events2.default.dispatch('new orders', orders);
  };

  /**
   *
   * @param {string} orderId
   */


  SwapOrders.prototype._handleRemove = function _handleRemove(orderId) {
    var order = this.getByKey(orderId);

    this.removeByKey(orderId);
    _events2.default.dispatch('remove order', order);
  };

  SwapOrders.prototype._saveMyOrders = function _saveMyOrders() {
    var myOrders = this.items.filter(function (_ref6) {
      var peer = _ref6.owner.peer;
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
  };

  SwapOrders.prototype.getMyOrders = function getMyOrders() {
    return _swap2.default.env.storage.getItem('myOrders') || [];
  };

  SwapOrders.prototype.getPeerOrders = function getPeerOrders(peer) {
    return this.items.filter(function (_ref7) {
      var owner = _ref7.owner;
      return peer === owner.peer;
    });
  };

  /**
   *
   * @param {object} data
   * @param {string} data.buyCurrency
   * @param {string} data.sellCurrency
   * @param {number} data.buyAmount
   * @param {number} data.sellAmount
   */


  SwapOrders.prototype.create = function create(data) {
    var order = this._create((0, _assign2.default)({}, data, {
      owner: _swap2.default.services.auth.getPublicData()
    }));
    this._saveMyOrders();

    _swap2.default.services.room.sendMessage([{
      event: 'new order',
      data: {
        order: _swap.util.pullProps(order, 'id', 'owner', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount', 'isRequested', 'isProcessing')
      }
    }]);
  };

  /**
   *
   * @param {string} orderId
   */


  SwapOrders.prototype.remove = function remove(orderId) {
    this.removeByKey(orderId);
    _swap2.default.services.room.sendMessage([{
      event: 'remove order',
      data: {
        orderId: orderId
      }
    }]);
    this._saveMyOrders();
  };

  SwapOrders.prototype.on = function on(eventName, handler) {
    _events2.default.subscribe(eventName, handler);
    return this;
  };

  SwapOrders.prototype.off = function off(eventName, handler) {
    _events2.default.unsubscribe(eventName, handler);
    return this;
  };

  return SwapOrders;
}((0, _aggregation3.default)(_swap.ServiceInterface, _swap.Collection));

exports.default = SwapOrders;

/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getOwnPropertyDescriptor = __webpack_require__(870);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _defineProperty = __webpack_require__(333);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertySymbols = __webpack_require__(873);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

var _getOwnPropertyNames = __webpack_require__(875);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

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
      (0, _classCallCheck3.default)(this, _Combined);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, _baseClass.call.apply(_baseClass, [this].concat(args)));

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
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _events = __webpack_require__(337);

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

    this._update((0, _assign2.default)({}, data, {
      isMy: data.owner.peer === _swap2.default.services.room.peer
    }));

    this._onMount();
  }

  Order.prototype._onMount = function _onMount() {
    var _this = this;

    _swap2.default.services.room.subscribe('request swap', function (_ref) {
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
  };

  Order.prototype._update = function _update(values) {
    var _this2 = this;

    (0, _keys2.default)(values).forEach(function (key) {
      _this2[key] = values[key];
    });
  };

  Order.prototype.update = function update(values) {
    this._update(values);
    this.collection._saveMyOrders();

    _events2.default.dispatch('swap update', this, values);
  };

  /**
   *
   * @param callback - awaiting for response - accept / decline
   */


  Order.prototype.sendRequest = function sendRequest(callback) {
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

    _swap2.default.services.room.subscribe('accept swap request', function (_ref3) {
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

    _swap2.default.services.room.subscribe('decline swap request', function (_ref4) {
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
  };

  Order.prototype.acceptRequest = function acceptRequest(participantPeer) {
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
  };

  Order.prototype.declineRequest = function declineRequest(participantPeer) {
    var index = void 0;

    this.requests.some(function (_ref6, _index) {
      var peer = _ref6.peer;

      if (peer === participantPeer) {
        index = _index;
      }
      return index !== undefined;
    });

    var requests = [].concat(this.requests.slice(0, index), this.requests.slice(index + 1));

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
  };

  return Order;
}();

exports.default = Order;

/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EthTokenSwap = exports.BtcSwap = exports.EthSwap = undefined;

var _EthSwap = __webpack_require__(880);

var _EthSwap2 = _interopRequireDefault(_EthSwap);

var _EthTokenSwap = __webpack_require__(881);

var _EthTokenSwap2 = _interopRequireDefault(_EthTokenSwap);

var _BtcSwap = __webpack_require__(882);

var _BtcSwap2 = _interopRequireDefault(_BtcSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.EthSwap = _EthSwap2.default;
exports.BtcSwap = _BtcSwap2.default;
exports.EthTokenSwap = _EthTokenSwap2.default;

/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

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

    var _this = (0, _possibleConstructorReturn3.default)(this, _SwapInterface.call(this));

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

    _this._swapName = 'ethSwap';
    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  EthSwap.prototype._initSwap = function _initSwap() {
    this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
  };

  /**
   *
   * @param {object} data
   * @param {string} data.participantAddress
   * @param {function} handleTransactionHash
   */


  EthSwap.prototype.sign = function sign(data, handleTransactionHash) {
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
  };

  /**
   *
   * @param {object} data
   * @param {string} data.secretHash
   * @param {string} data.participantAddress
   * @param {number} data.amount
   * @param {function} handleTransactionHash
   */


  EthSwap.prototype.create = function create(data, handleTransactionHash) {
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
                  value: Math.floor(_swap2.default.env.web3.utils.toWei(String(amount)))
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
  };

  /**
   *
   * @param {object} data
   * @param {string} data.secret
   * @param {string} data.ownerAddress
   * @param {function} handleTransactionHash
   */


  EthSwap.prototype.withdraw = function withdraw(data, handleTransactionHash) {
    var _this4 = this;

    var ownerAddress = data.ownerAddress,
        secret = data.secret;


    return new _promise2.default(function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
        var _secret, params, receipt;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _secret = '0x' + secret.replace(/^0x/, '');
                params = {
                  from: _swap2.default.services.auth.accounts.eth.address,
                  gas: _this4.gasLimit
                };
                _context3.next = 4;
                return _this4.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(hash);
                  }
                }).on('error', function (err) {
                  reject(err);
                });

              case 4:
                receipt = _context3.sent;


                resolve(receipt);

              case 6:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  EthSwap.prototype.refund = function refund() {
    // TODO write refund functional
  };

  EthSwap.prototype.getSecret = function getSecret(_ref4) {
    var _this5 = this;

    var participantAddress = _ref4.participantAddress;

    return new _promise2.default(function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
        var secret;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                secret = void 0;
                _context4.prev = 1;
                _context4.next = 4;
                return _this5.contract.methods.getSecret(participantAddress).call({
                  from: _swap2.default.services.auth.accounts.eth.address
                });

              case 4:
                secret = _context4.sent;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4['catch'](1);

                reject(_context4.t0);

              case 10:

                resolve(secret);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this5, [[1, 7]]);
      }));

      return function (_x7, _x8) {
        return _ref5.apply(this, arguments);
      };
    }());
  };

  EthSwap.prototype.close = function close(_ref6, handleTransactionHash) {
    var _this6 = this;

    var participantAddress = _ref6.participantAddress;

    return new _promise2.default(function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
        var params, receipt;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                params = {
                  from: _swap2.default.services.auth.accounts.eth.address,
                  gas: _this6.gasLimit
                };
                _context5.next = 3;
                return _this6.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(hash);
                  }
                }).on('error', function (err) {
                  reject(err);
                });

              case 3:
                receipt = _context5.sent;


                resolve(receipt);

              case 5:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this6);
      }));

      return function (_x9, _x10) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  return EthSwap;
}(_swap.SwapInterface);

exports.default = EthSwap;

/***/ }),
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthTokenSwap = function (_SwapInterface) {
  (0, _inherits3.default)(EthTokenSwap, _SwapInterface);

  /**
   *
   * @param {object}    options
   * @param {string}    options.address
   * @param {array}     options.abi
   * @param {string}    options.tokenAddress
   * @param {array}     options.tokenAbi
   * @param {number}    options.gasLimit
   * @param {function}  options.fetchBalance
   */
  function EthTokenSwap(options) {
    (0, _classCallCheck3.default)(this, EthTokenSwap);

    var _this = (0, _possibleConstructorReturn3.default)(this, _SwapInterface.call(this));

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

    _this._swapName = 'ethTokenSwap';

    _this.address = options.address;
    _this.abi = options.abi;
    _this.tokenAddress = options.tokenAddress;
    _this.tokenAbi = options.tokenAbi;

    _this.gasLimit = options.gasLimit || 3e6;
    _this.fetchBalance = options.fetchBalance;
    return _this;
  }

  EthTokenSwap.prototype._initSwap = function _initSwap() {
    this.contract = new _swap2.default.env.web3.eth.Contract(this.abi, this.address);
    this.ERC20 = new _swap2.default.env.web3.eth.Contract(this.tokenAbi, this.tokenAddress);
  };

  /**
   *
   * @param {object} data
   * @param {string} data.participantAddress
   * @param {function} handleTransactionHash
   */


  EthTokenSwap.prototype.sign = function sign(data, handleTransactionHash) {
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
  };

  EthTokenSwap.prototype.approve = function approve(_ref2, handleTransactionHash) {
    var _this3 = this;

    var amount = _ref2.amount;

    return new _promise2.default(function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
        var result;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _this3.ERC20.methods.approve(_this3.address, amount).send({
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
        return _ref3.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {string} data.owner
   * @param {string} data.spender
   * @returns {Promise}
   */


  EthTokenSwap.prototype.checkAllowance = function checkAllowance(data) {
    var _this4 = this;

    var owner = data.owner,
        spender = data.spender;


    return new _promise2.default(function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
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
        return _ref4.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {string} data.secretHash
   * @param {string} data.participantAddress
   * @param {number} data.amount
   * @param {function} handleTransactionHash
   */


  EthTokenSwap.prototype.create = function create(data, handleTransactionHash) {
    var _this5 = this;

    var secretHash = data.secretHash,
        participantAddress = data.participantAddress,
        amount = data.amount;


    return new _promise2.default(function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(resolve, reject) {
        var hash, values, params, _contract$methods, result;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                hash = '0x' + secretHash.replace(/^0x/, '');
                values = [hash, participantAddress, amount, _this5.tokenAddress];
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
        return _ref5.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {string} data.secret
   * @param {string} data.ownerAddress
   * @param {function} handleTransactionHash
   */


  EthTokenSwap.prototype.withdraw = function withdraw(data, handleTransactionHash) {
    var _this6 = this;

    var ownerAddress = data.ownerAddress,
        secret = data.secret;


    return new _promise2.default(function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(resolve, reject) {
        var _secret, params, result;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _secret = '0x' + secret.replace(/^0x/, '');
                params = {
                  from: _swap2.default.services.auth.accounts.eth.address,
                  gas: _this6.gasLimit
                };
                _context5.prev = 2;
                _context5.next = 5;
                return _this6.contract.methods.withdraw(_secret, ownerAddress).send(params).on('transactionHash', function (hash) {
                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(hash);
                  }
                }).on('error', function (err) {
                  reject(err);
                });

              case 5:
                result = _context5.sent;


                resolve(result);
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5['catch'](2);

                reject(_context5.t0);

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this6, [[2, 9]]);
      }));

      return function (_x9, _x10) {
        return _ref6.apply(this, arguments);
      };
    }());
  };

  EthTokenSwap.prototype.refund = function refund() {}
  // TODO write refund functional


  /**
   *
   * @param {object} data
   * @param {string} data.participantAddress
   * @returns {Promise}
   */
  ;

  EthTokenSwap.prototype.getSecret = function getSecret(data) {
    var _this7 = this;

    var participantAddress = data.participantAddress;


    return new _promise2.default(function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(resolve, reject) {
        var secret;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _this7.contract.methods.getSecret(participantAddress).call({
                  from: _swap2.default.services.auth.accounts.eth.address
                });

              case 3:
                secret = _context6.sent;


                resolve(secret);
                _context6.next = 10;
                break;

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6['catch'](0);

                reject(_context6.t0);

              case 10:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this7, [[0, 7]]);
      }));

      return function (_x11, _x12) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {string} data.participantAddress
   * @param handleTransactionHash
   * @returns {Promise}
   */


  EthTokenSwap.prototype.close = function close(data, handleTransactionHash) {
    var _this8 = this;

    var participantAddress = data.participantAddress;


    return new _promise2.default(function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(resolve, reject) {
        var params, result;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                params = {
                  from: _swap2.default.services.auth.accounts.eth.address,
                  gas: _this8.gasLimit
                };
                _context7.prev = 1;
                _context7.next = 4;
                return _this8.contract.methods.close(participantAddress).send(params).on('transactionHash', function (hash) {
                  if (typeof handleTransactionHash === 'function') {
                    handleTransactionHash(hash);
                  }
                }).on('error', function (err) {
                  reject(err);
                });

              case 4:
                result = _context7.sent;


                resolve(result);
                _context7.next = 11;
                break;

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7['catch'](1);

                reject(_context7.t0);

              case 11:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this8, [[1, 8]]);
      }));

      return function (_x13, _x14) {
        return _ref8.apply(this, arguments);
      };
    }());
  };

  return EthTokenSwap;
}(_swap.SwapInterface);

exports.default = EthTokenSwap;

/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__(33);

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

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

    var _this = (0, _possibleConstructorReturn3.default)(this, _SwapInterface.call(this));

    if (typeof options.fetchBalance !== 'function') {
      throw new Error('EthSwap: "fetchBalance" required');
    }
    if (typeof options.fetchUnspents !== 'function') {
      throw new Error('EthSwap: "fetchUnspents" required');
    }
    if (typeof options.broadcastTx !== 'function') {
      throw new Error('EthSwap: "broadcastTx" required');
    }

    _this._swapName = 'btcSwap';
    _this.fetchBalance = options.fetchBalance;
    _this.fetchUnspents = options.fetchUnspents;
    _this.broadcastTx = options.broadcastTx;
    return _this;
  }

  BtcSwap.prototype._initSwap = function _initSwap() {
    this.network = _swap2.default.isMainNet() ? _swap2.default.env.bitcoin.networks.bitcoin : _swap2.default.env.bitcoin.networks.testnet;
  };

  /**
   *
   * @param {object} data
   * @param {object} data.script
   * @param {*} data.txRaw
   * @param {string} data.secret
   * @private
   */


  BtcSwap.prototype._signTransaction = function _signTransaction(data) {
    var script = data.script,
        txRaw = data.txRaw,
        secret = data.secret;


    var hashType = _swap2.default.env.bitcoin.Transaction.SIGHASH_ALL;
    var signatureHash = txRaw.hashForSignature(0, script, hashType);
    var signature = _swap2.default.services.auth.accounts.btc.sign(signatureHash).toScriptSignature(hashType);

    var scriptSig = _swap2.default.env.bitcoin.script.scriptHash.input.encode([signature, _swap2.default.services.auth.accounts.btc.getPublicKeyBuffer(), Buffer.from(secret.replace(/^0x/, ''), 'hex')], script);

    txRaw.setInputScript(0, scriptSig);
  };

  /**
   *
   * @param {object} data
   * @param {string} data.secretHash
   * @param {string} data.btcOwnerPublicKey
   * @param {string} data.ethOwnerPublicKey
   * @param {number} data.lockTime
   * @returns {{address: *, script: (*|{ignored}), secretHash: *, btcOwnerPublicKey: *, ethOwnerPublicKey: *, lockTime: *}}
   */


  BtcSwap.prototype.createScript = function createScript(data) {
    var secretHash = data.secretHash,
        btcOwnerPublicKey = data.btcOwnerPublicKey,
        ethOwnerPublicKey = data.ethOwnerPublicKey,
        lockTime = data.lockTime;


    var script = _swap2.default.env.bitcoin.script.compile([_swap2.default.env.bitcoin.opcodes.OP_RIPEMD160, Buffer.from(secretHash, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUALVERIFY, Buffer.from(ethOwnerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_EQUAL, _swap2.default.env.bitcoin.opcodes.OP_IF, Buffer.from(ethOwnerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ELSE, _swap2.default.env.bitcoin.script.number.encode(lockTime), _swap2.default.env.bitcoin.opcodes.OP_CHECKLOCKTIMEVERIFY, _swap2.default.env.bitcoin.opcodes.OP_DROP, Buffer.from(btcOwnerPublicKey, 'hex'), _swap2.default.env.bitcoin.opcodes.OP_CHECKSIG, _swap2.default.env.bitcoin.opcodes.OP_ENDIF]);

    var scriptPubKey = _swap2.default.env.bitcoin.script.scriptHash.output.encode(_swap2.default.env.bitcoin.crypto.hash160(script));
    var scriptAddress = _swap2.default.env.bitcoin.address.fromOutputScript(scriptPubKey, this.network);

    return {
      scriptAddress: scriptAddress,
      script: script
    };
  };

  /**
   *
   * @param {object} data
   * @param {object} data.scriptValues
   * @param {string} data.amount
   * @returns {Promise}
   */


  BtcSwap.prototype.fundScript = function fundScript(data) {
    var _this2 = this;

    var scriptValues = data.scriptValues,
        amount = data.amount;


    return new _promise2.default(function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
        var _createScript, scriptAddress, tx, unspents, fundValue, feeValue, totalUnspent, skipValue, txRaw, result;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _createScript = _this2.createScript(scriptValues), scriptAddress = _createScript.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this2.network);
                _context.next = 5;
                return _this2.fetchUnspents(_swap2.default.services.auth.accounts.btc.getAddress());

              case 5:
                unspents = _context.sent;
                fundValue = Math.floor(Number(amount) * 1e8);
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref2) {
                  var satoshis = _ref2.satoshis;
                  return summ + satoshis;
                }, 0);
                skipValue = totalUnspent - fundValue - feeValue;


                unspents.forEach(function (_ref3) {
                  var txid = _ref3.txid,
                      vout = _ref3.vout;
                  return tx.addInput(txid, vout);
                });
                tx.addOutput(scriptAddress, fundValue);
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), skipValue);
                tx.inputs.forEach(function (input, index) {
                  tx.sign(index, _swap2.default.services.auth.accounts.btc);
                });

                txRaw = tx.buildIncomplete();
                result = void 0;
                _context.prev = 16;
                _context.next = 19;
                return _this2.broadcastTx(txRaw.toHex());

              case 19:
                result = _context.sent;
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context['catch'](16);

                reject(_context.t0);

              case 25:

                resolve(result);
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context['catch'](0);

                reject(_context.t1);

              case 31:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 28], [16, 22]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {object} data.scriptValues
   * @param {string} data.secret
   * @param {function} handleTransactionHash
   * @returns {Promise}
   */


  BtcSwap.prototype.withdraw = function withdraw(data, handleTransactionHash) {
    var _this3 = this;

    var scriptValues = data.scriptValues,
        secret = data.secret;


    return new _promise2.default(function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(resolve, reject) {
        var _createScript2, script, scriptAddress, tx, unspents, feeValue, totalUnspent, txRaw, result;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _createScript2 = _this3.createScript(scriptValues), script = _createScript2.script, scriptAddress = _createScript2.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this3.network);
                _context2.next = 5;
                return _this3.fetchUnspents(scriptAddress);

              case 5:
                unspents = _context2.sent;
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref5) {
                  var satoshis = _ref5.satoshis;
                  return summ + satoshis;
                }, 0);


                unspents.forEach(function (_ref6) {
                  var txid = _ref6.txid,
                      vout = _ref6.vout;
                  return tx.addInput(txid, vout, 0xfffffffe);
                });
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), totalUnspent - feeValue);

                txRaw = tx.buildIncomplete();


                _this3._signTransaction({
                  script: script,
                  secret: secret,
                  txRaw: txRaw
                });

                if (typeof handleTransactionHash === 'function') {
                  handleTransactionHash(txRaw.getId());
                }

                _context2.next = 15;
                return _this3.broadcastTx(txRaw.toHex());

              case 15:
                result = _context2.sent;


                resolve(result);
                _context2.next = 22;
                break;

              case 19:
                _context2.prev = 19;
                _context2.t0 = _context2['catch'](0);

                reject(_context2.t0);

              case 22:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 19]]);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  };

  /**
   *
   * @param {object} data
   * @param {object} data.scriptValues
   * @param {string} data.secret
   * @param {function} handleTransactionHash
   * @returns {Promise}
   */


  BtcSwap.prototype.refund = function refund(data, handleTransactionHash) {
    var _this4 = this;

    var scriptValues = data.scriptValues,
        secret = data.secret;


    return new _promise2.default(function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve, reject) {
        var _createScript3, script, scriptAddress, tx, unspents, feeValue, totalUnspent, txRaw, result;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _createScript3 = _this4.createScript(scriptValues), script = _createScript3.script, scriptAddress = _createScript3.scriptAddress;
                tx = new _swap2.default.env.bitcoin.TransactionBuilder(_this4.network);
                _context3.next = 5;
                return _this4.fetchUnspents(scriptAddress);

              case 5:
                unspents = _context3.sent;
                feeValue = 15000; // TODO how to get this value

                totalUnspent = unspents.reduce(function (summ, _ref8) {
                  var satoshis = _ref8.satoshis;
                  return summ + satoshis;
                }, 0);


                tx.setLockTime(scriptValues.lockTime);
                unspents.forEach(function (_ref9) {
                  var txid = _ref9.txid,
                      vout = _ref9.vout;
                  return tx.addInput(txid, vout, 0xfffffffe);
                });
                tx.addOutput(_swap2.default.services.auth.accounts.btc.getAddress(), totalUnspent - feeValue);

                txRaw = tx.buildIncomplete();


                _this4._signTransaction({
                  script: script,
                  secret: secret,
                  txRaw: txRaw
                });

                if (typeof handleTransactionHash === 'function') {
                  handleTransactionHash(txRaw.getId());
                }

                _context3.next = 16;
                return _this4.broadcastTx(txRaw.toHex());

              case 16:
                result = _context3.sent;


                resolve(result);
                _context3.next = 23;
                break;

              case 20:
                _context3.prev = 20;
                _context3.t0 = _context3['catch'](0);

                reject(_context3.t0);

              case 23:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 20]]);
      }));

      return function (_x5, _x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  };

  return BtcSwap;
}(_swap.SwapInterface);

exports.default = BtcSwap;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).Buffer))

/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _newSwap = __webpack_require__(91);

var _helpers = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(55);

var _Coins = __webpack_require__(338);

var _Coins2 = _interopRequireDefault(_Coins);

var _RequestButton = __webpack_require__(886);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

var _RemoveButton = __webpack_require__(888);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.removeOrder = function (orderId) {
      _newSwap.swapApp.services.orders.remove(orderId);
      _actions2.default.feed.deleteItemToFeed(orderId);

      _this.props.update();
    }, _this.sendRequest = function (orderId) {
      var order = _newSwap.swapApp.services.orders.getByKey(orderId);

      order.sendRequest(function (isAccepted) {
        console.log('user ' + order.owner.peer + ' ' + (isAccepted ? 'accepted' : 'declined') + ' your request');
      });

      _this.props.update();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Row.prototype.render = function render() {
    var _this2 = this;

    var row = this.props.row;


    if (row === undefined) {
      return null;
    }

    var id = row.id,
        buyCurrency = row.buyCurrency,
        sellCurrency = row.sellCurrency,
        buyAmount = row.buyAmount,
        sellAmount = row.sellAmount,
        isRequested = row.isRequested,
        _row$owner = row.owner,
        ownerPeer = _row$owner.peer,
        reputation = _row$owner.reputation;

    var mePeer = _newSwap.swapApp.services.room.peer;

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
        reputation
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
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: _helpers.links.swap + '/' + id },
              ' Go to the swap'
            )
          ) : _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.swap + '/' + id },
            _react2.default.createElement(_RequestButton2.default, { sendRequest: function sendRequest() {
                return _this2.sendRequest(id);
              } })
          )
        )
      )
    );
  };

  return Row;
}(_react.Component), _class.propTypes = {
  row: _propTypes2.default.object
}, _temp2);
exports.default = Row;

/***/ }),
/* 884 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"XQaT-I"};

/***/ }),
/* 885 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coin":"_1WqrJr","icon":"_3DbGHI","letter":"_213Lpu"};

/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RequestButton = __webpack_require__(887);

var _RequestButton2 = _interopRequireDefault(_RequestButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestButton = (_dec = (0, _reactCssModules2.default)(_RequestButton2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RequestButton, _Component);

  function RequestButton() {
    (0, _classCallCheck3.default)(this, RequestButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RequestButton.prototype.render = function render() {
    var sendRequest = this.props.sendRequest;


    return _react2.default.createElement('div', { styleName: 'button', onClick: sendRequest });
  };

  return RequestButton;
}(_react.Component)) || _class);
exports.default = RequestButton;

/***/ }),
/* 887 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2Uhw5O"};

/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _RemoveButton = __webpack_require__(889);

var _RemoveButton2 = _interopRequireDefault(_RemoveButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RemoveButton = (_dec = (0, _reactCssModules2.default)(_RemoveButton2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(RemoveButton, _Component);

  function RemoveButton() {
    (0, _classCallCheck3.default)(this, RemoveButton);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RemoveButton.prototype.render = function render() {
    var removeOrder = this.props.removeOrder;


    return _react2.default.createElement('div', { styleName: 'button', onClick: removeOrder });
  };

  return RemoveButton;
}(_react.Component)) || _class);
exports.default = RemoveButton;

/***/ }),
/* 889 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3iqxx8"};

/***/ }),
/* 890 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"table":"A6cIbx"};

/***/ }),
/* 891 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(27);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _PageHeadline = __webpack_require__(116);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Table = __webpack_require__(194);

var _Table2 = _interopRequireDefault(_Table);

var _Row = __webpack_require__(892);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Balances = (_dec = (0, _redaction.connect)(function (_ref) {
  var _ref$user = _ref.user,
      ethData = _ref$user.ethData,
      btcData = _ref$user.btcData,
      tokenData = _ref$user.tokenData,
      nimData = _ref$user.nimData;
  return {
    items: [ethData, btcData, tokenData /* , nimData */],
    ethAddress: ethData.address,
    btcAddress: btcData.address
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Balances, _Component);

  function Balances() {
    (0, _classCallCheck3.default)(this, Balances);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Balances.prototype.componentWillMount = function componentWillMount() {
    _actions2.default.user.getBalances();
    console.log(_actions2.default.user.getBalances());

    _actions2.default.analytics.dataEvent('open-page-balances');
    if (!localStorage.getItem(_helpers.constants.localStorage.privateKeysSaved)) {
      _actions2.default.modals.open(_helpers.constants.modals.PrivateKeys);
    }
  };

  Balances.prototype.render = function render() {
    var _props = this.props,
        items = _props.items,
        ethAddress = _props.ethAddress,
        btcAddress = _props.btcAddress;


    var titles = ['Coin', 'Name', 'Balance', 'Address', ''];
    var addresses = { ethAddress: ethAddress, btcAddress: btcAddress };

    return _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(_PageHeadline2.default, { subTitle: 'Balances' }),
      _react2.default.createElement(_Table2.default, {
        titles: titles,
        rows: items,
        rowRender: function rowRender(row, index) {
          return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index, addresses: addresses }, row));
        }
      })
    );
  };

  return Balances;
}(_react.Component)) || _class);
exports.default = Balances;

/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(893);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(193);

var _Coin2 = _interopRequireDefault(_Coin);

var _WithdrawButton = __webpack_require__(894);

var _WithdrawButton2 = _interopRequireDefault(_WithdrawButton);

var _ReloadButton = __webpack_require__(896);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _InlineLoader = __webpack_require__(128);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = (_dec = (0, _reactCssModules2.default)(_Row2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Row, _Component);

  function Row() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isBalanceFetching: false
    }, _this.handleReloadBalance = function () {
      var isBalanceFetching = _this.state.isBalanceFetching;


      if (isBalanceFetching) {
        return;
      }

      var currency = _this.props.currency;

      var action = void 0;

      currency = currency.toLowerCase();

      if (currency === 'eth') {
        action = _actions2.default.ethereum.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-eth');
      } else if (currency === 'btc') {
        action = _actions2.default.bitcoin.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-btc');
      } else if (currency === 'noxon') {
        action = _actions2.default.token.getBalance;
        _actions2.default.analytics.dataEvent('balances-update-noxon');
      }

      _this.setState({
        isBalanceFetching: true
      });

      action().then(function () {
        _this.setState({
          isBalanceFetching: false
        });
      }, function () {
        _this.setState({
          isBalanceFetching: false
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Row.prototype.render = function render() {
    var isBalanceFetching = this.state.isBalanceFetching;
    var _props = this.props,
        currency = _props.currency,
        balance = _props.balance,
        address = _props.address;


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
        null,
        address
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(_ReloadButton2.default, { styleName: 'reloadButton', onClick: this.handleReloadBalance }),
        _react2.default.createElement(_WithdrawButton2.default, { data: { currency: currency, balance: balance, address: address } })
      )
    );
  };

  return Row;
}(_react.Component)) || _class);
exports.default = Row;

/***/ }),
/* 893 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"_2ZNYIs"};

/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawButton = __webpack_require__(895);

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
/* 895 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"withdrawButton":"_2XoYtt"};

/***/ }),
/* 896 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ReloadButton = __webpack_require__(897);

var _ReloadButton2 = _interopRequireDefault(_ReloadButton);

var _ReloadIcon = __webpack_require__(898);

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
/* 897 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reloadButton":"EJezYM","icon":"-QzL6n"};

/***/ }),
/* 898 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reload = __webpack_require__(899);

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReloadIcon = function ReloadIcon(_ref) {
  var className = _ref.className;
  return _react2.default.createElement('img', { className: className, src: _reload2.default, alt: 'reload icon' });
};

exports.default = ReloadIcon;

/***/ }),
/* 899 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/reload_8f44d7.svg";

/***/ }),
/* 900 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ellipsis":"_1LrCrR","ellipsis1":"_3E5_Fc","ellipsis2":"_2eaqSt","ellipsis3":"_3fsiCh"};

/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(27);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _PageHeadline = __webpack_require__(116);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _Table = __webpack_require__(194);

var _Table2 = _interopRequireDefault(_Table);

var _Filter = __webpack_require__(902);

var _Filter2 = _interopRequireDefault(_Filter);

var _Row = __webpack_require__(904);

var _Row2 = _interopRequireDefault(_Row);

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
  var _ref3$user = _ref3.user,
      ethData = _ref3$user.ethData,
      btcData = _ref3$user.btcData,
      tokenData = _ref3$user.tokenData,
      _ref3$history = _ref3.history,
      transactions = _ref3$history.transactions,
      filter = _ref3$history.filter;
  return {
    items: filterHistory(transactions, filter),
    ethAddress: ethData.address,
    btcAddress: btcData.address
  };
}), _dec(_class = function (_Component) {
  (0, _inherits3.default)(History, _Component);

  function History() {
    (0, _classCallCheck3.default)(this, History);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  History.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        ethAddress = _props.ethAddress,
        btcAddress = _props.btcAddress;

    _actions2.default.analytics.dataEvent('open-page-history');
    _actions2.default.user.setTransactions(ethAddress, btcAddress);
  };

  History.prototype.render = function render() {
    var items = this.props.items;


    var titles = ['Coin', 'Status', 'Amount'];

    return _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(_PageHeadline2.default, { subTitle: 'History' }),
      _react2.default.createElement(_Filter2.default, null),
      _react2.default.createElement(_Table2.default, {
        titles: titles,
        rows: items,
        rowRender: function rowRender(row, index) {
          return _react2.default.createElement(_Row2.default, (0, _extends3.default)({ key: index }, row));
        }
      })
    );
  };

  return History;
}(_react.Component)) || _class);
exports.default = History;

/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(27);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(339);

var _Filter2 = _interopRequireDefault(_Filter);

var _FilterLink = __webpack_require__(903);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = (_dec = (0, _redaction.connect)({
  'activeFilter': 'history.filter'
}), _dec2 = (0, _reactCssModules2.default)(_Filter2.default), _dec(_class = _dec2(_class = function (_Component) {
  (0, _inherits3.default)(Filter, _Component);

  function Filter() {
    (0, _classCallCheck3.default)(this, Filter);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Filter.prototype.render = function render() {
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
  };

  return Filter;
}(_react.Component)) || _class) || _class);
exports.default = Filter;


Filter.propTypes = {
  activeFilter: _propTypes2.default.string
};

/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Filter = __webpack_require__(339);

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
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(69);

var _moment2 = _interopRequireDefault(_moment);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Row = __webpack_require__(906);

var _Row2 = _interopRequireDefault(_Row);

var _Coin = __webpack_require__(193);

var _Coin2 = _interopRequireDefault(_Coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function Row(_ref) {
  var type = _ref.type,
      date = _ref.date,
      direction = _ref.direction,
      address = _ref.address,
      value = _ref.value;

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
        direction === 'in' ? 'Received' : 'Sent'
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'date' },
        (0, _moment2.default)(date).format('MM/DD/YYYY hh:mm A')
      ),
      _react2.default.createElement(
        'div',
        { styleName: 'address' },
        address
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
/* 905 */,
/* 906 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"status":"_3kv9MC","in":"_2lbJ5g","out":"_1wgwnd","date":"_2-d0NO","address":"_2jfUW_","amount":"hcV54S"};

/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _InlineLoader = __webpack_require__(128);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _BtcToEth = __webpack_require__(909);

var _BtcToEth2 = _interopRequireDefault(_BtcToEth);

var _EthToBtc = __webpack_require__(917);

var _EthToBtc2 = _interopRequireDefault(_EthToBtc);

var _EthTokenToBtc = __webpack_require__(918);

var _EthTokenToBtc2 = _interopRequireDefault(_EthTokenToBtc);

var _BtcToEthToken = __webpack_require__(920);

var _BtcToEthToken2 = _interopRequireDefault(_BtcToEthToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swapComponents = {
  'btceth': _BtcToEth2.default,
  'ethbtc': _EthToBtc2.default,
  'noxonbtc': _EthTokenToBtc2.default,
  'btcnoxon': _BtcToEthToken2.default
};

var Swap = function (_PureComponent) {
  (0, _inherits3.default)(Swap, _PureComponent);

  function Swap(_ref) {
    var orderId = _ref.match.params.orderId;
    (0, _classCallCheck3.default)(this, Swap);

    var _this = (0, _possibleConstructorReturn3.default)(this, _PureComponent.call(this));

    _this.order = _swap2.default.services.orders.getByKey(orderId);
    return _this;
  }

  Swap.prototype.render = function render() {
    if (!this.order) {
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

    var _order = this.order,
        isMyOrder = _order.isMy,
        buyCurrency = _order.buyCurrency,
        sellCurrency = _order.sellCurrency;


    var firstPart = isMyOrder ? sellCurrency : buyCurrency;
    var lastPart = isMyOrder ? buyCurrency : sellCurrency;
    var SwapComponent = swapComponents['' + firstPart.toLowerCase() + lastPart.toLowerCase()];

    return _react2.default.createElement(
      'div',
      { style: { paddingLeft: '30px', paddingTop: '30px' } },
      _react2.default.createElement(SwapComponent, { orderId: this.order.id })
    );
  };

  return Swap;
}(_react.PureComponent);

exports.default = Swap;

/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(62);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _swap = __webpack_require__(129);

var _swap2 = __webpack_require__(53);

var _swap3 = _interopRequireDefault(_swap2);

var _InlineLoader = __webpack_require__(128);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEth = function (_Component) {
  (0, _inherits3.default)(BtcToEth, _Component);

  function BtcToEth(_ref) {
    var orderId = _ref.orderId;
    (0, _classCallCheck3.default)(this, BtcToEth);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

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

    _this.swap = new _swap3.default(orderId, _swap.BTC2ETH);

    _this.state = {
      flow: _this.swap.flow.state,
      secret: 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078'
    };
    return _this;
  }

  BtcToEth.prototype.componentWillMount = function componentWillMount() {
    this.swap.on('state update', this.handleFlowStateUpdate);
  };

  BtcToEth.prototype.componentWillUnmount = function componentWillUnmount() {
    this.swap.off('state update', this.handleFlowStateUpdate);
  };

  BtcToEth.prototype.render = function render() {
    var _state = this.state,
        secret = _state.secret,
        flow = _state.flow;


    return _react2.default.createElement(
      'div',
      null,
      this.swap.id && _react2.default.createElement(
        'strong',
        null,
        this.swap.sellAmount,
        ' ',
        this.swap.sellCurrency,
        ' \u27F6 ',
        this.swap.buyAmount,
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
            _Button2.default,
            { brand: true, onClick: this.submitSecret },
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
                this.swap.sellAmount
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
            _Button2.default,
            { brand: true, onClick: this.updateBalance },
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
        flow.ethSwapWithdrawTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://' + (_appConfig2.default.entry === 'mainnet' ? '' : 'rinkeby.') + 'etherscan.io/tx/' + flow.ethSwapWithdrawTransactionUrl,
                target: '_blank',
                rel: 'noreferrer noopener'
              },
              flow.ethSwapWithdrawTransactionUrl
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
  };

  return BtcToEth;
}(_react.Component);

exports.default = BtcToEth;

/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ETH2BTC = function (_Flow) {
  (0, _inherits3.default)(ETH2BTC, _Flow);

  function ETH2BTC(swap) {
    (0, _classCallCheck3.default)(this, ETH2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Flow.call(this, swap));

    _this.ethSwap = _swap2.default.swaps.ethSwap;
    _this.btcSwap = _swap2.default.swaps.btcSwap;

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionUrl: null,
      isSignFetching: false,
      isMeSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      ethSwapCreationTransactionUrl: null,
      isEthContractFunded: false,

      isEthWithdrawn: false,
      isBtcWithdrawn: false
    };

    _Flow.prototype._persistSteps.call(_this);
    _this._persistState();
    return _this;
  }

  ETH2BTC.prototype._getSteps = function _getSteps() {
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
      var _flow$swap, participant, sellAmount, swapData;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _flow$swap = flow.swap, participant = _flow$swap.participant, sellAmount = _flow$swap.sellAmount;
              swapData = {
                participantAddress: participant.eth.address,
                secretHash: flow.state.secretHash,
                amount: sellAmount
              };
              _context.next = 4;
              return _this2.ethSwap.create(swapData, function (transactionUrl) {
                flow.setState({
                  ethSwapCreationTransactionUrl: transactionUrl
                });
              });

            case 4:

              flow.swap.room.sendMessage('create eth contract');

              flow.finishStep({
                isEthContractFunded: true
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })),

    // 6. Wait participant withdraw

    function () {
      flow.swap.room.once('finish eth withdraw', function () {
        flow.finishStep({
          isEthWithdrawn: true
        });
      });
    },

    // 7. Withdraw

    (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var participant, myAndParticipantData, secret;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              participant = flow.swap.participant;
              myAndParticipantData = {
                participantAddress: participant.eth.address
              };
              _context2.next = 4;
              return flow.ethSwap.getSecret(myAndParticipantData);

            case 4:
              secret = _context2.sent;
              _context2.next = 7;
              return flow.ethSwap.close(myAndParticipantData);

            case 7:
              _context2.next = 9;
              return flow.btcSwap.withdraw({
                scriptValues: flow.state.btcScriptValues,
                secret: secret
              }, function (transactionUrl) {
                flow.setState({
                  btcSwapWithdrawTransactionUrl: transactionUrl
                });
              });

            case 9:

              flow.finishStep({
                isBtcWithdrawn: true
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })),

    // 8. Finish

    function () {}];
  };

  ETH2BTC.prototype.sign = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this3 = this;

      var participant;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              participant = this.swap.participant;


              this.setState({
                isSignFetching: true
              });

              _context3.next = 4;
              return this.ethSwap.sign({
                participantAddress: participant.eth.address
              }, function (signTransactionUrl) {
                _this3.setState({
                  signTransactionUrl: signTransactionUrl
                });
              });

            case 4:

              this.swap.room.sendMessage('swap sign');

              this.finishStep({
                isMeSigned: true
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function sign() {
      return _ref4.apply(this, arguments);
    }

    return sign;
  }();

  ETH2BTC.prototype.verifyBtcScript = function verifyBtcScript() {
    this.finishStep({
      btcScriptVerified: true
    });
  };

  ETH2BTC.prototype.syncBalance = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
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
              return this.ethSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

            case 4:
              balance = _context4.sent;
              isEnoughMoney = sellAmount <= balance;


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
      return _ref5.apply(this, arguments);
    }

    return syncBalance;
  }();

  return ETH2BTC;
}(_swap3.Flow);

exports.default = ETH2BTC;

/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _Room = __webpack_require__(344);

var _Room2 = _interopRequireDefault(_Room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swap = function () {
  function Swap(orderId, Flow) {
    (0, _classCallCheck3.default)(this, Swap);

    this.events = new _swap.Events();
    this.room = null;

    this.id = orderId;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null; // not same as in order - for each user own
    this.sellAmount = null; // not same as in order - for each user own

    this._persistState();

    this.flow = new Flow(this);
  }

  Swap.prototype._persistState = function _persistState() {
    var order = _swap2.default.env.storage.getItem('swap.' + this.id) || _swap2.default.services.orders.getByKey(this.id);

    // if no `order` that means that participant is offline
    // TODO it's better to create swapCollection and store all swaps data there
    // TODO bcs if user offline and I'd like to continue Flow steps I don't need to w8 him
    // TODO so no need to get data from SwapOrders
    if (order) {
      var _util$pullProps = _swap.util.pullProps(order, 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount'),
          isMy = _util$pullProps.isMy,
          buyAmount = _util$pullProps.buyAmount,
          sellAmount = _util$pullProps.sellAmount,
          buyCurrency = _util$pullProps.buyCurrency,
          sellCurrency = _util$pullProps.sellCurrency,
          rest = (0, _objectWithoutProperties3.default)(_util$pullProps, ['isMy', 'buyAmount', 'sellAmount', 'buyCurrency', 'sellCurrency']);

      var data = (0, _assign2.default)({}, rest, {
        isMy: isMy,
        buyAmount: isMy ? buyAmount : sellAmount,
        sellAmount: isMy ? sellAmount : buyAmount,
        sellCurrency: isMy ? sellCurrency : buyCurrency,
        buyCurrency: isMy ? buyCurrency : sellCurrency
      });

      if (!data.participant && !isMy) {
        data.participant = data.owner;
      }

      this.room = new _Room2.default({
        participantPeer: data.participant.peer
      });

      this.update(data);
      this._saveState();
    }
  };

  Swap.prototype._saveState = function _saveState() {
    var data = _swap.util.pullProps(this, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');

    console.log('New Swap state:', data);

    _swap2.default.env.storage.setItem('swap.' + this.id, data);
  };

  Swap.prototype.update = function update(values) {
    var _this = this;

    (0, _keys2.default)(values).forEach(function (key) {
      _this[key] = values[key];
    });
    this._saveState();
  };

  Swap.prototype.on = function on(eventName, handler) {
    this.events.subscribe(eventName, handler);
  };

  Swap.prototype.off = function off(eventName, handler) {
    this.events.unsubscribe(eventName, handler);
  };

  return Swap;
}();

exports.default = Swap;

/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _swap2 = __webpack_require__(18);

var _swap3 = _interopRequireDefault(_swap2);

var _Room = __webpack_require__(344);

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

  Flow.prototype._persistState = function _persistState() {
    var _this = this;

    var state = _swap3.default.env.storage.getItem('flow.' + this.swap.id);

    if (state) {
      this.state = (0, _assign2.default)({}, this.state, state);
    }

    this.swap.room.subscribe('persist state', function (values) {
      _this.setState(values, true);
    });
  };

  Flow.prototype._persistSteps = function _persistSteps() {
    var _this2 = this;

    this.steps = [].concat(this._getInitialSteps(), this._getSteps());

    // wait events placed
    setTimeout(function () {
      console.log('GO INITIAL STEP', _this2.state.step);

      _this2.goStep(_this2.state.step);
    }, 0);
  };

  Flow.prototype._getInitialSteps = function _getInitialSteps() {
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

                _swap3.default.services.room.subscribe('new orders', function (_ref2) {
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
                    flow.swap.update((0, _assign2.default)({}, _order, {
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
  };

  Flow.prototype._getSteps = function _getSteps() {
    return [];
  };

  Flow.prototype._saveState = function _saveState() {
    _swap3.default.env.storage.setItem('flow.' + this.swap.id, this.state);
  };

  Flow.prototype.finishStep = function finishStep(data) {
    this.goNextStep(data);
  };

  Flow.prototype.goNextStep = function goNextStep(data) {
    var step = this.state.step;

    var newStep = step + 1;

    this.swap.events.dispatch('leave step', step);

    this.setState((0, _assign2.default)({
      step: newStep
    }, data || {}), true);

    this.goStep(newStep);
  };

  Flow.prototype.goStep = function goStep(index) {
    this.swap.events.dispatch('enter step', index);
    this.steps[index]();
  };

  Flow.prototype.setState = function setState(values, save) {
    this.state = (0, _assign2.default)({}, this.state, values);

    if (save) {
      this._saveState();
    }

    this.swap.events.dispatch('state update', this.state, values);
  };

  return Flow;
}();

exports.default = Flow;

/***/ }),
/* 913 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _crypto = __webpack_require__(47);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2ETH = function (_Flow) {
  (0, _inherits3.default)(BTC2ETH, _Flow);

  function BTC2ETH(swap) {
    (0, _classCallCheck3.default)(this, BTC2ETH);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Flow.call(this, swap));

    _this.ethSwap = _swap2.default.swaps.ethSwap;
    _this.btcSwap = _swap2.default.swaps.btcSwap;

    if (!_this.ethSwap) {
      throw new Error('BTC2ETH: "ethSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionUrl: null,
      isSignFetching: false,
      isParticipantSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      isEthContractFunded: false,

      isEthWithdrawn: false,
      isBtcWithdrawn: false
    };

    _Flow.prototype._persistSteps.call(_this);
    _this._persistState();
    return _this;
  }

  BTC2ETH.prototype._persistState = function _persistState() {
    _Flow.prototype._persistState.call(this);
  };

  BTC2ETH.prototype._getSteps = function _getSteps() {
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
              }; // 3 days from now

              scriptValues = {
                secretHash: flow.state.secretHash,
                btcOwnerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                ethOwnerPublicKey: participant.btc.publicKey,
                lockTime: getLockTime()
              };
              _context.next = 6;
              return flow.btcSwap.fundScript({
                scriptValues: scriptValues,
                amount: sellAmount
              });

            case 6:

              _this2.swap.room.sendMessage('create btc script', {
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
      flow.swap.room.once('create eth contract', function () {
        flow.finishStep({
          isEthContractFunded: true
        });
      });
    },

    // 6. Withdraw

    (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var participant, data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              participant = flow.swap.participant;
              data = {
                ownerAddress: participant.eth.address,
                secret: flow.state.secret
              };
              _context2.next = 4;
              return flow.ethSwap.withdraw(data, function (transactionHash) {
                flow.setState({
                  ethSwapWithdrawTransactionUrl: transactionHash
                });
              });

            case 4:

              flow.swap.room.sendMessage('finish eth withdraw');

              flow.finishStep({
                isEthWithdrawn: true
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })),

    // 7. Finish

    function () {}];
  };

  BTC2ETH.prototype.submitSecret = function submitSecret(secret) {
    var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

    this.finishStep({
      secret: secret,
      secretHash: secretHash
    });
  };

  BTC2ETH.prototype.syncBalance = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var sellAmount, balance, isEnoughMoney;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sellAmount = this.swap.sellAmount;


              this.setState({
                isBalanceFetching: true
              });

              _context3.next = 4;
              return this.btcSwap.fetchBalance(_swap2.default.services.auth.accounts.btc.getAddress());

            case 4:
              balance = _context3.sent;
              isEnoughMoney = sellAmount <= balance;


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
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function syncBalance() {
      return _ref3.apply(this, arguments);
    }

    return syncBalance;
  }();

  return BTC2ETH;
}(_swap3.Flow);

exports.default = BTC2ETH;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).Buffer))

/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ETHTOKEN2BTC = function (_Flow) {
  (0, _inherits3.default)(ETHTOKEN2BTC, _Flow);

  function ETHTOKEN2BTC(swap) {
    (0, _classCallCheck3.default)(this, ETHTOKEN2BTC);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Flow.call(this, swap));

    _this.ethTokenSwap = _swap2.default.swaps.ethTokenSwap;
    _this.btcSwap = _swap2.default.swaps.btcSwap;

    if (!_this.ethTokenSwap) {
      throw new Error('ETHTOKEN2BTC: "ethTokenSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('ETHTOKEN2BTC: "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionUrl: null,
      isSignFetching: false,
      isMeSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      ethSwapCreationTransactionUrl: null,
      isEthContractFunded: false,

      isEthWithdrawn: false,
      isBtcWithdrawn: false
    };

    _Flow.prototype._persistSteps.call(_this);
    _this._persistState();
    return _this;
  }

  ETHTOKEN2BTC.prototype._getSteps = function _getSteps() {
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
      var _flow$swap, participant, sellAmount, swapData;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _flow$swap = flow.swap, participant = _flow$swap.participant, sellAmount = _flow$swap.sellAmount;
              swapData = {
                participantAddress: participant.eth.address,
                secretHash: flow.state.secretHash,
                amount: sellAmount
              };
              _context.next = 4;
              return flow.ethSwap.approve({
                amount: sellAmount
              });

            case 4:
              _context.next = 6;
              return flow.ethSwap.create(swapData, function (transactionUrl) {
                flow.setState({
                  ethSwapCreationTransactionUrl: transactionUrl
                });
              });

            case 6:

              flow.swap.room.sendMessage('create eth contract');

              flow.finishStep({
                isEthContractFunded: true
              });

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })),

    // 6. Wait participant withdraw

    function () {
      flow.swap.room.once('finish eth withdraw', function () {
        flow.finishStep({
          isEthWithdrawn: true
        });
      });
    },

    // 7. Withdraw

    (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var participant, myAndParticipantData, secret;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              participant = flow.swap.participant;
              myAndParticipantData = {
                participantAddress: participant.eth.address
              };
              _context2.next = 4;
              return flow.ethSwap.getSecret(myAndParticipantData);

            case 4:
              secret = _context2.sent;
              _context2.next = 7;
              return flow.ethSwap.close(myAndParticipantData);

            case 7:
              _context2.next = 9;
              return flow.btcSwap.withdraw({
                scriptValues: flow.state.btcScriptValues,
                secret: secret
              }, function (transactionUrl) {
                flow.setState({
                  btcSwapWithdrawTransactionUrl: transactionUrl
                });
              });

            case 9:

              flow.finishStep({
                isBtcWithdrawn: true
              });

            case 10:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })),

    // 8. Finish

    function () {}];
  };

  ETHTOKEN2BTC.prototype.sign = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var _this3 = this;

      var participant;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              participant = this.swap.participant;


              this.setState({
                isSignFetching: true
              });

              _context3.next = 4;
              return this.ethSwap.sign({
                participantAddress: participant.eth.address
              }, function (signTransactionUrl) {
                _this3.setState({
                  signTransactionUrl: signTransactionUrl
                });
              });

            case 4:

              this.swap.room.sendMessage('swap sign');

              this.finishStep({
                isMeSigned: true
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function sign() {
      return _ref4.apply(this, arguments);
    }

    return sign;
  }();

  ETHTOKEN2BTC.prototype.verifyBtcScript = function verifyBtcScript() {
    this.finishStep({
      btcScriptVerified: true
    });
  };

  ETHTOKEN2BTC.prototype.syncBalance = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
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
              return this.ethTokenSwap.fetchBalance(_swap2.default.services.auth.accounts.eth.address);

            case 4:
              balance = _context4.sent;
              isEnoughMoney = sellAmount <= balance;


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
      return _ref5.apply(this, arguments);
    }

    return syncBalance;
  }();

  return ETHTOKEN2BTC;
}(_swap3.Flow);

exports.default = ETHTOKEN2BTC;

/***/ }),
/* 915 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

exports.__esModule = true;

var _regenerator = __webpack_require__(40);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(41);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _crypto = __webpack_require__(47);

var _crypto2 = _interopRequireDefault(_crypto);

var _swap = __webpack_require__(18);

var _swap2 = _interopRequireDefault(_swap);

var _swap3 = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BTC2ETHTOKEN = function (_Flow) {
  (0, _inherits3.default)(BTC2ETHTOKEN, _Flow);

  function BTC2ETHTOKEN(swap) {
    (0, _classCallCheck3.default)(this, BTC2ETHTOKEN);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Flow.call(this, swap));

    _this.ethTokenSwap = _swap2.default.swaps.ethTokenSwap;
    _this.btcSwap = _swap2.default.swaps.btcSwap;

    if (!_this.ethTokenSwap) {
      throw new Error('BTC2ETH failed. "ethTokenSwap" of type object required');
    }
    if (!_this.btcSwap) {
      throw new Error('BTC2ETH failed. "btcSwap" of type object required');
    }

    _this.state = {
      step: 0,

      signTransactionUrl: null,
      isSignFetching: false,
      isParticipantSigned: false,

      secretHash: null,
      btcScriptValues: null,

      btcScriptVerified: false,

      isBalanceFetching: false,
      isBalanceEnough: false,
      balance: null,

      isEthContractFunded: false,

      isEthWithdrawn: false,
      isBtcWithdrawn: false
    };

    _Flow.prototype._persistSteps.call(_this);
    _this._persistState();
    return _this;
  }

  BTC2ETHTOKEN.prototype._persistState = function _persistState() {
    _Flow.prototype._persistState.call(this);
  };

  BTC2ETHTOKEN.prototype._getSteps = function _getSteps() {
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
              }; // 3 days from now

              scriptValues = {
                secretHash: flow.state.secretHash,
                btcOwnerPublicKey: _swap2.default.services.auth.accounts.btc.getPublicKey(),
                ethOwnerPublicKey: participant.btc.publicKey,
                lockTime: getLockTime()
              };
              _context.next = 6;
              return flow.btcSwap.fundScript({
                scriptValues: scriptValues,
                amount: sellAmount
              });

            case 6:

              _this2.swap.room.sendMessage('create btc script', {
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
      flow.swap.room.once('create eth contract', function () {
        flow.finishStep({
          isEthContractFunded: true
        });
      });
    },

    // 6. Withdraw

    (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var participant, data;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              participant = flow.swap.participant;
              data = {
                ownerAddress: participant.eth.address,
                secret: flow.state.secret
              };
              _context2.next = 4;
              return flow.ethSwap.withdraw(data, function (transactionHash) {
                flow.setState({
                  ethSwapWithdrawTransactionUrl: transactionHash
                });
              });

            case 4:

              flow.swap.room.sendMessage('finish eth withdraw');

              flow.finishStep({
                isEthWithdrawn: true
              });

            case 6:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    })),

    // 7. Finish

    function () {}];
  };

  BTC2ETHTOKEN.prototype.submitSecret = function submitSecret(secret) {
    var secretHash = _crypto2.default.ripemd160(Buffer.from(secret, 'hex')).toString('hex');

    this.finishStep({
      secret: secret,
      secretHash: secretHash
    });
  };

  BTC2ETHTOKEN.prototype.syncBalance = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var sellAmount, balance, isEnoughMoney;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              sellAmount = this.swap.sellAmount;


              this.setState({
                isBalanceFetching: true
              });

              _context3.next = 4;
              return this.btcSwap.fetchBalance(_swap2.default.services.auth.accounts.btc.getAddress());

            case 4:
              balance = _context3.sent;
              isEnoughMoney = sellAmount <= balance;


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
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function syncBalance() {
      return _ref3.apply(this, arguments);
    }

    return syncBalance;
  }();

  return BTC2ETHTOKEN;
}(_swap3.Flow);

exports.default = BTC2ETHTOKEN;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6).Buffer))

/***/ }),
/* 916 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_2LQ20V","fullWidth":"_3JAxiX","brand":"_3sxX__","green":"_1luSAS","white":"_2p_RXB","gray":"_2TQbbx","disabled":"_2fO4Kf"};

/***/ }),
/* 917 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _appConfig = __webpack_require__(62);

var _appConfig2 = _interopRequireDefault(_appConfig);

var _swap = __webpack_require__(129);

var _swap2 = __webpack_require__(53);

var _swap3 = _interopRequireDefault(_swap2);

var _InlineLoader = __webpack_require__(128);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var orderId = _ref.orderId;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

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

    _this.swap = new _swap3.default(orderId, _swap.ETH2BTC);

    _this.state = {
      flow: _this.swap.flow.state
    };
    return _this;
  }

  EthToBtc.prototype.componentWillMount = function componentWillMount() {
    this.swap.on('state update', this.handleFlowStateUpdate);
  };

  EthToBtc.prototype.componentWillUnmount = function componentWillUnmount() {
    this.swap.off('state update', this.handleFlowStateUpdate);
  };

  EthToBtc.prototype.render = function render() {
    var flow = this.state.flow;


    return _react2.default.createElement(
      'div',
      null,
      this.swap.id && _react2.default.createElement(
        'strong',
        null,
        this.swap.sellAmount,
        ' ',
        this.swap.sellCurrency,
        ' \u27F6 ',
        this.swap.buyAmount,
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
            _Button2.default,
            { brand: true, onClick: this.signSwap },
            'Confirm'
          )
        ),
        (flow.isSignFetching || flow.signTransactionUrl) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Please wait. Confirmation processing'
          ),
          flow.signTransactionUrl && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                {
                  href: 'https://' + (_appConfig2.default.entry === 'mainnet' ? '' : 'rinkeby.') + 'etherscan.io/tx/' + flow.signTransactionUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                },
                flow.signTransactionUrl
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
              '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.ethOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.ethOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.btcOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
            )
          ),
          flow.step === 3 && _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _Button2.default,
              { brand: true, onClick: this.confirmBTCScriptChecked },
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
                this.swap.sellAmount
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
            _Button2.default,
            { brand: true, onClick: this.updateBalance },
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
        flow.ethSwapCreationTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://' + (_appConfig2.default.entry === 'mainnet' ? '' : 'rinkeby.') + 'etherscan.io/tx/' + flow.ethSwapCreationTransactionUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.ethSwapCreationTransactionUrl
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
        flow.btcSwapWithdrawTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.blocktrail.com/tBTC/tx/' + flow.btcSwapWithdrawTransactionUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.btcSwapWithdrawTransactionUrl
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
  };

  return EthToBtc;
}(_react.Component);

exports.default = EthToBtc;

/***/ }),
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(129);

var _swap2 = __webpack_require__(53);

var _swap3 = _interopRequireDefault(_swap2);

var _Loader = __webpack_require__(130);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EthToBtc = function (_Component) {
  (0, _inherits3.default)(EthToBtc, _Component);

  function EthToBtc(_ref) {
    var orderId = _ref.orderId;
    (0, _classCallCheck3.default)(this, EthToBtc);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

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

    _this.swap = new _swap3.default(orderId, _swap.ETHTOKEN2BTC);

    _this.state = {
      flow: _this.swap.flow.state
    };
    return _this;
  }

  EthToBtc.prototype.componentWillMount = function componentWillMount() {
    this.swap.on('state update', this.handleFlowStateUpdate);
  };

  EthToBtc.prototype.componentWillUnmount = function componentWillUnmount() {
    this.swap.off('state update', this.handleFlowStateUpdate);
  };

  EthToBtc.prototype.render = function render() {
    var flow = this.state.flow;


    return _react2.default.createElement(
      'div',
      null,
      this.swap.id && _react2.default.createElement(
        'strong',
        null,
        this.swap.sellAmount,
        ' ',
        this.swap.sellCurrency,
        ' \u27F6 ',
        this.swap.buyAmount,
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
        _react2.default.createElement(_Loader2.default, { overlay: false })
      )),
      flow.isWaitingForOwner && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Waiting for other user when he connect to the order'
        ),
        _react2.default.createElement(_Loader2.default, { overlay: false })
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
        (flow.isSignFetching || flow.signTransactionUrl) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Please wait. Confirmation processing'
          ),
          flow.signTransactionUrl && _react2.default.createElement(
            'div',
            null,
            'Transaction:',
            _react2.default.createElement(
              'strong',
              null,
              _react2.default.createElement(
                'a',
                { href: flow.signTransactionUrl, rel: 'noopener noreferrer', target: '_blank' },
                flow.signTransactionUrl
              )
            )
          ),
          flow.isSignFetching && _react2.default.createElement(_Loader2.default, { overlay: false })
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
        flow.step === 2 && _react2.default.createElement(_Loader2.default, { overlay: false }),
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
              '\n  bitcoinjs.script.compile([\n    bitcoin.core.opcodes.OP_RIPEMD160,\n    Buffer.from(\'' + flow.btcScriptValues.secretHash + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUALVERIFY,\n\n    Buffer.from(\'' + flow.btcScriptValues.ethOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_EQUAL,\n    bitcoin.core.opcodes.OP_IF,\n\n    Buffer.from(\'' + flow.btcScriptValues.ethOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ELSE,\n\n    bitcoin.core.script.number.encode(' + flow.btcScriptValues.lockTime + '),\n    bitcoin.core.opcodes.OP_CHECKLOCKTIMEVERIFY,\n    bitcoin.core.opcodes.OP_DROP,\n    Buffer.from(\'' + flow.btcScriptValues.btcOwnerPublicKey + '\', \'hex\'),\n    bitcoin.core.opcodes.OP_CHECKSIG,\n\n    bitcoin.core.opcodes.OP_ENDIF,\n  ])\n                      '
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
                this.swap.sellAmount
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
          _react2.default.createElement(_Loader2.default, { overlay: false })
        ),
        (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
          'h3',
          null,
          '4. Creating Ethereum Contract. Please wait, it will take a while'
        ),
        flow.ethSwapCreationTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: flow.ethSwapCreationTransactionUrl,
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.ethSwapCreationTransactionUrl
            )
          )
        ),
        flow.step === 5 && _react2.default.createElement(_Loader2.default, { overlay: false }),
        (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '5. Waiting BTC Owner adds Secret Key to ETH Contact'
          ),
          !flow.isEthWithdrawn && _react2.default.createElement(_Loader2.default, { overlay: false })
        ),
        (flow.step === 7 || flow.isBtcWithdrawn) && _react2.default.createElement(
          'h3',
          null,
          '6. BTC Owner successfully took money from ETH Contract and left Secret Key. Requesting withdrawal from BTC Script. Please wait'
        ),
        flow.btcSwapWithdrawTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              {
                href: 'https://www.blocktrail.com/tBTC/tx/{flow.btcSwapWithdrawTransactionUrl}',
                target: '_blank',
                rel: 'noopener noreferrer'
              },
              flow.btcSwapWithdrawTransactionUrl
            )
          )
        ),
        flow.step === 7 && _react2.default.createElement(_Loader2.default, { overlay: false }),
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
  };

  return EthToBtc;
}(_react.Component);

exports.default = EthToBtc;

/***/ }),
/* 919 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"AOfotv","loader":"_2DlhHx","small":"fMD4oL","center":"_2Q-7EU","loader1":"_3xH56a","loader2":"_2bU_0h","loader3":"_2fM_Pw"};

/***/ }),
/* 920 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swap = __webpack_require__(129);

var _swap2 = __webpack_require__(53);

var _swap3 = _interopRequireDefault(_swap2);

var _Loader = __webpack_require__(130);

var _Loader2 = _interopRequireDefault(_Loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BtcToEthToken = function (_Component) {
  (0, _inherits3.default)(BtcToEthToken, _Component);

  function BtcToEthToken(_ref) {
    var orderId = _ref.orderId;
    (0, _classCallCheck3.default)(this, BtcToEthToken);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

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

    _this.swap = new _swap3.default(orderId, _swap.BTC2ETHTOKEN);

    _this.state = {
      flow: _this.swap.flow.state,
      secret: 'c0809ce9f484fdcdfb2d5aabd609768ce0374ee97a1a5618ce4cd3f16c00a078'
    };
    return _this;
  }

  BtcToEthToken.prototype.componentWillMount = function componentWillMount() {
    this.swap.on('state update', this.handleFlowStateUpdate);
  };

  BtcToEthToken.prototype.componentWillUnmount = function componentWillUnmount() {
    this.swap.off('state update', this.handleFlowStateUpdate);
  };

  BtcToEthToken.prototype.render = function render() {
    var _state = this.state,
        secret = _state.secret,
        flow = _state.flow;


    return _react2.default.createElement(
      'div',
      null,
      this.swap.id && _react2.default.createElement(
        'strong',
        null,
        this.swap.sellAmount,
        ' ',
        this.swap.sellCurrency,
        ' \u27F6 ',
        this.swap.buyAmount,
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
        _react2.default.createElement(_Loader2.default, { overlay: false })
      )),
      flow.isWaitingForOwner && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Waiting for other user when he connect to the order'
        ),
        _react2.default.createElement(_Loader2.default, { overlay: false })
      ),
      (flow.step === 1 || flow.isMeSigned) && _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'h3',
          null,
          '1. Waiting participant confirm this swap'
        ),
        _react2.default.createElement(_Loader2.default, { overlay: false })
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
                this.swap.sellAmount
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
          _react2.default.createElement(_Loader2.default, { overlay: false })
        ),
        (flow.step === 4 || flow.btcScriptValues) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '3. Creating Bitcoin Script. Please wait, it will take a while'
          ),
          !flow.btcScriptValues && _react2.default.createElement(_Loader2.default, { overlay: false })
        ),
        (flow.step === 5 || flow.isEthContractFunded) && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'h3',
            null,
            '4. ETH Owner received Bitcoin Script and Secret Hash. Waiting when he creates ETH Contract'
          ),
          !flow.isEthContractFunded && _react2.default.createElement(_Loader2.default, { overlay: false })
        ),
        (flow.step === 6 || flow.isEthWithdrawn) && _react2.default.createElement(
          'h3',
          null,
          '5. ETH Contract created and charged. Requesting withdrawal from ETH Contract. Please wait'
        ),
        flow.ethSwapWithdrawTransactionUrl && _react2.default.createElement(
          'div',
          null,
          'Transaction:',
          _react2.default.createElement(
            'strong',
            null,
            _react2.default.createElement(
              'a',
              { href: flow.ethSwapWithdrawTransactionUrl, target: '_blank' },
              flow.ethSwapWithdrawTransactionUrl
            )
          )
        ),
        flow.step === 6 && _react2.default.createElement(_Loader2.default, { overlay: false }),
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
  };

  return BtcToEthToken;
}(_react.Component);

exports.default = BtcToEthToken;

/***/ }),
/* 921 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _newSwap = __webpack_require__(91);

var _redaction = __webpack_require__(27);

var _PageHeadline = __webpack_require__(116);

var _PageHeadline2 = _interopRequireDefault(_PageHeadline);

var _SubTitle = __webpack_require__(188);

var _SubTitle2 = _interopRequireDefault(_SubTitle);

var _FeedNotification = __webpack_require__(922);

var _FeedNotification2 = _interopRequireDefault(_FeedNotification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Feed = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items'
}), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(Feed, _React$Component);

  function Feed() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Feed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.acceptRequest = function (orderId, participantPeer) {
      var order = _newSwap.swapApp.services.orders.getByKey(orderId);

      order.acceptRequest(participantPeer);
    }, _this.declineRequest = function (orderId, participantPeer) {
      var order = _newSwap.swapApp.services.orders.getByKey(orderId);

      order.declineRequest(participantPeer);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Feed.prototype.render = function render() {
    var feeds = this.props.feeds;

    var mePeer = _newSwap.swapApp.services.room.peer;

    return _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        _PageHeadline2.default,
        null,
        _react2.default.createElement(
          _SubTitle2.default,
          null,
          'Feed'
        )
      ),
      _react2.default.createElement(_FeedNotification2.default, {
        feeds: feeds,
        mePeer: mePeer,
        acceptRequest: this.acceptRequest,
        declineRequest: this.declineRequest,
        update: this.updateOrders
      })
    );
  };

  return Feed;
}(_react2.default.Component)) || _class);
exports.default = Feed;

/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(55);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _FeedNotificaton = __webpack_require__(923);

var _FeedNotificaton2 = _interopRequireDefault(_FeedNotificaton);

var _arrowRight = __webpack_require__(924);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FeedNotificaton = function FeedNotificaton(_ref) {
  var feeds = _ref.feeds,
      mePeer = _ref.mePeer,
      acceptRequest = _ref.acceptRequest,
      declineRequest = _ref.declineRequest;
  return feeds.map(function (row) {
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
        { styleName: 'userTooltip', key: id },
        _react2.default.createElement(
          'div',
          { styleName: 'title' },
          'User with ',
          _react2.default.createElement(
            'b',
            null,
            reputation
          ),
          ' reputation wants to swap '
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'currency' },
          _react2.default.createElement(
            'span',
            null,
            buyAmount,
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
            sellAmount,
            ' ',
            _react2.default.createElement(
              'span',
              { styleName: 'coin' },
              sellCurrency
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { styleName: 'buttons' },
          _react2.default.createElement(
            'div',
            { styleName: 'withdrawButton', onClick: function onClick() {
                return declineRequest(id, peer);
              } },
            'Decline'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _helpers.links.swap + '/' + id },
            _react2.default.createElement(
              'div',
              { styleName: 'withdrawButton', onClick: function onClick() {
                  return acceptRequest(id, peer);
                } },
              'Accept'
            )
          )
        )
      );
    });
  });
};

FeedNotificaton.propTypes = {
  orders: _propTypes2.default.array,
  mePeer: _propTypes2.default.string,
  acceptRequest: _propTypes2.default.func
};

exports.default = (0, _reactCssModules2.default)(FeedNotificaton, _FeedNotificaton2.default, { allowMultiple: true });

/***/ }),
/* 923 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"userTooltip":"VWwjR0","title":"z_31Kp","currency":"_1Z91so","coin":"_3HQEd8","buttons":"_2btjqE","arrow":"_77iS7G","checked":"-A0fCV","withdrawButton":"_133mOo","icon":"_1NzA4J"};

/***/ }),
/* 924 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/arrow-right_014b04.svg";

/***/ }),
/* 925 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterRedux = __webpack_require__(328);

var _reactRedux = __webpack_require__(320);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _App = __webpack_require__(926);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(Root, _React$PureComponent);

  function Root() {
    (0, _classCallCheck3.default)(this, Root);
    return (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.apply(this, arguments));
  }

  Root.prototype.render = function render() {
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
  };

  return Root;
}(_react2.default.PureComponent), _class.propTypes = {
  store: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  routes: _propTypes2.default.element.isRequired
}, _temp);
exports.default = Root;

/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(95);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _redaction = __webpack_require__(27);

var _moment = __webpack_require__(69);

var _moment2 = _interopRequireDefault(_moment);

var _helpers = __webpack_require__(12);

var _swap = __webpack_require__(927);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _App = __webpack_require__(938);

var _App2 = _interopRequireDefault(_App);

__webpack_require__(939);

var _Header = __webpack_require__(940);

var _Header2 = _interopRequireDefault(_Header);

var _Loader = __webpack_require__(130);

var _Loader2 = _interopRequireDefault(_Loader);

var _RequestLoader = __webpack_require__(958);

var _RequestLoader2 = _interopRequireDefault(_RequestLoader);

var _ModalConductor = __webpack_require__(959);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

var _WidthContainer = __webpack_require__(195);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _NotificationConductor = __webpack_require__(1003);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('en-gb');

var App = (_dec = (0, _redaction.connect)({
  ethAddress: 'user.ethData.address',
  btcAddress: 'user.btcData.address',
  // nimAddress: 'user.nimData.address',
  tokenAddress: 'user.tokenData.address',
  isVisible: 'loader.isVisible'
}), _dec2 = (0, _reactCssModules2.default)(_App2.default), (0, _reactRouter.withRouter)(_class = _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  App.prototype.componentDidMount = function componentDidMount() {
    _actions2.default.user.sign();
  };

  App.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        ethAddress = _props.ethAddress,
        btcAddress = _props.btcAddress,
        tokenAddress = _props.tokenAddress;

    var isFetching = !ethAddress || !btcAddress || !tokenAddress;

    if (isFetching) {
      return _react2.default.createElement(_Loader2.default, null);
    }

    return _react2.default.createElement(
      _react2.default.StrictMode,
      null,
      _react2.default.createElement(_Header2.default, null),
      _react2.default.createElement(
        _WidthContainer2.default,
        { styleName: 'main' },
        children
      ),
      _react2.default.createElement(_RequestLoader2.default, null),
      _react2.default.createElement(_ModalConductor2.default, null),
      _react2.default.createElement(_NotificationConductor2.default, null)
    );
  };

  return App;
}(_react2.default.Component), _class2.propTypes = {
  children: _propTypes2.default.element.isRequired
}, _temp)) || _class) || _class) || _class);
exports.default = App;

/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

exports.__esModule = true;
exports.createSwapApp = exports.swapApp = undefined;

var _web = __webpack_require__(78);

var _web2 = _interopRequireDefault(_web);

var _core = __webpack_require__(90);

var _bitcoinjsLib = __webpack_require__(100);

var _bitcoinjsLib2 = _interopRequireDefault(_bitcoinjsLib);

var _swapCore = __webpack_require__(928);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localClear = localStorage.clear.bind(localStorage);

localStorage.clear = function () {
  localClear();
};

var swapApp = void 0;

var createSwapApp = function createSwapApp() {
  var _getState = (0, _core.getState)(),
      _getState$user = _getState.user,
      ethData = _getState$user.ethData,
      btcData = _getState$user.btcData;

  (0, _swapCore.setupEnv)({
    web3: _web2.default,
    bitcoinJs: _bitcoinjsLib2.default,
    Ipfs: global.Ipfs,
    IpfsRoom: global.IpfsRoom
  });

  exports.swapApp = swapApp = new _swapCore.SwapApp({
    me: {
      reputation: 10,
      eth: {
        address: ethData.address,
        publicKey: ethData.publicKey
      },
      btc: {
        address: btcData.address,
        publicKey: btcData.publicKey
      }
    },
    config: {
      ipfs: {
        EXPERIMENTAL: {
          pubsub: true
        },
        config: {
          Addresses: {
            Swarm: [
            // '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star',
            '/dns4/star.wpmix.net/tcp/443/wss/p2p-websocket-star']
          }
        }
      }
    }
  });

  console.log('swapApp', swapApp);

  swapApp.on('ready', function () {
    console.log('swapApp ready');
    console.log('initial orders', swapApp.getOrders());
  });

  swapApp.on('user online', function (peer) {
    console.log('user online', peer);
  });

  swapApp.on('user offline', function (peer) {
    console.log('user offline', peer);
  });

  swapApp.on('new orders', function (swaps) {
    console.log('new orders', swaps);
  });

  swapApp.on('new order', function (swap) {
    console.log('new order', swap);
  });

  swapApp.on('remove order', function (swap) {
    console.log('remove order', swap);
  });

  swapApp.on('new order request', function (_ref) {
    var swapId = _ref.swapId,
        participant = _ref.participant;

    console.error('user ' + participant.peer + ' requesting swap', {
      swap: swapApp.orderCollection.getByKey(swapId),
      participant: participant
    });
  });
};

exports.swapApp = swapApp;
exports.createSwapApp = createSwapApp;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SwapApp = exports.setupEnv = undefined;

var _SwapApp = __webpack_require__(929);

var _SwapApp2 = _interopRequireDefault(_SwapApp);

var _util = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.setupEnv = _util.setupEnv;
exports.SwapApp = _SwapApp2.default;

/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Events = __webpack_require__(74);

var _room = __webpack_require__(131);

var _room2 = _interopRequireDefault(_room);

var _Storage = __webpack_require__(132);

var _orderCollection = __webpack_require__(346);

var _orderCollection2 = _interopRequireDefault(_orderCollection);

var _Swap = __webpack_require__(936);

var _Swap2 = _interopRequireDefault(_Swap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapApp = function () {
  function SwapApp(_ref) {
    var me = _ref.me,
        config = _ref.config;
    (0, _classCallCheck3.default)(this, SwapApp);

    this.orderCollection = _orderCollection2.default;
    this.storage = _Storage.storage;
    this.storage.me = me;

    _room2.default.subscribe('ready', function () {
      _Events.events.dispatch('ready');
    });

    _room2.default.init(config.ipfs);
  }

  SwapApp.prototype.getOrders = function getOrders() {
    return this.orderCollection.items;
  };

  SwapApp.prototype.getMyOrders = function getMyOrders() {
    return this.orderCollection.getMyOrders();
  };

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
   */


  SwapApp.prototype.createOrder = function createOrder(data) {
    this.orderCollection.create(data);
  };

  SwapApp.prototype.removeOrder = function removeOrder(orderId) {
    _orderCollection2.default.remove(orderId);
  };

  SwapApp.prototype.createSwap = function createSwap(orderId) {
    return new _Swap2.default(orderId);
  };

  SwapApp.prototype.on = function on(eventName, handler) {
    _Events.events.subscribe(eventName, handler);
  };

  SwapApp.prototype.off = function off(eventName, handler) {
    _Events.events.unsubscribe(eventName, handler);
  };

  return SwapApp;
}();

exports.default = SwapApp;

/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _typeof2 = __webpack_require__(115);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Events = __webpack_require__(74);

var _Events2 = _interopRequireDefault(_Events);

var _Storage = __webpack_require__(132);

var _util = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Room = function () {
  function Room() {
    var _this = this;

    (0, _classCallCheck3.default)(this, Room);

    this.handleUserOnline = function (peer) {
      if (peer !== _Storage.storage.me.peer) {
        _this.events.dispatch('user online', peer);
      }
    };

    this.handleUserOffline = function (peer) {
      if (peer !== _Storage.storage.me.peer) {
        _this.events.dispatch('user offline', peer);
      }
    };

    this.handleNewMessage = function (message) {
      if (message.from === _Storage.storage.me.peer) {
        return;
      }

      var data = JSON.parse(message.data.toString());

      if (data && data.length) {
        data.forEach(function (_ref) {
          var event = _ref.event,
              data = _ref.data;

          _this.events.dispatch(event, (0, _assign2.default)({}, data || {}, { fromPeer: message.from }));
        });
      }
    };

    this.events = new _Events2.default();
  }

  /**
   *
   * @param {object} config
   */


  Room.prototype.init = function init(config) {
    var _this2 = this;

    if (!config || (typeof config === 'undefined' ? 'undefined' : (0, _typeof3.default)(config)) !== 'object') {
      throw new Error('Room failed. "config" of type object required.');
    }

    var ipfs = new _util.env.Ipfs(config);

    ipfs.once('error', function (err) {
      console.log('IPFS error!', err);
    });

    ipfs.once('ready', function () {
      return ipfs.id(function (err, info) {
        console.info('IPFS ready!', info);

        if (err) {
          throw err;
        }

        _this2._init({
          peer: info.id,
          ipfsConnection: ipfs
        });
      });
    });
  };

  Room.prototype._init = function _init(_ref2) {
    var peer = _ref2.peer,
        ipfsConnection = _ref2.ipfsConnection;

    _Storage.storage.me.peer = peer;

    this.connection = _util.env.IpfsRoom(ipfsConnection, 'jswaps', {
      pollInterval: 5000
    });

    this.connection.on('peer joined', this.handleUserOnline);
    this.connection.on('peer left', this.handleUserOffline);
    this.connection.on('message', this.handleNewMessage);

    this.events.dispatch('ready');
  };

  Room.prototype.subscribe = function subscribe(eventName, handler) {
    this.events.subscribe(eventName, handler);
  };

  Room.prototype.once = function once(eventName, handler) {
    this.events.once(eventName, handler);
  };

  Room.prototype.sendMessage = function sendMessage() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      var message = args[0];


      this.connection.broadcast((0, _stringify2.default)(message));
    } else {
      var peer = args[0],
          _message = args[1];


      this.connection.sendTo(peer, (0, _stringify2.default)(_message));
    }
  };

  return Room;
}();

exports.default = new Room();

/***/ }),
/* 931 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _env = __webpack_require__(345);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isLocalStorageEnabled = null;

var isLocalStorageEnabled = function isLocalStorageEnabled() {
  if (_isLocalStorageEnabled === null) {
    try {
      _env.env.localStorage.setItem('test', 'test');
      _env.env.localStorage.removeItem('test');
      _isLocalStorageEnabled = true;
    } catch (e) {
      _isLocalStorageEnabled = false;
    }
  }

  return _isLocalStorageEnabled;
};

var setItem = function setItem(key, value) {
  if (isLocalStorageEnabled()) {
    _env.env.localStorage.setItem(key, (0, _stringify2.default)(value));
  }
};

var getItem = function getItem(key) {
  if (isLocalStorageEnabled()) {
    var value = _env.env.localStorage.getItem(key);

    try {
      return JSON.parse(value);
    } catch (err) {
      return value;
    }
  }
  return undefined;
};

var removeItem = function removeItem(key) {
  if (isLocalStorageEnabled()) {
    return _env.env.localStorage.removeItem(key);
  }
};

var clear = function clear() {
  if (isLocalStorageEnabled()) {
    _env.env.localStorage.clear();
  }
};

exports.default = {
  setItem: setItem,
  getItem: getItem,
  removeItem: removeItem,
  clear: clear
};

/***/ }),
/* 932 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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
/* 933 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

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
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function () {
  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);

    this.items = [];
    this.itemIds = {};
  }

  /**
   * Add item at the start of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.prepend = function prepend(item, key) {
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
  };

  /**
   * Add item at the end of current collection
   * @param item
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.append = function append(item, key) {
    this.items.push(item);
    if (key) {
      this.itemIds[key] = this.items.length - 1;
    }
    return item;
  };

  /**
   * Remove item by index from current collection
   * @param index
   * @returns {*}
   */


  Collection.prototype.removeByIndex = function removeByIndex(index) {
    this.items = this.items.splice(index, 1);
  };

  /**
   * Remove item by key [id] from current collection
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.removeByKey = function removeByKey(key) {
    var _this = this;

    console.log('removeByKey', key);
    console.log('items', [].concat(this.items));
    console.log('itemIds', (0, _assign2.default)({}, this.itemIds));

    var index = this.itemIds[key];

    console.log('index', index);

    if (index !== undefined) {
      this.items.splice(index, 1);
      delete this.itemIds[key];

      console.log('items after removing', [].concat(this.items));

      (0, _keys2.default)(this.itemIds).forEach(function (key) {
        if (_this.itemIds[key] > index) {
          _this.itemIds[key]--;
        }
      });

      console.log('items after reindexing', [].concat(this.items));
    }
  };

  /**
   * Get index of item in current collection
   * @param item
   * @returns {number}
   */


  Collection.prototype.indexOf = function indexOf(item) {
    return this.items.indexOf(item);
  };

  /**
   * Get item by index from current collection
   * @param index
   * @returns {*}
   */


  Collection.prototype.getByIndex = function getByIndex(index) {
    return this.items[index];
  };

  /**
   * Get item by key [id] from current collection
   * @param key {string|number}
   * @returns {*}
   */


  Collection.prototype.getByKey = function getByKey(key) {
    return this.items[this.itemIds[key]];
  };

  Collection.prototype.isExist = function isExist(item) {
    return this.items.includes(item);
  };

  /**
   * Check if item with such name exists in current collection
   * @param key {string|number}
   * @returns {boolean}
   */


  Collection.prototype.isExistByKey = function isExistByKey(key) {
    return Boolean(this.getByKey(key));
  };

  return Collection;
}();

exports.default = Collection;

/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Events = __webpack_require__(74);

var _Storage = __webpack_require__(132);

var _room = __webpack_require__(131);

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUniqueId = function () {
  var id = Date.now();

  return function () {
    return _Storage.storage.me.peer + '-' + ++id;
  };
}();

var Order = function () {

  /**
   *
   * @param {object}  collection
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
  function Order(_ref) {
    var collection = _ref.collection,
        data = _ref.data;
    (0, _classCallCheck3.default)(this, Order);

    this.id = data.id || getUniqueId();
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null;
    this.sellAmount = null;

    this.collection = collection;
    this.requests = []; // income requests
    this.isRequested = false; // outcome request status
    this.isProcessing = false; // if swap isProcessing

    this._update((0, _assign2.default)({}, data, {
      isMy: data.owner.peer === _Storage.storage.me.peer
    }));

    this._onMount();
  }

  Order.prototype._onMount = function _onMount() {
    var _this = this;

    // Someone wants to start swap with you
    _room2.default.subscribe('request swap', function (_ref2) {
      var swapId = _ref2.swapId,
          participant = _ref2.participant;

      if (swapId === _this.id && !_this.requests.find(function (_ref3) {
        var peer = _ref3.peer;
        return peer === participant.peer;
      })) {
        _this.requests.push(participant);

        _Events.events.dispatch('new order request', {
          swapId: swapId,
          participant: participant
        });
      }
    });
  };

  Order.prototype._update = function _update(values) {
    var _this2 = this;

    (0, _keys2.default)(values).forEach(function (key) {
      _this2[key] = values[key];
    });
  };

  Order.prototype.update = function update(values) {
    this._update(values);
    this.collection._saveMyOrders();

    _Events.events.dispatch('swap update', this, values);
  };

  /**
   *
   * @param callback - awaiting for response - accept / decline
   */


  Order.prototype.sendRequest = function sendRequest(callback) {
    var self = this;

    if (_Storage.storage.me.peer === this.owner.peer) {
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

    _room2.default.sendMessage(this.owner.peer, [{
      event: 'request swap',
      data: {
        swapId: this.id,
        participant: _Storage.storage.me
      }
    }]);

    _room2.default.subscribe('accept swap request', function (_ref4) {
      var swapId = _ref4.swapId;

      if (swapId === self.id) {
        this.unsubscribe();

        self.update({
          isProcessing: true,
          isRequested: false
        });

        callback(true);
      }
    });

    _room2.default.subscribe('decline swap request', function (_ref5) {
      var swapId = _ref5.swapId;

      if (swapId === self.id) {
        this.unsubscribe();

        self.update({
          isRequested: false
        });

        // TODO think about preventing user from sent requests every N seconds
        callback(false);
      }
    });
  };

  Order.prototype.acceptRequest = function acceptRequest(participantPeer) {
    var participant = this.requests.find(function (_ref6) {
      var peer = _ref6.peer;
      return peer === participantPeer;
    });

    this.update({
      isRequested: false,
      isProcessing: true,
      participant: participant,
      requests: []
    });

    _room2.default.sendMessage(participantPeer, [{
      event: 'accept swap request',
      data: {
        swapId: this.id
      }
    }]);
  };

  Order.prototype.declineRequest = function declineRequest(participantPeer) {
    var index = void 0;

    this.requests.some(function (_ref7, _index) {
      var peer = _ref7.peer;

      if (peer === participantPeer) {
        index = _index;
      }
      return index !== undefined;
    });

    var requests = [].concat(this.requests.slice(0, index), this.requests.slice(index + 1));

    this.update({
      isRequested: false,
      requests: requests
    });

    _room2.default.sendMessage(participantPeer, [{
      event: 'decline swap request',
      data: {
        swapId: this.id
      }
    }]);
  };

  return Order;
}();

exports.default = Order;

/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _Events = __webpack_require__(74);

var _Events2 = _interopRequireDefault(_Events);

var _SwapRoom = __webpack_require__(937);

var _SwapRoom2 = _interopRequireDefault(_SwapRoom);

var _orderCollection = __webpack_require__(346);

var _orderCollection2 = _interopRequireDefault(_orderCollection);

var _util = __webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swap = function () {
  function Swap(_ref) {
    var orderId = _ref.orderId;
    (0, _classCallCheck3.default)(this, Swap);

    this.events = new _Events2.default();
    this.room = null;
    this.flow = null;

    this.id = orderId;
    this.isMy = null;
    this.owner = null;
    this.participant = null;
    this.buyCurrency = null;
    this.sellCurrency = null;
    this.buyAmount = null; // not same as in order - for each user own
    this.sellAmount = null; // not same as in order - for each user own

    this._persistState();
  }

  Swap.prototype._persistState = function _persistState() {
    var order = _util.localStorage.getItem('swap.' + this.id) || _orderCollection2.default.getByKey(this.id);

    console.log('ORDER SWAP', order);

    if (order) {
      var _pullProps = (0, _util.pullProps)(order, 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount'),
          isMy = _pullProps.isMy,
          buyAmount = _pullProps.buyAmount,
          sellAmount = _pullProps.sellAmount,
          buyCurrency = _pullProps.buyCurrency,
          sellCurrency = _pullProps.sellCurrency,
          rest = (0, _objectWithoutProperties3.default)(_pullProps, ['isMy', 'buyAmount', 'sellAmount', 'buyCurrency', 'sellCurrency']);

      var data = (0, _assign2.default)({}, rest, {
        isMy: isMy,
        buyAmount: isMy ? buyAmount : sellAmount,
        sellAmount: isMy ? sellAmount : buyAmount,
        buyCurrency: isMy ? buyCurrency : sellCurrency,
        sellCurrency: isMy ? sellCurrency : buyCurrency
      });

      console.log('ORDER SWAP', data);

      if (!data.participant && !isMy) {
        data.participant = data.owner;
      }

      this.room = new _SwapRoom2.default({
        participantPeer: data.participant.peer
      });

      this.update(data);
      this._saveState();
    }
  };

  Swap.prototype._saveState = function _saveState() {
    var data = (0, _util.pullProps)(this, 'id', 'isMy', 'owner', 'participant', 'buyCurrency', 'sellCurrency', 'buyAmount', 'sellAmount');

    console.log('New Swap state:', data);

    _util.localStorage.setItem('swap.' + this.id, data);
  };

  Swap.prototype.setFlow = function setFlow(Flow, options) {
    this.flow = new Flow({
      swap: this,
      options: options
    });

    return this.flow;
  };

  Swap.prototype.update = function update(values) {
    var _this = this;

    (0, _keys2.default)(values).forEach(function (key) {
      _this[key] = values[key];
    });
    this._saveState();
  };

  Swap.prototype.on = function on(eventName, handler) {
    this.events.subscribe(eventName, handler);
  };

  Swap.prototype.off = function off(eventName, handler) {
    this.events.unsubscribe(eventName, handler);
  };

  return Swap;
}();

exports.default = Swap;

/***/ }),
/* 937 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _stringify = __webpack_require__(39);

var _stringify2 = _interopRequireDefault(_stringify);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _room = __webpack_require__(131);

var _room2 = _interopRequireDefault(_room);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwapRoom = function () {
  function SwapRoom(_ref) {
    var swapId = _ref.swapId,
        participantPeer = _ref.participantPeer;
    (0, _classCallCheck3.default)(this, SwapRoom);

    this.swapId = swapId;
    this.peer = participantPeer;
  }

  SwapRoom.prototype.subscribe = function subscribe(eventName, handler) {
    var _this = this;

    _room2.default.events.subscribe(eventName, function (_ref2) {
      var fromPeer = _ref2.fromPeer,
          swapId = _ref2.swapId,
          values = (0, _objectWithoutProperties3.default)(_ref2, ['fromPeer', 'swapId']);

      if (fromPeer === _this.peer && swapId === _this.swapId) {
        handler(values);
      }
    });
  };

  SwapRoom.prototype.once = function once(eventName, handler) {
    var self = this;

    _room2.default.events.subscribe(eventName, function (_ref3) {
      var fromPeer = _ref3.fromPeer,
          swapId = _ref3.swapId,
          values = (0, _objectWithoutProperties3.default)(_ref3, ['fromPeer', 'swapId']);

      if (fromPeer === self.peer && swapId === self.swapId) {
        console.error('INCOME SwapRoom event "' + eventName + '"');

        this.unsubscribe();
        handler(values);
      }
    });
  };

  SwapRoom.prototype.sendMessage = function sendMessage() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length === 1) {
      var value = args[0];

      // value - eventName

      if (typeof value === 'string') {
        console.error('OUTCOME SwapRoom event "' + value + '"');

        _room2.default.connection.sendTo(this.peer, (0, _stringify2.default)([{
          event: value,
          swapId: this.swapId
        }]));
      }
      // value - messages
      else if (Array.isArray(value)) {
          value.forEach(function (_ref4) {
            var event = _ref4.event;

            console.log('OUTCOME SwapRoom event "' + event + '"');
          });

          _room2.default.connection.sendTo(this.peer, (0, _stringify2.default)(value));
        }
    } else {
      var eventName = args[0],
          message = args[1];


      console.log('OUTCOME SwapRoom event "' + eventName + '"');

      _room2.default.connection.sendTo(this.peer, (0, _stringify2.default)([{
        event: eventName,
        data: (0, _assign2.default)({
          swapId: this.swapId
        }, message)
      }]));
    }
  };

  return SwapRoom;
}();

exports.default = SwapRoom;

/***/ }),
/* 938 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"main":"_1ywAGt"};

/***/ }),
/* 939 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_2bSI7R","btn":"_3hjQqv"};

/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Header = __webpack_require__(941);

var _Header2 = _interopRequireDefault(_Header);

var _WidthContainer = __webpack_require__(195);

var _WidthContainer2 = _interopRequireDefault(_WidthContainer);

var _Logo = __webpack_require__(347);

var _Logo2 = _interopRequireDefault(_Logo);

var _Nav = __webpack_require__(946);

var _Nav2 = _interopRequireDefault(_Nav);

var _User = __webpack_require__(948);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (_dec = (0, _reactCssModules2.default)(_Header2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
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
  };

  return Header;
}(_react.Component)) || _class);
exports.default = Header;

/***/ }),
/* 941 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"-QJzcI","container":"_1uduwC"};

/***/ }),
/* 942 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"widthContainer":"_2MQxGl","widthContainerIn":"_3YeKUt","relative":"_1za6i8","fullHeight":"p3bGwA","centeringContent":"_2hBTXS","main":"_7Imqyr"};

/***/ }),
/* 943 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"logo":"_3ywc1I"};

/***/ }),
/* 944 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo_ab387e.svg";

/***/ }),
/* 945 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/logo-colored_2cd869.svg";

/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactRouterDom = __webpack_require__(55);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Nav = __webpack_require__(947);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = [{ title: 'Orders', link: _helpers.links.home }, { title: 'Balances', link: _helpers.links.balance }, { title: 'History', link: _helpers.links.history }];

var style = {
  'padding': '0 16px',
  'height': '56px',
  'cursor': 'pointer',
  'marginLeft': '20px',
  'lineHeight': '56px',
  'textTransform': 'uppercase',
  'textAlign': 'center',
  'fontSize': '16px',
  'borderRadius': '6px',
  'display': 'inline-block',
  'backgroundColor': '#E72BB3',
  'color': '#ffffff'
};

var Nav = function Nav() {
  return _react2.default.createElement(
    'div',
    { styleName: 'nav' },
    nav.map(function (_ref) {
      var title = _ref.title,
          link = _ref.link;
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          exact: true,
          key: title,
          styleName: 'link',
          to: link,
          activeClassName: _Nav2.default.active
        },
        title
      );
    }),
    false && _react2.default.createElement(
      'a',
      {
        key: 'Get demo money',
        style: style,
        target: '_blank',
        rel: 'noopener noreferrer',
        onClick: function onClick() {
          return _actions2.default.user.getDemoMoney();
        },
        href: 'https://wiki.swap.online/get-free-bitcoins-and-ether'
      },
      'Get demo money'
    )
  );
};

exports.default = (0, _reactCssModules2.default)(Nav, _Nav2.default);

/***/ }),
/* 947 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"nav":"_32xpDs","link":"_2q3iYI","active":"_2X-K5z"};

/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class;

// import Question from './controls/Question/Question'


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(27);

var _newSwap = __webpack_require__(91);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _User = __webpack_require__(949);

var _User2 = _interopRequireDefault(_User);

var _Sound = __webpack_require__(348);

var _Sound2 = _interopRequireDefault(_Sound);

var _AddOfferButton = __webpack_require__(950);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

var _UserAvatar = __webpack_require__(952);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _UserTooltip = __webpack_require__(955);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = (_dec = (0, _redaction.connect)({
  feeds: 'feeds.items'
}), _dec2 = (0, _reactCssModules2.default)(_User2.default), _dec(_class = _dec2(_class = function (_React$Component) {
  (0, _inherits3.default)(User, _React$Component);

  function User() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, User);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      view: false
    }, _this.updateOrders = function () {
      _this.setState({
        orders: _newSwap.swapApp.services.orders.items
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
      var order = _newSwap.swapApp.services.orders.getByKey(orderId);

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

  User.prototype.componentWillMount = function componentWillMount() {
    _newSwap.swapApp.services.orders.on('new order request', this.updateOrders);
  };

  User.prototype.componentWillUnmount = function componentWillUnmount() {
    _newSwap.swapApp.services.orders.off('new order request', this.updateOrders);
  };

  User.prototype.render = function render() {
    var view = this.state.view;
    var feeds = this.props.feeds;

    var mePeer = _newSwap.swapApp.services.room.peer;

    return _react2.default.createElement(
      'div',
      { styleName: 'user-cont' },
      _react2.default.createElement(_AddOfferButton2.default, null),
      _react2.default.createElement(_UserAvatar2.default, {
        isToggle: this.handleToggleTooltip,
        feeds: feeds,
        mePeer: mePeer,
        soundClick: this.soundClick
      }),
      view && _react2.default.createElement(_UserTooltip2.default, {
        view: view,
        feeds: feeds,
        mePeer: mePeer,
        acceptRequest: this.acceptRequest
      })
    );
  };

  return User;
}(_react2.default.Component)) || _class) || _class);
exports.default = User;

/***/ }),
/* 949 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user-cont":"_2pmz1I","hidden":"DHHm8V"};

/***/ }),
/* 950 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOfferButton = __webpack_require__(951);

var _AddOfferButton2 = _interopRequireDefault(_AddOfferButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddOfferButton = (_dec = (0, _reactCssModules2.default)(_AddOfferButton2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(AddOfferButton, _Component);

  function AddOfferButton() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AddOfferButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleClick = function () {
      _actions2.default.modals.open(_helpers.constants.modals.Offer, {});
      _actions2.default.analytics.dataEvent('orderbook-click-addoffer-button');
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  AddOfferButton.prototype.render = function render() {
    return _react2.default.createElement(
      'div',
      {
        href: '#',
        styleName: 'createOffer',
        onClick: this.handleClick
      },
      'Add offer'
    );
  };

  return AddOfferButton;
}(_react.Component)) || _class);
exports.default = AddOfferButton;

/***/ }),
/* 951 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"createOffer":"_3sDCI2"};

/***/ }),
/* 952 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserAvatar = __webpack_require__(953);

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _avatar = __webpack_require__(954);

var _avatar2 = _interopRequireDefault(_avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserAvatar = (_dec = (0, _reactCssModules2.default)(_UserAvatar2.default, { allowMultiple: true }), _dec(_class = function (_Component) {
  (0, _inherits3.default)(UserAvatar, _Component);

  function UserAvatar() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, UserAvatar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
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

  UserAvatar.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var _props = this.props,
        feeds = _props.feeds,
        soundClick = _props.soundClick;


    if (nextProps.feeds.length > feeds.length) {

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
  };

  UserAvatar.prototype.render = function render() {
    var animation = this.state.animation;


    return _react2.default.createElement(
      'div',
      { styleName: animation, onClick: this.handleClick },
      _react2.default.createElement('img', { styleName: 'bell', src: _avatar2.default, alt: 'Bell' })
    );
  };

  return UserAvatar;
}(_react.Component)) || _class);
exports.default = UserAvatar;

/***/ }),
/* 953 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"user":"_2RGag8","bell":"_1kxsPB","status":"_1HA8Rs","new":"_3pPu-T","shake":"_2JMEzu"};

/***/ }),
/* 954 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/avatar_33edf0.svg";

/***/ }),
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(55);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _UserTooltip = __webpack_require__(956);

var _UserTooltip2 = _interopRequireDefault(_UserTooltip);

var _arrowRight = __webpack_require__(957);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserTooltip = function UserTooltip(_ref) {
  var feeds = _ref.feeds,
      mePeer = _ref.mePeer,
      acceptRequest = _ref.acceptRequest;
  return _react2.default.createElement(
    'div',
    { styleName: 'column' },
    feeds.length < 3 ? feeds.map(function (row) {
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
                buyAmount,
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
                sellAmount,
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
            { to: _helpers.links.swap + '/' + id },
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
/* 956 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"column":"_3rHFm5","feed":"_2wHzlm","userTooltip":"v8POQM","title":"_3DK_1S","currency":"_1qKKUr","coin":"X934On","arrow":"_1T0JYa","checked":"_3RrmBT","icon":"_2etP7N"};

/***/ }),
/* 957 */
/***/ (function(module, exports) {

module.exports = "https://swap.online/images/arrow-right_014b04.svg";

/***/ }),
/* 958 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _redaction = __webpack_require__(27);

var _Loader = __webpack_require__(130);

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
/* 959 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(27);

var _helpers = __webpack_require__(12);

var _modals = __webpack_require__(960);

var _modals2 = _interopRequireDefault(_modals);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ModalConductor = __webpack_require__(1002);

var _ModalConductor2 = _interopRequireDefault(_ModalConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalConductor = (_dec = (0, _redaction.connect)({
  modals: 'modals'
}), _dec2 = (0, _reactCssModules2.default)(_ModalConductor2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(ModalConductor, _Component);

  function ModalConductor() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ModalConductor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      offsetTop: 0
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ModalConductor.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var modals = _ref.modals;
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
  };

  ModalConductor.prototype.render = function render() {
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
  };

  return ModalConductor;
}(_react.Component), _class2.propTypes = {
  modals: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = ModalConductor;

/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _OfferModal = __webpack_require__(961);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _WithdrawModal = __webpack_require__(996);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _PrivateKeysModal = __webpack_require__(998);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  OfferModal: _OfferModal2.default,
  WithdrawModal: _WithdrawModal2.default,
  PrivateKeysModal: _PrivateKeysModal2.default
};

/***/ }),
/* 961 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _OfferModal = __webpack_require__(962);

var _OfferModal2 = _interopRequireDefault(_OfferModal);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _Modal = __webpack_require__(196);

var _Modal2 = _interopRequireDefault(_Modal);

var _ConfirmOffer = __webpack_require__(970);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _AddOffer = __webpack_require__(981);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Offer = (_dec = (0, _reactCssModules2.default)(_OfferModal2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Offer, _React$Component);

  function Offer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Offer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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

  Offer.prototype.render = function render() {
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
  };

  return Offer;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string
}, _temp2)) || _class);
exports.default = Offer;

/***/ }),
/* 962 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"content":"_35EvSl"};

/***/ }),
/* 963 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_18Zuzz","header":"_247oHD","headerContent":"_1nj0x3","title":"_1fyulC","uppercase":"_2k_g2m","closeButton":"HHCosS","contentContainer":"_2zEN0h","content":"_10IWir"};

/***/ }),
/* 964 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Overlay = __webpack_require__(965);

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
/* 965 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"overlay":"ctI9Nl"};

/***/ }),
/* 966 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Center = __webpack_require__(967);

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
/* 967 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"centringContainer":"_1MHV1x","scrollable":"_3_xp05","centringContent":"_1MbRzk"};

/***/ }),
/* 968 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CloseIcon = __webpack_require__(969);

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
/* 969 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"_3DuKEL","whiteColor":"_1cHfwF","icon":"IZktJv","brandColor":"LyalG8"};

/***/ }),
/* 970 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _newSwap = __webpack_require__(91);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ConfirmOffer = __webpack_require__(971);

var _ConfirmOffer2 = _interopRequireDefault(_ConfirmOffer);

var _ButtonsInRow = __webpack_require__(972);

var _ButtonsInRow2 = _interopRequireDefault(_ButtonsInRow);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

var _Coins = __webpack_require__(338);

var _Coins2 = _interopRequireDefault(_Coins);

var _Amounts = __webpack_require__(974);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _ExchangeRate = __webpack_require__(978);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Fee = __webpack_require__(980);

var _Fee2 = _interopRequireDefault(_Fee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmOffer = (_dec = (0, _reactCssModules2.default)(_ConfirmOffer2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(ConfirmOffer, _Component);

  function ConfirmOffer() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ConfirmOffer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleConfirm = function () {
      _this.createOrder();
      _actions2.default.modals.close('OfferModal');
    }, _this.createOrder = function () {
      var _this$props$offer = _this.props.offer,
          buyAmount = _this$props$offer.buyAmount,
          sellAmount = _this$props$offer.sellAmount,
          buyCurrency = _this$props$offer.buyCurrency,
          sellCurrency = _this$props$offer.sellCurrency;

      var data = {
        buyCurrency: '' + buyCurrency,
        sellCurrency: '' + sellCurrency,
        buyAmount: Number(buyAmount),
        sellAmount: Number(sellAmount)
      };
      _actions2.default.analytics.dataEvent('orderbook-addoffer-click-confirm-button');
      _newSwap.swapApp.services.orders.create(data);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ConfirmOffer.prototype.render = function render() {
    var _props = this.props,
        _props$offer = _props.offer,
        exchangeRate = _props$offer.exchangeRate,
        buyAmount = _props$offer.buyAmount,
        sellAmount = _props$offer.sellAmount,
        buyCurrency = _props$offer.buyCurrency,
        sellCurrency = _props$offer.sellCurrency,
        onBack = _props.onBack;


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
          { styleName: 'button', brand: true, onClick: this.handleConfirm },
          'Confirm'
        )
      )
    );
  };

  return ConfirmOffer;
}(_react.Component)) || _class);
exports.default = ConfirmOffer;

/***/ }),
/* 971 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"coins":"_2RjWU2","buttonsInRow":"_3mrqw4","button":"_1vanZm"};

/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ButtonsInRow = __webpack_require__(973);

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
/* 973 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"twoButtonsInRow":"_9_lDxo"};

/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Amounts = __webpack_require__(975);

var _Amounts2 = _interopRequireDefault(_Amounts);

var _Row = __webpack_require__(197);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(198);

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
/* 975 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"arrow":"_2HWTjJ"};

/***/ }),
/* 976 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"row":"_1y3vOI","title":"LetDhR","content":"_1XWdvY"};

/***/ }),
/* 977 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_2bAMgW","currency":"_1Z5jPl"};

/***/ }),
/* 978 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _ExchangeRate = __webpack_require__(979);

var _ExchangeRate2 = _interopRequireDefault(_ExchangeRate);

var _Row = __webpack_require__(197);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(198);

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
/* 979 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"equal":"_3RggZJ"};

/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Row = __webpack_require__(197);

var _Row2 = _interopRequireDefault(_Row);

var _Value = __webpack_require__(198);

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
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp, _initialiseProps; /* eslint-disable */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _bignumber = __webpack_require__(988);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _AddOffer = __webpack_require__(989);

var _AddOffer2 = _interopRequireDefault(_AddOffer);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

var _Group = __webpack_require__(990);

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bignumber.BigNumber.config({ DECIMAL_PLACES: 4, ROUNDING_MODE: 4, EXPONENTIAL_AT: [-7, 14], RANGE: 1e+7, CRYPTO: true });

var exchangeRates = {
  'ethbtc': 0.001,
  'btceth': 1000,
  'ethnoxon': 1,
  'noxoneth': 1,
  'btcnoxon': 1000,
  'noxonbtc': 0.001
};

var AddOffer = (_dec = (0, _reactCssModules2.default)(_AddOffer2.default, { allowMultiple: true }), _dec(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(AddOffer, _Component);

  function AddOffer(_ref) {
    var initialData = _ref.initialData;
    (0, _classCallCheck3.default)(this, AddOffer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this));

    _initialiseProps.call(_this);

    var _ref2 = initialData || {},
        exchangeRate = _ref2.exchangeRate,
        buyAmount = _ref2.buyAmount,
        sellAmount = _ref2.sellAmount,
        buyCurrency = _ref2.buyCurrency,
        sellCurrency = _ref2.sellCurrency;

    _this.state = {
      exchangeRate: exchangeRate || exchangeRates.ethbtc,
      buyAmount: buyAmount || '',
      sellAmount: sellAmount || '',
      buyCurrency: buyCurrency || 'eth',
      sellCurrency: sellCurrency || 'btc',
      EventWasSend: false
    };
    return _this;
  }

  AddOffer.prototype.render = function render() {
    var _state = this.state,
        exchangeRate = _state.exchangeRate,
        buyAmount = _state.buyAmount,
        sellAmount = _state.sellAmount,
        buyCurrency = _state.buyCurrency,
        sellCurrency = _state.sellCurrency;

    var forbidden = '' + buyCurrency + sellCurrency === 'noxoneth' || '' + buyCurrency + sellCurrency === 'ethnoxon';

    var linked = _swValuelink2.default.all(this, 'exchangeRate', 'buyAmount', 'sellAmount');
    var isDisabled = !exchangeRate || forbidden || !buyAmount && !sellAmount;

    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(_Group2.default, {
        label: 'Exchange rate',
        inputValueLink: linked.exchangeRate.onChange(this.handleExchangeRateChange),
        currency: false
      }),
      _react2.default.createElement(_Group2.default, {
        styleName: 'buyGroup',
        label: 'Buy',
        inputValueLink: linked.buyAmount.onChange(this.handleBuyAmountChange),
        selectedCurrencyValue: buyCurrency,
        onCurrencySelect: this.handleBuyCurrencySelect
      }),
      _react2.default.createElement(_Group2.default, {
        label: 'Sell',
        inputValueLink: linked.sellAmount.onChange(this.handleSellAmountChange),
        selectedCurrencyValue: sellCurrency,
        onCurrencySelect: this.handleSellCurrencySelect
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
  };

  return AddOffer;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getExchangeRate = function (buyCurrency, sellCurrency) {
    return exchangeRates['' + buyCurrency.toLowerCase() + sellCurrency.toLowerCase()];
  };

  this.handleExchangeRateChange = function (value) {
    var _state2 = _this2.state,
        buyAmount = _state2.buyAmount,
        sellAmount = _state2.sellAmount;


    buyAmount = new _bignumber.BigNumber(buyAmount);
    sellAmount = buyAmount.multipliedBy(new _bignumber.BigNumber(value));

    _this2.setState({
      buyAmount: buyAmount,
      sellAmount: sellAmount
    });
  };

  this.handleBuyCurrencySelect = function (_ref3) {
    var value = _ref3.value;
    var _state3 = _this2.state,
        buyCurrency = _state3.buyCurrency,
        sellCurrency = _state3.sellCurrency,
        buyAmount = _state3.buyAmount,
        sellAmount = _state3.sellAmount;

    // init:    buyCurrency = ETH, sellCurrency = BTC, value = BTC
    // result:  buyCurrency = BTC, sellCurrency = ETH

    if (value === sellCurrency) {
      sellCurrency = buyCurrency;
    }

    buyCurrency = value;

    var exchangeRate = _this2.getExchangeRate(buyCurrency, sellCurrency);

    if (buyAmount) {
      sellAmount = new _bignumber.BigNumber(buyAmount).multipliedBy(exchangeRate).toNumber();
    }

    _this2.setState({
      exchangeRate: exchangeRate,
      buyCurrency: buyCurrency,
      sellCurrency: sellCurrency,
      sellAmount: sellAmount
    });
  };

  this.handleSellCurrencySelect = function (_ref4) {
    var value = _ref4.value;
    var _state4 = _this2.state,
        buyCurrency = _state4.buyCurrency,
        sellCurrency = _state4.sellCurrency,
        buyAmount = _state4.buyAmount,
        sellAmount = _state4.sellAmount;


    if (value === buyCurrency) {
      buyCurrency = sellCurrency;
    }

    sellCurrency = value;

    var exchangeRate = _this2.getExchangeRate(buyCurrency, sellCurrency);

    if (buyAmount) {
      sellAmount = new _bignumber.BigNumber(buyAmount).multipliedBy(exchangeRate).toNumber();
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

    if (value === '') {
      _this2.setState({
        sellAmount: new _bignumber.BigNumber(0)
      });
    } else {
      _this2.setState({
        sellAmount: new _bignumber.BigNumber(value).multipliedBy(exchangeRate).toNumber()
      });
    }
  };

  this.handleSellAmountChange = function (value) {
    var exchangeRate = _this2.state.exchangeRate;


    if (!_this2.EventWasSend) {
      _actions2.default.analytics.dataEvent('orderbook-addoffer-enter-ordervalue');
      _this2.EventWasSend = true;
    }

    if (value === '') {
      _this2.setState({
        buyAmount: new _bignumber.BigNumber(0)
      });
    } else {
      _this2.setState({
        buyAmount: new _bignumber.BigNumber(value).dividedBy(exchangeRate).toNumber()
      });
    }
  };

  this.handleNext = function () {
    var _state5 = _this2.state,
        exchangeRate = _state5.exchangeRate,
        buyAmount = _state5.buyAmount,
        sellAmount = _state5.sellAmount,
        buyCurrency = _state5.buyCurrency,
        sellCurrency = _state5.sellCurrency;

    var forbidden = '' + buyCurrency + sellCurrency === 'noxoneth' || '' + buyCurrency + sellCurrency === 'ethnoxon';
    var onNext = _this2.props.onNext;


    _actions2.default.analytics.dataEvent('orderbook-addoffer-click-next-button');

    var isDisabled = !exchangeRate || !buyAmount || !sellAmount || forbidden;

    console.log(_this2.state);

    if (!isDisabled) {
      onNext(_this2.state);
    }
  };
}, _temp)) || _class);
exports.default = AddOffer;

/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.NumberInput = exports.Checkbox = exports.Radio = exports.Select = exports.TextArea = exports.Input = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _assign = __webpack_require__(9);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInputMask = __webpack_require__(983);

var _reactInputMask2 = _interopRequireDefault(_reactInputMask);

var _classnames = __webpack_require__(34);

var _classnames2 = _interopRequireDefault(_classnames);

var _helpers = __webpack_require__(12);

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

  return (0, _classnames2.default)(className, (_cx = {}, _cx[invalidClass || 'invalid'] = Boolean(error), _cx[requiredClass || 'required'] = Boolean(error && value === ''), _cx));
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

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));

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

  NumberInput.prototype.componentWillMount = function componentWillMount() {
    this.setAndConvert(this.props.valueLink.value);
  };

  NumberInput.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var next = nextProps.valueLink;


    if (Number(next.value) !== Number(this.value)) {
      this.setAndConvert(next.value); // keep state being synced
    }
  };

  NumberInput.prototype.setValue = function setValue(x) {
    // We're not using native state in order to avoid race condition.
    this.value = String(x);
    this.error = this.value === '' || isNaN(Number(x));

    this.forceUpdate();
  };

  NumberInput.prototype.setAndConvert = function setAndConvert(x) {
    var value = Number(x);

    if (this.props.positive) {
      value = Math.abs(x);
    }
    if (this.props.integer) {
      value = Math.round(value);
    }

    this.setValue(value);
  };

  NumberInput.prototype.render = function render() {
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
  };

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
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"buyGroup":"EzYW8A","button":"_2cpQT4"};

/***/ }),
/* 990 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Group = __webpack_require__(991);

var _Group2 = _interopRequireDefault(_Group);

var _FieldLabel = __webpack_require__(349);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(200);

var _Input2 = _interopRequireDefault(_Input);

var _CurrencySelect = __webpack_require__(317);

var _CurrencySelect2 = _interopRequireDefault(_CurrencySelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var className = _ref.className,
      label = _ref.label,
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
        pattern: '0-9\\.'
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
/* 991 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"groupField":"m1Yt0g","inputRoot":"_1rUUNY","inputContainer":"_1qVKWE","currencySelect":"_2Otm6-"};

/***/ }),
/* 992 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"label":"_1Grvg1","inRow":"_2anvtg"};

/***/ }),
/* 993 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"_2B8dk-","inputContainer":"_2MfSxb","disabled":"_34MQUG","withError":"_1bE9ra","input":"_2HgfFS","label":"n728cD","error":"_1KSgUc"};

/***/ }),
/* 994 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends2 = __webpack_require__(46);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(25);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autosize = __webpack_require__(995);

var _autosize2 = _interopRequireDefault(_autosize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE = 'autosize:update';
var DESTROY = 'autosize:destroy';
var RESIZED = 'autosize:resized';

var TextareaAutosize = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TextareaAutosize, _Component);

  function TextareaAutosize() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextareaAutosize);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.dispatchEvent = function (EVENT_TYPE, defer) {
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
    }, _this.getValue = function (_ref) {
      var valueLink = _ref.valueLink,
          value = _ref.value;
      return valueLink ? valueLink.value : value;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  TextareaAutosize.prototype.componentDidMount = function componentDidMount() {
    (0, _autosize2.default)(this.textareaEl);

    if (this.props.onResize) {
      this.textareaEl.addEventListener(RESIZED, this.props.onResize);
    }
  };

  TextareaAutosize.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onResize) {
      this.textareaEl.removeEventListener(RESIZED, this.props.onResize);
    }

    this.dispatchEvent(DESTROY);
  };

  TextareaAutosize.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.getValue(nextProps) !== this.getValue(this.props)) {
      this.dispatchEvent(UPDATE, true);
    }
  };

  TextareaAutosize.prototype.render = function render() {
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
  };

  return TextareaAutosize;
}(_react.Component), _class.propTypes = {
  valueLink: _propTypes2.default.object.isRequired,
  onResize: _propTypes2.default.func
}, _class.defaultProps = {
  rows: 1
}, _temp2);
exports.default = TextareaAutosize;

/***/ }),
/* 995 */,
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(27);

var _helpers = __webpack_require__(12);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _WithdrawModal = __webpack_require__(997);

var _WithdrawModal2 = _interopRequireDefault(_WithdrawModal);

var _Modal = __webpack_require__(196);

var _Modal2 = _interopRequireDefault(_Modal);

var _FieldLabel = __webpack_require__(349);

var _FieldLabel2 = _interopRequireDefault(_FieldLabel);

var _Input = __webpack_require__(200);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithdrawModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData',
  nimData: 'user.nimData'
}), _dec2 = (0, _reactCssModules2.default)(_WithdrawModal2.default), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(WithdrawModal, _React$Component);

  function WithdrawModal() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithdrawModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      isSubmitted: false,
      address: ' ',
      amount: ''
    }, _this.handleSubmit = function () {
      var _this$state = _this.state,
          to = _this$state.address,
          amount = _this$state.amount;
      var _this$props = _this.props,
          ethData = _this$props.ethData,
          btcData = _this$props.btcData,
          nimData = _this$props.nimData,
          currency = _this$props.data.currency;


      if (!to || !amount || amount < 0.01) {
        _this.setState({
          isSubmitted: true
        });
        return;
      }

      var action = void 0;
      var from = void 0;

      if (currency === 'ETH') {
        action = _actions2.default.ethereum;
        from = ethData.address;
      } else if (currency === 'BTC') {
        action = _actions2.default.bitcoin;
        from = btcData.address;
      } else if (currency === 'NIM') {
        action = _actions2.default.nimiq;
        from = nimData.address;
      } else if (currency === 'NOXON') {
        action = _actions2.default.token;
      }

      _actions2.default.loader.show();

      action.send(from, to, Number(amount)).then(function () {
        _actions2.default.loader.hide();
        action.getBalance();

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

  WithdrawModal.prototype.render = function render() {
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
  };

  return WithdrawModal;
}(_react2.default.Component), _class2.propTypes = {
  name: _propTypes2.default.string,
  data: _propTypes2.default.object
}, _temp2)) || _class) || _class);
exports.default = WithdrawModal;

/***/ }),
/* 997 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"note":"_1A5qTh","button":"_2Wr1o_"};

/***/ }),
/* 998 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(27);

var _moment = __webpack_require__(69);

var _moment2 = _interopRequireDefault(_moment);

var _actions = __webpack_require__(14);

var _actions2 = _interopRequireDefault(_actions);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _helpers = __webpack_require__(12);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _PrivateKeysModal = __webpack_require__(999);

var _PrivateKeysModal2 = _interopRequireDefault(_PrivateKeysModal);

var _Field = __webpack_require__(1000);

var _Field2 = _interopRequireDefault(_Field);

var _Modal = __webpack_require__(196);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateKeysModal = (_dec = (0, _redaction.connect)({
  ethData: 'user.ethData',
  btcData: 'user.btcData'
}), _dec2 = (0, _reactCssModules2.default)(_PrivateKeysModal2.default, { allowMultiple: true }), _dec(_class = _dec2(_class = (_temp2 = _class2 = function (_React$PureComponent) {
  (0, _inherits3.default)(PrivateKeysModal, _React$PureComponent);

  function PrivateKeysModal() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PrivateKeysModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.state = {
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

  PrivateKeysModal.prototype.render = function render() {
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
  };

  return PrivateKeysModal;
}(_react2.default.PureComponent), _class2.propTypes = {
  name: _propTypes2.default.string,
  ethData: _propTypes2.default.object.isRequired,
  btcData: _propTypes2.default.object.isRequired
}, _temp2)) || _class) || _class);
exports.default = PrivateKeysModal;

/***/ }),
/* 999 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modal":"_3EyIsk","content":"_13sdCy","title":"TLE3XR","subTitle":"_3u-G2a","button":"_265YTK"};

/***/ }),
/* 1000 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _swValuelink = __webpack_require__(93);

var _swValuelink2 = _interopRequireDefault(_swValuelink);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Field = __webpack_require__(1001);

var _Field2 = _interopRequireDefault(_Field);

var _Input = __webpack_require__(200);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(70);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Field2 = (_dec = (0, _reactCssModules2.default)(_Field2.default), _dec(_class = (_temp2 = _class2 = function (_React$Component) {
  (0, _inherits3.default)(Field2, _React$Component);

  function Field2() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Field2);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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

  Field2.prototype.render = function render() {
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
  };

  return Field2;
}(_react2.default.Component), _class2.propTypes = {
  label: _propTypes2.default.string.isRequired,
  privateKey: _propTypes2.default.string.isRequired,
  valueLink: _propTypes2.default.object.isRequired
}, _temp2)) || _class);
exports.default = Field2;

/***/ }),
/* 1001 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_2sawde","section":"_3I8NoW","label":"_9MIala","input":"B6rjvz","button":"_8Hxxx_","error":"_37HJh_"};

/***/ }),
/* 1002 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"modalConductor":"_8Hhrkg"};

/***/ }),
/* 1003 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _keys = __webpack_require__(17);

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _dec2, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(7);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redaction = __webpack_require__(27);

var _notifications = __webpack_require__(1004);

var _notifications2 = _interopRequireDefault(_notifications);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _NotificationConductor = __webpack_require__(1010);

var _NotificationConductor2 = _interopRequireDefault(_NotificationConductor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConductor = (_dec = (0, _redaction.connect)({
  notifications: 'notifications'
}), _dec2 = (0, _reactCssModules2.default)(_NotificationConductor2.default), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(NotificationConductor, _Component);

  function NotificationConductor() {
    (0, _classCallCheck3.default)(this, NotificationConductor);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  NotificationConductor.prototype.render = function render() {
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
  };

  return NotificationConductor;
}(_react.Component), _class2.propTypes = {
  notifications: _propTypes2.default.object
}, _temp)) || _class) || _class);
exports.default = NotificationConductor;

/***/ }),
/* 1004 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _SuccessWithdraw = __webpack_require__(1005);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Message = __webpack_require__(1008);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SuccessWithdraw: _SuccessWithdraw2.default,
  Message: _Message2.default
};

/***/ }),
/* 1005 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _SuccessWithdraw = __webpack_require__(1006);

var _SuccessWithdraw2 = _interopRequireDefault(_SuccessWithdraw);

var _Notification = __webpack_require__(350);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SuccessWithdraw = (_dec = (0, _reactCssModules2.default)(_SuccessWithdraw2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(SuccessWithdraw, _Component);

  function SuccessWithdraw() {
    (0, _classCallCheck3.default)(this, SuccessWithdraw);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SuccessWithdraw.prototype.render = function render() {
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
  };

  return SuccessWithdraw;
}(_react.Component)) || _class);
exports.default = SuccessWithdraw;

/***/ }),
/* 1006 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_2JfWob"};

/***/ }),
/* 1007 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"_288JHo","mounted":"NHOOb_","removed":"_3iSWGm","notification":"_2wSt7r","content":"_3FIvMD"};

/***/ }),
/* 1008 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = __webpack_require__(2);

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _Message = __webpack_require__(1009);

var _Message2 = _interopRequireDefault(_Message);

var _Notification = __webpack_require__(350);

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = (_dec = (0, _reactCssModules2.default)(_Message2.default), _dec(_class = function (_Component) {
  (0, _inherits3.default)(Message, _Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Message.prototype.render = function render() {
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
  };

  return Message;
}(_react.Component)) || _class);
exports.default = Message;

/***/ }),
/* 1009 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"value":"_34omtZ"};

/***/ }),
/* 1010 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"notificationConductor":"QOGrSh"};

/***/ })
],[351]);