import React, { useState, useEffect } from 'react';
import { CvItemWrapper } from './cvMenuStyled';
import { SelectMenu } from './components/selectMenu/selectMenu';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Arrow from '../../../public/svg/Arrow.svg';
import { CustomLink } from '../../components/customLinks/customLink';
import { ModalListWindow } from './components/modalListWindow/modalListWindow';
import { ModalToolbar } from '../../style/styled/modalToolbar';

const CvMenu = () => {
  const [modalContent, setModalContent] = useState('');
  const collectionId = useLocation().state;

  const navigateToMain = useNavigate();
  const params = useParams();
  const modalHandler = e => {
    const elem = [...e.target.classList].includes('modal_wrapper');

    if (elem) {
      navigateToMain(`/${params.username}/${params.name}`);
    }
  };

  useEffect(() => {
    const rootElem = document.querySelector('#root');

    rootElem.classList.add('no-scroll');

    return () => rootElem.classList.remove('no-scroll');
  }, []);

  return (
    <CvItemWrapper className="modal_wrapper" onClick={modalHandler}>
      <div className="modal">
        <ModalToolbar>
          <div>{<Arrow />}</div>
          <CustomLink to="/">Home</CustomLink>
        </ModalToolbar>
        <div className="modal_menu">
          <SelectMenu setModalContent={e => setModalContent(e)} />
        </div>
      </div>
      <div className="modal_list__content">
        <div className="outlet_wrapper">
          {!!modalContent && (
            <ModalListWindow
              key={modalContent}
              path={modalContent}
              labelText={modalContent}
              collectionId={collectionId}
            />
          )}
        </div>
      </div>
    </CvItemWrapper>
  );
};

export default CvMenu;
