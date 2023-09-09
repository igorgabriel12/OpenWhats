import * as React from 'react';
import Svg, { LinearGradient, Stop, G, Rect, Path } from 'react-native-svg';

interface WhatsAppIconSvgProps {
  size: number;
}
const WhatsAppIconSvg: React.FC<WhatsAppIconSvgProps> = ({ size, ...rest }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 176 176" {...rest}>
      <LinearGradient
        id="a"
        x1={88}
        x2={88}
        y1={0.72}
        y2={167.48}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0} stopColor="#35db23" />
        <Stop offset={1} stopColor="#27a11a" />
      </LinearGradient>
      <G data-name="Layer 2">
        <G data-name="08.whatsapp">
          <Rect
            rx={20}
            width={176}
            height={176}
            fill="url(#a)"
            data-original="url(#a)"
          />
          <G fill="#fff">
            <Path
              d="M126.8 49.2a54.57 54.57 0 00-87.42 63.13l-5.79 28.11a2.08 2.08 0 00.33 1.63 2.11 2.11 0 002.24.87l27.55-6.53A54.56 54.56 0 00126.8 49.2zm-8.59 68.56a42.74 42.74 0 01-49.22 8l-3.84-1.9-16.89 4 .05-.21 3.5-17-1.88-3.71a42.72 42.72 0 017.86-49.59 42.73 42.73 0 0160.42 0 2.28 2.28 0 00.22.22 42.72 42.72 0 01-.22 60.19z"
              data-original="#ffffff"
            />
            <Path
              d="M116.71 105.29c-2.07 3.26-5.34 7.25-9.45 8.24-7.2 1.74-18.25.06-32-12.76l-.17-.15C63 89.41 59.86 80.08 60.62 72.68c.42-4.2 3.92-8 6.87-10.48a3.93 3.93 0 016.15 1.41l4.45 10a3.91 3.91 0 01-.49 4l-2.25 2.92a3.87 3.87 0 00-.35 4.32c1.26 2.21 4.28 5.46 7.63 8.47 3.76 3.4 7.93 6.51 10.57 7.57a3.82 3.82 0 004.19-.88l2.61-2.63a4 4 0 013.9-1l10.57 3a4 4 0 012.24 5.91z"
              data-original="#ffffff"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default WhatsAppIconSvg;
