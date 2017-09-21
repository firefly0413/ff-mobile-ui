import React,{Component} from 'react'
import {questions} from '../data/questions';
import '../styles/pages/questions.scss'

import classnames from 'classnames'

class Questions extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0,
            answers:[]
        }
    }
    render(){
        const {index} = this.state;
        return(
            <dic className="question">
                {this.renderQuestion()}
                <div className="nav">
                    {index!==0?<div className='prev' onClick={()=>{this.showPrev()}}>上一题</div>:null}
                    {index!==5?<div className='next' onClick={()=>{this.showNext()}}>下一题</div>:null}
                </div>
            </dic>
        )
    }
    showPrev(){
        let {index,answers} = this.state;
        this.setState({
            index:--index
        })
    }
    showNext(){
        let {index} = this.state;
        this.setState({
            index:++index
        })
    }
    pickAnswer(index,answerIndex){
        let arr = this.state.answers;
        arr[index] = answerIndex;
        this.setState({
            answers:arr
        },()=>{
            console.log(this.state.answers);
        })
    }
    renderQuestion(){
        const {index,answers} = this.state;
        const {id,topic,answer} = questions[index];
        
        return(
            <div className="question_wrap">
                <div className="title">{id}、{topic}</div>
                {
                    answer.length>0 && answer.map((item,answerIndex)=>{
                        const cls = classnames({
                            'answerItem':true,
                            'active':(answers[index]||answers[index]===0)?(answers[index]===answerIndex?'active':''):''
                        })
                        return(
                            <div key={answerIndex} className={cls} onClick={()=>{this.pickAnswer(index,answerIndex)}}>{item.text}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Questions;