import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import AppFrame from './../components/AppFrame';
import CustomersActions from '../components/CustomersActions';
import CustomersContainer from './CustomersContainer';

class HomeContainer extends Component {
    handleOnClick = () => {
        // <Link to="/customers">Clientes</Link>
        console.log("handle");
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <AppFrame
                header='Home'
                body={
                    <div>
                        Pantalla Principal
                        <CustomersContainer></CustomersContainer>
                        {/* <CustomersActions>
                            <button onClick={this.handleOnClick}>Listado de Clientes</button>
                        </CustomersActions> */}
                    </div>
                }
                footer=''></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter ( HomeContainer);