import * as Loadable from 'react-loadable';
import ChunkLoading from '../components/ChunkLoading/index';

const modules = [
  {
    path: "/",
    exact: true,
    containerName: "Homepage"
  },
  {
    path: "/detail",
    exact: false,
    containerName: "Detailpage"
  }
];

const routes = modules.map(item => {
  const name = item.containerName;
  return {
    ...item,
    Component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "async-[request]" */ `../containers/${name}`),
      loading: ChunkLoading,
    })
  };
});

export default routes;
