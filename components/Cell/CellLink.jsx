import React from 'react'
import classnames from 'classnames'
import {hashHistory} from 'react-router'
import Cell from './Cell'

class CellLink extends Cell{
    constructor(props){
        super(props);
        const {className} = this.props;
        this.cls = classnames({
            'cell-ui':true,
            'cell-link-ui':true,
            [className]:!!className
        })
    }
    handleClick(){
        const {linkUrl,query} = this.props;
        if(!linkUrl) return;
        hashHistory.push({
            pathname:linkUrl,
            query:query
        })
    }
}

CellLink.defaultProps = {
    linkUrl:'',
    query:{}
}

export default CellLink;