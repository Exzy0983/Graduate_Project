export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const ADD_COMMENT = 'ADD_COMMENT';

export const fetchPosts = () => dispatch => {
  // 데이터를 서버에서 가져오는 부분을 생략하고, 예제 데이터를 사용합니다.
  const posts = [
    { id: 1, content: 'This is the first post', comments: [] },
    { id: 2, content: 'This is the second post', comments: [] }
  ];
  dispatch({ type: FETCH_POSTS, payload: posts });
};

export const createPost = (content) => dispatch => {
  const newPost = { id: Date.now(), content, comments: [] };
  dispatch({ type: CREATE_POST, payload: newPost });
};

export const addComment = (postId, comment) => dispatch => {
  dispatch({ type: ADD_COMMENT, payload: { postId, comment } });
};
