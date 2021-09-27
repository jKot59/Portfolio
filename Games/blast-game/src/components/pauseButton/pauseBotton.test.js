import React from 'react';
import PauseButton from './pauseButton';
import renderer from 'react-test-renderer';

// создаем тест сьют
describe('Testing pause button', () => {
    // создаем тест кейс
    it('Pause button have rendered correctly', () => {
        // создаем копию компонента
        const pauseButton = renderer.create(<PauseButton/>).toJSON()
        // создаем снимок компонента
        expect(pauseButton).toMatchSnapshot()
    })
})