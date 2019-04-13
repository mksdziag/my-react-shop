import React from "react";

const Alert = ({ type = "is-danger", message, onCloseHandler }) => {
  return (
    <div class={`notification has-text-centered ${type}`}>
      <button class="delete" onClick={() => onCloseHandler()} />
      {message}
    </div>
  );
};

export default Alert;
