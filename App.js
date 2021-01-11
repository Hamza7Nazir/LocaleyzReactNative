import React, {useState} from 'react';
import MediaProvider from './App/Context/MediaProvider';
import Nav from './App/navigation';

export default function App() {
  return (
    <MediaProvider>
      <Nav />
    </MediaProvider>
  );
}
