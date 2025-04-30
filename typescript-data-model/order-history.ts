interface Item {
  id?: string;
  title: string;
  price: number;
  returnUntil?: string;
}

interface Order {
  orderId: string;
  orderDate: string;
  deliveryDate: string;
  total: number;
  items: Item[]; // List of items in the order
  customerName: string;
  paymentMethod?: string;
  status?: string;
}

const orderHistory: Order[] = [
  {
    orderId: '114-3941689-8772232',
    orderDate: 'August 4, 2020',
    deliveryDate: 'August 8, 2020',
    total: 34.0,
    items: [
      {
        id: 'ITEM-001',
        title: 'JavaScript for impatient programmers',
        price: 31.55,
        returnUntil: 'September 7, 2020',
      },
    ],
    customerName: 'JS Masher',
    status: 'Delivered',
  },
  {
    orderId: '113-9984268-1280257',
    orderDate: 'July 19, 2020',
    deliveryDate: 'July 20, 2020',
    total: 44.53,
    items: [
      {
        id: 'ITEM-002',
        title: 'The Timeless Way of Building',
        price: 41.33,
        returnUntil: 'August 19, 2020',
      },
    ],
    customerName: 'JS Masher',
    paymentMethod: 'Credit Card',
    status: 'Delivered',
  },
  {
    orderId: '114-2875557-9059409',
    orderDate: 'July 4, 2020',
    deliveryDate: 'July 7, 2020',
    total: 17.22,
    items: [
      {
        id: 'ITEM-003',
        title:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        price: 15.98,
        returnUntil: 'August 5, 2020',
      },
    ],
    customerName: 'JS Masher',
    paymentMethod: 'Credit Card',
    status: 'Not Delivered',
  },
  {
    orderId: '113-2883177-2648248',
    orderDate: 'July 3, 2020',
    deliveryDate: 'July 5, 2020',
    total: 138.93,
    items: [
      {
        id: 'ITEM-004',
        title:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        price: 94.95,
        returnUntil: 'August 4, 2020',
      },
      {
        title: 'The Art of Sql',
        price: 33.99,
        returnUntil: 'August 4, 2020',
      },
    ],
    customerName: 'JS Masher', // 修正拼写
    paymentMethod: 'Credit Card',
    status: 'Delivered',
  },
];

console.log(orderHistory);
