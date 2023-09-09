import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Rect,
} from 'react-native-svg';

interface WhatsAppBusinessIconSvgProps {
  size?: number;
}
const WhatsAppBusinessIconSvg: React.FC<WhatsAppBusinessIconSvgProps> = ({
  size,
  ...rest
}) => {
  return (
    <Svg
      id="Layer_1"
      width={size}
      height={size}
      data-name="Layer 1"
      viewBox="0 0 390 390"
      {...rest}>
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
            rx={45}
            width={390}
            height={390}
            fill="url(#a)"
            data-original="url(#a)"
          />
          <G fill="#fff">
            <Path
              fill="#fff"
              data-original="#ffffff"
              d="M244 198.16c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.12c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.04-3.83-17.76-9.67-23.15zm-55.13-33.46h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zM210.32 77.52h-3.76a118.86 118.86 0 00-101.42 180.2l-20.61 63.42 64.87-20.84a118.27 118.27 0 0057.16 14.82h.35c1.14 0 2.28 0 3.41-.05a118.82 118.82 0 000-237.55zm0 218.22c-1.25.06-2.5.08-3.76.08a98.73 98.73 0 01-54.76-16.48l-37.38 12.14 12.22-36.09a99.2 99.2 0 0179.92-158c1.26 0 2.51 0 3.76.08a99.19 99.19 0 010 198.24zM244 198.16c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.12c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.04-3.83-17.76-9.67-23.15zm-55.13-33.46h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54z"
            />
          </G>
        </G>
      </G>

      {/* <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={2335.52}
          y1={6714.92}
          x2={2335.52}
          y2={-6385.98}
          gradientTransform="matrix(.19 0 0 -.19 804.32 1281.38)"
          gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#35db23" />
          <Stop offset={1} stopColor="#27a11a" />
        </LinearGradient>
      </Defs>
      <Path
        d="M2499.8 1865.58c0 13.69-.42 43.37-1.24 66.3-2 56.11-6.46 128.51-13.19 161.5-10.11 49.57-25.37 96.36-45.26 135.31A481.8 481.8 0 012228 2440.54c-39.15 19.95-86.23 35.22-136.09 45.29-32.66 6.59-104.51 11-160.26 12.94-23 .82-52.65 1.23-66.28 1.23l-1231-.2c-13.69 0-43.37-.42-66.3-1.24-56.11-2-128.51-6.46-161.5-13.18-49.57-10.12-96.37-25.37-135.31-45.27A481.67 481.67 0 0159.46 2228c-20-39.15-35.23-86.23-45.29-136.08-6.59-32.66-11-104.52-12.94-160.27C.41 1908.72 0 1879 0 1865.39l.2-1231c0-13.69.42-43.37 1.24-66.3 2-56.11 6.46-128.51 13.18-161.5C24.73 357.05 40 310.26 59.89 271.31A481.8 481.8 0 01272 59.45c39.16-20 86.24-35.22 136.1-45.28 32.65-6.6 104.51-11 160.26-12.94C591.28.41 621 0 634.61 0l1231 .2c13.69 0 43.37.42 66.3 1.24 56.11 2 128.51 6.46 161.5 13.18C2143 24.73 2189.74 40 2228.69 59.89A481.67 481.67 0 012440.54 272c20 39.15 35.22 86.23 45.29 136.08 6.59 32.66 11 104.52 12.94 160.27.82 22.95 1.23 52.65 1.23 66.28z"
        fill="url(#linear-gradient)"
        fillRule="evenodd"
      />
      <Path
        fill={'#FFF'}
        d="M1912.32 591.45c-169.25-169.4-394.32-262.73-634.15-262.83-494.13 0-896.28 402-896.48 896.14a894.32 894.32 0 00119.66 448l-127.18 464.4 475.24-124.62a896.07 896.07 0 00428.4 109.08h.37c494.07 0 896.27-402.05 896.47-896.18.09-239.46-93.07-464.63-262.33-634zM1278.18 1970.3h-.31a744.11 744.11 0 01-379.24-103.83l-27.21-16.14-282 74 75.27-274.87-17.69-28.23a742.88 742.88 0 01-114-396.42C533.2 814.12 867.46 480 1278.47 480c199 .08 386.1 77.66 526.78 218.46s218.11 327.94 218 527c-.16 410.73-334.41 744.89-745.1 744.89z"
      />
      <Path
        fill={'#FFF'}
        d="M977.6 1658.86c6.31 3.8 19.27 3.8 49 3.77 126.15-.11 235.11-.49 312.62-.49 361.71 0 352.2-380.79 183.08-428.3 24.77-43.88 137.63-126.32 67.83-296.72-69-168.49-365.85-130.25-568.86-130.15-75.12 0-63.88 55.51-63.5 141.81.62 136.69.11 506.67 0 666.61 0 32.42 9.79 37.4 19.83 43.47zm156.51-139.55c34.15 0 114.71 0 183.77-.11 78.2-.12 147.83-36.7 146.09-114.55-1.27-73.33-50.06-97.4-117.78-104.12-64.5.62-138.27.62-212.08.62v218.16zm0-365.44c136.05-1.87 188.54 5.48 262.82-13.12 51-29 73.34-136.42.29-172.92-50.75-25.35-200.71-16.68-263.11-14.08v200.12z"
      />

      <Path
        fill="#fff"
        data-original="#ffffff"
        d="M244 198.16c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.12c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.04-3.83-17.76-9.67-23.15zm-55.13-33.46h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zM210.32 77.52h-3.76a118.86 118.86 0 00-101.42 180.2l-20.61 63.42 64.87-20.84a118.27 118.27 0 0057.16 14.82h.35c1.14 0 2.28 0 3.41-.05a118.82 118.82 0 000-237.55zm0 218.22c-1.25.06-2.5.08-3.76.08a98.73 98.73 0 01-54.76-16.48l-37.38 12.14 12.22-36.09a99.2 99.2 0 0179.92-158c1.26 0 2.51 0 3.76.08a99.19 99.19 0 010 198.24zM244 198.16c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.12c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.04-3.83-17.76-9.67-23.15zm-55.13-33.46h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54zm12.53-26c5-5.92 6.75-10.81 6.75-22 0-16.48-11.72-32.77-29.69-32.77h-46.14c-5.85 0-7.6 3.37-7.6 7.68v95.08c0 6.24 3.29 8.92 9 8.92h46.4c14.84 0 30.93-13.2 30.93-33.76-.02-11.08-3.83-17.8-9.67-23.19zm-55.15-33.5h30.82a9.57 9.57 0 019.54 9.53v4.52a9.56 9.56 0 01-9.54 9.52h-30.82zm42.62 59.5a9.55 9.55 0 01-9.52 9.53h-33.1v-23.58H222a9.56 9.56 0 019.52 9.54z"
      /> */}
    </Svg>
  );
};

export default WhatsAppBusinessIconSvg;
