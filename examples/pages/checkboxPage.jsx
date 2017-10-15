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
                                    <Checkbox checked={true}>默认选中</Checkbox>
                                </Cell>
                                <Cell>
                                    <Checkbox >普通</Checkbox>
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>
                </main>
            </div>
        )
    }
}

export default CheckboxPage;