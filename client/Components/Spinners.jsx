import React from 'react';
import { css } from 'react-emotion';
import { ClimbingBoxLoader } from 'react-spinners';


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class SpinnersComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <div className='sweet-loading'>
                <ClimbingBoxLoader
                    className={override}
                    sizeUnit={"px"}
                    size={15}
                    color={'#F5A623'}
                    loading={this.state.loading}
                />
            </div>
        )
    }
}

export default SpinnersComponent