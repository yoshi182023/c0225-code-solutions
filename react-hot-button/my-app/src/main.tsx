import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import APP from './APP.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APP />
  </StrictMode>
);
