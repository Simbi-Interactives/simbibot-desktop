package cordova.plugin.installreferrer;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class InstallReferrer extends CordovaPlugin {
    public static String _referrer = "";

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        callbackContext.success(InstallReferrer._referrer);
        return true;
    }
}