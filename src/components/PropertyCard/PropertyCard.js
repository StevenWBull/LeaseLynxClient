import React from 'react';
import PropTypes from 'prop-types';

const PropertyCard = ({ property }) => {
    return (
        <div className="bg-white rounded shadow-md p-4">
            <img
                src={property.image}
                alt={`Property at ${property.address}`}
                className="w-full h-32 object-cover mb-4"
            />
            <div className="mb-2">
                <p className="text-lg font-semibold">{property.address}</p>
            </div>
            <div className="text-sm text-gray-600 mb-2">
                <p>Renter: {property.renterName}</p>
                <p>Termination Date: {property.terminationDate}</p>
            </div>
        </div>
    );
};

PropertyCard.propTypes = {
    property: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        renterName: PropTypes.string.isRequired,
        terminationDate: PropTypes.string.isRequired,
    }).isRequired,
};

export default PropertyCard;
