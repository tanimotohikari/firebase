import start from './pages/start';
import game from './pages/game';
import result from './pages/result';

export default [
  {
    path: '/',
    component: start,
  },
  {
    path: '/game',
    component: game,
  },
  {
    path: '/result',
    component: result,
  }
]
