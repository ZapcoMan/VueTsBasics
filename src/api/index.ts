/**
 * Created by codervibe on 06 2月 2025
 * DateTime:2025/02/06 11:40 上午
 * Description:
 * Others:
 */

import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://your-backend-url.com', // 替换为你的后台地址
    timeout: 10000, // 请求超时时间
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
