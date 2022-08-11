
export const routes = [
  {
    path: "/",
    label: "Home",
    component: "HomePage",
    routes: [
      {
        path: "/customersearch",
        label: "customerSearch",
        component: "CustomerSearch",
        routes: [
          {
            path: "/customerdetails",
            label: "CustomerDetails",
            component: "CustomerDetails"
          }
        ]
      }
    ]
  },
  {
    path: "/account",
    label: "AccountDetails",
    component: "AccountDetails",
    routes: [
    ]
  }
];