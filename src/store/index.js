import axios from 'axios'
import router from '../router'

let api = axios.create({
  // baseURL: 'http://localhost:3000/api/',
  baseURL: 'https://afternoon-meadow-84083.herokuapp.com/api/',
  timeout: 2000,
  withCredentials: true
})

let base = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://afternoon-meadow-84083.herokuapp.com/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  loginMessage: '',
  user: {name:'',email:''},
  isGuest: false,
  myVaults: {},
  myKeeps: {},
  currentVaultId: '',
  error: {}
}

let handleError = (err) => {
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions:
  {
    register(register_object) {
      console.debug("In the register method in the store.")
      base.post('register', register_object)
        .then(res => {
          //need to do some error checking for improper regristration. 
          //the next two lines are setting the active state in the local store.
          state.user = res.data.data
        }).catch(handleError)
      router.push({ path: 'keeps/' })
    },

    login(login_object) {
      base.post('login', login_object)
        .then(res => {
          console.debug("res.data :", res.data)
          // if (res.data.error.message == 'Invalid Email or Password') 
          if (res.data.error) 
          {state.loginMessage = 'Invalid email or password.'}
          else {
            state.user = res.data.data
            console.debug("state.user: ", state.user)
            router.push({ path: 'keeps/' })
          }
        }).catch(handleError)
    },

    guestLogin() {
      state.user = { _id: '00000', name: ' ', email: 'guest', password: null }
      state.user.isGuest = true;
      router.push({ path: '/keeps/' })
    },

    createKeep(obj_keep) {
      api.post('keeps', obj_keep)
        .then(res => {
          state.keeps = res.data.data;
          state.myKeeps.push(state.keeps)
        }).catch(handleError)
      router.push({ path: '/keeps/' })
    },

    createVault(obj_vault) {
      api.post('vaults', obj_vault)
        .then(res => {
        }).catch(handleError)
      // router.push({ path: '/vaults/' })
    },

    getKeeps() {
      api.get('keeps')
        .then(res => {
          state.keeps = res.data.data;
        }).catch(handleError)
    },

    getVaults() {
      api.get('vaults')
        .then(res => {
          state.myVaults = res.data.data;
        }).catch(handleError)
    },

    setKeepToVault(keep_obj, vaultId) {
      api.get('vaults/' + vaultId)
        .then(res => {
          let keeps = res.data.data.keeps
          res.data.data.keeps.push(keep_obj)
          let obj_keep = {}
          obj_keep.keeps = keeps
          api.put('vaults/' + vaultId, obj_keep)
            .then(res => {
            }).catch(handleError)
        }).catch(handleError)
      this.incrementVaults(keep_obj._id)
      this.flyerGetVaults('')
      router.push({ path: '/keeps/' })
    },

    sendToCurrentVault() {
      //console.debug("In send to CurrentVault in store.")
      router.push({ name: 'readVault' })
    },

    flyerGetKeeps(id) {
      //console.debug("In Flyer Get Keeps with: ", id)
      api.get('keeps/')
        .then(res => {
          //console.debug("data returned: ", res)
          state.myKeeps = res.data.data;
        }).catch(handleError)
    },

    flyerGetKeep(id) {
      //console.debug("In Flyer Get Keep with: ", id)
      api.get('keeps/' + id)
        .then(res => {
          //console.debug("data returned: ", res)
          state.myKeeps = res.data.data;
        }).catch(handleError)
    },

    flyerGetVaults(id) {
      //console.debug("In Flyer Get Valuts with: ", id)
      api.get('vaults/')
        .then(res => {
          //console.debug("data returned: ", res)
          state.myVaults = res.data.data;
        }).catch(handleError)
    },

    flyerGetVault(id) {
      //console.debug("In Flyer Get Valut with: ", id)
      api.get('vaults/' + id)
        .then(res => {
          //console.debug("data returned: ", res)
          state.myVaults = [];
          state.myVaults.push(res.data.data);
        }).catch(handleError)
    },

    deleteVault(id) {
      console.debug("In store delete vault method with: ", id)
      api.delete('vaults/' + id)
        .then(res => {
          //console.debug("data returned: ", res)
          state.myVaults = res.data.data;
          router.push({ path: '/vaults/' })
        }).catch(handleError)
    },

    deleteKeep(id) {
      //console.debug("In store delete keep method with: ", id)
      api.delete('keeps/' + id)
        .then(res => {
          //console.debug("data returned: ", res)
          state.myVaults = res.data.data;
          router.push({ path: '/keeps/' })
        }).catch(handleError)
    },

    incrementViews(id) {
      api.get('keeps/' + id)
        .then(res => {
          let obj_keep = res.data.data
          obj_keep.views = obj_keep.views + 1;
          api.put('keeps/' + id, obj_keep)
            .then(res => {
            }).catch(handleError)
        }).catch(handleError)
    },

    incrementVaults(id) {
      api.get('keeps/' + id)
        .then(res => {
          let obj_keep = res.data.data
          obj_keep.timesVaulted = obj_keep.timesVaulted + 1;
          api.put('keeps/' + id, obj_keep)
            .then(res => {
            }).catch(handleError)
        }).catch(handleError)
    },

    userHasVaults() {
      let vaults = state.myVaults;
      let user = state.user;
      //console.debug("user has vaults: vaults", vaults)
      //console.debug("user has vaults: user", user)
      for (var i = 0; i < vaults.length; i++) {
        let vault = vaults[i];
        if (vault.userId == user._id)
        { return true; }
      }
      return false;
    },

    sendToRegister() {
      router.push("/register")
    },

    sendToLogin() {
      router.push("/login")
    },
  }
}

