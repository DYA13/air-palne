export const getStorage = () => {
if (localStorage.getItem('tour')) {
    return JSON.parse(localStorage.getItem('tour'))
} else {
    return [];
}
};

export const setStorage = (data) => {
    const storage =getStorage();
    const filterBooking = storage.filter(item => {
        for (let i = 0; i < data.length; i++){
            if(data[i].ticket === item.ticket){
                return false
            }
        }
        return item;
    })

    const newBooking = [...filterBooking, ...data];
    
    localStorage.setItem('tour', JSON.stringify(data))
}