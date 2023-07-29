// import './bootstrap';
import {React,StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../js/router';
import '../css/index.css'
if (document.getElementById('app')) {
    const rootElement = document.getElementById('app');
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      );

    // ReactDOM.render(<App/>, document.getElementById('app'))
}
