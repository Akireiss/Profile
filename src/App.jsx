import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Profile } from './pages/Profile';
import { createContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const AppContext = createContext(); // You can provide an initial value here if needed

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Router> {/* Wrap the entire app with the Router component */}
      <div className="App">
        <AppContext.Provider value={"Aki "}>
          <QueryClientProvider client={client}>
            <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<h1>Page Not Found</h1>} />
            </Routes>
          </QueryClientProvider>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
