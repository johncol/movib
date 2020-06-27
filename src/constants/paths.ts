export const Path = {
  ROOT: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  DASHBOARD: '/dashboard',
  LIST_TO_WATCH: '/dashboard/to-watch',
  ITEM_TO_WATCH: (id: string) => `/dashboard/to-watch/${id}`,
  LIST_WATCHED: '/dashboard/watched',
  ITEM_WATCHED: (id: string) => `/dashboard/watched/${id}`,
  SEARCH: '/dashboard/search',
  SEARCH_PARAM: (query: string) => `/dashboard/search?query=${query}`,
  SEARCH_RESULT: (id: string = ':id') => `/dashboard/search/${id}`,
  FEATURES: '/dashboard/features',
};
