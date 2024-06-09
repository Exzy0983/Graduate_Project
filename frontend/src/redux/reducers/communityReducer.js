import { FETCH_POSTS, CREATE_POST, ADD_COMMENT } from '../actions/communityActions';

const initialState = {
  posts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        )
      };
    default:
      return state;
  }
}
