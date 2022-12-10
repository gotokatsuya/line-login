# line-login-capacitor-plugin

LINE Login plugin for Capacitor

## Install

```bash
npm install line-login-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`login(...)`](#login)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### login(...)

```typescript
login(options: { permissions: string[]; }) => Promise<LineLoginResponse>
```

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ permissions: string[]; }</code> |

**Returns:** <code>Promise&lt;<a href="#lineloginresponse">LineLoginResponse</a>&gt;</code>

--------------------


### Interfaces


#### LineLoginResponse

| Prop              | Type                                                |
| ----------------- | --------------------------------------------------- |
| **`accessToken`** | <code><a href="#accesstoken">AccessToken</a></code> |
| **`userProfile`** | <code><a href="#userprofile">UserProfile</a></code> |


#### AccessToken

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |


#### UserProfile

| Prop         | Type                        |
| ------------ | --------------------------- |
| **`userID`** | <code>string \| null</code> |

</docgen-api>
# line-login-capacitor-plugin
