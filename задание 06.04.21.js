var city1 = {
    name : "ГородN",
    население : 10000000 человек,
}
var city2 = {имя: "ГородM", население: 1e6};
функция getName(){возвращает this.name;}
city1.getName = getName;
city2.getName = getName;
функция exportStr(){return this.name + '\n' + 'population=' + this.population + '\n';}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
функция getObj(){возвращает это;}
функция getCity(){return getObj.apply(this).getName();}
city1.getCity = getCity;
city2.getCity = getCity;
console.log(city1);
console.log(city2);