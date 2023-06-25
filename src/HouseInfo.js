import House1 from './assets/house/1.webp';
import House2 from './assets/house/2.jpeg';
import House3 from './assets/house/3.jpeg';
import House4 from './assets/house/4.jpeg';
import House5 from './assets/house/5.jpeg';
import House6 from './assets/house/6.jpeg';
import House7 from './assets/house/7.jpg';
import House8 from './assets/house/8.jpg';
import House9 from './assets/house/9.jpg';
import House10 from './assets/house/10.jpeg';

// import offices images
import Office1 from './assets/office/1.jpeg'
import Office2 from './assets/office/2.jpeg'
import Office3 from './assets/office/3.jpeg'
import Office4 from './assets/office/4.jpeg'
import Office5 from './assets/office/5.jpeg'
import Office6 from './assets/office/6.jpeg'
import Office7 from './assets/office/7.jpeg'
import Office8 from './assets/office/8.jpeg'
import Office9 from './assets/office/9.jpeg'
import Office10 from './assets/office/10.jpeg'
import Office11 from './assets/office/11.jpeg'
import Office12 from './assets/office/12.jpeg'
import Office13 from './assets/office/13.jpeg'
import Office14 from './assets/office/14.jpeg'
import Office15 from './assets/office/15.jpeg'
import Office16 from './assets/office/16.jpg'

//import beds images

import Bed1 from './assets/bedroom/1.jpeg'
import Bed2 from './assets/bedroom/2.jpeg'
import Bed3 from './assets/bedroom/3.jpeg'
import Bed4 from './assets/bedroom/4.jpeg'
import Bed5 from './assets/bedroom/5.jpeg'
import Bed6 from './assets/bedroom/6.jpeg'
import Bed7 from './assets/bedroom/7.jpeg'
import Bed8 from './assets/bedroom/8.jpeg'
import Bed9 from './assets/bedroom/9.jpeg'
import Bed10 from './assets/bedroom/10.jpeg'

// import partment pictures
import Apart1 from './assets/apartment/1.jpeg'
import Apart2 from './assets/apartment/2.jpeg'
import Apart3 from './assets/apartment/3.jpeg'
import Apart4 from './assets/apartment/4.jpeg'
import Apart5 from './assets/apartment/5.jpeg'
import Apart6 from './assets/apartment/6.jpeg'
//import bathrooms images

import Bath1 from './assets/baths/1.jpeg'
import Bath2 from './assets/baths/2.jpeg'
import Bath3 from './assets/baths/3.jpeg'
import Bath4 from './assets/baths/4.jpeg'
import Bath5 from './assets/baths/5.jpeg'
import Bath6 from './assets/baths/6.jpeg'
import Bath7 from './assets/baths/7.jpeg'
import Bath8 from './assets/baths/8.jpeg'
import Bath9 from './assets/baths/9.jpeg'


import Int1 from './assets/interior/1.jpeg'
import Int2 from './assets/interior/2.jpeg'
import Int3 from './assets/interior/3.jpeg'
import Int4 from './assets/interior/4.jpeg'
import Int5 from './assets/interior/5.jpeg'
import Int6 from './assets/interior/6.jpeg'
import Int7 from './assets/interior/7.jpeg'
import Int8 from './assets/interior/8.jpeg'
import Int9 from './assets/interior/9.jpg'
import Int10 from './assets/interior/10.jpg'
import Int11 from './assets/interior/11.jpg'
import Int12 from './assets/interior/12.jpg'


//import kitchen images

