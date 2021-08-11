import Vue from "vue"

export function passRouter(params) {
    this.$router.push(params).catch(()=>{})
}