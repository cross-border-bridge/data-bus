// Copyright © 2017 DWANGO Co., Ltd.
export { DataBus, DataBusHandler }

/**
 * 受信したデータを取得するハンドラ
 *
 * @param data 受信したデータ
 * @return trueを返した場合、その時点でそのハンドラをDataBusから削除
 */
type DataBusHandler = (...data: any[]) => boolean | void;

/**
 * データ伝送機構のインタフェース
 */
interface DataBus {
    /**
     * データを送信する
     *
     * @param data JSONで表現可能な任意のオブジェクト
     */
    send(...data: any[]): void;

    /**
     * 受信したデータを取得するハンドラを登録する
     *
     * @param handler データ受信時にコールバックされるハンドラ
     */
    addHandler(handler: DataBusHandler): void;

    /**
     * 特定のデータ受信ハンドラをDataBusから削除する
     *
     * @param handler 削除対象のハンドラ
     */
    removeHandler(handler: DataBusHandler): void;

    /**
     * 登録済みのすべてのデータ受信ハンドラをDataBusから削除する
     */
    removeAllHandlers(): void;

    /**
     * DataBusを破棄する
     */
     destroy(): void;
}
