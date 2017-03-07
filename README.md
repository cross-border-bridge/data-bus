# <p align="center"><img src="title.png"/></p>
- DataBusのTypeScript用のインタフェースを提供します
- Node.jsで利用することを想定しています

## Setup
### package.json
```
    "dependencies": {
        "@cross-border-bridge/data-bus": "~2.0.0"
    },
```

## Usage
[DataBus](src/DataBus.ts) を `implements` します。

以下, __MyDataBus__ というクラスで実装する例を示します。

### MyDataBus.ts
```typescript
import * as db from "@cross-border-bridge/data-bus";

class MyDataBus implements db.DataBus {
    省略
}
```

## License
- Source code, Documents: [MIT](LICENSE)
- Image files: [CC BY 2.1 JP](https://creativecommons.org/licenses/by/2.1/jp/)
