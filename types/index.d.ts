declare module "vue-power-show" {

    /**
     * 初始化组件
     * @param vue 对象
     */
    function install(vue: any): void;

    /**
     * 设置权限验证处理器
     * @param handler 权限验证处理器
     */
    function setPowerHandler(handler: (powers) => boolean): void;

    /**
     * 检查是否有权限
     * @param param 权限参数
     */
    function hasPower(param: any): boolean;

}