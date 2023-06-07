// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const statuses= document.querySelectorAll('.status');
const reserveBottons= document.querySelectorAll('.reserve');
const checkoutBottons= document.querySelectorAll('.checkout');
const checkinBottons= document.querySelectorAll('.checkin');

stutuses.forEach(function(status,index) { 
    const bookStatus= status.textcontent;
    const statusInfo= STATUS_MAP[bookStatus];

    status.style.color= statusInfo.color;
    reserveBottons=[index].disabled= !statusInfo.canReserve;
    checkoutBottons=[index].disabled= !statusInfo.canCheckout;
    checkinBottons=[index].disabled= !statusInfo.canCheckIn;

    
});