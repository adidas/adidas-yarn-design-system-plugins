import { SET_SIDEBAR_OPEN } from './mutation-types';

export const state = () => ({
  sidebarOpen: true
});

export const getters = {
  sidebarOpen({ sidebarOpen }) {
    return sidebarOpen;
  }
};

export const actions = {
  toggleSidebar({ commit, state: { sidebarOpen } }) {
    commit(SET_SIDEBAR_OPEN, !sidebarOpen);
  }
};

export const mutations = {
  [SET_SIDEBAR_OPEN](state, value) {
    state.sidebarOpen = value;
  }
};
