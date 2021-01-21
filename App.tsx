import React from 'react';
import MediaProvider from './App/Context/MediaProvider';
import AppNavigation from './App/navigation';

export default function App() {
  return (
    <MediaProvider>
      <AppNavigation />
    </MediaProvider>
  );
}
