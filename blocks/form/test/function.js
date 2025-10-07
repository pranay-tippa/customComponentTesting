/**
 * Test function
 * @param {object} field
 * @param {scope} globals Global scope object
 * @returns {void}
 */
function testRTE(field, globals) {
  globals.functions.setProperty(field, {label: {value: '<p>test</p>', richText: true}});
}

export { testRTE };
