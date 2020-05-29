import data from '../mock/products.json'

export const state = () => ({
  products: [...data],
  productCart: [],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: ''
  },
  appInfo: {
    openLoginModal: false,
    openSignUpModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: (state) => {
    return state.products.filter((el) => {
      return el.isAddedToCart
    })
  },
  productsAddedToFavourite: (state) => {
    return state.products.filter((el) => {
      return el.isFavourite
    })
  },
  getProductById: state => (id) => {
    return state.products.find(product => product.id === id)
  },
  isUserLoggedIn: (state) => {
    return state.userInfo.isLoggedIn
  },
  isUserSignedUp: (state) => {
    return state.userInfo.isSignedUp
  },
  getUserName: (state) => {
    return state.userInfo.name
  },
  isLoginModalOpen: (state) => {
    return state.appInfo.openLoginModal
  },
  isSignupModalOpen: (state) => {
    return state.appInfo.openSignupModal
  },
  isCheckoutModalOpen: (state) => {
    return state.appInfo.openCheckoutModal
  },
  quantity: (state) => {
    return state.products.quantity
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = true
      }
    })
  },
  setAddedBtn: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status
      }
    })
  },
  removeFromCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = false
      }
    })
  },
  removeProductsFromFavourite: (state) => {
    state.products.filter((el) => {
      el.isFavourite = false
    })
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched
  },
  setUserName: (state, name) => {
    state.userInfo.name = name
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched
  },
  showLoginModal: (state, show) => {
    state.appInfo.openLoginModal = show
  },
  showSignupModal: (state, show) => {
    state.appInfo.openSignupModal = show
  },
  showCheckoutModal: (state, show) => {
    state.appInfo.openCheckoutModal = show
  },
  addToFavourite: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isFavourite = true
      }
    })
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isFavourite = false
      }
    })
  },
  quantity: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.quantity = data.quantity
      }
    })
  },
  SET_USER: (state, authUser) => {
    state.authUser = authUser
  }
}
