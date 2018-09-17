export default {
    namespaced: true,
    state: {
        curpage: 1,
        eachpage: 5,
        rows: [],
        maxpage: 0,
        total: 0,
        goods: [],
        service: [],
        seeGoods: [],
        seeService: []
    },
    mutations: {
        getstoreList(state, data) {
            Object.assign(state, data)
        },
        getGoods(state, data) {
            state.goods = data
        },
        getService(state, data) {
            state.service = data
            console.log(this.state)
        },
        getSeeGoods(state, data) {
            state.seeGoods = data
            console.log(this.state)
        },
        getSeeService(state, data) {
            state.seeService = data
        },
    },
    actions: {
        async ansycgetStore(context) {
            let data = await fetch(`/storelist?username=zhangsan&page=${1}&rows=${10}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                // console.log(response.json())
                return response.json()
            })
            console.log(data)
            context.commit("getstoreList", data)
        },//得到用户名下的商店
        async ansycgetGoods(context) {
            let data = await fetch(`/storelist/goods?username=zhangsan`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                // console.log(response.json())
                return response.json()
            })
            console.log(data)
            context.commit("getGoods", data)
        },//得到用户名下的商品
        async asyncPutGoods(context, data) {
            console.log(data)
            let datas = await fetch(`/storelist/goods/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.rows)
            })

        },//为用户下面的店面添加商品
        async asyncgetService(context) {
            let data = await fetch(`/storelist/service?username=zhangsan`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                // console.log(response.json())
                return response.json()
            })
            console.log(data)
            context.commit("getService", data)
        },//得到用户名下的服务
        async asyncPutService(context, data) {
            console.log(data)
            let datas = await fetch(`/storelist/service/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data.rows)
            })

        },//为用户下面的店面添加服务
        async asyncSeeCommodity(context, id) {
            let data = await fetch(`/storelist/SeeCommodity/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                return response.json()
            })
            // console.log(data)
            context.commit("getSeeGoods", data)
        },
        async asyncSeeService(context, id) {
            let data = await fetch(`/storelist/SeeService/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => {
                return response.json()
            })
            // console.log(data)
            context.commit("getSeeService", data)
        },
        async asyncShelvesGoods(context, obj) {
            console.log(obj.rows)
            let data = await fetch(`/storelist/ShelvesGoods/${obj.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(obj.rows)
            }).then(response => {
                return response.json()
            })
            console.log(data)
           
        },
    }
}