import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class Icon extends React.Component {
  static displayName = 'Icon'

  static propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    category: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
  }

  render () {
    const { className, size, category, type, color, ...restProps } = this.props
    const containerCls = classnames(className, 'icon', size ? `is-${size}` : null, color ? `is-${color}` : null)
    const iconCls = classnames(category, `icon-${type}`)

    return (
      <span className={containerCls} {...restProps}>
        <i className={iconCls}></i>
      </span>
    )
  }
}

export default Icon
