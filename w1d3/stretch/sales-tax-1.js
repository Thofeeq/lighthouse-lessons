var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function sumArray(arr)
{
  var sum = 0;
  arr.forEach(function(element){sum+=element})
  return sum;
}

function calculateSalesTax(salesData, taxRates) 
{
  i = 0;
  finalOutput = {}; //final output Object
  salesData.forEach(function(object)  //loop through the salesData array
    {
      if(Object.keys(finalOutput).indexOf(object.name) === -1)          //creating new key if it doesnt exist already
      {
        finalOutput[object.name] = {totalSales: 0, totalTaxes: 0};      //adding key to the object
      } 
      var provincialSales = 0;
      object.sales.forEach(function(sale){
        provincialSales +=sale;
        
      });
      finalOutput[object.name].totalSales+=provincialSales;
      finalOutput[object.name].totalTaxes += (provincialSales*taxRates[object.province]);
    });
  return finalOutput;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results); 
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/