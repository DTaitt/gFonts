// @flow
export const separateByPlus = (text) => text.split(' ').join('+')

const variantNumerics = [
	'100',
	'100italic',
	'200',
	'200italic',
	'300',
	'300italic',
	'regular',
	'italic',
	'500',
	'500italic',
	'600',
	'600italic',
	'700',
	'700italic',
	'800',
	'800italic',
	'900',
	'900italic'
]

const variantKeywords = [
	'Thin',
	'Thin Italic',
	'Extra-Light',
	'Extra-Light Italic',
	'Light',
	'Light Italic',
	'Regular',
	'Italic',
	'Medium',
	'Medium Italic',
	'Semi-Bold',
	'Semi-Bold Italic',
	'Bold',
	'Bold Italic',
	'Extra-Bold',
	'Extra-Bold Italic',
	'Black',
	'Black Italic',
];

const createMapByArrays = (arrayA, arrayB) => {
	const map = new Map();
	arrayA.forEach((el, i) => {
		map.set(arrayA[i], arrayB[i])
	})
	return map;
} 
const variantMap = createMapByArrays(variantNumerics, variantKeywords)

export const renameFontVariants = (fonts) => {
	const variantNumericsToKeywords = (variant) => variantMap.get(variant)
	return(
		fonts.map((font) => ({ 
			...font, 
			variants: font.variants.map(variantNumericsToKeywords) 
		}))
	)
}

export const prefixWithUrlRoute = (family) => `https://fonts.google.com/specimen/${family}`

export const URLPATH = {
	FONTS: '/api/fonts',
	FAVORITES: '/api/favorites/',
};

export const createHtmlLink = (family) => `<link href="https://fonts.googleapis.com/css?family=${family}" rel="stylesheet">`

export const createCssStyle = (family, category) => `font-family: '${family}', ${category};`

// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
export const copyToClipboard = str => {
	const el = document.createElement('textarea');  // Create a <textarea> element
	el.value = str;                                 // Set its value to the string that you want copied
	el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
	el.style.position = 'absolute';                 
	el.style.left = '-9999px';                      // Move outside the screen to make it invisible
	document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
	const selected =            
	  document.getSelection().rangeCount > 0        // Check if there is any content selected previously
		? document.getSelection().getRangeAt(0)     // Store selection if found
		: false;                                    // Mark as false to know no selection existed before
	el.select();                                    // Select the <textarea> content
	document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
	document.body.removeChild(el);                  // Remove the <textarea> element
	if (selected) {                                 // If a selection existed before copying
	  document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
	  document.getSelection().addRange(selected);   // Restore the original selection
	}
	//-------------------------------------------

	window.Materialize.toast('Added to clipboard!', 1500) 
  };