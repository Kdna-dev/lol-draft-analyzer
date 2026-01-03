import axios from 'axios';

const DDRAGON_BASE_URL = "https://ddragon.leagueoflegends.com/cdn";

export async function getChampions(version = "15.24.1", language="es_AR") {
    const url = `${DDRAGON_BASE_URL}/${version}/data/${language}/champion.json`;
    const response = await axios.get(url);
    return response.data;
}

export async function getChampionInfo(id:string, version = "15.24.1", language = "es_AR"){
    const url = `${DDRAGON_BASE_URL}/${version}/data/${language}/champion/${id}.json`;
    const response = await axios.get(url);
    return response.data;
}

export function getChampionProfilePicture(id:string, version = "15.24.1") {
    return `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${id}.png`;
}

export function getSpellImageByName(id:string, version = "15.24.1") {
    const image:string =  `https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${id}`;
    console.log(image);
    return image;
}
