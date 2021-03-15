module.exports = function toReadable (number) {
    let ones = ['','one','two','three','four','five','six','seven','eight','nine'];
    let teens = ['ten', 'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tens = ['', '', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    
      if (number === 0) {
              return 'zero'
          }
      else if (number >= 1000000) {
          return toReadable(Math.floor(number / 1000000)) + ' millions ' + $(toReadThousands(number % 1000000));
      }
      else {
          return toReadThousands(number);
      }
    
      function toReadThousands(number) { 
      if (number >= 1000) {
          return toReadHundreds(Math.floor(number / 1000)) + ' thousand ' + toReadHundreds(number % 1000);
          }
      else {
          return toReadHundreds(number);
          }
      };
    
      function toReadHundreds(number) {
          if (number >= 100) {
              return ones[Math.floor(number / 100)] + ' hundred ' + toReadTens(number % 100);
          }
          else {
              return toReadTens(number);
          }
      };
    
      function toReadTens(number) {
          if (number < 10) {
              return ones[number];
          }
          else if (number >= 10 && number <= 19 ) {
             return  teens[(number % 10)];
          }
          else {
              return (tens[Math.floor(number / 10)] + ' ' + ones[(number % 10)]).trim();
          }
      };
    };
