import React from 'react';
import '../css/card2.css'
import { useSelector,useDispatch} from "react-redux";
import { updateUserDetails } from '../Store/Card';

function CardComponent(){
    const firstName = useSelector((state) => state.card.firstName);
    const lastName = useSelector((state) => state.card.lastName)
    const email = useSelector((state) => state.card.email);
    const age = useSelector((state) => state.card.age);
    const sex = useSelector((state) => state.card.sex);
    const image = useSelector((state) => state.card.image)
    const dispatch = useDispatch();

    function handeSubmit(e) {
      e.preventDefault();
      const submitValues = {
        firstName: document.querySelector("#fInput").value,
        lastName: document.querySelector("#lInput").value,
        email: document.querySelector("#email").value,
        age: document.querySelector("#age").value,
        sex: document.querySelector("#sex").value,
        image: document.querySelector("#file").files[0] 
  
      };
      dispatch(updateUserDetails(submitValues));
    
      const reader = new FileReader();
      reader.onload = function(event) {
        const imageUrl = event.target.result;
        const profileImage = document.querySelector(".profile");
        profileImage.src = imageUrl;
      }
      reader.readAsDataURL(submitValues.image);
    }
    
  return (
    <div className="card">
          <div className='container'></div>
       <form onSubmit={handeSubmit} className='userDetails' enctype="multipart/form-data">
          FIRST NAME <input type="text" id="fInput" />
          LAST NAME<input type='text' id='lInput' />
          EMAIL <input type='text' id='email' />
          AGE <input type='text' id='age' />
          SEX <input type='text' id='sex' />
          image<input type='file' id='file'/>
          <button type='submit' name="butt">enter</button>
        </form>
        <h1 className="card-title">{firstName}</h1>
        <div className="card-body">
        <p className="first-name"> First Name:{firstName}</p>
        <p className="last-name"> Last Name:{lastName}</p>
        <p className="email"> Email:{email}</p>
        <p className="age"> Age:{age}</p>
        <p className="sex"> sex:{sex}</p>
      </div>
      <div className='cycle'>
        <img src={image} alt='img' className='profile' />
      </div>
    </div>
  
  );
}

export default CardComponent;
