import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({ src, desc, title, alt , releaseDate, voteCount}) => (
  <div className="card">
    <div className="embed-responsive embed-responsive-1by1" >
      <img alt="Card image cap"
           className="card-img-top embed-responsive-item"
           src={src}
           alt={alt}
      />
    </div>
    <div className="card-body" >
      <h5 className="card-title" >{ title }</h5>
      <p className="card-text" >
        { desc }
      </p>
      <p className="small-text float-left">
        Release date: { releaseDate }
      </p>
      <p className="float-right">
        <span className="badge badge-primary">
          { voteCount }
        </span>
      </p>
    </div>
  </div>
);

CardComponent.propTypes = {
  src: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteCount: PropTypes.number.isRequired,
}

export default CardComponent;
