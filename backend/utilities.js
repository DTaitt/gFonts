const _pipe = require('lodash.flow')

const separateByPlus = (text) => text.split(' ').join('+')
const prefixWithUrlRoute = (family) => `https://fonts.google.com/specimen/${family}`

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

const variantNumericsToKeywords = (variant) => variantMap.get(variant)

const renameFontVariants = (font) => ({
    ...font,
    variants: font.variants.map(variantNumericsToKeywords) 
})

const addUrl = (font) => ({
    ...font,
    url: _pipe(separateByPlus, prefixWithUrlRoute)(font.family)
})

const removeExcessFontProperties = (font) => {
    const { kind, subsets, version, lastModified, files, ...coreFont } = font;
    return coreFont
}

const parseFontsFromResponse = (fontsResponse) => JSON.parse(fontsResponse).items

const updateFonts = (fontsResponse) => {
    const fonts = parseFontsFromResponse(fontsResponse)
    return fonts.map(font => _pipe(removeExcessFontProperties, addUrl, renameFontVariants)(font))
}

module.exports = {
    updateFonts
}