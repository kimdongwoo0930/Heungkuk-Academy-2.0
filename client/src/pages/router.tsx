import { createBrowserRouter } from 'react-router-dom';
import { Login } from './login/Login';
import { NotFound } from '../layouts/NotFound';
import { Root } from '../layouts/Root';
import { Home } from './Home';
import { ClassRoom } from './schedule/ClassRoom/ClassRoom';
import { Room } from './schedule/Room/Room';
import { CreateSurvey } from './survey/CreateSurvey/CreateSurvey';
import { SurveyList } from './survey/SurveyList/SurveyList';
import { Answer } from './survey/Answer/Answer';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: 'login', element: <Login /> }],
    errorElement: <NotFound />,
  },
  {
    path: '/admin',
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
    errorElement: <NotFound />,
  },
  {
    path: '/admin/schedule',
    element: <Root />,
    children: [
      { path: 'classroom', element: <ClassRoom /> },
      { path: 'room', element: <Room /> },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/admin/survey',
    element: <Root />,
    children: [
      { path: 'create', element: <CreateSurvey /> },
      { path: 'list', element: <SurveyList /> },
    ],
    errorElement: <NotFound />,
  },
  {
    path: '/survey/answer/:id',
    element: <Answer />,
    errorElement: <NotFound />,
  },
]);
