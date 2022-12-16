import React from 'react';
import { HeaderWrapper } from './headerStyle';

import { PersonalArea } from '../../../components/personalArea/personalArea';
import { CustomLink } from '../../../components/customLinks/customLink';

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
