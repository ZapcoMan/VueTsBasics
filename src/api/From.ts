import apiClient from './index';
/**
 * Created by codervibe on 06 2月 2025
 * DateTime:2025/02/06 1:08 下午
 * Description:
 * Others:
 */
export const getData = async (): Promise<any> => {
    try {
        // 使用 API 客户端发起 GET 请求获取项目数据
        const response = await apiClient.get('/data'); // 假设你的 API 路径是 /items
        // 返回响应中的数据部分
        return response.data;
    } catch (error) {
        // 捕获到错误时，在控制台中记录错误信息
        console.error('获取数据失败:', error);
        // 重新抛出错误，以便调用者可以处理
        throw error;
    }
};