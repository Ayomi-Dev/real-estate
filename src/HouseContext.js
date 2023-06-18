import React, { useState, useEffect } from 'react';

import { propertyInfo } from './HouseInfo'

export const HouseContext = React.createContext()

const HouseProvider = ({ children }) => {
    const [properties, setProperties] = useState(propertyInfo)
    
    const [propertyType, setPropertyType] = useState([]);
    const [type, setType] = useState('Type (All)')

    const [propertyLocation, setPropertyLocation] = useState([])
    const [locations, setLocations] = useState('Location (All)');


    const [propertyPrice, setPropertyPrice] = useState("Price Range (All)")
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        // extracting propety types to use in filter menus
        const alltypes = properties.map(property => {
            return property.type
        })
        const uniqueType = ['Type (All)', ...new Set(alltypes)]
        setPropertyType(uniqueType)

        // extracting locations to use in filter menus
        const allLocations = properties.map(property => {
            return property.location
        })
        
        const uniqueLocation = ["Location (All)", ...new Set(allLocations.map(location => {
            return location.split(',')[1]
        }))]   
        setPropertyLocation(uniqueLocation);
    }, [])


    // creating filter/search property function 
    const handleFilter = () => {
        console.log('search')
    }

    return (
        <HouseContext.Provider value={{
        properties,
        setProperties,
        setType,
        type,
        propertyType,
        locations,
        setLocations,
        propertyLocation,
        propertyPrice,
        setPropertyPrice,
        handleFilter
         
        }}>
            { children }
        </HouseContext.Provider>
     );
}
 
export default HouseProvider;