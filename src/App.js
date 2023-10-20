import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
