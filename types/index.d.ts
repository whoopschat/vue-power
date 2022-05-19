declare module "vue-power-show" {

    function install(vue: any): void;

    interface VPower {

        /**
         * 设置权限验证处理器
         * @param handler 权限验证处理器
         */
        setPowerHandler(handler: (powers) => boolean): void;

        /**
         * 检查是否有权限
         * @param param 参数
         */
        hasPower(param: any): boolean;

    }

}


declare var VPower: import("vue-power-show").VPower;

declare interface Window {
    VPower: import("vue-power-show").VPower;
}