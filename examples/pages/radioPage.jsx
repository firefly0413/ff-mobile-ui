import React, { PureComponent } from 'react';
import Header from '../components/Header'
import Radio from 'components/Radio'
import Panel from 'components/Panel'
import Cell from 'components/Cell'

import '../styles/pages/checkboxPage'

class RadioPage extends PureComponent {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div className="checkbox-page">
                <Header>
                    单选框 Radio
                </Header>
                <main>
                    <Panel>
                        <Panel.Header title="基本" />
                        <Panel.Body>
                            <Cell.Group>
                                <Cell>
                                    <Radio >普通</Radio>
                                </Cell>
                                <Cell>
                                    <Radio checked >默认选中</Radio>
                                </Cell>
                                <Cell>
                                    <Radio disabled >禁用</Radio>
                                </Cell>
                                <Cell>
                                    <Radio checked disabled>选中且禁用</Radio>
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>

                    <Panel>
                        <Panel.Header title="组合" />
                        <Panel.Body>
                            <Cell.Group>
                                <Cell title="正常">
                                    <Radio.Group value="one" onChange={(result)=>{this.showResult(result)}}>
                                        <Radio value="one">选项一</Radio>
                                        <Radio value="two">选项二</Radio>
                                        <Radio value="three">选项三</Radio>
                                    </Radio.Group>
                                </Cell>
                                <Cell title="带禁用">
                                    <Radio.Group onChange={(result)=>{this.showResult(result)}}>
                                        <Radio value="one">选项一</Radio>
                                        <Radio value="two">选项二</Radio>
                                        <Radio disabled value="three">选项三</Radio>
                                    </Radio.Group>
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>

                    <Panel>
                        <Panel.Header title="列表" />
                        <Panel.Body>
                            <Radio.Group type="cell" onChange={(result)=>{this.showResult(result)}}>
                                <Radio value="one">选项一</Radio>
                                <Radio value="two">选项二</Radio>
                                <Radio disabled value="three">选项三(禁用)</Radio>
                            </Radio.Group>
                        </Panel.Body>
                    </Panel>
                </main>
            </div>
        )
    }
    showResult(result){
        console.log(result);
    }
}

export default RadioPage;