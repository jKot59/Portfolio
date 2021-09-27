import React from 'react';
import PauseMessage from './pauseMessage';
import renderer from 'react-test-renderer';

describe('Testing PauseMessage', () => {
    it('Header have render correctly', () => {
        const pauseMessage = renderer.create(<PauseMessage/>).toJSON()
        expect(pauseMessage).toMatchSnapshot();
    })
})