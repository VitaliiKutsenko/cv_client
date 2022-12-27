import React, { useCallback, useState } from 'react';
import { CollectionsToolbarWrapper } from '../userCollectionsStyled';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorModal } from '../../../components/modals/errorModals/errorModal';
import { clearCollectionsMessage } from '../../../store/cv/userCollections/collectionsActions';

export const CollectionsToolbar = ({ createCollectionsHandler, setShowInput }) => {
  const [collectionName, setCollectionName] = useState('');
  const collections = useSelector(store => store.collections);
  const collectionsDispatch = useDispatch();

  const inputCollectionHandler = useCallback(
    e => {
      const value = e.target.value;

      if (value) {
        setCollectionName(value);
      }
    },
    [setCollectionName]
  );

  return (
    <CollectionsToolbarWrapper className="close_toolbar">
      {collections?.error?.message && (
        <ErrorModal
          error
          message={collections.error.message}
          clearStore={() => collectionsDispatch(clearCollectionsMessage())}
        />
      )}
      <div className="collection_inputArea">
        <p>Insert your collection name!</p>

        <input
          autoComplete="off"
          type="text"
          autoFocus
          id="collectionInput"
          placeholder="Add collection name"
          onChange={e => inputCollectionHandler(e)}
        />
        <button onClick={() => createCollectionsHandler(collectionName)}>Confirm</button>
      </div>
    </CollectionsToolbarWrapper>
  );
};
