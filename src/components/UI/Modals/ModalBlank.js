import React from 'react';
import { CSSTransition } from 'react-transition-group';

import './ModalBlank.css';

const ModalBlank = props => {
  const { children, isModalActive, onCloseClick } = props;

  return (
    <CSSTransition
      in={isModalActive}
      timeout={300}
      classNames="slide-up"
      unmountOnExit
      mountOnEnter
    >
      <div className="is-overlay blank-modal__overlay">
        <div className="blank-modal">
          <div className="blank_modal__content">{children}</div>
          <button
            className="delete is-large product-preview-modal__close"
            aria-label="close"
            onClick={onCloseClick}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

export default ModalBlank;
