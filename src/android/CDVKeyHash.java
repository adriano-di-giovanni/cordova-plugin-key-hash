package com.adrianodigiovanni.keyhash;

import android.app.Activity;
import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.util.Base64;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

import java.security.MessageDigest;

public class CDVKeyHash extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if (action.equals("getKeyHashes")) {
            cordova.getThreadPool().execute(new Runnable() {
                @Override
                public void run() {
                    try {
                        Context context = cordova.getActivity();

                        String packageName = context.getPackageName();
                        PackageManager packageManager = context.getPackageManager();

                        PackageInfo packageInfo = packageManager.getPackageInfo(packageName, PackageManager.GET_SIGNATURES);

                        JSONArray keyHashes = new JSONArray();

                        for (Signature signature : packageInfo.signatures) {
                            MessageDigest messageDigest = MessageDigest.getInstance("SHA");
                            messageDigest.update(signature.toByteArray());
                            String keyHash = new String(Base64.encode(messageDigest.digest(), Base64.DEFAULT));
                            keyHashes.put(keyHash.trim());
                        }

                        callbackContext.success(keyHashes);
                    } catch (Exception e) {
                        callbackContext.error(e.getMessage());
                    }
                }
            });

            return true;
        }
        return false;
    }
}
