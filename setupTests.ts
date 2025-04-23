import '@testing-library/jest-dom/vitest';
import ResizeObserver from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserver;
if (typeof window.HTMLElement !== 'undefined') {
  window.HTMLElement.prototype.scrollIntoView = function() {
    // noop
  };
}