import config from '../config/config';

export class DataBuilder {

    static buildCreateClientData  (object) {
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

	static buildUpdateClientData  (object) {
	console.log('form data :' +object);
	let id = {id:object.id};
	let version = {version:object.version};
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let name = {name:object.clientName.toUpperCase()};
	let description = {description:object.clientName.toUpperCase()};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({},id,version, name, description ,data ,clientRealm,categoryType)	

	console.log('builder data :' +sdata);
	return sdata;
	}

	static buildCreateProductData  (object) {
	console.log('form data :' +object);
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.product.categoryType.toUpperCase()};	
	let clientName = {clientName:object.product.clientName.toUpperCase()};
	let name = {name:object.product.name.toUpperCase()};
	let description = {description:object.product.description.toUpperCase()};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, name, description ,data ,clientRealm,categoryType,clientName)	

	console.log('builder data :' +sdata);
	return sdata;
	}

	static buildUpdateProductData  (object) {
	console.log('form data :' +object);
	let id = {id:object.id};
	let version = {version:object.version};
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let clientName = {clientName:object.clientName.toUpperCase()};
	let name = {name:object.name.toUpperCase()};
	let description = {description:object.description.toUpperCase()};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, id,version,name, description ,data ,clientRealm,categoryType,clientName)	

	console.log('builder data :' + sdata);
	return sdata;
	}
}
export default DataBuilder