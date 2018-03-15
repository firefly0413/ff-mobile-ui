import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Title extends React.Component {
  static displayName = 'Title';

  constructor(props){
    super(props)
  }

  isPresetColor(color){
    if (!color) { return false };
    return (
      /^(white|black)$/
      .test(color)
    );
  }

  isPresetSize(size){
    if (!size) { return false };
    return (
      /^(1|2|3|4|5|6)$/
      .test(size)
    );
  }

  render(){
    const {
      size, color, className, children, ...restProps
    } = this.props;

    const isPresetColor = this.isPresetColor(color);
    const isPresetSize = this.isPresetSize(size);
    const TitleCls = classNames('title', className, {
      [`is-${color}`]: isPresetColor,
      [`is-${size}`]: isPresetSize
    })

    return (
      <h1
        className={TitleCls}
        {...restProps}
      >
      {children}
      </h1>
    )
  }
}

Title.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string
}

export default Title
