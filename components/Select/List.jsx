import React,{Component} from 'react'
import SearchInput from './SearchInput'
import classnames from 'classnames'

class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeIndex: props.activeIndex || '',
            data: props.data
        }
    }
    render(){
        const {activeIndex,data} = this.state;
        const cls = classnames({
            'list-ui':true,
            'active':this.props.visible
        })
        return(
            <div className={cls}>
                {this.props.search && <SearchInput onChange={(value)=>{this.doSearch(value)}}/>}
                <div className="listWrap-ui">
                    <ul>
                        {
                            data && data.map((item,index)=>{
                                return(
                                    <li className={activeIndex===index?'listItem-ui active':'listItem-ui'}
                                        key={index} onClick={()=>{this.doSelect(index)}}>{item.text}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    doSelect(index){
        let {data} = this.state;
        this.setState({
            activeIndex:index
        },()=>{
            this.props.onChange(index,data)
        })
    }
    doSearch(value){
        const {data} = this.props;
        if(!data) return;
        let arr = [];
        for(let i=0;i<data.length;i++){
            if(~data[i].ping.indexOf(value)||~data[i].text.indexOf(value)){
                arr.push(data[i]);
            }
        }
        this.setState({
            data:arr,
            activeIndex:''
        })
    }
}

export default List;