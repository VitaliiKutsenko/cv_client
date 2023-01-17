import AboutMySelfSvg from '../../../../public/svg_menu/About_my_self.svg';
import ContactInfo from '../../../../public/svg_menu/Contact_info.svg';
import Photo from '../../../../public/svg_menu/Photo.svg';
import React from 'react';

export const menuSchema = {
  profile: [
    {
      path: 'about_my_self',
      svg: <AboutMySelfSvg />,
    },
    {
      path: 'photo',
      svg: <Photo />,
    },
    {
      path: 'contact_info',
      svg: <ContactInfo />,
    },
  ],
};
