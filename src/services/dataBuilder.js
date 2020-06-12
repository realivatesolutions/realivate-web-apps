import config from '../config/config';

export class DataBuilder {

    static buildCategoryData  (object) {
	console.log('form data :' +JSON.stringify(object));
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let name = {name:object.name.toUpperCase()};
	let description = {description:object.description.toUpperCase()};
	let startDate = {startDate:object.startDate};
	let endDate = {endDate:object.endDate};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, name, description ,data ,clientRealm,categoryType,endDate,startDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}

	static buildUpdateCategoryData  (object) {
	console.log('UPDATE data :' +JSON.stringify(object));
	let id = {id:object.id};
	let version = {version:object.version};
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let name = {name:object.name.toUpperCase()};
	let description = {description:object.description.toUpperCase()};
    let startDate = {startDate:object.startDate};
	let endDate = {endDate:object.endDate};
	let proxy = {proxy:Object.assign({},name, description,startDate,endDate)};
    let data = {data:Object.assign({},proxy)};
   let sdata = Object.assign({},id,version, name, description ,data ,clientRealm,categoryType,endDate,startDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}

	
}
export default DataBuilder