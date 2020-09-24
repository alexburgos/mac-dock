import React from 'react';
import Dock from './components/Dock';

import chrome from './logos/chrome.svg';
import docs from './logos/docs.svg';
import excel from './logos/excel.svg';
import gmail from './logos/gmail.svg';
import photoshop from './logos/photoshop.svg';
import powerpoint from './logos/powerpoint.svg';
import safari from './logos/safari.svg';
import slack from './logos/slack.svg';
import spotify from './logos/spotify.svg';
import steam from './logos/steam.svg';
import vlc from './logos/vlc.svg';

import './App.css';

const images = [
  chrome,
  docs,
  excel,
  gmail,
  photoshop,
  powerpoint,
  safari,
  slack,
  spotify,
  steam,
  vlc,
];

export default function App() {
  return (
    <div className="app">
      <Dock images={images} />
    </div>
  );
}