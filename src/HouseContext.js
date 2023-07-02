import React, { useState, useEffect } from 'react';

import { propertyInfo } from './HouseInfo';

export const HouseContext = React.createContext()
        
const HouseProvider = ({ children }) => {
    const [properties, setProperties] = useState(propertyInfo)
    
    const [propertyType, setPropertyType] = useState([]);
    const [type, setType] = useState('Type (Any)');

    const [propertyLocation, setPropertyLocation] = useState([]);
    const [city, setCity] = useState('Location (Any)');


    const [propertyPrice, setPropertyPrice] = useState("Price Range (Any)")
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {

        // extracting propety types to use in filter menus
        const alltypes = propertyInfo.map(property => {
            return property.type
        })
        const uniqueType = ['Type (Any)', ...new Set(alltypes)]
        setPropertyType(uniqueType)

        // extracting locations to use in filter menus
        const allLocations = propertyInfo.map(property => {
            return property.city
        })
        
        const uniqueLocation = ["Location (Any)", ...new Set(allLocations)]
         
        setPropertyLocation(uniqueLocation);
    }, [])
    
    
    const [count, setCount] = useState(null)

    // creating filter/search property function 
    const handleAllFilter = () => {
        setIsLoading(true)

        const isAny = (str) => {
            return str.split(' ').includes('(Any)')
        }
        //extracting minimum price of the price range
        const minPrice = parseInt(propertyPrice.split(' ')[0]);
        
        //extracting maximum price of the price range
        const maxPrice = parseInt(propertyPrice.split(' ')[2]);
        
        //extracting prices of all properties
        const filterAllProperties = propertyInfo.filter(property => {
            const allPrice = parseInt(property.price)

            // if all options contains specific values/option
            if(property.city === city && 
                property.type === type &&
                allPrice >= minPrice &&
                allPrice <= maxPrice
            ){
                
                return property;
            }

            // if all filter includes any option
            if(isAny(city) && isAny(type) && isAny(propertyPrice)){
                
                return property
            }

            // if all filter includes (All) but not type
            if(!isAny(type) && isAny(city) && isAny(propertyPrice)) {
                return property.type === type
            }

            // if all filter options (Any) but not city
            if(!isAny(city) && isAny(type) && isAny(propertyPrice)) {
                return property.city === city
            }

            // if all filter options include (Any) but not price
            if(!isAny(propertyPrice) && isAny(type) && isAny(city)){

                if(allPrice >= minPrice && allPrice <= maxPrice) {
                    return property
                }

            }

            //if only city and type doesn't include (Any)
            if(!isAny(city) && !isAny(type) && isAny(propertyPrice)) {
                return property.city === city && property.type === type
            }

            //if only city and price doesnt include (Any) 
            if(!isAny(city) && isAny(type) && !isAny(propertyPrice)) {
                if(allPrice >= minPrice && allPrice <= maxPrice) {
                    return property.city === city
                }
                
            }

            // if only type and price doesnt include (Any)
            if(isAny(city) && !isAny(type) && !isAny(propertyPrice)) {
                if(allPrice >= minPrice && allPrice <= maxPrice) {
                    return property.type === type
                }
                
            }
            
        })

        
        setTimeout(() => {
            return filterAllProperties.length < 1 ? setProperties([])
             : setProperties(filterAllProperties);
        }, 3000)

        setTimeout(() => {
            if(filterAllProperties.length > 0){
                setCount(true)
            }
            if(filterAllProperties.length === 24){
                setCount(false)
            }
            setIsLoading(null)
        }, 3000)
    }

    // handling properties saved by a user
    const [savedProperty, setSavedProperty] = useState([]);

    useEffect(() => {
        const storedProperty = JSON.parse(localStorage.getItem('property'))

        if(storedProperty){
            setSavedProperty(storedProperty)
        }
    }, [])



    //notification message when bookmark is empty and adding same property twice
    const [notify, setNotify] = useState(false);
    
    //deleting pproperty from saved list
    const handleDelete = (id) => {
        setSavedProperty(savedProperty.filter(property => property.id !== id))

        localStorage.setItem('property', JSON.stringify(savedProperty.filter(property => property.id !== id)));
    }

    //adding selected property to bookmark section
    const handleBookmarks = (selectedProperty) => {

        const bookmarkedProperty = {
            id: selectedProperty.id,
            name: selectedProperty.name,
            location: selectedProperty.location,
            img: selectedProperty.img,
            price: selectedProperty.price,
            city: selectedProperty.city, 
            rooms: selectedProperty.rooms
        }
        
        const searchProperty = savedProperty.find(property => property.id === selectedProperty.id);
        
        if(searchProperty === undefined){
            setSavedProperty([...savedProperty, bookmarkedProperty]);

            localStorage.setItem('property', JSON.stringify([...savedProperty, bookmarkedProperty]))
           
        }else{
            handleDelete(selectedProperty.id)
            setNotify(true);

            setTimeout(() => {
                setNotify(false);
            }, 5000)
            return;
        } ;
    
    }


    
    return (

        <HouseContext.Provider value={{
            properties,
            setProperties,
            setType,
            type,
            propertyType,
            city,
            setCity,
            notify,
            propertyLocation,
            propertyPrice,
            setPropertyPrice,
            handleAllFilter,
            savedProperty, 
            handleDelete,
            isLoading,
            count,
            handleBookmarks,
        }}>
            { children }
        </HouseContext.Provider>
     );
}
 
export default HouseProvider;