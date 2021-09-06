export default function createRequestThunk(type, request) {
  //성공 및 실패 액션 타입을 정의
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return (params) => async (dispatch) => {
    dispatch({ type }); // start
    try {
      const response = await request(params);
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FAILURE,
        payload: error,
        error: true,
      });
      throw error;
    }
  };
}
