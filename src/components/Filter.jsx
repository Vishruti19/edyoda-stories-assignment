import React from "react";

class Filter extends React.Component {
  render() {
    const { filter, keyid } = this.props;
    return (
      <p className="filter-category" id={`filter${keyid}`}>
        {filter}
      </p>
    );
  }
}

export default Filter;
