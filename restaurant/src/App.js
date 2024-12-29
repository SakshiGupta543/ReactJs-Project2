import pic from './pic.jpeg';
import pic2 from './pic2.jpeg';
import pic3 from './pic3.jpeg';
import pic4 from './pic4.jpeg';
import pic5 from './pic5.jpeg';
import pic6 from './pic6.jpeg';
import pic7 from './pic7.jpeg';
import pic8 from './pic8.jpeg';
import pic9 from './pic9.jpeg';
import './App.css';

function Rest() {
  return (
    <>
   
    <img src={pic} className='a-pic' alt='a-pic'></img>
    
    <pre>
        <ul>
        <li><a class="active" href="https://www.henkitchenbar.com/">HOME</a></li>
        <li><a  href="https://www.freshmenu.com/">FRESH MENU</a></li>
        <li><a  href="https://www.mydigimenu.com/restaurant-digital-tablet-ipad-menu">FEATURES</a></li>
        <li><a  href="https://foodserviceindia.com/#">SERVICES</a></li>
    </ul>
    </pre>
    
    <h1>Indian  Cuisine</h1>
    <p>Indian cuisine, the foods and methods of their preparation traditional to India. India does not have a single cuisine. Due to its wide variety of climates, soil types, cultures, and religions, as well as influences from other countries, India has a diverse range of cuisines. As a whole, Indian cuisine can be dated to the prehistoric period and can be found across the world wherever there is a significant Indian diaspora. Indian cuisine has also played a key role in global history, Indian spices being a goal of the European Age of Discovery.</p>
    
    <h1 className='a1'>Indian Food</h1>
    <p className='a2'>Indian food is different from rest of the world not only in taste but also in cooking methods. It reflects a perfect blend of various cultures and ages. Just like Indian culture, food in India has also been influenced by various civilizations, which have contributed their share in its overall development and the present form.</p>

    <img src={pic2} className='b-pic2' alt='b-pic2'></img>
    <img src={pic3} className='b1-pic3' alt='b1-pic3'></img>
    <img src={pic4} className='b2-pic4' alt='b2-pic4'></img>
    <img src={pic5} className='b3-pic5' alt='b3-pic5'></img>
    
    <h1 className='a3'>Chinese Food</h1>
    <p className='a4'>The phrase is a testament to the popularity of Chinese food around the world. Food is an important part of daily life for Chinese people. Chinese not only enjoy eating but believe eating good food can bring harmony and closeness to the family and relationships.

                                  Shopping daily for fresh food is essential for all Chinese cooking. Unlike the fast food society of the U.S., the Chinese select live seafood, fresh meats and seasonal fruits and vegetables from the local market to ensure freshness. </p>
    
    <img src={pic6} className='b4-pic6' alt='b4-pic6'></img>
    <img src={pic7} className='b5-pic7' alt='b5-pic7'></img>
    <img src={pic8} className='b6-pic8' alt='b6-pic8'></img>
    <img src={pic9} className='b7-pic9' alt='b7-pic9'></img>
    <br></br>
    <br></br>

    <div class='container'>
      <h1 className='a5'>Food Order Form</h1>
      <form align='center'> 
      
        Your Name:<input type='text'></input> <br></br>
        Phone:<input type='text'></input> <br></br>  
        E-mail:<input type='text'></input> <br></br>
        Today's Date:<input type='text'></input> <br></br>
        Food Item:<input type='text'></input> <br></br>  
        Size:<input type='text'></input> <br></br>
        Quantity:<input type='text'></input> <br></br>
        Special Request:<input type='text'></input> <br></br>
        <input type='button' value='Submit'></input> <input type='button' value='Reset'></input>

        <h1 className='a6'>Thanks For Order</h1>
        
      </form>

    </div>
    
    </>
  );
}

export default Rest;