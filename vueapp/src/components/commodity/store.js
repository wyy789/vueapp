<<<<<<< HEAD
=======
export default {
    namespaced: true,
    state: {
        curpage: 0,
        eachpage: 5,
        rows: [],
        total: 0,
        maxpage: 0
    },
    mutations: {
        getEmpByPage(state, payload) {
            Object.assign(state, payload)
        },
        setCurPage(state, payload) {
            state.curpage = payload;
        },
        setEachPage(state, payload) {
            state.eachpage = payload;
        },
        prePage(state) {
            state.curpage -= 1
        },
        nextPage(state) {
            state.curpage += 1
        },
        addGoods(state, payload) {
            object.assign(state, payload)
        }
    },
    // actions: {
    //     async asyncGetGoodsByPage(context) {
    //         const data = await fetch(`/goods?page=${context.state.curpage}&rows=${context.state.eachpage}`, {
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then(response => {
    //             return response.json();
    //         })
    //         console.log(data)
    //         context.commit("getEmpByPage", data)
    //     },
    //     async asyncDleteData(context, id) {
    //         console.log(id)
    //         const data = await fetch(`/goods/${id}`, {
    //             method: "DELETE",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then(response => {
    //             return "success"
    //         })
    //     }
    // }
}
>>>>>>> 74379e0b743047a92c4cb952dc6d762735703891
