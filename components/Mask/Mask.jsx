import React,{PureComponent} from 'react'
import classnames from 'classnames'
import {PropTypes } from 'prop-types'

class Mask extends PureComponent{
    render(){
        const {visible,type,onClose,...others} = this.props;
        const cls = classnames({
            'mask-ui':true,
            'transparent':type === 'transparent',
            'light':type === 'light',
            'dark':type === 'dark'
        })
        return(
            visible?
            <div className={cls} onClick={onClose} {...others}></div>:null
        )
    }
}

Mask.propTypes = {
    visible:PropTypes.bool,
    type:PropTypes.oneOf(['transparent','light','dark']),
    onClose:PropTypes.func
}

Mask.defaultProps = {
    visible:false,
    type:'light',
    onClose:()=>{}
}

export default Mask;