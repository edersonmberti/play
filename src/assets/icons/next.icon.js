import React from 'react';
import Svg, { Path, ClipPath, G, Defs, Rect } from 'react-native-svg';

const NextIcon = () => {
  return (
    <Svg width="20" height="15" viewBox="0 0 20 15" fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M11.0875 7.2173L1.17438 0.043289C1.09404 -0.0147654 0.994383 -0.0147654 0.91299 0.043289C0.83265 0.101343 0.782562 0.208953 0.782562 0.325673V14.6737C0.782562 14.7904 0.83265 14.898 0.91299 14.956C0.953173 14.9847 0.998565 14.9997 1.04342 14.9997C1.08881 14.9997 1.13369 14.9854 1.17438 14.956L11.0875 7.78203C11.1679 7.72334 11.2174 7.61573 11.2174 7.49965C11.2174 7.38357 11.1679 7.27532 11.0875 7.2173Z"
          fill="#4E4AEE"
          fill-opacity="0.5"
        />
      </G>
      <G clip-path="url(#clip1)">
        <Path
          d="M19.0875 7.2173L9.17438 0.043289C9.09404 -0.0147654 8.99438 -0.0147654 8.91299 0.043289C8.83265 0.101343 8.78256 0.208953 8.78256 0.325673V14.6737C8.78256 14.7904 8.83265 14.898 8.91299 14.956C8.95317 14.9847 8.99856 14.9997 9.04342 14.9997C9.08881 14.9997 9.13369 14.9854 9.17438 14.956L19.0875 7.78203C19.1679 7.72334 19.2174 7.61573 19.2174 7.49965C19.2174 7.38357 19.1679 7.27532 19.0875 7.2173Z"
          fill="#3F25E5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="12" height="15" fill="white" />
        </ClipPath>
        <ClipPath id="clip1">
          <Rect width="12" height="15" fill="white" transform="translate(8)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { NextIcon };