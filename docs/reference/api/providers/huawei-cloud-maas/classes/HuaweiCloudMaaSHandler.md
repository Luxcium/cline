[**claude-dev**](../../../../README.md)

***

[claude-dev](../../../../README.md) / [api/providers/huawei-cloud-maas](../README.md) / HuaweiCloudMaaSHandler

# Class: HuaweiCloudMaaSHandler

Defined in: src/api/providers/huawei-cloud-maas.ts:15

## Implements

- [`ApiHandler`](../../../interfaces/ApiHandler.md)

## Constructors

### Constructor

> **new HuaweiCloudMaaSHandler**(`options`): `HuaweiCloudMaaSHandler`

Defined in: src/api/providers/huawei-cloud-maas.ts:18

#### Parameters

##### options

`HuaweiCloudMaaSHandlerOptions`

#### Returns

`HuaweiCloudMaaSHandler`

## Methods

### createMessage()

> **createMessage**(`systemPrompt`, `messages`): [`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

Defined in: src/api/providers/huawei-cloud-maas.ts:61

#### Parameters

##### systemPrompt

`string`

##### messages

`MessageParam`[]

#### Returns

[`ApiStream`](../../../transform/stream/type-aliases/ApiStream.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`createMessage`](../../../interfaces/ApiHandler.md#createmessage)

***

### getModel()

> **getModel**(): `object`

Defined in: src/api/providers/huawei-cloud-maas.ts:39

#### Returns

`object`

##### id

> **id**: `"DeepSeek-V3"` \| `"DeepSeek-R1"` \| `"deepseek-r1-250528"` \| `"qwen3-235b-a22b"` \| `"qwen3-32b"`

##### info

> **info**: [`ModelInfo`](../../../../shared/api/interfaces/ModelInfo.md)

#### Implementation of

[`ApiHandler`](../../../interfaces/ApiHandler.md).[`getModel`](../../../interfaces/ApiHandler.md#getmodel)
