import "./navbar.scss"

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Taaha Hussain Khan</span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="" srcset="" /></a>
          <a href="#"><img src="/instagram.png" alt="" srcset="" /></a>
          <a href="#"><img src="/youtube.png" alt="" srcset="" /></a>
          <a href="#"><img src="/dribbble.png" alt="" srcset="" /></a>
        </div>
      </div>
    </div>
  )
}
