import config from '../config/config';

export class DataBuilder {

    static buildCreateClientData  (object) {
	console.log('form data :' +JSON.stringify(object));
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.client.categoryType.toUpperCase()};	
	let name = {name:object.client.clientName.toUpperCase()};
	let description = {description:object.client.clientName.toUpperCase()};
	let startDate = {startDate:object.client.startDate};
	let endDate = {endDate:object.client.endDate};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, name, description ,data ,clientRealm,categoryType,endDate,startDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}

	static buildUpdateClientData  (object) {
	console.log('UPDATE data :' +JSON.stringify(object));
	let id = {id:object.id};
	let version = {version:object.version};
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let name = {name:object.clientName.toUpperCase()};
	let description = {description:object.clientName.toUpperCase()};
    let clientName = {clientName:object.clientName.toUpperCase()};
    let businessName = {businessName:object.businessName.toUpperCase()};
    let address = {address:object.address.toUpperCase()};
    let contactPerson = {contactPerson:object.contactPerson.toUpperCase()};
    let startDate = {startDate:object.startDate};
	let endDate = {endDate:object.endDate};
    let client = {client:Object.assign({},clientName, businessName,address,contactPerson,endDate,startDate)};
    let data = {data:Object.assign({},client)};
	let sdata = Object.assign({},id,version, name, description ,data ,clientRealm,categoryType,endDate,startDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}

	static buildCreateProductData  (object) {
	console.log('form data :' +JSON.stringify(object));
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.product.categoryType.toUpperCase()};	
	let clientName = {clientName:object.product.clientName.toUpperCase()};
	let name = {name:object.product.name.toUpperCase()};
	let description = {description:object.product.description.toUpperCase()};
	let startDate = {startDate:object.product.startDate};
	let endDate = {endDate:object.product.endDate};
	let data = {data:Object.assign({},object)};
	let sdata = Object.assign({}, name, description ,data ,clientRealm,categoryType,clientName,startDate,endDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}

	static buildUpdateProductData  (object) {
	console.log('form data :' +JSON.stringify(object));
	let id = {id:object.id};
	let version = {version:object.version};
	let clientRealm = {clientRealm:config.clientRealm.toUpperCase()};	
	let categoryType = {categoryType:object.categoryType.toUpperCase()};	
	let clientName = {clientName:object.clientName.toUpperCase()};
	let name = {name:object.name.toUpperCase()};
	let description = {description:object.description.toUpperCase()};
	let startDate = {startDate:object.startDate};
	let price = {price:object.price};
	let endDate = {endDate:object.endDate};
	let product = {product:Object.assign({},name, description,price,endDate,startDate)};
	let data = {data:Object.assign({},product)};
	let sdata = Object.assign({}, id,version,name, description ,data ,clientRealm,categoryType,clientName,startDate,endDate)	

	console.log('builder data :' +JSON.stringify(sdata));
	return sdata;
	}
}
export default DataBuilder