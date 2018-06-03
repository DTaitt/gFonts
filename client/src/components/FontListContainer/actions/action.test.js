import { initializeFontData } from "./actions";

describe('initializeFontData', () => {
    const payload = [
        {a:1},
        {b:2},
        {c:3},
    ]

    const action = {
        type: 'INITIALIZE_FONT_DATA',
        payload,
    }

    it('should return a function that dispatches an action', () => {
        expect(initializeFontData(payload)).toEqual(expect.any(Function))
    })
})