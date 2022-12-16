import React, { useEffect } from 'react';
import { CvWrapper } from './cvStyled';
import { CvHeader } from './components/cvHeader/cvHeader';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCv } from '../../store/cv/userCv/userCvActions';
import { UserSpace } from './components/userSpace/userSpace';
import UserSpaceContext from '../../context/context';

const Cv = () => {
  const { username, name } = useParams();
  const userCv = useSelector(store => store.userCv || {});
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
          <CvHeader content={userCv} />
          {/*<CvMain content={userCv} />*/}

          <Outlet />
        </UserSpace>
      </CvWrapper>
    );
  }
};

export default Cv;
