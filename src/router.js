import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/CoachDetail.vue';
import CoachesList from './pages/CoachesList.vue';
import CoachRegistration from './pages/CoachRegistration.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true, //when adding props true the vue router will pass the value ':id' holds as a prop to coachDetail
      children: [
        { path: 'contact', component: ContactCoach }, // /coaches/c1/contact
      ],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/request', component: RequestsReceived },
    { path: '/:NotFound(.*)', component: NotFound },
  ],
});

export default router;
