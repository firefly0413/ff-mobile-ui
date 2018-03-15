import React,{ PureComponent } from 'react'
import addIcon from '../../images/addCard.png'
import right_arrow from '../../images/right_arrow.png'
import classnames from 'classnames'
import Popup from 'components/Popup'

const getCardList = (data) => {
    console.log('card',data);
    if(!data || !data.bindcardList || data.bindcardList.length<1)return [{newCard:true}];
    let arr1 = [],arr2=[];
    data.bindcardList.map((item)=>{
        if(item.isAvailable === 'Y'){
            arr1.push(item);
        }else{
            arr2.push(item);
        }
    });
    let cardList = arr1.concat(arr2);
    cardList.push({newCard:true});
    return cardList;
};

class ChangeBankCard extends PureComponent{
    constructor(props){
        super(props);
      this.state = {
        isShow:false,
        chooseCard:this.getDefaultCard(props.data),
        cardsDetail:null,
        showCardList:false
      }
    }
    renderCard(item,index,chooseCard){
      if(!item.payAcct)return;
      const {bankName,isAvailable,payAcct} = item;
      let title = bankName+"("+payAcct.substring(payAcct.length-4)+")";
      const cls = classnames({
          'card-active': this.props.active,
          'card-grey':isAvailable==='N'
      });
      const iconCls = classnames({
          'right_icon':true,
          'checked':(!chooseCard || payAcct !== chooseCard.payAcct)?false:true
      })

      return(
          <div id="card" className={cls} key={index}>
              <div className="card-main" onClick={()=>this.changeCard(item)}>
                  <div className="bank-icon">
                      <img src={this.getImgSrc(item.bankLogoUrl)} alt=""/>
                  </div>
                  <div className="bank-card-info">
                      <div className="bank-card-title is-size-5">{title}</div>
                  </div>
                  <div className={iconCls}>
                      <img src={require('../../images/choose_right.png')} alt=""/>
                  </div>
              </div>
          </div>
      )
    }
    getImgSrc(url) {

        try {
            return require(url);
        } catch (e) {
            return require(`../../images/bank_logo/bank_logo_default@2x.png`);
        }
    }
    handleImgError(){
      this.refs.bankImg.src = require('../../images/bank_logo/bank_logo_default@2x.png');
    }
    //弹出银行卡选择
    showCardList(){
      this.setState({
        showCardList:true
      })
    }
    hideCardList(){
      this.setState({
          showCardList:false
      })
    }
    changeCard(item){
      if(!item.isAvailable === 'N'){
        return;
      }
      this.setState({
        chooseCard:item,
        showCardList:false
      })
    }
    //展示第一张支持的银行卡
    getDefaultCard(data){
      if(!data || !data.bindcardList || data.bindcardList.length<1) return;
      for(let i=0;i<data.bindcardList.length;i++){
        if(data.bindcardList[i].isAvailable === 'Y'){
          return data.bindcardList[i];
        }
      }
    }
    render(){
        const {data} = this.props;
        const {showCardList,chooseCard} = this.state;
        let cardList = getCardList(data);
        console.log(cardList);
        return (
            <div id="change-bank-card">
                <div className="choosedCard" onClick={this.showCardList.bind(this)}>
                    <div className="left">
                        <div className="add_icon">
                            <img src={this.getImgSrc(chooseCard)} alt="" ref="bankImg" onError={this.handleImgError.bind(this)}/>
                        </div>
                        <div className="desc">
                            <p className="is-size-5">{chooseCard?chooseCard.bankName+"("+chooseCard.payAcct.substring(chooseCard.payAcct.length-4)+")":''}</p>
                          {chooseCard?(chooseCard.acctType=='2'?<p className="is-size-7">单笔限额{chooseCard.singleDayLimit/10000}万元，单日限额{chooseCard.singleTransLimit/10000}万元</p>:null):null}
                        </div>
                    </div>
                    <div className="right">
                        <img src={right_arrow} alt=""/>
                    </div>
                </div>
                <Popup visible={showCardList}
                       onRequestClose={e=>this.setState({popupPage_show: false})}>
                    <div className="main">
                        <div className="operate-bar">
                            <div className="cancel-btn is-size-5" onClick={this.hideCardList.bind(this)}>取消</div>
                            <div className="title is-size-4">选择支付方式</div>
                        </div>
                        <div className="bank-card-show">
                            {
                                cardList && cardList.map((item,index) => {
                                    if(item.newCard){
                                        return <div key={index} className="useNewCard" onClick={()=>{
                                            this.toAddBankCard()
                                        }}>
                                            <div className="main">
                                                <div className="left">
                                                    <div className="add_icon">
                                                        <img src={addIcon} alt="" />
                                                    </div>
                                                    <p className="is-size-5">使用新卡支付</p>
                                                </div>
                                                <div className="right">
                                                    <img src={right_arrow} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    }else{
                                        return this.renderCard(item,index,chooseCard)
                                    }
                                })
                            }
                        </div>
                    </div>
                </Popup>
            </div>
        )
    }
    toAddBankCard(){
        alert('正在努力开发中')
    }
}

ChangeBankCard.defaultProps = {
    content: '',
    show: false,
    onClick: ()=> {},
};

export default ChangeBankCard;