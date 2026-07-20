const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);

    // Shared connector — builder's Instagram account
    const { accessToken } = await db.asServiceRole.connectors.getConnection('instagram');

    if (!accessToken) {
      return Response.json({ error: 'Instagram não conectado' }, { status: 400 });
    }

    // 1. Get user ID + username
    const meRes = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
    );
    const me = await meRes.json();

    if (!me.id) {
      return Response.json({ error: 'Não foi possível obter perfil do Instagram' }, { status: 500 });
    }

    // 2. Get recent media (cap at 12 for gallery)
    const mediaRes = await fetch(
      `https://graph.instagram.com/${me.id}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=12&access_token=${accessToken}`
    );
    const mediaData = await mediaRes.json();

    const posts = (mediaData.data || []).map((post) => ({
      id: post.id,
      caption: post.caption || '',
      media_type: post.media_type,
      media_url: post.media_url || post.thumbnail_url || '',
      permalink: post.permalink || '',
      thumbnail_url: post.thumbnail_url || null,
    }));

    return Response.json({
      username: me.username,
      posts,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});