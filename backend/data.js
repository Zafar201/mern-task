import bcrypt from 'bcryptjs'
const data ={
    users:[
        {
            name:"Zafar",
            email:"admin@gmail.com",
            password:bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:"Salman",
            email:"salman@gmail.com",
            password:bcrypt.hashSync('12344',8),
            isAdmin:false
        }
       
    ],
    products:[
        {
            _id: "1",
            name:"I Phone 1",
            image:"https://images-eu.ssl-images-amazon.com/images/I/31QEfiXEbvL._SX342_SY445_QL70_FMwebp_.jpg",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
        {
            _id: "2",
            name:"I Phone 2",
            image:"https://rukminim1.flixcart.com/image/312/312/kulk9zk0/mobile/5/t/f/e40-parl0010in-motorola-original-imag7zz7rzhrkrk2.jpeg?q=70",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
        {
            _id: "3",
            name:"I Phone 3",
            image:"https://rukminim1.flixcart.com/image/312/312/knoxnrk0/mobile/4/b/p/m2-reloaded-mzb0957in-poco-original-imag2aqyhdfvsty8.jpeg?q=70",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
        {
            _id: "4",
            name:"I Phone 4",
            image:"https://images-eu.ssl-images-amazon.com/images/I/31QEfiXEbvL._SX342_SY445_QL70_FMwebp_.jpg",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
        {
            _id: "5",
            name:"I Phone 5",
            image:"https://rukminim1.flixcart.com/image/416/416/kmp7ngw0/screen-guard/tempered-glass/w/x/r/tg-tr-1-te-red-note10-pro-temperia-original-imagfjr78aebxhqw.jpeg?q=70",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
        {
            _id: "6",
            name:"I Phone 9",
            image:"https://rukminim1.flixcart.com/image/312/312/kkyc9zk0/mobile/a/z/x/smart-5-x688c-infinix-original-imagy6wkzsgghduf.jpeg?q=70",
            description:"13+2MP Rear camera with AI Portrait, AI scene recognition, HDR, Pro mode | 5MP front facing camera",
            countInStock:"40",
        },
    ]
}

export default data