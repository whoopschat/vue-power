import { _initPower, _hasPower } from './_power';
import "./_power.css";

let _handler = null;
let _installed = false;

function install(vue) {
    if (_installed || !vue) {
        return;
    }
    _initPower(vue, (...params) => {
        return _handler && _handler(...params);
    });
    if (vue && vue.prototype) {
        vue.prototype.$hasPower = hasPower;
    }
    _installed = true;
}

function setPowerHandler(handler) {
    if (handler && typeof handler === 'function') {
        _handler = handler;
    }
}

function hasPower(param) {
    return _hasPower(param);
}

module.exports = {
    install,
    setPowerHandler,
    hasPower
}