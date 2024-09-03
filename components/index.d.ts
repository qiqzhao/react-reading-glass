declare module 'react-reading-glass' {
  import * as React from 'react';

  interface IProps {
    Img: string; 
    className?: string; 
  }

  export const ReadingGlass: React.FC<IProps>;
}