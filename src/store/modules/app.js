//菜单的子树
const app = {
    state: {
        sidebar: {
            opened: false
        }
    },
    //mutation 修改
    mutations: {
        TOGGLE_SIDEBAR: (state) => {
            state.sidebar.opened =! state.sidebar.opened;
        }
    },
    //actions 可以将状态值提交给mutations， 一般的大数据量或异步操作
    actions: {
        TOGGLE_SIDEBAR_AC: ({commit}) => {
            commit('TOGGLE_SIDEBAR');
        }
    }
}

export default app;