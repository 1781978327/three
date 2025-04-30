export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // 处理 API 请求
    if (url.pathname.startsWith('/api/')) {
      return new Response('API endpoint', { status: 200 });
    }
    
    // 处理静态文件请求
    return env.ASSETS.fetch(request);
  }
}; 