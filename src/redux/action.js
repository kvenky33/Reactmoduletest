export const SHOW = "show";
export const HIDE = "HIDE";

export function show() {
  return {
    type: SHOW,
  };
}
export function hide() {
  return {
    type: HIDE,
  };
}
