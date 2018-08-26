import React from 'react';
import { Icon } from 'react-icons-kit';
import { circle_left } from 'react-icons-kit/ikons/circle_left';

const PrevArrow = props => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '-2rem',
        transform: 'translateY(-50%)',
        cursor: 'pointer',
        color: 'gray',
      }}
      onClick={props.onClick}
    >
      <Icon icon={circle_left} size={28} />
    </div>
  );
};

export default PrevArrow;
