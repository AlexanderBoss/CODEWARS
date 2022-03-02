/*
En un pueblo pequeño la población está p0 = 1000al principio de un año. La población aumenta regularmente 2
 percentpor año y, además, 50nuevos habitantes por año vienen a vivir a la ciudad. 
 ¿Cuántos años necesita el pueblo para ver su población mayor o igual a p = 1200habitantes?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
Parámetros dados de manera más general:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

la función nb_yeardebe devolver el nnúmero de años completos necesarios para obtener una población mayor 
o igual a p.

aug es un número entero, percent un número flotante positivo o nulo, p0 y p son números
enteros positivos (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/

function nbYear(p0, percent, aug, p) {

    var population_perc = p0 * percent/100;
    
    population_total = p0 + (population_perc) + aug ;
    
    var number_of_years = 1;
    
    while(population_total < p)
    {        
    
        population_perc = population_total * percent/100;
        population_total = population_total + population_perc + aug;
        number_of_years ++ ;
        
     }
              
            return number_of_years;
    } 


console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))