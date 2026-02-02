import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import pic4 from "./assets/pic4.jpeg";


import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("proposal");

  const moveNo = (e) => {
    e.target.style.left = Math.random() * 200 + "px";
    e.target.style.top = Math.random() * 50 + "px";
  };



  return (
    <div className="app">

      {/* PAGE 1 */}
      {page === "proposal" && (
        <Card>
          <h1>Will you be mine? 💕</h1>
          <p>“From the moment I met you, my heart chose you. Will you walk this journey with me?”</p>
          <div className="btn-area">
            <button className="yes" onClick={() => setPage("propose")}>YES</button>
            <button className="no" onMouseOver={moveNo}>NO</button>
          </div>
        </Card>
      )}

      {/* PROPOSE DAY */}
      {page === "propose" && (
        <Card>
          <h1 className="gold">Happy Propose Day 💍</h1>
          <p>
            “In a world full of choices, my heart chose you without hesitation. Will you choose me too?”
          </p>
          <button className="yes" onClick={() => setPage("dashboard")}>
            See My Gifts →
          </button>
        </Card>
      )}

      {/* DASHBOARD */}
      {page === "dashboard" && (
        <Card>
          <h1>Something For You 💝</h1>
          <div className="grid">
            <Box text="❤️ My Heart" onClick={() => setPage("forever")} />
            <Box text="📸 Our Gallery" onClick={() => setPage("gallery")} />
              
            {/* <Box text="🎥 Our Story" onClick={() => setPage("video")} /> */}
            
          </div>
        </Card>
      )}

      {/* GALLERY */}
     {/* {page === "gallery" && (
  <Card>
    <h1>Our Memories 💕</h1>

    <div className="gallery">
  <div className="img-box"> */}
    {/* <img src="/images/pic1.jpeg" />
  </div>
  <div className="img-box">
    <img src="/images/pic2.jpeg" />
  </div>
  <div className="img-box">
    <img src="/images/pic3.jpeg" />
  </div>
  <div className="img-box">
    <img src="/images/pic4.jpeg" />
  </div>
</div>


    <button className="yes" onClick={() => setPage("dashboard")}>
      Back
    </button>
  </Card>
)} */}
{page === "gallery" && (
  <Card>
    <h1>Our Memories 💕</h1>

    <div className="gallery">
      <div className="img-box" style={{ backgroundImage: `url(${pic1})` }} />
      <div className="img-box" style={{ backgroundImage: `url(${pic2})` }} />
      <div className="img-box" style={{ backgroundImage: `url(${pic3})` }} />
      <div className="img-box" style={{ backgroundImage: `url(${pic4})` }} />
    </div>

    <button className="yes" onClick={() => setPage("dashboard")}>
      Back
    </button>
  </Card>
)}





         
  

      {/* VIDEO */}
      {page === "video" && (
        <Card>
          <h1>Our Story 🎥</h1>
          <video controls>
            <source src="/video.mp4" type="video/mp4" />
          </video>
          <button className="yes" onClick={() => setPage("dashboard")}>Back</button>
        </Card>
      )}

      {/* FOREVER */}
      {page === "forever" && (
        <Card>
          <h1> Hi Ritika... 🤍</h1>
          <p>“I’m a little nervous saying this because I’m not very good with words, but I want to be honest with you. Over time, you’ve become someone I really care about. Talking to you makes me feel calm, happy, and comfortable in a way I didn’t expect. I don’t know how to impress you with big promises, but I do know that I like you genuinely and I respect you a lot. I’d love to take this step slowly, together, and see where it goes. So… if you’re okay with it, would you like to be my girlfriend again? 🤍”</p>
          
          <button className="yes" onClick={() => setPage("dashboard")}>Back</button>
        </Card>
      )}
    </div>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Box({ text, onClick }) {
  return (
    <div className="box" onClick={onClick}>
      {text}
    </div>
  );
}


