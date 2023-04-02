// Need to create a list of things that I need to own
// 'phone: 15000', 'go-pro: 40000', 'bed: 7000', 'desk_chair: 7000', 'couch: 8000', 'fit: 5000', 'new_tat_kit: 10000', 'thee_setup: 20000', 'shoe-rack: 3000', 'carpet: 4000', 'rent_3m: 21000', 'net_3m: 4500'
var toOwn = ['phone: 15000', 'go-pro: 40000', 'bed: 7000', 'desk_chair: 7000', 'couch: 8000', 'fit: 5000', 'new_tat_kit: 10000', 'thee_setup: 20000', 'shoe-rack: 3000', 'carpet: 4000', 'rent_3m: 21000', 'net_3m: 4500'];

const addItem = (item) => {
    item = toOwn.unshift(item);
};



var listToOwn = () => {
    for (i = 0; i < toOwn.length; i++){
        console.log(i, toOwn[i]);
    }
};

addItem('unique_timbs: 7000');
listToOwn();