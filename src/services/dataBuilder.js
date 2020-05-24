import config from '../config/config';

export class DataBuilder {

static buildCreateData  (object) {
	console.log('form data :' +object);
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.client.categoryType.toUpperCase()};	
	let name = {name:object.client.clientName.toUpperCase()};
	let description = {description:object.client.clientName.toUpperCase()};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, name, description ,data ,clientRealm,categoryType)	

	console.log('builder data :' +sdata);
	return sdata;
	}
}
export default DataBuilder