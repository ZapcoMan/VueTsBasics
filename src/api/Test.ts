/**
 * Created by codervibe on 06 2月 2025
 * DateTime:2025/02/06 11:36 上午
 * Description:
 * Others:
 */

import apiClient from './index';

/**
 * 异步获取项目列表
 *
 * 本函数通过调用 API 客户端请求 /items 接口来获取项目数据
 */
export const getItems = async (): Promise<any> => {
    try {
        // 使用 API 客户端发起 GET 请求获取项目数据
        const response = await apiClient.get('/items'); // 假设你的 API 路径是 /items
        // 返回响应中的数据部分
        return response.data;
    } catch (error) {
        // 捕获到错误时，在控制台中记录错误信息
        console.error('获取数据失败:', error);
        // 重新抛出错误，以便调用者可以处理
        throw error;
    }
};

/**
 * 异步函数：更新或创建一个项目
 *
 * 该函数通过向API端点发送POST请求来更新或创建一个项目如果服务器成功响应，
 * 则返回响应的数据如果发生错误，则将错误日志输出到控制台并抛出错误
 */
export const updateItem = async (item: any): Promise<any> => {
    try {
        // 发送POST请求到API端点'/items'，并传递项目信息
        const response = await apiClient.post('/items', item);
        // 返回API响应的数据
        return response.data;
    } catch (error) {
        // 输出错误日志到控制台
        console.error('创建数据失败:', error);
        // 抛出错误，允许调用者处理
        throw error;
    }
};
