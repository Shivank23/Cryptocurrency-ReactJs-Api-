import React, { useEffect, useState } from 'react'
import "./App.css"
import Coins from "./components/Coins"
function App() {
  const [coin, setCoin] = useState([])
  const [search, setSearch] = useState('')

  
  useEffect(() => {
    const Alldata = async () => {
      await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then((res) => res.json()).then((data) => {
          setCoin(data)
        })

    }
    Alldata();
  }, [])
  const handleChange = ((event) => {
    setSearch(event.target.value)
  });
  const filteredCoin = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <>
      <h1 className="text-center text-success font-weight-bold">Crypto-Currency</h1>
      <div className="inputfield d-flex mr-5 flex-direction-column mt-5">
        <input className=" container form-control" type="text" onChange={handleChange} placeholder="Default input" />

      </div>


      <section class="home mt-5 text-center">
        <div class="container-fluid">
          <div class="row">
            <div class="col-10 mx-auto">



              <div class="row">
                <div class="col-10 col-md-2 pt-5 pt-lg-0 order-2 order-lg-1">
                  <h5>Symbol</h5>
                </div>

                <div class="col-10 col-md-2 pt-5 pt-lg-0 order-1 order-lg-2">
                  <h5>Name</h5>
                </div>
                <div class="col-10 col-md-2 pt-5 pt-lg-0 order-1 order-lg-2">
                  <h5>Market Rate</h5>
                </div>
                <div class="col-10 col-md-2 pt-5 pt-lg-0 order-1 order-lg-2">
                  <h5>Total Worths</h5>
                </div>
                <div class="col-10 col-md-2 pt-5 pt-lg-0 order-1 order-lg-2">
                  <h5>24hour % changed</h5>
                </div>



              </div>
            </div>
          </div>
        </div>
      </section>


      {
        filteredCoin.map((data) => {
          return (
            <Coins key={data.id}
              name={data.name}
              image={data.image}
              symbol={data.symbol}
              price={` ${data.current_price}$`}
              volume={data.total_volume}
              priceChange={`${data.price_change_percentage_24h}`}
              rank={data.market_cap_rank} />
          )
        })

      }


    </>
  )
}

export default App
