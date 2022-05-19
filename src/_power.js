import { addDirective } from "./utils/directive";

let _inited = false;
let _powerHandler = null;

function checkPower(el, binding) {
    try {
        if (binding && binding.value) {
            if (!_hasPower(binding.value)) {
                el.classList.add("power-hide");
            } else {
                el.classList.remove("power-hide")
            }
        } else {
            el.classList.remove("power-hide")
        }
    } catch (error) {
    }
}

export function _hasPower(param) {
    return _powerHandler && _powerHandler(param);
}

export function _initPower(vue, handler) {
    if (_inited || !vue || !handler) {
        return;
    }
    _inited = true;
    _powerHandler = handler;
    addDirective(vue, 'power', {
        bind: function (el, binding) {
            checkPower(el, binding);
        },
        update: function (el, binding) {
            checkPower(el, binding);
        },
    })
}