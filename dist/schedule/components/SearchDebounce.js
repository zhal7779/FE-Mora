"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDebounce = void 0;
const SearchDebounce = (callback) => {
    let timer;
    return (...value) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...value), 300);
    };
};
exports.SearchDebounce = SearchDebounce;
