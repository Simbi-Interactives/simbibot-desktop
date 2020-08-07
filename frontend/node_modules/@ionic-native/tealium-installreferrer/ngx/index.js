var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { IonicNativePlugin, cordova } from '@ionic-native/core';
import { Injectable } from '@angular/core';
var TealiumInstallReferrer = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrer, _super);
    function TealiumInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrer.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrer.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrer.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrer.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrer.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrer.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrer.platforms = ["Android"];
    TealiumInstallReferrer.install = "";
    TealiumInstallReferrer = __decorate([
        Injectable()
    ], TealiumInstallReferrer);
    return TealiumInstallReferrer;
}(IonicNativePlugin));
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQWtDQywwQ0FBaUI7Ozs7SUFPM0QsOENBQWEsYUFBQyxZQUFvQjtJQVVsQyw0Q0FBVyxhQUFDLFlBQW9COzs7Ozs7O0lBakJyQixzQkFBc0I7UUFEbEMsVUFBVSxFQUFFO09BQ0Esc0JBQXNCO2lDQW5DbkM7RUFtQzRDLGlCQUFpQjtTQUFoRCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAcGFpZFxuICogQG5hbWUgVGVhbGl1bUluc3RhbGxSZWZlcnJlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIG1vZHVsZSBkZXBlbmRzIG9uIHRoZSBbVGVhbGl1bSBDb3Jkb3ZhIFBsdWdpbl0oaHR0cHM6Ly9naXRodWIuY29tL3RlYWxpdW0vY29yZG92YS1wbHVnaW4pLiBXaXRob3V0IGl0LCB0aGlzIG1vZHVsZSB3aWxsIG5vdCBkbyBhbnl0aGluZy5cbiAqIEltcGxlbWVudHMgYSBCcm9hZGNhc3QgUmVjZWl2ZXIgZm9yIHRoZSBJTlNUQUxMX1JFRkVSUkVSIGludGVudC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYFxuICogaW1wb3J0IHsgVGVhbGl1bUluc3RhbGxSZWZlcnJlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvdGVhbGl1bS1pbnN0YWxscmVmZXJyZXIvbmd4JztcbiAqXG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YWxsUmVmZXJyZXI6IFRlYWxpdW1JbnN0YWxsUmVmZXJyZXIpIHsgfVxuICpcbiAqXG4gKiB0aGlzLmluc3RhbGxSZWZlcnJlci5zZXRQZXJzaXN0ZW50KFwibWFpblwiKTtcbiAqIHRoaXMuaW5zdGFsbFJlZmVycmVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcbiAqXG4gKlxuICpcbiAqIGBgYFxuICovXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnVGVhbGl1bUluc3RhbGxSZWZlcnJlcicsXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1pbnN0YWxscmVmZXJyZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW1JbnN0YWxsUmVmZXJyZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGVhbGl1bS9jb3Jkb3ZhLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXG4gIGluc3RhbGw6ICcnIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZWFsaXVtSW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGluc3RhbGwgcmVmZXJyZXIgaW5mb3JtYXRpb24gYXMgcGVyc2lzdGVudCBkYXRhXG4gICAqIEBwYXJhbSBpbnN0YW5jZU5hbWUge3N0cmluZ30gWW91ciBhcmJpdHJhcnkgVGVhbGl1bSBpbnN0YW5jZSBuYW1lIHByb3ZpZGVkIGF0IGluaXQgdGltZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZXRQZXJzaXN0ZW50KGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGluc3RhbGwgcmVmZXJyZXIgaW5mb3JtYXRpb24gYXMgdm9sYXRpbGUgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Vm9sYXRpbGUoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19