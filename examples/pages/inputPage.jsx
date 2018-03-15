import React, { PureComponent } from 'react';
import Header from '../components/Header'
import PaInput from 'components/PaInput'
import FInput from 'components/FInput'
import Panel from 'components/Panel'
import Cell from 'components/Cell'

import '../styles/pages/inputPage.scss'

class InputPage extends PureComponent {
    constructor(props){
        super(props);

    }
    render() {
        return(
            <div className="checkbox-page">
                <Header>
                    输入框 PaInput Finput
                </Header>
                <main>
                    <Panel>
                        <Panel.Header title="PaInput" />
                        <Panel.Body>
                            <div className="inputCell">
                                <PaInput title="普通" />
                            </div>

                            <div className="inputCell">
                                <PaInput title="有值" value="test" regExp={/^[a-z]$/} />
                            </div>

                            <div className="inputCell">
                                <PaInput title="校验/纯数字" regExp={/^\d+$/} />
                            </div>
                        </Panel.Body>
                    </Panel>

                    <Panel>
                        <Panel.Header title="FInput" />
                        <Panel.Body>
                            <Cell.Group>
                                <Cell title="普通">
                                    <FInput placeholder="type something..." />
                                </Cell>
                                <Cell title="">
                                    <FInput placeholder="无标题" />
                                </Cell>
                            </Cell.Group>
                        </Panel.Body>
                    </Panel>
                </main>
            </div>
        )
    }

}

export default InputPage;