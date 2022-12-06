
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';


import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoutes from './routes/PrivateRoutes';





function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
       
        
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/courses',
          loader: () => fetch('http://localhost:5000/products'),
          element: <Courses></Courses>
        },
        {
          path: '/courseDetails/:id',
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
          element: <CourseDetails></CourseDetails>
        },
       {
        path: '/checkout/:id',
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
        element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>
       }
      ],

    },

  ])


  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;