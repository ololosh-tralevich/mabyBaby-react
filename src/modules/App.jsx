import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// import { useDispatch } from 'react-redux';
// import { userOperations } from '../redux/userAccount/userAccount-operations';
import PublicRoute from '../shared/Components/PublicRoute';
import PrivateRoute from '../shared/Components/PrivateRoute';

import LayoutPage from '../pages/LayoutPage';
const AuthPage = lazy(() => import('../pages/AuthPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const TestPage = lazy(() => import('../pages/TestPage'));
const ResultsPage = lazy(() => import('../pages/ResultsPage'));
const UsefulInfoPage = lazy(() => import('../pages/UsefulInfoPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  return (
    <Suspense fallback={<div className="ldsDualRing"></div>}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route element={<PublicRoute />}>
            <Route path="auth" element={<AuthPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route index element={<MainPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="useful-info" element={<UsefulInfoPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to='/' replace/>}/>
      </Routes>
    </Suspense>
  );
};
