import memoize from '@tiddo/memoize';
import documentReady from '@tiddo/document-ready';

const getStylesheet = memoize(async () => {
	await documentReady;
	const style = document.createElement('style');
	style.type = 'text/css';
	document.body.appendChild(style);
	return style.sheet;
});

/**
 * Inserts a css rule into the document.
 *
 * @param {String} rule A css rule to insert
 * @return {Promise<void>} Promise that will be resolved when the rule is inserted
 */
export default async function insertCss(rule) {
	const sheet = await getStylesheet();
	sheet.insertRule(rule, sheet.cssRules.length);
}

