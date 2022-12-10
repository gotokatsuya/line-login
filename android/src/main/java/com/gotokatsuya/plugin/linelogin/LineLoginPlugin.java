package com.gotokatsuya.plugin.linelogin;

import android.util.Log;
import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Collection;

@CapacitorPlugin(name = "LineLogin")
public class LineLoginPlugin extends Plugin {

    // private LineLogin implementation = new LineLogin();

    @PluginMethod
    public void login(PluginCall call) {
        JSArray arg = call.getArray("permissions");
        Collection<String> permissions;
        try {
            permissions = arg.toList();
            Log.d(getLogTag(), permissions.toString());
        } catch (Exception e) {
            Log.e(getLogTag(), "login: invalid 'permissions' argument", e);
            call.reject("Invalid permissions argument");
            return;
        }
        JSObject ret = new JSObject();
        call.resolve(ret);
    }
}
