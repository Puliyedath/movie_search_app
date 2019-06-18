import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ src, desc, title, alt }) => (
  <div className="card">
    <div class="embed-responsive embed-responsive-1by1" >
      <img alt="Card image cap"
           class="card-img-top embed-responsive-item"
           src={src}
           alt={alt}
      />
    </div>
    <div className="card-body" >
      <h5 className="card-title" >{ title }</h5>
      <p className="card-text" >
        { desc }
      </p>
      <a href="#"  className="btn btn-primary" >Go somewhere</a>
    </div>
  </div>
);

CardComponent.propTypes = {
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default CardComponent;
