// import React, { lazy , Suspense} from "react";
// import ReactDOM from "react-dom";
// import "../index.css";
// import Footer from "./Components/Footer";
// import Body from "./Components/Body";
// import HeaderComponent from "./Components/HeaderComponent";
// import { createRoot } from "react-dom/client";
// import Contact from "./Components/Contact";
// import About from "./Components/About";
// import { createBrowserRouter, RouterProvider,Outlet, } from "react-router-dom";
// import Error from "./Components/Error";
// import RestrauntMenu from "./Components/RestrauntMenu";
// import Profile from "./Components/Profile";
// import { Provider } from "react-redux";
// import store from "../utils/store";
// const Instamart =lazy(()=>import('./Components/Instamart'))
// export const App = () => {
//   return (
//     <Provider store={store}>
//       <HeaderComponent />
//       <Outlet />
//       <Footer />
//     </Provider>
//   );
  
// };
// const Approuter=createBrowserRouter([
//   {
//     path:'/',
//     element:<App/>,
//     errorElement:<Error/>,
//     children: [
//       {
//         path:'/about',
//         element:<About/>,
//         children:[
//           {
//             path:'profile',
//             element:<Profile/>
//           }
//         ]
       
//       },
//       {
//         path:'/',
//         element:<Body/>,
//       },
//       {
//         path:'/contact',
//         element:<Contact/>,
//       },
//       {
//         path:'/restraunt',
//         element:<RestrauntMenu/>,
//       },
//       {
//         path:'/instamart',
//         element:<Suspense fallback={<h3>Component is loading please wait.....</h3>}><Instamart/></Suspense>,
//       }

//     ]
//   }
// ])
// createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}></RouterProvider>);

import React, { lazy, Suspense } from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import HeaderComponent from "./Components/HeaderComponent";
import { createRoot } from "react-dom/client";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"; // Import Routes and Route instead of Switch
import Error from "./Components/Error";
import RestrauntMenu from "./Components/RestrauntMenu";
import Profile from "./Components/Profile";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./Components/Cart";
const Instamart = lazy(() => import('./Components/Instamart'))

export const App = () => {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/restaurant/:id" element={<RestrauntMenu />} />
        <Route path="/instamart" element={<Suspense fallback={<h3>Component is loading please wait.....</h3>}><Instamart /></Suspense>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App
// const Approuter = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/about',
//         element: <About />,
//         children: [
//           {
//             path: 'profile',
//             element: <Profile />
//           }
//         ]

//       },
//       {
//         path: '/',
//         element: <Body />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//       {
//         path: '/restraunt/:id',
//         element: <RestrauntMenu />,
//       },
//       {
//         path: '/instamart',
//         element: <Suspense fallback={<h3>Component is loading please wait.....</h3>}><Instamart /></Suspense>,
//       }

//     ]
//   }
// ]);
// createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}></RouterProvider>);
