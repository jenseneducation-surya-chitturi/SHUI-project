import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false,
    channels: [],
    isLoading: false,
  },
  mutations: {
    TOGGLE_SETTINGS(state) {
      state.isOpen = !state.isOpen;
    },
    SET_SUBSCRIPTION(state, channel) {
      state.channels = channel;
    },
    SET_LOADING: (state) => (state.isLoading = !state.isLoading),
  },
  actions: {},
  modules: {},
});



/*   
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    streams: [],
    token: '',
  },
  mutations: {
    DISPLAY_STREAMS(state, streams) {
      state.streams = streams;
    },
    ADD_STREAM(state, stream) {
      state.streams.push(stream)
    },
    DELETE_STREAM(state, id) {
      const index = state.streams.find((stream) => stream.id === id)
      state.streams.splice(index, 1)
      console.log(this.state.streams)
    },
    DELETE_ALL_STREAMS(state) {
      state.streams = []
    },
  
  },
  actions: {

    async loadStreams(ctx) {
      const response = await fetch('http://localhost:5000/api/streams', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });
      const data = await response.json();
      console.log(data)
      ctx.commit('DISPLAY_STREAMS', data.streams);
    },
    async addStream(ctx, newStream) {
      console.log(newStream)
      const response = await fetch('http://localhost:5000/api/streams', {
        method: 'POST',
        body: JSON.stringify(newStream),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('ADD_STREAM', data.newStream);
    },
    async deleteStream(ctx, streamId) {
      const response = await fetch('http://localhost:5000/api/stream/', {
        method: 'DELETE',
        body: JSON.stringify(streamId),
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_STREAM', data.id);
    },
    async deleteAllStreams(ctx) {
      const response = await fetch('http://localhost:5000/api/streams/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + ctx.state.token,
        }
      });

      const data = await response.json();
      console.log(data)
      ctx.commit('DELETE_ALL_STREAMS', data.message);
    },
  },
  modules: {
  }
}) */