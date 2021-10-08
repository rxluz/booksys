import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import I18n from 'redux-i18n'
import detectBrowserLanguage from 'detect-browser-language'
import { PersistGate } from 'redux-persist/integration/react'

import { translations } from 'common/locales/translations'
import configureStore from 'reducers/configureStore'
import Main from 'modules/main/Main'

import './index.css'
import * as serviceWorker from './serviceWorker'

const { store, persistor } = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18n translations={translations} initialLang={detectBrowserLanguage()} fallbackLang="en">
          <HashRouter>
            <Main />
          </HashRouter>
        </I18n>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
