const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4j9k2/",
            name: "springboot4j9k2",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4j9k2/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "企业资产管理系统"
        } 
    }
}
export default base
