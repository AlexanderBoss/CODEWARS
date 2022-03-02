function centuryFromYear(year) {
    let century = 0;
    while (year > 0){
      year = year - 100;
      century ++;
    }
    return century;
  }
 
console.log("El siglo que pertenece el año 2022 es : ",centuryFromYear(1705))