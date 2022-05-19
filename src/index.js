import { _initPower, _hasPower } from './_power';
import "./_power.css";

let _handler = null;
let _installed = false;

function create(vue) {
    _initPower(vue, (...params) => {
       return _handler && _handler(...params);
    });
    return {
        setPowerHandler: (handler) => {
            if (handler && typeof handler === 'function') {
                _handler = handler;
            }
        },
        hasPower: (param) => {
            return _hasPower(param);
        }
    }
}

function setGlobal(key, value, vue) {
    if (key && value && typeof key == 'string') {
        if (typeof window !== 'undefined') {
            window[key] = value;
        }
        if (vue && vue.prototype) {
            vue.prototype[key] = value;
        }
    }
}

function install(vue) {
    if (_installed || !vue) {
        return;
    }
    let vPower = create(vue);
    setGlobal("VPower", vPower, vue);
    _installed = true;
}

module.exports = {
    install
}