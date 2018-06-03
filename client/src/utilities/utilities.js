//@flow
export function formatFontNameForHref(font:Object) {
    return font.family.slice().split(' ').join('+');
}

export function addFontNameHrefFormat(fontData: Object[]) {
    return fontData.map(font => {
        return {...font, hrefFamily: formatFontNameForHref(font)}
    })
}

export function formatSingleVariant(variant:string) {
  switch(variant) {
    case '100':
      return 'Thin'
    case '100italic':
      return 'Thin Italic'
    case '200':
      return 'Extra-Light'
    case '200italic':
      return 'Extra-Light Italic'
    case '300':
      return 'Light'
    case '300italic':
      return 'Light Italic'
    case 'regular':
      return 'Regular'
    case 'italic':
      return 'Italic'
    case '500':
      return 'Medium'
    case '500italic':
      return 'Medium Italic'
    case '600':
      return 'Semi-Bold'
    case '600italic':
      return 'Semi-Bold Italic'
    case '700':
      return 'Bold'
    case '700italic':
      return 'Bold Italic'
    case '800':
      return 'Extra Bold'
    case '800italic':
      return 'Extra Bold Italic'
    case '900':
      return 'Black'
    case '900italic':
      return 'Black Italic'
    default:
      return variant;
  }
}

export function formatVariants(variants:string[]) {
  return variants.map(variant => {
    return formatSingleVariant(variant)
  })
}

export function renameFontVariants(fontData:Object[]) {
    return fontData.map(font => {
        return {...font, variants: formatVariants(font.variants)}
    })
}

export function formatFontData(fontData:Object[]) {
    return renameFontVariants(addFontNameHrefFormat(fontData))
}