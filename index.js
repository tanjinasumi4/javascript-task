const samplePersons = [
    {
      name: "Mr Rashed",
      birthYear: 1999,
      currentYear: 2022,
      district: "Dhaka",
      postNo: 1200,
      priority: 2,
    },
    {
      name: "Mr Raju",
      birthYear: 1995,
      currentYear: 2022,
      district: "Rajshahi",
      postNo: 1211,
      priority: 1,
    },
  ];
  
  function compare(personOne, personTwo) {
    if (personOne.priority !== personTwo.priority) {
      return personOne.priority < personTwo.priority ? -1 : 1;
    } else {
      return personOne.name < personTwo.name ? -1 : 1;
    }
  }
  
  function cardDistribution(Persons) {
    let distributedCardArray = [];
    let serialNumber = 1;
  
    Persons.map((person) => {
      let data = {
        cardNumber: "",
        gift: "",
        priority: null,
      };
  
      const firstTwoCharOfDistrict = person.district.slice(0, 2).toUpperCase();
  
      const currentYear = person.currentYear.toString();
      const lastTwoNumOfCurrentYear = currentYear.slice(
        currentYear.length - 2,
        currentYear.length
      );
  
      const firstTwoNumOfPostalNum = person.postNo.toString().slice(0, 2);
  
      data.cardNumber =
        firstTwoCharOfDistrict +
        lastTwoNumOfCurrentYear +
        firstTwoNumOfPostalNum +
        person.birthYear.toString();
  
      while (data.cardNumber.length + serialNumber.toString().length < 16) {
        data.cardNumber += "0";
      }
      data.cardNumber += serialNumber.toString();
  
      data.gift = serialNumber % 2 === 0 ? "R" : "W";
      data.priority = person.priority;
  
      distributedCardArray.push(data);
      serialNumber++;
    });
  
    distributedCardArray.sort(compare);
    console.log("Distributed Card Array: ", distributedCardArray);
  
    return distributedCardArray;
  }
  
  cardDistribution(samplePersons);
  