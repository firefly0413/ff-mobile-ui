import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';




class Button extends React.Component {
  static displayName = 'Button'

  constructor(props) {

    super(props);
  }

  handleClick = (e) => {

    const onClick = this.props.onClick;
    if (onClick) {
      onClick(e);
    }
  }

  render() {
    const {
      type, size, icon, className, htmlType, action, children, loading, ...restProps
    } = this.props;

    let sizeCls = '';
    switch (size) {
      case 'fullwidth':
        sizeCls = 'fullwidth';
        break;
      case 'small':
        sizeCls = 'small';
      default:
        break;
    }

    const ComponentProp = restProps.href ? 'a' : 'button';

    const buttonCls = classNames(className, 'button', {
      [`is-${sizeCls}`]: sizeCls,
      [`is-${action}`]: action,
      [`is-${type}`]: type,
      [`is-loading`]: loading
    })

    const iconType = icon;
    const iconNode = iconType ? <Icon category='gammalab' type={iconType} /> : null;
    return (
      <ComponentProp
        type={restProps.href ? undefined : (htmlType || 'button')}
        className={buttonCls}
        onClick={this.handleClick}
        {...restProps}
      >
      {iconNode}{children}
      </ComponentProp>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  action: PropTypes.oneOf(['hovered', 'active', 'focused']),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  className: PropTypes.string
}

export default Button
