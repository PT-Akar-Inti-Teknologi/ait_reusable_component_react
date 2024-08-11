import {
  createBrowserRouter
} from "react-router-dom";

import {
  ExampleFormPage,
  ExamplePage,
  ExampleWithQueryParamsPage,
  ExampleWithReactQueryPage
} from "./examples/modules";

import { MobileAppRouter } from "./mobile-app-version/mobileApp.routers";

const router = createBrowserRouter([
  MobileAppRouter,

  {
    element: <ExamplePage />,
    path: '/common-usage'
  },
  {
    element: <ExampleFormPage />,
    path: '/common-usage-form'
  },
  {
    element: <ExampleWithQueryParamsPage />,
    path: '/example-with-query-params'
  },
  {
    element: <ExampleWithReactQueryPage />,
    path: '/'
  },
]);

export default router;
