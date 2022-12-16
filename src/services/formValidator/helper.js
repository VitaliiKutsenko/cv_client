export const findRequiredField = elem => ({
  name: elem,
  error: true,
  message: 'Field is required',
});
export const findForbiddenSymbols = elem => ({
  name: elem,
  error: true,
  message: 'Field has forbidden symbols: <, >, ~',
});
export const findMaxQuantitySymbols = (elem, symbolsLength) => ({
  name: elem,
  error: true,
  message: `Max quantity of symbols ${symbolsLength}`,
});
export const findBySpecialRules = (elem, text) => ({
  name: elem,
  error: true,
  message: text,
});
