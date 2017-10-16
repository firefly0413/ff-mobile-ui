import React, { PureComponent } from 'react';
import Header from '../components/Header'
import Checkbox from 'components/Checkbox'
import Panel from 'components/Panel'
import Cell from 'components/Cell'

import '../styles/pages/checkboxPage'

class CheckboxPage extends PureComponent {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div className="checkbox-page">
                <Header>
                    复选框 Checkbox
                </Header>
                <main>
                    <Panel>
                        <Panel.Header title="基本" />
                        <Panel.Body>
                            <Cell.Group>
                                <Cell>
                                    <Checkbox >普通</Checkbox>
                                </Cell>
                                <Cell>
                                    <Checkbox checked >默认选中</Checkbox>
                                </Cell>
                                <Cell>
                                    <Checkbox disabled >禁用</Checkbox>
                                </Cell>
                                <Cell>
                                    <Checkbox checked disabled>选中且禁用</Checkbox>
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>
                    <Panel>
                        <Panel.Header title="组合" />
                        <Panel.Body>
                            <Cell.Group>
                                <Cell title="正常">
                                    <Checkbox.Group onChange={(result)=>{this.showResult(result)}}>
                                        <Checkbox value="one">选项一</Checkbox>
                                        <Checkbox value="two">选项二</Checkbox>
                                        <Checkbox value="three">选项三</Checkbox>
                                    </Checkbox.Group>
                                </Cell>
                                <Cell title="带禁用">
                                    <Checkbox.Group onChange={(result)=>{this.showResult(result)}}>
                                        <Checkbox value="1">选项一</Checkbox>
                                        <Checkbox value="2">选项二</Checkbox>
                                        <Checkbox disabled value="3">选项三</Checkbox>
                                    </Checkbox.Group>
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>

                    <Panel>
                        <Panel.Header title="列表" />
                        <Panel.Body>
                            <Checkbox.Group type="cell" onChange={(result)=>{this.showResult(result)}}>
                                <Checkbox value="one">选项一</Checkbox>
                                <Checkbox value="two">选项二</Checkbox>
                                <Checkbox value="three">选项三</Checkbox>
                            </Checkbox.Group>
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

export default CheckboxPage;