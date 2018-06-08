// @flow
type action = {
    type: string,
    payload: Object[],
}

export function fontDataReducer(fontData: Object[] = [], action: action): Object[] {
	switch (action.type) {
	case 'INITIALIZE_FONT_DATA':
		return [
			...fontData,
			...action.payload,
		];
	default:
		return fontData;
	}
}
