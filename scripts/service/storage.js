export const getStorage = (id) => {
if (localStorage.getItem(`tour-${id}`)) {
    return JSON.parse(localStorage.getItem(`tour-${id}`))
} else {
    return [];
}
};

export const setStorage = (id, data) => {
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

    localStorage.setItem(`tour-${id}`, JSON.stringify(data))
}