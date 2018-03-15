import React,{Component} from 'react'
import {Icon, Button, Tag, Label, Title} from '../../src'
import '../styles/pages/bussessTest.scss'
import FundProfile from '../components/fundProfile'
import FundPanel from '../components/fundPanel'
import ChangeBankCard from '../components/ChangeBankCard'

const fundInfo = [
  {
    title:'起购金额',
    value:'1000'
  },
  {
    title:'次笔起购金额',
    value:'1'
  },
  {
    title:'风险等级',
    value:'低'
  }
]

const list = [
  {
    title:'买入规则',
    value:'首笔投资T+1日确认后，次笔1元起购，T+1日开始产生收益，哈哈哈'
  },
  {
    title:'卖出规则',
    value:'随时可赎回，T+1日到账'
  }
]

const list2 = [
  {
    title:'产品名称',
    value:'首笔投资T+1日确认后，次笔1元起购，T+1日开始产生收益，哈哈哈'
  },
  {
    title:'卖出规则',
    value:'随时可赎回，T+1日到账'
  },
  {
    title:'卖出规则',
    value:'随时可赎回，T+1日到账'
  }
]

class Bussess extends Component{
  constructor(props){
    super(props);
    this.state = {
      cardsDetail:{
        bindcardList:[
          {
            bankName:'阿拉蕾',
            isAvailable:'N',
            payAcct:'123910932819823',
            acctType:'1'
          },
          {
            bankName:'快手',
            isAvailable:'Y',
            payAcct:'623489128731234',
            singleDayLimit:'100000',
            singleTransLimit:'120000',
            acctType:'2'
          },
          {
            bankName:'抖音',
            isAvailable:'Y',
            payAcct:'907828378172312',
            acctType:'1'
          }
        ]
      },
    }
  }
  handleClick(){
    this.setState({
      showCardList:true
    })
  }

  render(){
    const {cardsDetail} = this.state;
    return(
      <div className="bussessTest" style={{fontSmoothing:'antialiased'}}>
        <FundProfile title="产品收益率描述" value={1.22} tags = {['灵活赎回','风险低更安全']} fundInfo={fundInfo}/>
        <div className="norm_block"></div>
        <ChangeBankCard data = {cardsDetail} />
        <div className="norm_block"></div>
        <FundPanel title="交易规则" link="1" list={list}/>
        <div className="norm_block"></div>
        <FundPanel title="产品简介" link="0" list={list2} onClick={()=>{this.handleClick()}}/>
      </div>
    )
  }
}

export default Bussess;