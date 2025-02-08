import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { beforeEach, vi } from 'vitest';
import { PropertySymbol } from 'happy-dom';

const browserWindow = (global.document as any)[PropertySymbol.window];

vi.resetModules();
vi.clearAllMocks();
vi.resetAllMocks();

beforeEach(cleanup);

global.setTimeout = browserWindow.setTimeout;
global.clearTimeout = browserWindow.clearTimeout;
global.setInterval = browserWindow.setInterval;
global.clearInterval = browserWindow.clearInterval;
global.requestAnimationFrame = browserWindow.requestAnimationFrame;
global.cancelAnimationFrame = browserWindow.cancelAnimationFrame;
global.queueMicrotask = browserWindow.queueMicrotask;
