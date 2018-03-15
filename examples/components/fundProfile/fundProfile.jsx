import React,{Component,PropTypes} from 'react';
import {Tag, Title} from '../../../src/index'
import '../../styles/pages/bussessTest.scss'

class FundProfile extends Component{

  render(){
    const {title,value,tags,fundInfo} = this.props;
    return(
      <div className="detailHeader">
        <div className="headerFirst">
          <Title size="6" color="white">{title}</Title>
          <div className="incomeRate"><span className="is-size-2">{value}</span><span>%</span></div>
          <div className="header_tags">
            {
              tags.length>0 && tags.map((item,index)=>{
                return (
                  <Tag key={index} >{item}</Tag>
                )
              })
            }
          </div>
        </div>
        <div className="fundInfo is-size-7">
          {
            fundInfo.length>0 && fundInfo.map((item,index)=>{
              return (
                <div key={index}>
                  <p>{item.title}</p>
                  <p>{item.value}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

FundProfile.propTypes = {
  title:PropTypes.string,
  value:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  tags:PropTypes.array,
  fundInfo:PropTypes.array
}

FundProfile.defaultProps = {
  title:'',
  value:'',
  tags:[],
  fundInfo:[]
}

export default FundProfile;