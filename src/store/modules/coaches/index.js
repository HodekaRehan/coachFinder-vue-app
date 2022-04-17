import coachMutations from './mutations.js';
import coachActions from './actions.js';
import coachGetters from './getters.js';

export default {
  namespaced: true,

  state() {
    return {
      //dummy coaches data
      coaches: [
        {
          id: 'c1',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm John and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Manuel',
          lastName: 'Lorenz',
          areas: ['frontend', 'career'],
          description:
            'I am Manuel and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 25,
        },
      ],
    };
  },

  mutations: coachMutations,
  actions: coachActions,
  getters: coachGetters,
};

//export this module to merge it into our main store
