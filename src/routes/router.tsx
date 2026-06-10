import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/shared/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';
import { ReportPage } from '@/pages/ReportPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/report',
        element: <ReportPage />,
      },
    ],
  },
]);
