import axios from 'axios'
import { baseUrl } from './global.js'

async function getRandomElemList(param){
	const result = await axios.get(baseUrl + `elem/list/${param}`)
	return result.data
}

export { getRandomElemList }