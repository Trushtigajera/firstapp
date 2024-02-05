import './App.css';
import { FaLocationDot, FaCheck } from "react-icons/fa6";
import { FaTwitter, FaFacebookF, FaYoutube, FaBehance } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
function App() {
  return (
    <div>
      <header>
        <div className='container'>
          <div className='main1 flex justy'>
            <div className='top flex'>
              <div className='left flex'>
                <i><FaLocationDot></FaLocationDot></i>
                <div>123 Street, New York, USA</div>
              </div>
              <div className='right flex'>
                <i><BsEnvelopeFill></BsEnvelopeFill></i>
                <div>mail@domain.com</div>
              </div>
            </div>
            <div className='top2 justy'>
              <div>
                <a><FaTwitter></FaTwitter></a>
                <a><FaFacebookF></FaFacebookF></a>
                <a><AiFillInstagram></AiFillInstagram></a>
                <a><FaYoutube></FaYoutube></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='bg2'>
        <div className='container'>
          <div className='flex justy'>
            <div className='logo'>
              <img src={require('./image/p1.jpeg')}></img>
            </div>
            <div className='menu flex'>
              <div className='flex menu1'>
                <div><a className='active'>Home</a></div>
                <div><a>About us</a></div>
                <div><a>Menu</a></div>
                <div><a>Our Chef</a></div>
                <div><a>Reservation</a></div>
                <div><a>Contact us</a></div>
              </div>
              <div className='theme'>
                Reservation
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main3">
        <div class="img_item">
          <img src={require('./image/p2.jpeg')}></img>
          <div class="container">
            <div class="con">Cafeteria</div>
            <div class="con con1">DELICIOUS FOOD</div>
            <div class="con con2"> & FRESH, FOOD</div>
            <div class="con3 elementor-animation-float">
              Book A Table Now
            </div>
          </div>
        </div>
      </div>
      <div className='bg3'>
        <div className='container'>
          <div className='flex justy'>
            <div className='img_1'>
              <img src={require('./image/p3.jpeg')}></img>
            </div>
            <div className='text2'>
              <div><h3>Our Introduction</h3></div>
              <div><h1>About Cafeteria</h1></div>
              <div><a>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</a></div>
              <div><p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p></div>
              <div className='theme1'>
                Discover more
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main5">
        <div class="container">
          <div class="topic flex justify">
            <div class="item_1">
              <div class="pro_img">
                <img src={require('./image/p4.png')}></img>
              </div>
              <div class="con_item">100% unique food</div>
              <div class="just">Fusce sed urna lobortis ultric mauris nibh molestie es nulla ac euismod.</div>
            </div>
            <div class="item_2">
              <div class="pro_img">
                <img src={require('./image/p5.png')}></img>
              </div>
              <div class="con_item">authentic atmosphere</div>
              <div class="just">Aenean vehi cula libero mauris nec neque ullamcorper dolor mollis quis.</div>
            </div>
            <div class="item_3">
              <div class="pro_img">
                <img src={require('./image/p6.png')}></img>
              </div>
              <div class="con_item">skilled chef</div>
              <div class="just">Curabitur dignissim sapien quis nisi ornar sed scelerisq ligula dignissim.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="main6">
        <div class="container">
          <div className='object flex justy'>
            <div class="left_in">
              <div class="obj_1">Discover More</div>
              <div class="obj_2">High Professional Service</div>
              <div class="obj_3">Morbi pharetr se id lectus iaculis, nec commodo mauris interdum. Quisque ipsum neque , ullamcorper in diam nec.</div>
              <div class="obj_4"><a><FaCheck></FaCheck></a>All the lorem ipsum generators on the Internet</div>
              <div class="obj_5"><a><FaCheck></FaCheck></a>When an unknown printer took a galley</div>
              <div class="obj_6"><a><FaCheck></FaCheck></a>Various versions have evolved years</div>
              <div class="obj_7">Learn More about us</div>
            </div>
            <div class="right_in">
              <img src={require('./image/p3.jpeg')}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="main7">
        <div class="container">
          <div class="quality flex justy">
            <div class="quality_food flex justy">
              <img src={require('./image/p8.png')}></img>
              <div>
                <h3>Best Atmosphere</h3>
                <p>Nulla condimentum aliquet elemen tum auctor maecenas elementu lacus eros.</p>
              </div>
            </div>
            <div class="quality_food flex justy">
              <img src={require('./image/p9.png')}></img>
              <div>
                <h3>High Food Quality</h3>
                <p>Nulla condimentum aliquet elemen tum auctor maecenas elementu lacus eros.</p>
              </div>
            </div>
            <div class="quality_food flex justy">
              <img src={require('./image/p10.png')}></img>
              <div>
                <h3>Healthy on a budget</h3>
                <p>Nulla condimentum aliquet elemen tum auctor maecenas elementu lacus eros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main8">
        <div class="container">
          <div class="logopi flex">
            <div class="logo_item">
              <img src={require('./image/p11.png')}></img>
            </div>
            <div class="logo_item">
              <img src={require('./image/p11.png')}></img>
            </div>
            <div class="logo_item">
              <img src={require('./image/p11.png')}></img>
            </div>
            <div class="logo_item">
              <img src={require('./image/p11.png')}></img>
            </div>
          </div>
        </div>
      </div>
      <div class="main9">
        <div class="container">
          <div class="Chefs">
            <div class="Experts_Staff">
              <span class="flex align">Experts Staff</span>
              <h1 class="flex justy align">Meet The Chefs</h1>
            </div>
          </div>
          <div class="Experts_img flex">
            <div class="img_place flex">
              <div class="part_9">
                <div className='img1'>
                  <img src={require('./image/p13.webp')}></img>
                </div>
                <h3 class="flex justy">Jhon Due</h3>
                <p class="flex justy">Chef</p>
                <a>
                  <div><FaFacebookF></FaFacebookF></div>
                  <div ><FaTwitter></FaTwitter></div>
                  <div><AiFillInstagram></AiFillInstagram></div>
                </a>
              </div>
              <div class="part_9">
                <div className='img1'>
                  <img src={require('./image/p14.webp')}></img>
                </div>
                <h3 class="flex justy">Paule Marle</h3>
                <p class="flex justy">Chef</p>
                <a>
                  <div><FaFacebookF></FaFacebookF></div>
                  <div ><FaTwitter></FaTwitter></div>
                  <div><AiFillInstagram></AiFillInstagram></div>
                </a>
              </div>
              <div class="part_9">
                <div className='img1'>
                  <img src={require('./image/p15.webp')}></img>
                </div>
                <h3 class="flex justy">Jem Kiyara</h3>
                <p class="flex justy">Server</p>
                <a>
                  <div><FaFacebookF></FaFacebookF></div>
                  <div ><FaTwitter></FaTwitter></div>
                  <div><AiFillInstagram></AiFillInstagram></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="main_1">
          <div class="slider_contant">
            <div class="score flex justy align">
              <div>
                <h1>75</h1>
                <p>Tasty Dishes</p>
              </div>
              <div>
                <h1>80k</h1>
                <p>Dishes Served</p>
              </div>
              <div>
                <h1>9</h1>
                <p>Restaurants</p>
              </div>
              <div>
                <h1>152k</h1>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

        </div>
        <div class="main_point">
          <div class="img_score">
            <div class="img_main justy"></div>
          </div>
          <div class="img_sed">
            <div class="box">,,</div>
            <p class="flex justy align">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
            <img src={require('./image/p17.webp')}></img>
            <h1>Albert Doe</h1>
          </div>
        </div>
      </div>
      <div class="main10">
        <div class="container">
          <div class="OurMenu">
            <h1 class="flex justiy align">Choose a Dish</h1>
            <h2 class="flex justiy align">Our Menu</h2>
            <div class="choose flex">
              <div class="leftmenu">
                <div class="subour flex justy">
                  <div class="subleft flex">
                    <h3>Yummy Pasta & Noddles</h3>
                  </div>
                  <div class="subright">
                    <h4>$10.99</h4>
                  </div>
                </div>
                <p>Short description about the menu item goes here...</p>
                <div class="subour1 flex justy">
                  <div class="subleft flex">
                    <h3>Fresh Meat & Rice</h3>
                  </div>
                  <div class="subright">
                    <h4>$10.99</h4>
                  </div>
                </div>
                <p>Short description about the menu item goes here...</p>
                <div class="subour2 flex justy">
                  <div class="subleft flex">
                    <h3>Melted Chicken Toast</h3>
                  </div>
                  <div class="subright">
                    <h4>$10.99</h4>
                  </div>
                </div>
                <p>Short description about the menu item goes here...</p>
                <div class="subour3 flex justy">
                  <div class="subleft flex">
                    <h3>Hot Fried Fish</h3>
                  </div>
                  <div class="subright">
                    <h4>$10.99</h4>
                  </div>
                </div>
                <p>Short description about the menu item goes here...</p>
                <div class="subour4 flex justy">
                  <div class="subleft flex">
                    <h3>Vegetarian Spicy Soup</h3>
                  </div>
                  <div class="subright">
                    <h4>$6.00</h4>
                  </div>
                </div>
                <p>Short description about the menu item goes here...</p>
              </div>
              <div class="rightmenu flex">
                <div class="img_right flex justy">
                  <img src={require('./image/p18.jpeg')}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="main11">
          <div class="container">
            <div className='flex main_imporat'>
              <div class="Important">
                <div class="Important_logo">
                  <img src={require('./image/p1.jpeg')}></img>
                  <p>Nunc ac lectus ullamcorper ultrices felis quis condimentum nunc.</p>
                  <div class="icon_main flex">
                    <a className='icon_1 flex justiy align'><FaTwitter></FaTwitter></a>
                    <a className='icon_2 flex justiy align'><FaFacebookF></FaFacebookF></a>
                    <a className='icon_3 flex justiy align'><AiFillInstagram></AiFillInstagram></a>
                    <a className='icon_4 flex justiy align'><FaBehance></FaBehance></a>
                  </div>
                </div>
              </div>
              <div>
                <div className='imp_2'>
                  <h3>Important</h3>
                  <div className='flex'>
                    <div className='im_1'>
                      <p>Home</p>
                      <p>About</p>
                      <p>Menu</p>
                    </div>
                    <div className='im_2'>
                      <p>Gallery</p>
                      <p>FAQ</p>
                      <p>Contact</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='imp_3'>
                  <h3>contact us</h3>
                  <div className='con_us'>
                    <p>info&example.com</p>
                    <p>(888) 1234-5678</p>
                    <p>121 king st. mcg VIC 3000, Australia</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='imp_4'>
                  <h3>GALLERY</h3>
                  <div className='gal_1 flex'>
                    <img src={require('./image/p20.jpeg')}></img>
                    <img src={require('./image/p21.webp')}></img>
                    <img src={require('./image/p22.webp')}></img>
                  </div>
                  <div className='gal_2 flex'>
                    <img src={require('./image/p23.webp')}></img>
                    <img src={require('./image/p24.webp')}></img>
                    <img src={require('./image/p25.webp')}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
