export const searchCities = async (search) => {
    const response = await fetch(`${process.env.REACT_APP_CITIES_URL}?name=${search}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const ticketsData = async (ticketsdata) => {
    console.log(`${process.env.REACT_APP_TICKETS_URL}?from_city_id=${ticketsdata.from_city_id}&to_city_id=${ticketsdata.to_city_id}&date_start=${ticketsdata.date_start}&date_end=${ticketsdata.date_end}`)
    // let td = JSON.parse(ticketsdata)
    const response = await fetch(`${process.env.REACT_APP_TICKETS_URL}?from_city_id=${ticketsdata.from_city_id}&to_city_id=${ticketsdata.to_city_id}&date_start=${ticketsdata.date_start}&date_end=${ticketsdata.date_end}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const cityId = async (name) => {
    console.log(name)
    const response = await fetch(`${process.env.REACT_APP_CITIES_URL}?name=${name}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    // console.log(response.json())
    return await response.json();
}

