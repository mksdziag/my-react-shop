import React from 'react';
import { Icon } from 'react-icons-kit';
import { circle_right } from 'react-icons-kit/ikons/circle_right';

export const NextArrow = props => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '-2rem',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'gray',
      }}
      onClick={props.onClick}
    >
      <Icon icon={circle_right} size={28} />
    </div>
  );
};

export default NextArrow;
