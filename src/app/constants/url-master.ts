import { environment } from "../../enviroments/enviroment";

// 'http://127.0.0.1:8000/api'
const API_BASE = environment.apiBaseUrl 

export const EasyHandWrittenUrls = {
  // 画面遷移用
  home: 'home',
  uploadImage: 'upload-image',
  uploadResult: 'upload-image/result',
  judgeHistory: 'judge-history',
}

export const EasyHandWrittenApiUrls = {
  // API関連
  uploadImageApi: `${API_BASE}/upload/`,
  historyApi: `${API_BASE}/history/`,
  aiNameApi: (judge_id: number) => `${API_BASE}/judge_name/${judge_id}/`,
  historyDeleteApi: (id: number) => `${API_BASE}/history/${id}/`,
  getImageByIdApi: (id: number) => `${API_BASE}/getimage/${id}`,
}
