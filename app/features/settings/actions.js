// @flow

import {
    SET_ALWAYS_ON_TOP_WINDOW_ENABLED,
    SET_DISABLE_AGC,
    SET_SERVER_URL,
    SET_SERVER_TIMEOUT,
	SET_ENABLE_REMOTE_CONTROL
} from './actionTypes';

import { normalizeServerURL } from '../utils';

/**
 * Set Enable Remote Control
 *
 * @param {boolean} enableRemoteControl - Whether to enable remote control
 * @returns {{
 *     type: SET_ENABLE_REMOTE_CONTROL,
 *     enableRemoteControl: boolean
 * }}
 */
export function setEnableRemoteControl(enableRemoteControl: boolean) {
    return {
        type: SET_ENABLE_REMOTE_CONTROL,
        enableRemoteControl
    };
}

/**
 * Set Server URL.
 *
 * @param {string} serverURL - Server URL.
 * @returns {{
 *     type: SET_SERVER_URL,
 *     serverURL: ?string
 * }}
 */
export function setServerURL(serverURL: string) {
    return {
        type: SET_SERVER_URL,
        serverURL: normalizeServerURL(serverURL)
    };
}

/**
 * Set Server Timeout.
 *
 * @param {string} serverTimeout - Server Timeout.
 * @returns {{
 *     type: SET_SERVER_TIMEOUT,
 *     serverTimeout: ?number
 * }}
 */
export function setServerTimeout(serverTimeout: number) {
    return {
        type: SET_SERVER_TIMEOUT,
        serverTimeout
    };
}

/**
 * Set disable AGC.
 *
 * @param {boolean} disableAGC - Whether to disable AGC.
 * @returns {{
 *     type: SET_DISABLE_AGC,
 *     disableAGC: boolean
 * }}
 */
export function setDisableAGC(disableAGC: boolean) {
    return {
        type: SET_DISABLE_AGC,
        disableAGC
    };
}

/**
 * Set window always on top.
 *
 * @param {boolean} alwaysOnTopWindowEnabled - Whether to set AlwaysOnTop Window Enabled.
 * @returns {{
 *     type: SET_ALWAYS_ON_TOP_WINDOW_ENABLED,
 *     alwaysOnTopWindowEnabled: boolean
 * }}
 */
export function setWindowAlwaysOnTop(alwaysOnTopWindowEnabled: boolean) {
    return {
        type: SET_ALWAYS_ON_TOP_WINDOW_ENABLED,
        alwaysOnTopWindowEnabled
    };
}
