let json1="Dharshan"
let json2= 4
let json3=true
let json4=[4,5,6,]
let json5={
    "stock ":"Tcs",
    "price":34000
}
let json6= `[

    {"stock ":"Tcs",
    "price":34000

    },

    {

 "Name ":"Dharshan",
 "Age":20
    },

    {
        "Adress ":"mangkulam",
        "country":"Sri Lanlak"
           }
]`

let parse =JSON.parse(json6)
console.log(parse[1].price)
console.log(JSON.stringify(parse))
