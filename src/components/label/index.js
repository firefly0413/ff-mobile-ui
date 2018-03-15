import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Label extends React.Component {
  static displayName = 'Label';

  constructor(props){
    super(props)
  }

  isPresetColor(color){
    if (!color) { return false };
    return (
      /^(white|black|light|darker|primary|info|link|warning|danger|success)$/
      .test(color)
    );
  }

  render(){
    const {
      size, color, className, children, ...restProps
    } = this.props;

    const isPresetColor = this.isPresetColor(color);
    const LabelCls = classNames('label', className, {
      [`is-${color}`]: isPresetColor,
      [`is-${size}`]: size
    })

    return (
      <span
        className={LabelCls}
        {...restProps}
      >
      {children}
      </span>
    )
  }
}

Label.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
}

export default Label
