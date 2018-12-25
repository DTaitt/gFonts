import moxios from 'moxios';
import { initializeFontData } from './actions'
import { mockStore } from '.setupTests';

describe('fonts actions', () => {
    
    beforeEach(() => moxios.install());
    
    afterEach(() => moxios.uninstall());
    
    it('should work', () => {
        const store = mockStore({ fonts: [] })
        store.dispatch(initializeFontData())
        const expectedActions = [
            { type: 'LOADING_FONT_DATA' },
            {
                type: 'INITIALIZE_FONT_DATA',
                payload: ['data', 'more', 'another'],
            },
        ];
        
        let storeActions
        // expect(2 + 3).toBe(3)
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: ['data', 'more', 'another'],
            }).then(() => {
                console.log('stop')
                storeActions = store.getActions()
                console.log(store.getActions())
                // expect(store.getActions()).toEqual(expectedActions)
            })
        });
        console.log(store.getActions())
        console.log(expectedActions)
        
        //   const expectedActions = [
        //     {type: 'LOADING_FONT_DATA'},
        //     {
        //         type: 'INITIALIZE_FONT_DATA',
        //         payload: ['data', 'more', 'another'],
        //     },
        //   ];
      
        //   const store = mockStore({ fonts: [] })
      
        //   return store.dispatch(initializeFontData()).then(() => {
        //     // return of async actions
        //     expect(store.getActions()).toEqual(expectedActions);
        //   });
    })
})