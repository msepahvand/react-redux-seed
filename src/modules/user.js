import axios from 'axios'
import { beginAjaxCall } from './ajaxStatus'
import initialState from '../initialState'
import { push } from 'react-router-redux'

export const GET_DETAILS_SUCCESS = 'user/GET_DETAILS_SUCCESS'
export const GET_DETAILS = 'user/GET_DETAILS'

export default (state = initialState.user, action) => {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
          return action.data;
    default:
      return state
  }
}

export const getDetails = (username) => {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return axios.get(`https://api.github.com/users/${username}`).then(user => {
      if(user.data){
        switch (user.data.name){
          case 'Mohammad Sepahvand'://90%
           dispatch({ type: GET_DETAILS_SUCCESS, data: {...user.data, accuracy: 95 } })
           dispatch(push('/about'))
           break
          default:
          dispatch({ type: GET_DETAILS_SUCCESS, data: user.data })
        }
      }      
    }).catch(error => {
      throw (error)
    })
  }
}