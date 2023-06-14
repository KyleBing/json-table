let app = new Vue({
    el: "#app",
    name: "Json2Table",
    data(){
        return {
            jsonString: ``,
            data: [],
            dataKeys: [], // 数据的 Keys
            tip: '', // 错误提示
            highlightRows: [], // rowIndexes
            highlightCols: [], // rowIndexes
            tableHeight: 500
        }
    },
    mounted(){
        this.tableHeight = innerHeight - 200
    },
    methods: {
        confirm(){
            try {
                this.data = []
                this.data = JSON.parse(this.jsonString)
                this.dataKeys = []
                this.data.forEach(item => {
                    // 获取对象数组中属性最多的那个对象的 keys
                    if (Object.keys(item).length > this.dataKeys.length){
                        this.dataKeys = Object.keys(item)
                    }
                })
                this.tip = ''
                location =  location.origin + location.pathname + '#table'
            } catch (err){
                this.tip = err
            }
        },

        // 清空 rows
        clearHighlightRows(){
            this.highlightRows = []
        },

        // 添加或删除点击的 Row index
        toggleHighlightRows(index){
            let highlightRowsSet = new Set(this.highlightRows)
            if (highlightRowsSet.has(index)){
                this.highlightRows = this.highlightRows.filter(item => item !== index)
            } else {
                this.highlightRows.push(index)
            }
        },

        // 清空 cols
        clearHighlightCols(){
            this.highlightCols = []
        },

        // 添加或删除点击的 Row index
        toggleHighlightCols(index){
            let highlightColsSet = new Set(this.highlightCols)
            if (highlightColsSet.has(index)){
                this.highlightCols = this.highlightCols.filter(item => item !== index)
            } else {
                this.highlightCols.push(index)
            }
        }
    },
    watch: {}
})
