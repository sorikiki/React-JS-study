import * as postsAPI from '../api/posts'; // api/posts 안의 함수 모두 불러오기
import { createThunkPromise, reducerUtils, handleAsyncActions } from '../lib/asyncUtils';

// 포스트 여러개 조회하기
const GET_POSTS = 'GET_POSTS'; // 요청 시작
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'; // 요청 성공
const GET_POSTS_ERROR = 'GET_POSTS_ERROR'; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

export const getPosts = createThunkPromise(GET_POSTS, postsAPI.getPosts);
export const getPost = createThunkPromise(GET_POST, postsAPI.getPostById);

const initialState = {
  posts: reducerUtils.initialState(),
  post: reducerUtils.initialState(),
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
        return handleAysncActions(GET_POSTS, 'posts')(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
        return handleAynscActions(GET_POST, 'post')(state, action);
    default:
      return state;
  }
}