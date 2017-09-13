import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      {
        id: 1,
        name: "pizza",
        imgURL: "assets/images/image1.jpg",
        price: 20,
        calendar1: "22.09.2017",
        calendar2: "22.10.2017"
      },
      {
        id: 2,
        name: "steak",
        imgURL: "assets/images/image2.jpg",
        price: 120,
        calendar1: "07.04.2017",
        calendar2: "22.19.2017"
      },
      {
        id: 3,
        name: "Salad",
        imgURL: "assets/images/image3.jpg",
        price: 10,
        calendar1: "22.09.2017",
        calendar2: "22.11.2017"
      },
      {
        id: 4,
        name: "fish",
        imgURL: "assets/images/image4.jpg",
        price: 80,
        calendar1: "22.09.2017",
        calendar2: "27.09.2017"
      },
      {
        id: 5,
        name: "Shrimp",
        imgURL: "assets/images/image5.jpg",
        price: 100,
        calendar1: "22.04.2017",
        calendar2: "22.11.2017"
      },
      {
        id: 6,
        name: "soup",
        imgURL: "assets/images/image6.jpg",
        price: 60,
        calendar1: "02.09.2017",
        calendar2: "12.09.2017"
      }
    ];
    return {dishes};
  }
}