import Kit1 from './assets/kitchen/1.jpg'
import Kit2 from './assets/kitchen/2.jpg'
import Kit3 from './assets/kitchen/3.jpg'
import Kit4 from './assets/kitchen/4.jpg'
import Kit5 from './assets/kitchen/5.jpg'
import Kit6 from './assets/kitchen/6.jpg'
import Kit7 from './assets/kitchen/7.jpg'
import Kit8 from './assets/kitchen/8.jpg'
import Kit9 from './assets/kitchen/9.jpg'
import Kit10 from './assets/kitchen/10.jpg'
import Kit11 from './assets/kitchen/11.jpeg'
import Kit12 from './assets/kitchen/12.jpeg'


 export const propertyInfo = [
    {
        id: '1',
        name: 'Twins Palmer Duplex',
        type: 'House',
        img:  House1,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [House1, Bed1, Bath1, Kit1, Int1, Int11],
        beds: '4',
        location: 'Ikoyi',
        city: 'Lagos',
        year: '2023',
        size: '2250sqft',
        baths: '6',
        kitchen: '2',
        category: 'feature',
        rooms: "6",
        price: '180000'
    },
    {
        id:'2',
        name: 'Bungalow',
        type: 'House',
        img: House2,
        desc: `Welcome to this luxurious residence boasting modern architecture, 
            high-end finishes, and an open-concept design that effortlessly 
            combines elegance and functionality`,
        images: [House2, Bed2, Bath2, Kit2, Int2],
        beds: '3',
        location: 'Asokoro',
        city: 'Abuja',
        year: '2023',
        size: '1200sqft',
        baths: '3',
        kitchen: '1',
        category: 'new',
        rooms: "3",
        price: '150000'
    },
    {
        id: '3',
        name: 'Semi-detached Duplex',
        type: 'House',
        img: House3,
        desc: `Step into this spacious family home, complete with multiple bedrooms,
             a large backyard, and a beautifully designed interior that exudes warmth
              and comfort.`,
        images: [House3, Bed3, Bath3, Kit3, Int3],
        beds: '4',
        location: 'Maitama',
        city: 'Abuja',
        year: '2022',
        size: '800sqft',
        baths: '4',
        kitchen: '3',
        category: 'similar',
        rooms: "4",
        price: '320000'
    },
    {
        id: '4',
        name: 'Large Office Building',
        type: 'Office',
        img:  Office1,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office1, Office5, Office11, Kit1, Bath9, Office10],
        beds: '1',
        location: 'Ikoyi',
        city: 'Lagos',
        year: '2023',
        size: '1200sqft',
        baths: '1',
        kitchen: '1',
        category: 'feature',
        rooms: "6",
        price: '500000'
    },
    {
        id: '5',
        name: '25-Blocks Apartment',
        type: 'Apartment',
        img: Apart2,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart2, Bed2, Bath3, Kit4, Int8, Kit5, Int3],
        beds: '3',
        location: 'Trans Amadi',
        city: 'Port-Harcourt',
        year: '2023',
        size: '1080sqft',
        baths: '3',
        kitchen: '2',
        category: 'new',
        price: '500000',
        rooms: "3 each"
    },
    {
        id: '6',
        name: 'Mansion',
        type: 'House',
        img: House4,
        desc: `"Discover your dream home in this contemporary urban oasis, 
            featuring floor-to-ceiling windows, sleek finishes, and a rooftop 
            terrace with panoramic city views.`,
        images: [House4, Bed4, Bath4, Kit4, Int4],
        beds: '6',
        location: 'Trans Amadi',
        city: 'Port-Harcourt',
        year: '2021',
        size: '2500sqft',
        baths: '6',
        kitchen: '2',
        category: 'similar',
        rooms: "6",
        price: '230000'
    },
    {
        id: '7',
        name: 'Diamond Mansion',
        type: 'House',
        img:  House5,
        desc: '',
        images: [House6, Bed5, Bath5, Kit5, Int5],
        beds: '5',
        location: 'GRA',
        city: 'Port-Harcourt',
        year: '2022',
        size: '3200sqft',
        baths: '5',
        kitchen: '2',
        category: 'feature',
        rooms: "5",
        price: '250000'
    },
    {
        id: '8',
        name: 'Max-Office Space',
        type: 'Office',
        img:  Office15,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office15, Office7, Office13, Kit11, Bath4, Office16],
        beds: '1',
        location: 'Trans-Amadi',
        city: 'Port-Harcourt',
        year: '2023',
        size: '700sqft',
        baths: '1',
        kitchen: '1',
        category: 'new',
        rooms: "5",
        price: '200000'
    },
    {
        id: '9',
        name: '14-Flats',
        type: 'Apartment',
        img: Apart6,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart6, Bed6, Bath5, Kit10, Int5, Int1],
        beds: '3',
        location: 'GRA',
        city: 'Port-Harcourt',
        year: '2023',
        size: '1500sqft',
        baths: '3',
        kitchen: '2',
        category: 'similar',
        price: '300000',
        rooms: "3 each"
    },
    {
        id: '10',
        name: 'Max-Office Space',
        type: 'Office',
        img:  Office1,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office8, Office4, Office6, Kit7, Bath9],
        beds: '1',
        location: 'Lugbe',
        city: 'Abuja',
        year: '2023',
        size: '320sqft',
        baths: '1',
        kitchen: '1',
        category: 'feature',
        rooms: "4",
        price: '400000'
    },
    {
        id:'11',
        name: 'Fully-Detached Bungalow',
        type: 'House',
        img: House6,
        desc: `Experience the epitome of waterfront living in this breathtaking 
            property, where every room offers sweeping vistas of the ocean and 
            direct access to a private beach.`,
        images: [House6, Bed6, Bath6, Kit6, Int6],
        beds: '4',
        location: 'VI',
        city: 'Lagos',
        year: '2023',
        size: '1800sqft',
        baths: '4',
        kitchen: '',
        category: 'new',
        rooms: "4",
        price: '350000'
    },
    {
        id: '12',
        name: 'Duplex',
        type: 'House',
        img: House7,
        desc: `Indulge in the ultimate country living experience with this 
            stunning farmhouse, surrounded by acres of lush greenery, a picturesque
             barn, and a tranquil pond."`,
        images: [House7, Bed7, Bath7, Kit7, Int7],
        beds: '3',
        location: 'Oniru',
        city: 'Lagos',
        year: '2021',
        size: '1060sqft',
        baths: '3',
        kitchen: '1',
        category: 'similar',
        rooms: "3",
        price: '470000'
    },
    {
        id: '13',
        name: 'Multi-sized Office',
        type: 'Office',
        img:  Office6,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office6, Office8, Office3, Kit5, Bed7],
        beds: '4',
        location: 'Marina',
        city: 'Lagos',
        year: '2023',
        size: '2600sqft',
        baths: '2',
        kitchen: '1',
        category: 'feature',
        rooms: "5",
        price: '500000'
    },
    {
        id: '14',
        name: '25-Flats',
        type: 'Apartment',
        img: Apart5,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart5, Bed8, Bath8, Kit11, Int10],
        beds: '3',
        location: 'Maitama',
        city: 'Abuja',
        year: '2022',
        size: '3000sqft',
        baths: '3',
        kitchen: '2',
        category: 'new',
        price: '500000',
        rooms: "3 each"
    },
    {
        id: '15',
        name: 'Penthouse Duplex',
        type: 'House',
        img: House8 ,
        desc: `Unwind in this exquisite penthouse apartment, boasting a spacious layout, 
            high ceilings, and a private balcony overlooking the city skyline, 
            perfect for entertaining guests.`,
        images: [House8, Bed8, Bath8, Kit8, Int8],
        beds: '4',
        location: 'Ajah',
        city: 'Lagos',
        year: '2022',
        size: '1200sqft',
        baths: '3',
        kitchen: '1',
        category: 'similar',
        rooms: "5",
        price: '600000'
    },
    {
        id:'16',
        name: 'Exquisite Mansion',
        type: 'House',
        img: House9,
        desc: `Immerse yourself in history and elegance in this restored
              Victorian mansion, with its intricate detailing, grand staircase,
              and sprawling gardens that evoke a sense of timeless beauty.`,
        images: [House9, Bed9, Bath9, Kit9, Int9],
        beds: '8',
        location: 'Aso Rock', 
        city: 'Abuja',
        year: '2023',
        size: '900sqft',
        baths: '8',
        kitchen: '3',
        category: 'feature',
        rooms: "10 including two Living rooms",
        price: '800000'
    },
    {
        id: '17',
        name: 'Max-Office Space',
        type: 'Office',
        img:  Office2,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office2, Office11, Office12, Kit3, Bath8],
        beds: '1',
        location: 'GRA',
        city: 'Port-Harcourt',
        year: '2023',
        size: '1206sqft',
        baths: '1',
        kitchen: '1',
        category: 'new',
        rooms: "5",
        price: '400000'
    },
    {
        id: '18',
        name: '25-Flats',
        type: 'Apartment',
        img: Apart4,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart4, Bed3, Bath2, Kit12, Int12],
        beds: '3',
        location: 'Asokoro',
        city: 'Abuja',
        year: '2023',
        size: '1345sqft',
        baths: '3',
        kitchen: '2',
        category: 'similar',
        price: '500000',
        rooms: "3"
    },
    {
        id: '19',
        name: 'Semi-Detach Duplex',
        type: 'House',
        img: House10,
        desc: `This charming property is a cozy retreat nestled in a tranquil
              neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [House10, Bed10, Bath2, Kit10, Int10],
        beds: '4',
        location: 'Banana Island',
        city: 'Lagos',
        year: '2022',
        size: '1320sqft',
        baths: '4',
        kitchen: '1',
        category: 'feature',
        rooms: "5",
        price: '1000000'
    },
    {
        id: '20',
        name: 'Office Space',
        type: 'House',
        img:  Office7,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office7, Office12, Office14, Kit1, Bath5],
        location: 'Ikoyi',
        city: 'Lagos',
        year: '2023',
        size: '726sqft',
        baths: '1',
        kitchen: '1',
        category: 'new',
        rooms: "5",
        price: '800000'
    },
    {
        id: '21',
        name: 'Ultra-Modern Apartment',
        type: 'Apartment',
        img: Apart2,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart2, Bed6, Bath5, Kit5, Int5],
        beds: '3',
        location: 'Osapa London',
        city: 'Lagos',
        year: '2023',
        size: '3200sqft',
        baths: '3',
        kitchen: '2',
        category: 'similar',
        rooms: "4 each",
        price: '800000'
    },
    {
        id: '22',
        name: 'Max-Office Space',
        type: 'Office',
        img:  Office8,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Office8, Office9, Office2, Kit1, Bath1, Office15],
        beds: '1',
        location: 'Maitama',
        city: 'Abuja',
        year: '2023',
        size: '1100sqft',
        baths: '1',
        kitchen: '1',
        category: 'feature',
        rooms: "6",
        price: '600000'
    },
    {
        id: '23',
        name: '3-bedroom Apartment',
        type: 'Apartment',
        img: Apart1,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart1, Bed10, Bath3, Kit1, Int9],
        beds: '3',
        location: 'Ikeja GRA',
        city: 'Lagos',
        year: '2023',
        size: '6700sqft',
        baths: '3',
        kitchen: '1',
        category: 'new',
        rooms: "3 each",
        price: '200000'
    },
    {
        id: '24',
        name: '23-Block Apartment',
        type: 'Apartment',
        img: Apart3,
        desc: `This charming property is a cozy retreat nestled in a tranquil 
             neighborhood, offering a peaceful ambiance and stunning views of the
             surrounding landscape.`,
        images: [Apart3, Bed1, Bath4, Kit5, Int7],
        beds: '3 each',
        location: 'Ikeja GRA',
        city: 'Lagos',
        year: '2023',
        size: '1500sqft',
        baths: '3',
        kitchen: '1 each',
        category: 'similar',
        rooms: "3 each",
        price: '400000'
    },
  
]


 
