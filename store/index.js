import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  brandNav: []
};

const mutations = {
  //头部导航产品与新闻信息
  setBrandNav(state, data) {
    state.brandNav = data;
  }
};

const getters = {};

const actions = {
  async nuxtServerInit({ commit }, { app }) {
    //品牌导航
    let res = await app.$api.article.brandNavList();
    commit("setBrandNav", res.data);
  }
};

const store = () =>
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  });

export default store;
