let address : any = {
    country : 'Japan',
    city : '大阪府',
    zipCode : '〒556-0012',
    address1 : 'naniwa-ward', 
    address2 : '大阪市浪速区',
    address3 : '敷津東３丁目１１−８'
}

const {country, city, zipCode, ...detail} = address;
console.log(city, zipCode, detail)
 