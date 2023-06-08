let app = new Vue({
    el: "#app",
    name: "Json2Table",
    data(){
        return {
            jsonString: ``,
            data: [],
            tip: '', // 错误提示
        }
    },
    methods: {
        confirm(){
            try {
                this.data = []
                this.data = JSON.parse(this.jsonString)
                this.tip = ''
            } catch (err){
                this.tip = err
            }
        },
    },
    watch: {}
})
