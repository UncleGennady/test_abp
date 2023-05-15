export const localStorageKey = 'VIN'

export const setInLocalStorage = (key, value) => {
    const localStorageValue = getFromLocalStorage(key)
    console.log(localStorageValue)
    if(!localStorageValue){
        window.localStorage.setItem(key, JSON.stringify([value]))
    }
    else if(localStorageValue.length === 5){
        window.localStorage.setItem(key, JSON.stringify([value, ...localStorageValue.slice(0, 4)]))
    }
    else{
        window.localStorage.setItem(key, JSON.stringify([value, ...localStorageValue]))
    }
}

export const getFromLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))