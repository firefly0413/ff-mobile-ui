import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Mask from '../Mask';

const Events = {
  on:(el,type,callback) => {
    if(el.addEventListener){
      el.addEventListener(type,callback)
    }else{
      el.attachEvent('on'+type,function(){
        callback.call(el)
      });
    }
  },
  off:(el,type,callback) => {
    if(el.removeEventListener){
      el.removeEventListener(type,callback)
    }else{
      el.detachEvent('off'+type,callback)
    }
  }
}

class Popup extends PureComponent {

    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            isShow: this.props.visible || false,
            isMaskShow: this.props.visible || false,
            animationState: 'enter',
            isPending: false,
        };
    }

    componentDidMount() {
        Events.on(this.popup, 'webkitTransitionEnd', this.animationEnd);
        Events.on(this.popup, 'transitionend', this.animationEnd);
    }

    componentWillReceiveProps(nextProps) {
        clearTimeout(this.timer);

        if (nextProps.visible) {
            this.enter(nextProps);
        } else {
            this.leave();
        }
    }

    componentWillUnmount() {
        Events.off(this.popup, 'webkitTransitionEnd', this.animationEnd);
        Events.off(this.popup, 'transitionend', this.animationEnd);
    }

    enter = ({ duration, autoClose, onMaskClick }) => {
        this.setState({
            isShow: true,
            isMaskShow: true,
            isPending: true,
            animationState: 'enter',
        });

        if (duration === 0) {
            return;
        }

        if (autoClose) {
            this.timer = setTimeout(() => {
                onMaskClick();
                clearTimeout(this.timer);
            }, duration);
        }
    }

    leave = () => {
        this.setState({
            isShow: false,
            isPending: true,
            animationState: 'leave',
        });
    }

    animationEnd = () => {
        const { onClose } = this.props;
        const { animationState } = this.state;

        if (animationState === 'leave') {
            this.setState({
                isMaskShow: false,
            });
            typeof onClose === 'function' && onClose();
        }
    }

    render() {
        const { prefixCls, children, onMaskClick, animationDuration, direction, className } = this.props;
        const { isShow, isPending, animationState, isMaskShow } = this.state;
        const cls = {
            popup: classnames(`${prefixCls}`, className, {
                [`${prefixCls}-hidden`]: !isShow,
            }),
            wrap: classnames(`${prefixCls}-wrapper`, `${prefixCls}-wrapper-${direction}`),
        };

        const style = {
            wrap: {
                WebkitTransitionDuration: `${animationDuration}ms`,
                transitionDuration: `${animationDuration}ms`,
            }
        };
        return (
            <div className={cls.popup} ref={(popup) => { this.popup = popup; }}>
                <div className={cls.wrap} style={style.wrap}>
                    {children}
                </div>
                {this.props.mask && <Mask visible={isMaskShow} onClose={onMaskClick} />}
            </div>
        );
    }
}

Popup.propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    visible: PropTypes.bool,
    mask: PropTypes.bool,
    direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    duration: PropTypes.number, // eslint-disable-line
    autoClose: PropTypes.bool,  // eslint-disable-line
    onClose: PropTypes.func,
    maskType: Mask.propTypes.type,
    animationDuration: PropTypes.number,
    onMaskClick: Mask.propTypes.onClose,
};

Popup.defaultProps = {
    prefixCls: 'pa-popup',
    visible: false,
    mask: true,
    direction: 'bottom',
    duration: 3000,
    autoClose: false,
    animationDuration: 200,
    maskType: Mask.defaultProps.type,
    onMaskClick: Mask.defaultProps.onClose,
};

export default Popup;
