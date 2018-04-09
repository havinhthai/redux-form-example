import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
// import App from './App';
import ContactForm from './components/ContactForm';

const App = () => (
    <Provider store={store}>
        <ContactForm />
    </Provider>
)

AppRegistry.registerComponent('reduxFormExemple', () => App);
