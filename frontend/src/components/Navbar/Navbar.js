// import "./Navbar.css";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [moodstate, setMoodstate] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [notiShow, setNotiShow] = useState(false);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const state = useSelector((state) => {
//     console.log();
//     return {
//       isLoggedIn: state.auth.isLoggedIn,
//       token: state.auth.token,
//       user_image: state.auth.user_image,
//       craft: state.auth.userInfo.craft_id,
//       noNotification: state.noti.counterNotification,
//       mood: state.Mood.mood,
//     };
//   });
//   const mood = state.mood;

//   const [notificationsCount, setNotificationsCount] = useState(
//     state.noNotification
//   );

//   let newTheme = moodstate ? "lightMood" : "darkMood";
//   return (
//     <>
//       <div>
//         <Navbar collapseOnSelect expand="lg"  style={{boxShadow:"none"}}>
          
//         </Navbar>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// import "./Navbar.css";

// const Navbar = () => {
  

//   return (
//     <>
//       <div>
//         <p>dsa</p>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom إذا كنت تستخدم React Router
import logo from '../img/logo.png'; // تأكد من تحديث المسار حسب موقع ملف الشعار

const Navbar = () => {
  return (
    <nav style={{ background: '#50B8B3', display: 'flex', justifyContent: 'center', padding: '1rem' }}>
      <Link to="/">
        <img src={logo} alt="Logo" style={{ height: '100px', width: '250px' }} />
      </Link>
    </nav>
  );
};

export default Navbar;

