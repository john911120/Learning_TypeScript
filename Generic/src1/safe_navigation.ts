export type ICoordinates = {longitude: number}
export type ILocation = { name: string, coords?: ICoordinates }
export type IPerson = { name: string, location?: ILocation }

let person: IPerson = { name: 'John' };
let longitude: number | undefined = person?.location?.coords?.longitude;
console.log(longitude);
if(person && person.location && person.location.coords){
    longitude = person.location.coords.longitude;
}