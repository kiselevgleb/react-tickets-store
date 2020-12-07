export const searchCities = async (search) => {
    const response = await fetch(`${process.env.REACT_APP_CITIES_URL}?name=${search}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

export const ticketsData = async (ticketsdata) => {
    let url = `${process.env.REACT_APP_TICKETS_URL}?`;
    let masKey = Object.keys(ticketsdata);
    masKey.forEach(element => {
        if(ticketsdata[element]!==''){
            console.log(masKey[element])
        url+=`&${element}=${ticketsdata[element]}`}
    });
    // console.log(`${process.env.REACT_APP_TICKETS_URL}?from_city_id=${ticketsdata.from_city_id}&to_city_id=${ticketsdata.to_city_id}&date_start=${ticketsdata.date_start}&date_end=${ticketsdata.date_end}&date_start_arrival=${ticketsdata.date_start_arrival}&date_end_arrival=${ticketsdata.date_end_arrival}&have_second_class=${ticketsdata.have_second_class}&have_third_class=${ticketsdata.have_third_class}&have_fourth_class=${ticketsdata.have_fourth_class}&have_wifi=${ticketsdata.have_wifi}&have_air_conditioning=${ticketsdata.have_air_conditioning}&have_express=${ticketsdata.have_express}`)
    console.log(url)
    // let td = JSON.parse(ticketsdata)
    // const response = await fetch(`${process.env.REACT_APP_TICKETS_URL}?from_city_id=${ticketsdata.from_city_id}&to_city_id=${ticketsdata.to_city_id}&date_start=${ticketsdata.date_start}&date_end=${ticketsdata.date_end}`);
       const response = await fetch(url);
    //    const response = await fetch(`${process.env.REACT_APP_TICKETS_URL}?from_city_id=${ticketsdata.from_city_id}&to_city_id=${ticketsdata.to_city_id}&date_start=${ticketsdata.date_start}&date_end=${ticketsdata.date_end}&date_start_arrival=${ticketsdata.date_start_arrival}&date_end_arrival=${ticketsdata.date_end_arrival}&have_first_class=${ticketsdata.have_first_class}&have_second_class=${ticketsdata.have_second_class}&have_third_class=${ticketsdata.have_third_class}&have_fourth_class=${ticketsdata.have_fourth_class}&have_wifi=${ticketsdata.have_wifi}&have_air_conditioning=${ticketsdata.have_air_conditioning}&have_express=${ticketsdata.have_express}&price_from=${ticketsdata.price_from}&price_to=${ticketsdata.price_to}&start_departure_hour_from=${ticketsdata.start_departure_hour_from}&start_departure_hour_to=${ticketsdata.start_departure_hour_to}&start_arrival_hour_from=${ticketsdata.start_arrival_hour_from}&start_arrival_hour_to=${ticketsdata.start_arrival_hour_to}&end_departure_hour_from=${ticketsdata.end_departure_hour_from}&end_departure_hour_to=${ticketsdata.end_departure_hour_to}&end_arrival_hour_from=${ticketsdata.end_arrival_hour_from}&end_arrival_hour_to=${ticketsdata.end_arrival_hour_to}&limit=${ticketsdata.limit}&offset=${ticketsdata.offset}&sort=${ticketsdata.sort}`);

    
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}


export const cityId = async (name) => {
    const response = await fetch(`${process.env.REACT_APP_CITIES_URL}?name=${name}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
export const lastTic = async () => {
    const response = await fetch(`${process.env.REACT_APP_TICKETS_URL}/last`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
