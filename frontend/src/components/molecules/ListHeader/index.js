import React from 'react';
import './style.css';

export const ListHeader = ({ title, children = null }) => (
  <div className="list-header-container">
    <div className="list-header fr-my-3w fr-mx-auto">
      <span className="fr-m-0 fr-text--lead">{title}</span>
      {children}
    </div>
  </div>
);

export default ListHeader;
