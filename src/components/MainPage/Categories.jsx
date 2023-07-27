import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
      cateName: "Fashion",
    },
    {
      cateImg: "https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
      cateName: "Electronic",
    },
    {
      cateImg: "https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
      cateName: "Home & Appliances",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/197/353/png-transparent-automatic-watch-hamilton-watch-company-chronograph-jewellery-watch.png",
      cateName: "Watch",
    },
    {
      cateImg: "https://static.vecteezy.com/system/resources/previews/011/016/165/original/realistic-3d-gift-box-cutout-free-png.png",
      cateName: "Gifts",
    },
    {
      cateImg: "https://img.favpng.com/13/18/19/yellow-office-equipment-technology-icon-png-favpng-vps3dNJmnA0RNWpZj92TV3kp3.jpg",
      cateName: "office equipment",
    },
    {
      cateImg: "https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
      cateName: " Beauty & Toys",
    },
    {
      cateImg: "https://e7.pngegg.com/pngimages/845/824/png-clipart-shoe-footwear-clothing-fashion-shopping-others-fashion-outdoor-shoe.png",
      cateName: "Footwear & Shoes",
    },
    {
      cateImg: "https://img.lovepik.com/free-png/20211125/lovepik-student-stationery-decorative-pattern-png-image_401127848_wh1200.png",
      cateName: "Stationery",
    },
    {
      cateImg: "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      cateName: "Grocery",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/144/162/png-transparent-sporting-goods-cricket-clothing-and-equipment-ball-cricket-sport-bicycle-sporting-goods.png",
      cateName: "Sports Products",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
