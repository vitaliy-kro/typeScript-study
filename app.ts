let age: number;
age = 50;
let name: string;
name = 'Max';
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number): number => 100 + a;
callback(3);

let anything: any;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') str = some;

let person: [string, number];
person = ['Max', 21];

enum Status {
  LOADING,
  READY,
}

const page = {
  load: Status.READY,
};
if (page.load === Status.READY) {
  console.log('Page is load');
} else console.log('Page is loading');

let someInfo: string | number;
let someStatus: 'enable' | 'disable';

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page = {
  title: string;
  likes: number;
  acounts: [];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

export {};
