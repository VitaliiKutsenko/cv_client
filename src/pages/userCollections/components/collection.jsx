import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { RemoveButton } from './removeButton';
import Like from '../../../../public/svg_emotion/Like.svg';
import DisLike from '../../../../public/svg_emotion/DisLike.svg';
import Comment from '../../../../public/svg_emotion/Comment.svg';
import Trash from '../../../../public/svg_actions/Trash.svg';

import { useDispatch } from 'react-redux';
import { removeCollection } from '../../../store/cv/userCollections/collectionsActions';

export const Collection = ({ item }) => {
  const dispatch = useDispatch();
  const { user } = useParams();

  const removeButtonHandler = e => {
    const id = e.currentTarget.dataset.id;

    dispatch(removeCollection(id));
  };

  return (
    <li>
      <div className="collection_main">
        <NavLink to={`/${user}/${item.name}`}>{item.name}</NavLink>
        <RemoveButton data-id={item._id} onClick={e => removeButtonHandler(e)}>
          <Trash />
        </RemoveButton>
      </div>
      <div className="collection_footer">
        <div>
          <Like />
          <DisLike />
        </div>
        <Comment />
      </div>
    </li>
  );
};
