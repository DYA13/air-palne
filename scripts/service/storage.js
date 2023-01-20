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
        for (let i = 0; i < data.length)
    })
    localStorage.setItem('tour', JSON.stringify(data))
}