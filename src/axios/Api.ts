import axios from "axios";
export const BaseRepository = createAxiosInstance();
function createAxiosInstance() {
  // axios.create でいきなり axios を呼んだ時に使われる通信部(AxiosInstance)がインスタンス化される
  const axiosInstance = axios.create({
    // この第一引数オブジェクトで設定を定義
    // axios で通信する時の URL の頭を決める。大体ドメインとAPI用URL接頭辞
    // baseURL: process.env.MIX_BASE_APP_URL,
    withCredentials: true,
    xsrfHeaderName: "X-CSRF-Token",
    baseURL: process.env.VUE_APP_BASE_URL,
    // responseType: 'json'
  });

  // interceptors.request.use で送信時に引数に入れた関数が動作する
  // 引数で渡ってくるのは axios の設定(送信先や通信方式も持つ今まさに通信を実行しようとしている設定)で、返り値が通信時に実際に使われる axios の設定になる
  axiosInstance.interceptors.request.use((request) => {
    // もしヘッダーに API トークンを記述するならば
    // request.headers['Authorization'] = `Bearer ${getApiToken()}`

    // もし URL に APIトークンを増やすならば
    // request.params = request.params || {};
    // request.params.apiToken = getApiToken();

    // リクエスト内容を見るならば
    console.dir(request);

    return request;
  });

  // interceptors.response.use で返信時に引数に入れた関数が動作する
  axiosInstance.interceptors.response.use(
    (response) => response, // 第一引数は通信成功時処理。受けた内容をそのまま通過
    (error) => {
      // 第二引数は通信失敗時処理
      // 通信エラーの内容全体をインデント付きのJSONにして alert 表示
      // これだけだととても見難いので適宜プロジェクトに合わせて必要な情報だけ取る処理にした方がベター
      console.table(JSON.stringify(error));
    }
  );

  // interceptor で共通処理を追加した通信機能を返す。
  return axiosInstance;
}
