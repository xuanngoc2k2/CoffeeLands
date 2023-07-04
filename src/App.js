import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route
              path={route.path}
              key={index}
              element={<Page />} />
          })}
        </Routes>
      </div>
    </Router >
  );
}

export default App;
