export default {
  coaches(state) {
    return state.coaches; //get a coaches from a state()
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0; //  return true if we have coaches (atleast one coach) and returns false otherwise
  },

  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
};
