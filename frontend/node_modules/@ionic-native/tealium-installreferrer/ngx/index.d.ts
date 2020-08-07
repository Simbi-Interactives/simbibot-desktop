import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @paid
 * @name TealiumInstallReferrer
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Implements a Broadcast Receiver for the INSTALL_REFERRER intent.
 *
 * @usage
 * ```
 * import { TealiumInstallReferrer } from '@ionic-native/tealium-installreferrer/ngx';
 *
 *
 * constructor(private installReferrer: TealiumInstallReferrer) { }
 *
 *
 * this.installReferrer.setPersistent("main");
 * this.installReferrer.setVolatile("main");
 *
 *
 *
 * ```
 */
export declare class TealiumInstallReferrer extends IonicNativePlugin {
    /**
     * This function stores the install referrer information as persistent data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setPersistent(instanceName: string): Promise<any>;
    /**
     * This function stores the install referrer information as volatile data
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setVolatile(instanceName: string): Promise<any>;
}
