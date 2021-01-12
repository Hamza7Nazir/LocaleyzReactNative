import React from 'react';
import MediaProvider from './App/Context/MediaProvider';
import AppNavigator from './App/navigation';

export default function App() {
  return (
    <MediaProvider>
      <AppNavigator />
    </MediaProvider>
  );
}
