import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.PureComponent {
  render() {
    return (
      <button
        type="button"
        id={this.props.id}
        key={this.props.key}
        value={this.props.value}
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  key: PropTypes.number.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};
