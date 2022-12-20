import React, { useEffect } from 'react';
import { CvMainWrapper, CvWrapper } from './cvStyled';
import { Outlet, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCv } from '../../store/cv/userCv/userCvActions';
import { UserSpace } from './components/userSpace/userSpace';
import { selectUserCv } from '../../selectors/userCvSelectors';
import { CvLeftColumn } from './cvLeftColumn';
import { CvRightColumn } from './cvRightColumn';

const Cv = () => {
  const { username, name } = useParams();
  const userCv = useSelector(store => store.userCv || {});
  const { rightColumn, leftColumn } = useSelector(selectUserCv);

  const fetchAllCvDispatch = useDispatch();

  useEffect(() => {
    if (!!username && !!name) {
      fetchAllCvDispatch(
        fetchUserCv({
          username,
          name,
        })
      );
    }
  }, [userCv.success]);

  if (userCv.success) {
    return (
      <CvWrapper>
        <UserSpace>
          <CvMainWrapper>
            <CvLeftColumn content={leftColumn} />
            <CvRightColumn content={rightColumn} />
          </CvMainWrapper>
        </UserSpace>

        <Outlet />
      </CvWrapper>
    );
  }
};

export default Cv;
