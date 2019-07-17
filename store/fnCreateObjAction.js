//命令书制造工厂

export function fn_创建命令书_更新newSave(valueNew) {
    let objAction = {
        type: '命令书_更新newSave',
        value: valueNew,
    }
    return objAction
}