import React from 'react';
import { HeaderWrapper } from './headerStyle';

import { PersonalArea } from '../../personalArea/personalArea';
import { CustomLink } from '../../customLinks/customLink';

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="header_toolbar">
        <CustomLink to="/">
          <span>CV</span>
        </CustomLink>
        <PersonalArea />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
