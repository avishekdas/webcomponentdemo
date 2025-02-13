"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var React = _interopRequireWildcard(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// src/components/UserDashboard.jsx

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    this.fetchUsers();
  }
  async fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      this.setState({
        users: data,
        loading: false
      });
    } catch (err) {
      this.setState({
        error: err.message,
        loading: false
      });
    }
  }
  render() {
    const {
      users,
      loading,
      error
    } = this.state;
    if (loading) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          padding: '20px',
          textAlign: 'center'
        },
        children: "Loading..."
      });
    }
    if (error) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          padding: '20px',
          color: 'red',
          textAlign: 'center'
        },
        children: error
      });
    }
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        children: "Account Certification"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px'
        },
        children: users.map(user => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          style: {
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
            children: user.name
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: ["Email: ", user.email]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: ["Company: ", user.company.name]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            children: ["Website: ", user.website]
          })]
        }, user.id))
      })]
    });
  }
}
var _default = exports.default = UserDashboard;