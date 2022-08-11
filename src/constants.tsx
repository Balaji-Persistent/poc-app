export interface usersData   {
  name: string;
  id: number;
}

interface componentPath {
  length: number
  name: string
}

interface routesKeys {
path: string
label: string
component: string
}

export interface routesPath {
  path: string
  label: string
  component: string
  parent?: {
    path: string
    label: string
    component: string
    routes: routesKeys[]
  }
}
