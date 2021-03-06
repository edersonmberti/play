import React from 'react';
import Svg, { Path, G, Defs, Rect, ClipPath } from 'react-native-svg';

const PreviousIcon = () => {
  return (
    <Svg
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none">
      <G clip-path="url(#clip0)">
        <Path
          d="M8.92178 7.79422L18.8256 14.981C18.9059 15.0392 19.0056 15.0393 19.087 14.9814C19.1675 14.9234 19.2177 14.8159 19.2178 14.6992L19.2364 0.351198C19.2365 0.234447 19.1866 0.126773 19.1063 0.0686446C19.0662 0.0398871 19.0208 0.0248481 18.976 0.02479C18.9306 0.0247313 18.8857 0.0390108 18.8449 0.0683065L8.92251 7.22948C8.8421 7.28808 8.79238 7.39562 8.79223 7.5117C8.79208 7.62778 8.84152 7.73609 8.92178 7.79422Z"
          fill="#4E4AEE"
          fill-opacity="0.5"
        />
      </G>
      <G clip-path="url(#clip1)">
        <Path
          d="M0.921781 7.78387L10.8256 14.9707C10.9059 15.0289 11.0056 15.029 11.087 14.971C11.1675 14.9131 11.2177 14.8055 11.2178 14.6888L11.2364 0.340845C11.2365 0.224094 11.1866 0.11642 11.1063 0.0582915C11.0662 0.029534 11.0208 0.014495 10.976 0.0144369C10.9306 0.0143782 10.8857 0.0286577 10.8449 0.0579534L0.922512 7.21913C0.842096 7.27772 0.792382 7.38527 0.792231 7.50135C0.792081 7.61742 0.841516 7.72574 0.921781 7.78387Z"
          fill="#3F25E5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect
            width="12"
            height="15"
            fill="white"
            transform="translate(20 15.0259) rotate(-179.926)"
          />
        </ClipPath>
        <ClipPath id="clip1">
          <Rect
            width="12"
            height="15"
            fill="white"
            transform="translate(12 15.0155) rotate(-179.926)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { PreviousIcon };
