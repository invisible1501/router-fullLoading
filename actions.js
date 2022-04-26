export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const RESET = 'RESET';
export const RESET_SUCCESS = 'RESET_SUCCESS';

export function AdminLogin(payload) {return {type: LOGIN, payload}};
export function Reset(payload) {return {type: RESET, payload}};