import AvoRedAlert from './components/AvoRedAlert.vue'

export default {
    install(Vue, args = {}) {
        if (this.installed) return

        this.installed = true
        this.params = args

        Vue.component('avored-alert', AvoRedAlert)

        const alert = params => {
            window.EventBus.$emit('open', params)
        }
     
        Vue.prototype.$alert = alert
        Vue['$alert'] = alert
    }
}
