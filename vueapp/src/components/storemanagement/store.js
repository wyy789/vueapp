export default {
    namespaced: true,
    state: {
        curpage: 1,
        eachpage: 10,
        rows: [
            // {
            //     shopName: "2016-05-03",
            //     shopLicenceNum: "王小虎",
            //     shopLicenceImg: "上海",
            //     shopAdd: "普陀区",
            //     shopLocation: "上海市普陀区金沙江路 1518 弄",
            //     shopCorporate: 1,
            //     shopTel,
            //     shopImg,
            //     shopFeature,
            //     zip1,
            //     shopEmployee,
            //     zip,
            // },
        ],
        maxpage: 0,
        total: 0
    },
    mutations: {
        getstoreList(state, data) {
            Object.assign(state, data)
            console.log(state)
        },
        getEmpPage(state, data) {
            Object.assign(state, data)
        },
        setCurpage(state, curpage) {
            state.curpage = curpage
        },
        setEachpage(state, eachpage) {
            state.eachpage = eachpage
        },
        homePage(state) {
            state.curpage = 1
        },
        lastPage(state) {
            state.curpage = state.maxpage
        },
        upPage(state) {
            if (state.curpage != 1) {
                state.curpage--
            }
        },
        dnPage(state) {
            if (state.curpage != state.maxpage) {
                state.curpage++
            }
        }
    },
    actions: {
        async ansycgetStore(context) {
            let data = await fetch(`/shop?page=${context.state.curpage}&rows=${context.state.eachpage}`, {
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
        },
        async asyncstoreExamine(context, id) {
            console.log(id)
            await fetch(`/shop/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    status: "已审核"
                })
            })
        },
        async asyncstoreUpdate(context, data) {
            console.log(data)
            let id = data._id;
            let shopName = data.shopName;
            let shopAdd = data.shopAdd;
            let shopLocation = data.shopLocation;
            let shopCorporate = data.shopCorporate;
            let shopTel = data.shopTel;
            let shopFeature = data.shopFeature;
            await fetch(`/shop/update/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    shopName,
                    shopAdd,
                    shopLocation,
                    shopCorporate,
                    shopTel,
                    shopFeature
                })
            })
        },
        async ansycsearch(context, datas) {
            console.log(datas)
            let data = await fetch(`/shop?type=${datas.type}&text=${datas.value}&page=${context.state.curpage}&rows=${context.state.eachpage}`, {
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
        },
    }
}