interface Person {
  name: string;
  id: number;
  address: {
    city: string;
    street: string;
  };
  work: {
    name: string;
    city: string;
  };
  hobbies?: string[];
}
