import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TagGroup = (props) => {
  const {
    type, className, ...restProps
  } = props;

  let layoutType = '';
  switch (type) {
    case 'center':
      layoutType = 'centered';
      break;
    case 'right':
      layoutType = 'right';
      break;
    default:
      break;
  }

  const TagGroupCls = classNames('tags', className, {
    [`is-${layoutType}`]: layoutType
  })

  return <div {...restProps} className={TagGroupCls} />;
}

TagGroup.propTypes = {
  type: PropTypes.string,
}

export default TagGroup
