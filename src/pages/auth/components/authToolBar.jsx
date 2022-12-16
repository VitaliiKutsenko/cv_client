import React from 'react';
import { AuthToolBarWrapper } from '../authStyle';
import { NavLink, useLocation } from 'react-router-dom';
import Cross from '../../../../public/svg_actions/Cross.svg';

export const AuthToolBar = ({ children }) => {
  const location = useLocation();

  const renderToolbarContent = path => {
    const [createPath] = path.split('/').slice(-1);

    switch (createPath) {
      case 'auth':
        return (
          <p>
            Join us! <NavLink to="/auth/registration">Sign up</NavLink>
          </p>
        );

      case 'registration':
        return (
          <p>
            Already have an account? <NavLink to="/auth">Sign in</NavLink>
          </p>
        );

      case 'forgot-password':
        return (
          <p>
            <NavLink to="/auth">Back</NavLink>
          </p>
        );

      default:
        return null;
    }
  };

  return (
    <AuthToolBarWrapper>
      <div className="toolbar">
        {renderToolbarContent(location.pathname)}
        <NavLink className="cross" to="/">
          <Cross />
        </NavLink>
      </div>
      <div className="window">{children}</div>
    </AuthToolBarWrapper>
  );
};
