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
      break;
    case '100italic':
      return 'Thin Italic'
      break;
    case '200':
      return 'Extra-Light'
      break;
    case '200italic':
      return 'Extra-Light Italic'
      break;
    case '300':
      return 'Light'
      break;
    case '300italic':
      return 'Light Italic'
      break;
    case 'regular':
      return 'Regular'
      break;
    case 'italic':
      return 'Italic'
      break;
    case '500':
      return 'Medium'
      break;
    case '500italic':
      return 'Medium Italic'
      break;
    case '600':
      return 'Semi-Bold'
      break;
    case '600italic':
      return 'Semi-Bold Italic'
      break;
    case '700':
      return 'Bold'
      break;
    case '700italic':
      return 'Bold Italic'
      break;
    case '800':
      return 'Extra Bold'
      break;
    case '800italic':
      return 'Extra Bold Italic'
      break;
    case '900':
      return 'Black'
      break;
    case '900italic':
      return 'Black Italic'
      break;
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