const prefixAll = require('inline-style-prefixer/static');
const camelCase = require('camel-case');

const types = require('./ruleTypes');

/**
 * This function returns the root selector rules (eg - button)
 * @param { array } rules 
 */
function rootSelectorRules(rules) {
	let styles = {};

	rules.declarations.forEach(declaration => {
		Object.assign(styles, prefixAll(assignProperty(declaration)));
	});

	return styles;
}

/**
 * This function creates a style rule from a declaration
 * @param { object } declaration 
 */
function assignProperty(declaration) {
	return {
		[camelCase(declaration.property)]: declaration.value,
	};
}

/**
 * This function creates an object of rules for pseudo selectors
 * @param { array } rules 
 * @param { string } root 
 */
function pseudoSelectorRules(rules, root) {
	let styles = {};

	rules.declarations.forEach(declaration => {
		Object.assign(styles, prefixAll(assignPropertyToPseudoSelector(rules.selectors[0], declaration, root)));
	});

	return styles;
}

/**
 * This function creates a style rule for a declaration
 * @param { string } selector 
 * @param { array } declaration 
 * @param { string } root 
 */
function assignPropertyToPseudoSelector(selector, declaration, root) {
	return {
		[selector.replace(root, '')]: assignProperty(declaration),
	};
}

/**
 * This function returns an array of all the style rules
 * @param { array } rules
 * @param { string } root
 */
function getRules(rules, root) {
	let arr = [];

	rules.forEach(rule => {
		if (!types.includes(rule.type)) {
			arr.push(
				rule.selectors[0] === root ? 
				rootSelectorRules(rule) : pseudoSelectorRules(rule, root)
			);
		}
	});

	return arr;
}

module.exports = getRules;
