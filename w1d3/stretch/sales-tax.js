var salesTaxRates = {  //reduce and filter
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};
console.log()
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

function calculateSalesTax(salesData, taxRates) 
{
  output = {};
  saleArray = [];
  buffer = 0;
  saleAmount = 0;



    for(i = 0; i < salesData.length; i++)
  {
    output[salesData[i]["name"]] = {totalSales:0 ,
                                    totalTaxes:0,
                                    };
  }


  for(i = 0; i < salesData.length; i++)
  {
    for(j = 1; j < salesData.length; j++)
    {

      if(salesData[i]["name"]==salesData[j]["name"])
      {
        
         saleArray = salesData[i]["sales"].concat(salesData[j]["sales"]);
         
         for(x = 0; x < saleArray.length; x++)
         {
          saleAmount+=saleArray[x];
         }
         
         
         output[salesData[i]["name"]]["totalSales"] = saleAmount;
        
       }
       else
       {

          for(x = 0; x < salesData[j]["sales"].length; x++)
         {
         
          saleAmount+=salesData[j]["sales"][x];
         }
       
          output[salesData[j]["name"]]["totalSales"] = saleAmount;
         saleAmount = 0;
       }

    }
    break;
  }



  for(property in taxRates)
  {
    for(i = 0; i < salesData.length; i++)
    {
      if(property == salesData[i]["province"])
      {
        taxRates[property]
      }
    }
    
  }


  return output;
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

