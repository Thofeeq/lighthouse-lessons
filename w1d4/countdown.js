var countdownGenerator = function (x) {
     
        return function()
        {
          x = x - 1;
          console.log(x+1);
          return x;

        }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!