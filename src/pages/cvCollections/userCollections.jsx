import React, { useEffect, useMemo, useState } from 'react';
import { CollectionsWindow, CvCollectionsWrapper } from './userCollectionsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionsToolbar } from './components/collectionsToolbar';
import { ModalWindow } from '../../components/modals/modalWindow';
import {
  addNewCollection,
  fetchAllCollections,
} from '../../store/cv/userCollections/collectionsActions';
import { Collection } from './components/collection';
import { useParams } from 'react-router-dom';

const UserCollections = ({}) => {
  const collectionDispatch = useDispatch();
  const collections = useSelector(store => store.collections || []);
  const [showInput, setShowInput] = useState(false);
  const params = useParams();

  const createCollectionsHandler = collection => {
    if (collection.length > 0) {
      collectionDispatch(addNewCollection({ name: collection }));
    }
  };

  useEffect(() => {
    // if (!collections.error) {

    collectionDispatch(fetchAllCollections());
    // }
  }, []);

  const renderCollections = useMemo(() => {
    return collections.collections.map(item => {
      return <Collection key={item.name} item={item} />;
    });
  }, [collections]);

  return (
    <CvCollectionsWrapper>
      <div className="collections_menu">
        <div className="collections_title">
          <h2>Collections</h2>
          <button onClick={() => setShowInput(prev => !prev)}>add collections</button>
        </div>
        <ModalWindow open={showInput} onClose={() => setShowInput(false)}>
          <CollectionsToolbar
            createCollectionsHandler={createCollectionsHandler}
            setShowInput={setShowInput}
          />
        </ModalWindow>
        <CollectionsWindow>{renderCollections}</CollectionsWindow>
      </div>
    </CvCollectionsWrapper>
  );
};

export default UserCollections;
