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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var TealiumInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrerOriginal, _super);
    function TealiumInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrerOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrerOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrerOriginal.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrerOriginal.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrerOriginal.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrerOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrerOriginal.platforms = ["Android"];
    TealiumInstallReferrerOriginal.install = "";
    return TealiumInstallReferrerOriginal;
}(IonicNativePlugin));
var TealiumInstallReferrer = new TealiumInstallReferrerOriginal();
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQW1DNUIsMENBQWlCOzs7O0lBTzNELDhDQUFhLGFBQUMsWUFBb0I7SUFVbEMsNENBQVcsYUFBQyxZQUFvQjs7Ozs7OztpQ0FwRGxDO0VBbUM0QyxpQkFBaUI7U0FBaEQsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHBhaWRcbiAqIEBuYW1lIFRlYWxpdW1JbnN0YWxsUmVmZXJyZXJcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXG4gKiBJbXBsZW1lbnRzIGEgQnJvYWRjYXN0IFJlY2VpdmVyIGZvciB0aGUgSU5TVEFMTF9SRUZFUlJFUiBpbnRlbnQuXG4gKlxuICogQHVzYWdlXG4gKiBgYGBcbiAqIGltcG9ydCB7IFRlYWxpdW1JbnN0YWxsUmVmZXJyZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFsbFJlZmVycmVyOiBUZWFsaXVtSW5zdGFsbFJlZmVycmVyKSB7IH1cbiAqXG4gKlxuICogdGhpcy5pbnN0YWxsUmVmZXJyZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XG4gKiB0aGlzLmluc3RhbGxSZWZlcnJlci5zZXRWb2xhdGlsZShcIm1haW5cIik7XG4gKlxuICpcbiAqXG4gKiBgYGBcbiAqL1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW1JbnN0YWxsUmVmZXJyZXInLFxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtaW5zdGFsbHJlZmVycmVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ3dpbmRvdy50ZWFsaXVtSW5zdGFsbFJlZmVycmVyJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlYWxpdW0vY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxuICBpbnN0YWxsOiAnJyAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVhbGl1bUluc3RhbGxSZWZlcnJlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0UGVyc2lzdGVudChpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHZvbGF0aWxlIGRhdGFcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFZvbGF0aWxlKGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==