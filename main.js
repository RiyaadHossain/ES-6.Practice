/* ৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো  */

const multiplyTwo = (a, b) => a * b;
// console.log(`Receive two parameter and return multipication of these two: ${multiplyTwo(2,6)}`)


/* ৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই রেজাল্ট রিটার্ন করবে।  */

const threeMultiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(`Receive three parameter and return the multipication of these three: ${threeMultiply(2, 5, 6)}`)


/* ৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। */

const calcTwo = (a, b) => {
    let num1 = a + 2;
    let num2 = b + 2;
    return num1 * num2;
}
// console.log(`Receive two parameter, add 2 with these parameter and return the multipication of these two: ${calcTwo(2, 3)}`)


/* ৪. [হোম ওয়ার্ক] একটু গুগলে সার্চ দাও: javascript function declaration vs arrow function তারপর কয়েকটা আর্টিকেল পড়ে বুঝার চেষ্টা করো। */




/* ৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে।  */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const multiplyFive = array.map(x => x * 5)

// console.log(multiplyFive)

/* ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো  */

const oddNumber = array.filter(x => x % 2)
// console.log(oddNumber)


/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো।  */

const products = [
    {name: 'NoteBook', price: 50, color: 'Orange'},
    {name: 'Pen', price: 20, color: 'Red'},
    {name: 'UPS', price: 5000, color: 'Red'},
    {name: 'PC', price: 72000, color: 'White'},
    {name: 'Phone', price: 22000, color: 'White'}
]

const expensiveItem = products.find(x => x.price > 5000)
// console.log(`Expensive Item: ${expensiveItem.name}`)


/* ৭.৫ [এক্সট্রা] জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।  */

const testMap = array.map(x => x + 1) /* Return the full array modifying the elements: Return an Array */  
const testforEact = array.forEach(x => console.log(x + 1)) /* Return nothing but do some task with the elements for you */
const testFilter = array.filter(x => x > 5) /* Return an array filering the elements: Return an Array */
const testFind = array.find(x => x > 4) /* Return an element filering the elements: Return an element */

// console.log(testFilter)

/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */

const person = {
    fName: 'Riyad',
    lName: 'Hossain',
    age: 20,
    fullName() {
        return `${this.fName} ${this.lName}`
    },
    coding() {
        return `${this.fullName()} is coding.`
    },
    skills: {
        markup: 'Html', 
        style: 'CSS',
        programme: 'JS',
        framework: {
            populer: 'React',
            googleItem: 'Angular',
            anotherItem: 'Vue'
        }
    }
}

const { style, programme } = person.skills
const {populer} = person.skills.framework


/* ৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা ভেরিয়েবল এ রাখবে।  */

const arrayOfMe = ['Riyad', 'Web Developer', 'MERN Stack', 'Personal Portfolio', 'Linked Profile']

const [one, two, three] = arrayOfMe

// console.log(three)



/* ১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে। আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭।  */

const threeParam = (a, b, c = 7) => a + b + c;
// console.log(`Result is: ${threeParam(3, 10)}`)

/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) */

const PC = {
    name: "Value-Top",
    price: 7200,
    color: "white",
    processor: {
        ram: '16 GB',
        ssd: '500 GB',
        hardDisk: null
    },
    accesories: ['KeyBoard', 'Speaker', 'UPS']
}


/* ১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো। */

console.log(`Optional Chaing: ${PC?.power?.nothing}`)