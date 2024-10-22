let component1 = {name1 : 'toranoko'}, component2 = {name2 : 'anko'}, component3 = {name3 :'basyame'}, component4 = {city:'東京都', country:'Japan'};

let merged = {...component1, ...component2, ...component3, ...component4};
console.log(merged);