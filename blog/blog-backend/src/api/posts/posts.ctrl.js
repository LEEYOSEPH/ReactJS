let postId = 1; // 초기값

//posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: 'title',
    body: 'content',
  },
];

/*post 작성
POST /api/posts
{title,body}
 */
exports.write = (ctx) => {
  // REST API의 Request Body는 ctx.request.body에서 조회 가능
  const { title, body } = ctx.requset.body;
  postId += 1; // 기존값 +1
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/*post 목록 조회
GEt /api/posts 
 */
exports.list = (ctx) => {
  ctx.body = posts;
};

/*특정 포스트 조회
GET /api/posts/:id
 */
exports.read = (ctx) => {
  const { id } = ctx.params;
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
exports.remove = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((p) => p.id.toString() === id);

  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204; // No Content
};

/* 포스트 수정(교체)
PUT /api/posts/:id
{title,body}
*/
exports.replace = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.requset.body,
  };
};

/* 포스트 수정(특정 필드 변경) 
PATCH /api/posts/:id
{title,body}
*/
exports.update = (ctx) => {
  const { id } = ctx.params;

  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.requset.body,
  };
  ctx.body = posts[index];
};
