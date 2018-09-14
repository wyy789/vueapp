export default {
    namespaced: true,
    state: {
        curPage: 1,
        eachPage: 5,
        rows: [],
        maxPage: 0,
        total: 0
    },
    mutations: {
        spoilmanagementByPage(state, payLoad) {
            Object.assign(state, payLoad)
        },
        setEachPage(state, payLoad) {
            state.eachPage = payLoad
        },
        setCurPage(state, payLoad) {
            state.curPage = payLoad
        }
    },
    actions: {
        async asyncSpoilmanagementByPage(context, { curPage, eachPage } = {}) {
            curPage = curPage ? curPage : context.state.curPage
            eachPage = eachPage ? eachPage : context.state.eachPage

            const data = await fetch(`/member?page= ${curPage}&rows=${eachPage}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(Response => {
                return Response.json();
            });

            // console.log("11",data)
            context.commit("spoilmanagementByPage", data)
        },
        async asyncDeleteSpoilmanagement(context,id) {
              await fetch(`/member/${id}`, {
                method: "Delete",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(Response=>{
                return "success"
            })

        }
    }
}