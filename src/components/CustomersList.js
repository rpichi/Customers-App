import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers, urlPath}) => {
    return (
        <div>
            <div className="customers-list-item">
            {
                customers.map(c =>
                    <CustomerListItem 
                        key={c.dni}
                        dni={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Borrar'}
                        urlPath={urlPath}>
                    </CustomerListItem>)
            }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers : PropTypes.array.isRequired
};

export default CustomersList;