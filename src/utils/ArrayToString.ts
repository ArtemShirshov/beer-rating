const prepareString = (str: string, toUpperCase: boolean) =>
  toUpperCase ? str[0].toUpperCase() + str.slice(1) : str;

/**
 * @example
 *  ['text', 'text2'] => 'text, text2'
 *  ['text', 'text2'], true => 'Text, text2'
 *  ['text'] => 'text'
 *  ['text'], true => 'Text'
 *  ['text', undefined] => 'text'
 *
 * @param {any[]} array
 * @param {boolean} toUpperCase
 */
export const arrayToString = (array: any[], toUpperCase = false): string => {
  const _array = array.filter((item) => item);

  if (_array.length === 1) {
    return prepareString(_array.toString(), toUpperCase);
  }

  const srt = _array.toString().replace(',', ', ');

  return prepareString(srt, toUpperCase);
};
