const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            myIndex = this.cart.indexOf(id)
            if (myIndex >= 0) {
                this.cart.splice(myIndex, 1)
            }
        }
    }
})
