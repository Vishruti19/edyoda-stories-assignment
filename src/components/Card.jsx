import React from "react";

class Card extends React.PureComponent {
  render() {
    const { details } = this.props;
    return (
      <div className="card">
        <div className="image-section">
          <img className="image" src={details.img} />
        </div>
        <div className="text-section">
          <div className="title">
            <h4>{details.title}</h4>
          </div>
          <div className="author-section">
            <span className="author">{details.author}</span>
            <span className="date"> | {details.date}</span>
          </div>
          <div className="details">
            <p>{details.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
