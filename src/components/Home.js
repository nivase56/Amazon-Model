import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://m.media-amazon.com/images/I/61LFzlwUpaL._SX3000_.jpg"
            alt=""
            className="home__image"
          />
          <div className="first-content">
            <div className="home__row">
              <div className="row-header">
                <h2>Up to 50% off | Monitor blood sugar at home</h2>
              </div>
              <div className="row-image">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/CC_low_3._SY304_CB592656736_.jpg"
                  alt="img"
                />
                <br />
                <a href="https://www.amazon.in/b?node=18049712031&pf_rd_r=0HH37W2Y4Y8ZW51ZJVXY&pf_rd_p=9ed4a463-753f-483e-8401-04973c2b3aca&pd_rd_r=64ce70a9-009b-466d-a326-afa5e4fc5b61&pd_rd_w=OPWjW&pd_rd_wg=i1TXW&ref_=pd_gw_unk">
                  Visit store
                </a>
              </div>
            </div>
            <div className="home__row">
              <div className="row-header">
                <h2>Bluetooth Calling Smartwatch starts at ₹1,999</h2>
              </div>
              <div className="row-image">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg"
                  alt="img"
                />
                <br />
                <a href="https://www.amazon.in/s?hidden-keywords=B0B3RRWSF6+%7C+B0B5B6PQCT+%7C+B0BF57RN3K+%7C+B0B6BLTGTT+%7C+B0B854R7NS+%7C+B0B5LVS732+%7C+B0BJ72WZQ7+%7C+B09NVPSCQT+%7C+B0B53QFZPY+%7C+B0B3RSDSZ3+%7C+B0B5DDJNH4+%7C+B0BP18W8TM+%7C+B0BF563HB4+%7C+B09V12K8NT+%7C+B09YV4MW2T+%7C+B0B5LW5DFQ+%7C+B0B6BPX5S9+%7C+B09YV42QHZ+%7C+B0B5LWP12T+%7C+B0BF4YBLPX+%7C+B0BRJF98R9+%7C+B0B53NXFFR+%7C+B09RK7XWQS+%7C+B0BBVKRP7B+%7C+B0BMM4MBT2&pd_rd_r=64ce70a9-009b-466d-a326-afa5e4fc5b61&pd_rd_w=NnkB0&pd_rd_wg=i1TXW&pf_rd_p=3a59b28c-4626-48f9-b66f-114571ee563d&pf_rd_r=0HH37W2Y4Y8ZW51ZJVXY&ref=pd_gw_unk">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="home__row">
              <div className="row-header">
                <h2>Up to 70% off | Clearance store</h2>
              </div>
              <div className="row-image">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
                  alt="img"
                />
                <br />
                <a href="https://www.amazon.in/s?rh=n%3A20538600031&language=en_IN&brr=1&rd=1">
                  See more
                </a>
              </div>
            </div>
            <div className="sidebar-one">
              <h2>Sign in for your best experience</h2>
              <button>Sign in securely</button>
              <div className="ad-img">
                <img
                  src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"
                  alt="img5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
