import React from 'react';
import { AddressIcon, CalendarIcon, EmailIcon, PhoneIcon, SchoolIcon, UserIcon } from '../utils/icon';
const ShowIcon = ({index,size}) => {
    if(index === 0) {
        return <UserIcon size={size} />
    } else if(index===1) {
        return <CalendarIcon size={size} />
    } else if(index === 2) {
        return <AddressIcon size={size} />
    } else if(index === 3) {
        return <PhoneIcon size={size} />
    } else if( index === 4) {
        return <EmailIcon size={size} />
    } else {
        return <SchoolIcon size={size} />
    }
}

export default ShowIcon