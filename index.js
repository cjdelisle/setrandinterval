'use strict';
const setRandInterval = module.exports = (func, inter, percent) => {
    if (!func) { throw new Error("function is required"); }
    if (!inter) { throw new Error("interval is required"); }
    percent = typeof(percent) === 'number' ? percent : 20;
    let tout;
    const mkTimeout = () => {
        tout = setTimeout(() => {
            mkTimeout();
            func();
        }, inter + (inter * percent * 0.01 * (Math.random() - 0.5) ) );
    };
    mkTimeout();
    return {
        clear: () => { clearTimeout(tout); }
    };
};
