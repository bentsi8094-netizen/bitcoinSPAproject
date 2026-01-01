
function generateRandomNumbers(length) {
      let result = '';
      const numbers = '0123456789';
      for (let i = 0; i < length; i++) {
          result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      }
      return result;
  }

  function generateRandomLetters(length) {
      let result = '';
      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      for (let i = 0; i < length; i++) {
          result += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      return result;
  }

 export function createCustomerArray() {
      const customers = [];

      for (let i = 0; i < 20; i++) {
          let customerId = '';
          if (Math.random() < 0.5) {
              customerId = generateRandomNumbers(2) + generateRandomLetters(2);
          } else {
              customerId = generateRandomLetters(2) + generateRandomNumbers(2);
          }

          const personalCode = generateRandomNumbers(4);

          const customer = {
              customerId: customerId,
              personalCode: personalCode,
              OurClient: true
          };

          customers.push(customer);
      }

      return customers;
  }
;