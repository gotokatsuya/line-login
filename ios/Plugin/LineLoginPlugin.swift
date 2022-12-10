import Foundation
import Capacitor
import LineSDK

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(LineLoginPlugin)
public class LineLoginPlugin: CAPPlugin {
    // private let implementation = LineLogin()

    @objc func login(_ call: CAPPluginCall) {
        guard let permissions = call.getArray("permissions", String.self) else {
            call.reject("Missing permissions argument")
            return
        }
        print(permissions)
        LoginManager.shared.login(
            permissions: Set(permissions.map { LoginPermission(rawValue: $0) }),
            in: self.bridge?.viewController)
        { result in
            switch result {
            case .success(let loginResult):
                let ret = [
                    "accessToken": [
                        "value": loginResult.accessToken.value
                    ]
                ]
                call.resolve(ret)
            case .failure(let error):
                print(error)
                call.reject(error.errorDescription ?? "LoginManager.login failed")
            }
        }
    }
}
