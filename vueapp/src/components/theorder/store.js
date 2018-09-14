export default {
    namespaced: true,
    state: {
        curpage: 1,
        eachpage: 5,
        rows: [],
        maxpage: 0,
        total: 0,
    },
    mutations: {
        getEmpByPage(state, payload) {
            Object.assign(state, payload)
        },
        setEachPage(state, payload){
            state.eachpage=payload
            //  console.log(state, payload)
        },
        setCurPage(state, payload){
            state.curpage=payload
        },
        max(state){
            state.curpage++
            if(state.curpage>=state.maxpage){
                state.curpage=state.maxpage
            }
        },
        min(state){
            state.curpage--
            // if(state.curpage<=state.maxpage){
            //     state.curpage=state.maxpage
            // } 
        }
    },
    actions: {
        async asyncGetEmpByPage(context ,{ curpage, eachpage } = {}) {
            let data = await fetch(`/order?page=${curpage ? curpage : context.state.curpage}&rows=${eachpage ? eachpage : context.state.eachpage}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => {
                return response.json();
            });
            context.commit("getEmpByPage", data)
            // console.log(data,"123") 
        },
        async asyncdelete(context,id) {
            console.log(id,"123")
            await fetch(`/order/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => {
                return "success"
            });
            // context.commit("getEmpByPage", data)
            //  console.log(data,"1232") 
        },
    }
}