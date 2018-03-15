import React,{Component} from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

class FundPanel extends Component{

  handleClick(){
    const {onClick} = this.props;
    onClick && onClick();
  }
  render(){
    const {title,link,list} = this.props;
    const cls = classnames({
      'cell-ui': true,
      'cell-link-ui': link=='1'?true:false
    })
    return(
      <div className="fundPanel">
        <div className={cls}  onClick={()=>{this.handleClick()}}>
          <div className="cell-main">
            <div className="cell-title is-size-5">{title}</div>
            {link=='1' && <div className="cell-content">
              <span className="is-size-5">查看更多</span>
            </div>}
          </div>
        </div>
        <div className="panelContent is-size-6">
          {
            list.length>0 && list.map((item,index)=>{
              return (
                <div className="panelItem" key={index}>
                  <div className="p_title">{item.title}</div>
                  <div className="p_desc">{item.value}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

FundPanel.propTypes = {
  title:PropTypes.string,
  link:PropTypes.string,
  list:PropTypes.array
}

FundPanel.defaultProps = {
  title:'',
  link:'0',
  list:[]
}

export default FundPanel;