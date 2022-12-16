import { createGlobalStyle } from 'styled-components';
import groteskWOFF2 from '../../../public/fonts/NeueHaasDisplay-Roman.woff2';
import groteskWOFF from '../../../public/fonts/NeueHaasDisplay-Roman.woff';
import groteskTTF from '../../../public/fonts/NeueHaasDisplay-Roman.ttf';
import 'overlayscrollbars/overlayscrollbars.css';

export const GlobalStyleComponent = createGlobalStyle`
  @font-face {
    font-family: 'Grotesk';
    src: url(${groteskWOFF2}) format('woff2'),
    url(${groteskWOFF}) format('woff'),
    url${groteskTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Grotesk', sans-serif;
    & button {
      cursor: pointer;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    &.no-scroll{
      overflow: hidden;
    }
    }


`;
