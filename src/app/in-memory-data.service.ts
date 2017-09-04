import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dishes = [
      {
        id: "1",
        name: "pizza",
        imgURL: "assets/images/image1.jpg",
      },
      {
        id: "2",
        name: "steak",
        imgURL: "assets/images/image2.jpg"
      },
      {
        id: "3",
        name: "Salad",
        imgURL: "assets/images/image3.jpg"
      },
      {
        id: "4",
        name: "fish",
        imgURL: "assets/images/image4.jpg"
      },
      {
        id: "5",
        name: "Shrimp",
        imgURL: "assets/images/image5.jpg"
      },
      {
        id: "6",
        name: "soup",
        imgURL: "assets/images/image6.jpg"
      }
    ];
    return {dishes};
  }
}