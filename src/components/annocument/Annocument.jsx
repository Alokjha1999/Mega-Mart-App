import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "340px",
  }
  const mystyle1 = {
    width: "68%",
    height: "340px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='https://m.media-amazon.com/images/G/31/IMG20/Home/2023/HnKBanner/New/StoryHome_-_PC._SX3000_QL85_.jpg' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
